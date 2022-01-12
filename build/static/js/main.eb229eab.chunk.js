(this["webpackJsonpanimelist-frontend"]=this["webpackJsonpanimelist-frontend"]||[]).push([[0],{141:function(e,t,n){},142:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(35),a=n.n(c),i=n(13),s=n(187),o=n(179),l=n(185),u=n(1),j=function(e){var t=e.createAnime,n=e.toggle,c=Object(r.useState)(""),a=Object(i.a)(c,2),j=a[0],d=a[1],b=Object(r.useState)(""),O=Object(i.a)(b,2),h=O[0],p=O[1],f=Object(r.useState)(""),x=Object(i.a)(f,2),v=x[0],m=x[1];return Object(u.jsx)("div",{style:{justifyContent:"center",display:"flex"},children:Object(u.jsxs)(s.a,{elevation:6,className:"loginCard",children:[Object(u.jsx)("h2",{children:"Create New Anime"}),Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t({title:j,author:h,url:v}),n(),d(""),p(""),m("")},children:[Object(u.jsx)("div",{children:Object(u.jsx)(o.a,{label:"Title",variant:"standard",value:j,onChange:function(e){d(e.target.value)}})}),Object(u.jsx)("div",{children:Object(u.jsx)(o.a,{label:"Author",variant:"standard",value:h,onChange:function(e){p(e.target.value)}})}),Object(u.jsx)("div",{children:Object(u.jsx)(o.a,{label:"URL",variant:"standard",value:v,onChange:function(e){m(e.target.value)}})}),Object(u.jsx)(l.a,{style:{marginTop:"30px"},size:"small",variant:"outlined",color:"primary",onClick:function(){return n()},children:"cancel"}),"\xa0 \xa0",Object(u.jsx)(l.a,{style:{marginTop:"30px"},size:"small",variant:"contained",color:"primary",type:"submit",children:"create"})]})]})})},d=function(e){var t=e.createAnime,n=Object(r.useState)(!1),c=Object(i.a)(n,2),a=c[0],s=c[1],o={display:a?"none":""},d={display:a?"":"none"};return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{style:o,children:Object(u.jsx)(l.a,{size:"small",variant:"outlined",color:"primary",onClick:function(){s(!a)},children:"create new anime"})}),Object(u.jsx)("div",{style:d,children:Object(u.jsx)(j,{createAnime:t,toggle:s})})]})},b=n(18),O=n(181),h=function(){var e=Object(b.c)((function(e){return e.notification}));if(!e)return null;var t="success"===e.type?"success":"error";return Object(u.jsx)("div",{style:{marginBottom:"15px"},children:Object(u.jsx)(O.a,{severity:t,children:e.message})})},p=n(73),f=n(14),x=n.n(f),v=n(24),m=n(19),g=n(37),y=n.n(g),w="loggedAnimeAppUser",I=function(e){return localStorage.setItem(w,JSON.stringify(e))},S=function(){return JSON.parse(localStorage.getItem(w))},T=function(){return localStorage.removeItem(w)},C="/api/animes",N=function(){return{headers:{Authorization:"bearer ".concat(S().token)}}},k={getAll:function(){return y.a.get(C).then((function(e){return e.data}))},create:function(e){return y.a.post(C,e,N()).then((function(e){return e.data}))},update:function(e){return y.a.put("".concat(C,"/").concat(e.id),e,N()).then((function(e){return e.data}))},remove:function(e){return y.a.delete("".concat(C,"/").concat(e),N()).then((function(e){return e.data}))},comment:function(e,t){return y.a.post("".concat(C,"/").concat(e,"/comments"),{comment:t},N()).then((function(e){return e.data}))}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(console.log("ACTION",t),t.type){case"INIT_BLOGS":return t.data;case"NEW_BLOG":return[].concat(Object(m.a)(e),[t.data]);case"DELETE_BLOG":t.data.id;return e.filter((function(e){e.id}));case"INCREASE_LIKES":var n=t.data;return e.map((function(e){return e.id!==n.id?e:n}));case"ADD_COMMENT":var r=t.data;return e.map((function(e){return e.id===r.id?r:e}));default:return e}},A=function(e,t){return function(){var n=Object(v.a)(x.a.mark((function n(r){return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r({type:"SHOW_NOTIFICATION",data:{message:e,type:t}});case 2:setTimeout((function(){r({type:"HIDE_NOTIFICATION",data:null})}),3e3);case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(console.log("ACTION",t),t.type){case"SHOW_NOTIFICATION":return t.data;case"HIDE_NOTIFICATION":return null;default:return e}},L=n(189),_=n(182),G=n(190),z=n(28),D=function(){var e=Object(b.b)(),t=Object(b.c)((function(e){return e.animes}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Animes"}),Object(u.jsx)(h,{}),Object(u.jsx)(d,{createAnime:function(t){var n;e((n=t,function(){var e=Object(v.a)(x.a.mark((function e(t){var r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.create(n);case 2:r=e.sent,t({type:"NEW_BLOG",data:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),function(t){e(A(t,arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success"))}("".concat(t.title," is created"))}}),Object(u.jsx)("div",{style:{marginTop:"20px"},children:Object(u.jsx)(L.a,{disablePadding:!0,children:t.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)(_.a,{children:Object(u.jsx)(z.b,{to:"/animes/".concat(e.id),children:e.title})}),Object(u.jsx)(G.a,{})]},e.id)}))})})]})},U=n(191),M=n(192),R=n(193),W=n(194),F=n(195),H=function(){var e=Object(b.c)((function(e){return e.users}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Users"}),Object(u.jsxs)(U.a,{size:"small",sx:{width:400},"aria-label":"simple table",children:[Object(u.jsx)(M.a,{children:Object(u.jsxs)(R.a,{children:[Object(u.jsx)(W.a,{}),Object(u.jsx)(W.a,{children:"Number of animes created"})]})}),Object(u.jsx)(F.a,{children:e.map((function(e){return Object(u.jsxs)(R.a,{children:[Object(u.jsx)(W.a,{children:Object(u.jsx)(z.b,{to:"/users/".concat(e.id),children:e.name})}),Object(u.jsx)(W.a,{children:e.animes.length})]},e.id)}))})]})]})},J=n(15),P=function(){var e=Object(J.h)().id,t=Object(b.c)((function(t){return t.users.find((function(t){return t.id===e}))}));return t?Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:t.name}),Object(u.jsxs)("h3",{children:["added ",0===t.animes.length?0:null," animes"]}),Object(u.jsx)(L.a,{children:t.animes.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)(_.a,{children:Object(u.jsx)(z.b,{to:"/animes/".concat(e.id),children:e.title})},e.id),Object(u.jsx)(G.a,{})]},e.id)}))})]}):null},K=function(e){var t=e.handleComment,n=Object(r.useState)(""),c=Object(i.a)(n,2),a=c[0],s=c[1];return Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:Object(u.jsxs)("form",{onSubmit:function(){return t(a)},children:[Object(u.jsx)(o.a,{variant:"outlined",size:"small",value:a,onChange:function(e){e.preventDefault();var t=e.target.value;s(t)},label:"comment",InputLabelProps:{style:{fontSize:12,paddingBottom:10}},inputProps:{style:{fontSize:14,height:30,padding:"0px 14px"}}}),Object(u.jsx)(l.a,{size:"small",variant:"outlined",color:"primary",type:"submit",children:"add comment"})]})})})},q=function(){var e=Object(J.h)().id,t=Object(b.c)((function(t){return t.animes.find((function(t){return t.id===e}))})),n=Object(b.c)((function(e){return e.user})),r=Object(b.b)(),c=Object(J.g)();if(!t)return null;var a=function(e){r(function(e){return function(){var t=Object(v.a)(x.a.mark((function t(n){var r,c;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=Object(p.a)(Object(p.a)({},e),{},{likes:e.likes+1,user:e.user.id}),t.next=3,k.update(r);case 3:c=t.sent,n({type:"INCREASE_LIKES",data:c});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))};return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Animes"}),Object(u.jsxs)("div",{children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{children:Object(u.jsx)("h2",{children:t.title})}),Object(u.jsx)("div",{children:t.author}),Object(u.jsxs)("div",{children:["likes ",t.likes," ",Object(u.jsx)(l.a,{size:"small",variant:"outlined",sx:{fontSize:10,padding:"2px 2px"},color:"primary",onClick:function(){return a(t)},children:"like"})]}),Object(u.jsx)("div",{children:t.url}),n.username===t.author?Object(u.jsx)(l.a,{size:"small",variant:"outlined",color:"primary",onClick:function(){var n;window.confirm("Do you want to delete ".concat(t.title,"?"))&&(r((n=e,function(){var e=Object(v.a)(x.a.mark((function e(t){var r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.remove(n);case 2:return t({type:"DELETE_BLOG",data:{id:n}}),e.next=5,k.getAll();case 5:r=e.sent,t({type:"INIT_BLOGS",data:r});case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),c.push("/"))},children:"delete"}):null]}),Object(u.jsxs)("div",{children:[Object(u.jsx)("h3",{children:"Comments"}),Object(u.jsx)(K,{handleComment:function(t){r(function(e,t){return function(){var n=Object(v.a)(x.a.mark((function n(r){var c;return x.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,k.comment(e,t);case 2:c=n.sent,r({type:"ADD_COMMENT",data:c});case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(e,t))}}),Object(u.jsx)("ul",{children:0===t.comments.length?null:t.comments.map((function(e){return Object(u.jsx)("li",{children:e},e)}))})]})]})]})},Q={login:function(){var e=Object(v.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.post("/api/login",t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},V=function(e){return function(){var t=Object(v.a)(x.a.mark((function t(n){return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"LOGIN",payload:e});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(console.log("ACTION",t.type),t.type){case"LOGIN":return t.payload;case"LOGOUT":return null;default:return e}},Y=function(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),j=Object(i.a)(a,2),d=j[0],O=j[1],p=Object(b.b)(),f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";p(A(e,t))},m=function(){var e=Object(v.a)(x.a.mark((function e(t){var r;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,Q.login({username:n,password:d});case 4:r=e.sent,c(""),O(""),p(V(r)),f("".concat(r.name," welcome back!")),I(r),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),f("wrong username/password","error");case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)("div",{style:{marginTop:"20px",justifyContent:"center",display:"flex",alignItems:"center",height:"100vh"},children:Object(u.jsxs)(s.a,{elevation:10,className:"loginCard",children:[Object(u.jsx)("h2",{children:"Login"}),Object(u.jsx)(h,{}),Object(u.jsxs)("form",{onSubmit:m,children:[Object(u.jsx)("div",{children:Object(u.jsx)(o.a,{value:n,label:"Username",variant:"standard",onChange:function(e){var t=e.target;return c(t.value)}})}),Object(u.jsx)("div",{children:Object(u.jsx)(o.a,{value:d,variant:"standard",type:"password",label:"Password",onChange:function(e){var t=e.target;return O(t.value)}})}),Object(u.jsx)("div",{style:{marginTop:"30px"},children:Object(u.jsx)(l.a,{size:"small",variant:"contained",type:"submit",color:"primary",children:"login"})})]})]})})},Z={getAll:function(){return y.a.get("/api/users").then((function(e){return e.data}))}},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INIT_USERS":return t.data;default:return e}},ee=n(196),te=n(197),ne=n(186),re=n(198),ce=n(96),ae=n(184),ie=(n(141),Object(ce.a)({palette:{primary:{main:"#663c53"}},typography:{button:{textTransform:"none"}},MuiCard:{root:{borderRadius:"10px"}},MuiOutlinedInput:{input:{padding:"4.5px 7px"}}})),se=function(){var e=Object(b.c)((function(e){return e.user})),t=Object(b.b)();Object(r.useEffect)((function(){t(function(){var e=Object(v.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getAll();case 2:n=e.sent,t({type:"INIT_BLOGS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),t(function(){var e=Object(v.a)(x.a.mark((function e(t){var n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Z.getAll();case 2:n=e.sent,t({type:"INIT_USERS",data:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var e=S();e&&t(V(e))}),[t]);return e?Object(u.jsx)("div",{children:Object(u.jsx)(z.a,{children:Object(u.jsxs)(ae.a,{theme:ie,children:[Object(u.jsx)("div",{children:Object(u.jsx)(ee.a,{position:"fixed",color:"primary",children:Object(u.jsxs)(te.a,{children:[Object(u.jsx)(ne.a,{sx:{flexGrow:.1},children:Object(u.jsx)(l.a,{color:"inherit",component:z.b,to:"/",children:"Animes"})}),Object(u.jsx)(ne.a,{sx:{flexGrow:10},children:Object(u.jsx)(l.a,{color:"inherit",component:z.b,to:"/users",children:"Users"})}),e?Object(u.jsxs)(ne.a,{sx:{flexGrow:0},children:[e.name," ",Object(u.jsx)(l.a,{color:"inherit",onClick:function(){t({type:"LOGOUT"}),T(),!e&&J.a},children:Object(u.jsx)(z.b,{to:"/",children:"logout"})})]}):Object(u.jsx)(ne.a,{sx:{flexGrow:0},children:Object(u.jsx)(l.a,{color:"inherit",component:z.b,to:"/",children:"Login"})})]})})}),Object(u.jsx)(re.a,{children:Object(u.jsx)("div",{style:{marginTop:80},children:Object(u.jsxs)(J.d,{children:[Object(u.jsx)(J.b,{path:"/users/:id",children:Object(u.jsx)(P,{})}),Object(u.jsx)(J.b,{path:"/users",children:Object(u.jsx)(H,{})}),Object(u.jsx)(J.b,{path:"/animes/:id",children:Object(u.jsx)(q,{})}),Object(u.jsx)(J.b,{path:"/",children:Object(u.jsx)(D,{})})]})})})]})})}):Object(u.jsx)(ae.a,{theme:ie,children:Object(u.jsx)(Y,{})})},oe=n(56),le=n(94),ue=n(95),je=Object(oe.combineReducers)({animes:E,notification:B,user:X,users:$}),de=Object(oe.createStore)(je,Object(le.composeWithDevTools)(Object(oe.applyMiddleware)(ue.a)));a.a.render(Object(u.jsx)(b.a,{store:de,children:Object(u.jsx)(se,{})}),document.getElementById("root"))}},[[142,1,2]]]);
//# sourceMappingURL=main.eb229eab.chunk.js.map