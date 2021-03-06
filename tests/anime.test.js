/* eslint-disable no-mixed-spaces-and-tabs */
const mongoose=require('mongoose')
const supertest=require('supertest')
const bcrypt=require('bcrypt')
const app=require('../app')
const api=supertest(app)

require('dotenv').config()

const listHelper=require('../utils/list_helper')
const helper=require('./test_helper')

const Anime=require('../models/anime')
const User = require('../models/users')

let token=null 

beforeEach(async ()=>{
  await Anime.deleteMany({})

  for(let anime of helper.initialanimes){
	 let animeObject=new Anime(anime)
	 await animeObject.save()
  }

  const response=await api.post('/api/login')
    .send({
      username:process.env.username,
      password:process.env.password
    })

  token=response.body.token
})

test('dummy returns one',()=>{
  const animes=[]
  const result=listHelper.dummy(animes)
  expect(result).toBe(1)
})

describe('total likes', () => {
  
  test('of empty list is zero',()=>{
    const result=listHelper.totalLikes([])
    expect(result).toBe(0)
  })

  test('when list has only one anime, equals the likes of that', () => {
    const result = listHelper.totalLikes(helper.listWithOneAnime)
    expect(result).toBe(5)
  })

  test('of a bigger list is calculated right',()=>{
	  const result=listHelper.totalLikes(helper.initialanimes)
	  expect(result).toBe(36)
  })

})

describe('backend testing',()=>{

  test('correct amount of anime posts', async ()=>{

    let count=helper.initialanimes.length
		
    const response=await api.get('/api/animes').set('Authorization',`Bearer ${token}`)
							
    expect(response.body).toHaveLength(count)

  })

  test('check for presence of id', async ()=>{
		
    const animesAtStart=await helper.animesInDb()
    const anime=animesAtStart[0]
    const response=await api.get(`/api/animes/${anime.id}`)
	  .set('Authorization',`Bearer ${token}`)
      .expect(200)
      .expect('Content-Type', /application\/json/)

    expect(response.body).toEqual({id:anime.id,...anime})

  })

  test('anime added successfully ', async()=>{

    const animesAtStart=await helper.animesInDb() 
    const newAnime={
      title: 'Full stack open',
      author: 'Prof Matti',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
    }

    await api.post('/api/animes')
      .send(newAnime)
	  .set('Authorization',`Bearer ${token}`)
      .expect(201)
      .expect('Content-Type',/application\/json/)

    const animesAtEnd=await helper.animesInDb()
    expect(animesAtEnd).toHaveLength(animesAtStart.length+1)

  })

  test('anime is successfully deleted',async()=>{

    const animesAtStart=await helper.animesInDb()
    const animeToDelete=animesAtStart[0]

    await api
      .delete(`/api/animes/${animeToDelete.id}`)
      .expect(204)

    const animesAtEnd=await helper.animesInDb()
    expect(animesAtEnd).toHaveLength(animesAtStart.length-1)

    const titles=animesAtEnd.map(anime=>anime.title)
    expect(titles).not.toContain(animeToDelete.title)
  })

  test('put anime is success' , async()=>{
		
    const animesAtStart=await helper.animesInDb() 
		
    const animeToUpdate=animesAtStart[0] 
		
    const updatedAnime={
      title: 'React patterns',
      author: 'Michael Chan',
      url: 'https://reactpatterns.com/',
      likes: 10,
    }


    await api.put(`/api/animes/${animeToUpdate.id}`)
      .send(updatedAnime)
	  .set('Authorization',`Bearer ${token}`)
      .expect(200)
      .expect('Content-Type',/application\/json/)


    const animesAtEnd=await helper.animesInDb()
		
    expect(animesAtEnd).toHaveLength(animesAtStart.length)
		
    expect(animesAtEnd[0].likes).not.toBe(animesAtStart[0].likes)

  })
	
})

describe('test for user creation',()=>{

  beforeEach(async()=>{
    await User.deleteMany({})

    const passwordHash=await bcrypt.hash('secret',10)
    const user=new User({username:'root',passwordHash})

    await user.save()
  })

  test('creation succeeds with fresh username',async()=>{

    const usersAtStart=await helper.usersInDb()

    const newUser={
      username:'yourgoodfriendsp',
      name:'YourGoodFriendSP',
      password:'secret'
    }

    await api
      .post('/api/users')
      .send(newUser)
      .expect(200)
      .expect('Content-Type',/application\/json/)

    const usersAtEnd=await helper.usersInDb()

    expect(usersAtEnd).toHaveLength(usersAtStart.length+1)

    const usernames=await usersAtEnd.map(u=>u.username)

    expect(usernames).toContain(newUser.username)
  })
	
  test('creation fails with proper statuscode and message if username already taken', async()=>{
    const usersAtStart=await helper.usersInDb()

    const newUser={
      username:'root',
      name:'Superuser',
      password:'secret'
    }

    const result=await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type',/application\/json/)
			
    expect(result.body.error).toContain('`username` to be unique')
		
    const usersAtEnd=await helper.usersInDb()

    expect(usersAtEnd).toHaveLength(usersAtStart.length)

  })


})

afterAll(()=>{
  mongoose.connection.close()
})

