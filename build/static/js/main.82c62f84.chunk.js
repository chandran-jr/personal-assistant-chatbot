(this.webpackJsonpnetworkit=this.webpackJsonpnetworkit||[]).push([[0],{67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},78:function(e,t,a){},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},85:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),c=a(18),i=a.n(c),r=(a(67),a(68),a(69),a(44)),o=a.n(r),l=(a(70),a(98)),j=a(14),d=a(31),b=Object(d.b)({name:"user",initialState:{user:null},reducers:{login:function(e,t){e.user=t.payload},logout:function(e){e.user=null}}}),h=b.actions,m=h.login,u=h.logout,O=function(e){return e.user.user},p=b.reducer,x=a(3);var v=function(e){var t=e.avatar,a=e.Icon,s=e.title,n=e.onClick,c=Object(j.c)(O);return Object(x.jsxs)("div",{onClick:n,className:"headerOption",children:[a&&Object(x.jsx)(a,{className:"headerOption__icon"}),t&&Object(x.jsx)(l.a,{className:"headerOption__icon",alt:"profilepic",children:c.email[0].toUpperCase()}),Object(x.jsx)("h3",{className:"headerOption__title",children:s})]})},N=a(45),f=a.n(N),k=a(46),C=a.n(k),I=a(47),g=a.n(I),E=a(48),Q=a.n(E),T=a(49),A=a.n(T),y=a(25),w=y.a.initializeApp({apiKey:"AIzaSyB9CWbwlT7h_lMTe0b2XCjbYU9HGlNHgsk",authDomain:"networkit-62da2.firebaseapp.com",projectId:"networkit-62da2",storageBucket:"networkit-62da2.appspot.com",messagingSenderId:"651810872816",appId:"1:651810872816:web:252cefb4bd6d9071379135"}).firestore(),J=y.a.auth();var M=function(){var e=Object(j.b)();return Object(x.jsxs)("div",{className:"header",children:[Object(x.jsxs)("div",{className:"header__left",children:[Object(x.jsx)("img",{src:"data:image/png;base64,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",alt:"Linkedin icon"}),Object(x.jsxs)("div",{className:"header__search",children:[Object(x.jsx)(o.a,{}),Object(x.jsx)("input",{placeholder:"Search",type:"text"})]})]}),Object(x.jsxs)("div",{className:"header__right",children:[Object(x.jsx)(v,{Icon:f.a,title:"Home"}),Object(x.jsx)(v,{Icon:C.a,title:"Network"}),Object(x.jsx)(v,{Icon:g.a,title:"Jobs"}),Object(x.jsx)(v,{Icon:Q.a,title:"Chat"}),Object(x.jsx)(v,{Icon:A.a,title:"Notifications"}),Object(x.jsx)(v,{title:"Logout",avatar:!0,onClick:function(){e(u()),J.signOut()}})]})]})};a(78);var W=function(){var e=Object(j.c)(O),t=function(e){return Object(x.jsxs)("div",{className:"sidebar__recentItem",children:[Object(x.jsx)("span",{className:"sidebar__hash",children:"#"}),Object(x.jsx)("p",{children:e})]})};return Object(x.jsxs)("div",{className:"sidebar",children:[Object(x.jsxs)("div",{className:"sidebar__top",children:[Object(x.jsx)("img",{src:"https://images.unsplash.com/photo-1547394765-185e1e68f34e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",alt:"bg"}),Object(x.jsx)(l.a,{className:"sidebar__avatar",src:e.photoUrl,alt:"me",children:e.email[0].toUpperCase()}),Object(x.jsx)("h2",{children:e.displayName}),Object(x.jsx)("h4",{className:"sidebar__statemail",children:e.email})]}),Object(x.jsxs)("div",{className:"sidebar__stats",children:[Object(x.jsxs)("div",{className:"sidebar__stat",children:[Object(x.jsx)("p",{children:"Who viewed you"}),Object(x.jsx)("p",{className:"sidebar__statNumber",children:Math.floor(50*Math.random())})]}),Object(x.jsxs)("div",{className:"sidebar__stat",children:[Object(x.jsx)("p",{children:"Views on posts"}),Object(x.jsx)("p",{className:"sidebar__statNumber",children:Math.floor(500*Math.random())})]})]}),Object(x.jsxs)("div",{className:"sidebar__bottom",children:[Object(x.jsx)("p",{children:"Recent"}),t("react.js"),t("web development"),t("jobs")]})]})},S=a(20),U=a(54),F=a.n(U),V=a(56),B=a.n(V),R=a(57),Z=a.n(R),K=a(58),z=a.n(K),G=a(55),D=a.n(G);a(79),a(80);var L=function(e){var t=e.Icon,a=e.title,s=e.color;return Object(x.jsxs)("div",{className:"inputOption",children:[Object(x.jsx)(t,{style:{color:s}}),Object(x.jsx)("h4",{children:a})]})},q=a(50),_=a.n(q),X=a(51),Y=a.n(X),H=a(52),P=a.n(H),$=a(53),ee=a.n($),te=(a(81),Object(s.forwardRef)((function(e,t){var a=e.name,s=e.description,n=e.message,c=e.photoUrl;return Object(x.jsxs)("div",{ref:t,className:"post",children:[Object(x.jsxs)("div",{className:"post__header",children:[Object(x.jsx)(l.a,{src:c,children:a[0].toUpperCase()}),Object(x.jsxs)("div",{className:"post__info",children:[Object(x.jsx)("h2",{children:a}),Object(x.jsx)("p",{children:s})]})]}),Object(x.jsx)("div",{className:"post__body",children:Object(x.jsx)("p",{children:n})}),Object(x.jsxs)("div",{className:"post__buttons",children:[Object(x.jsx)(L,{Icon:_.a,title:"Like",color:"#70B5F9"}),Object(x.jsx)(L,{Icon:Y.a,title:"Comment",color:"#47d147"}),Object(x.jsx)(L,{Icon:P.a,title:"Share",color:"#ffa31a"}),Object(x.jsx)(L,{Icon:ee.a,title:"Send",color:"salmon"})]})]})}))),ae=a(59);var se=function(){var e=Object(j.c)(O),t=Object(s.useState)(""),a=Object(S.a)(t,2),n=a[0],c=a[1],i=Object(s.useState)([]),r=Object(S.a)(i,2),o=r[0],l=r[1];return Object(s.useEffect)((function(){w.collection("posts").orderBy("timeStamp","desc").onSnapshot((function(e){return l(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}))}),[]),Object(x.jsxs)("div",{className:"feed",children:[Object(x.jsxs)("div",{className:"feed__inputContainer",children:[Object(x.jsxs)("div",{className:"feed__input",children:[Object(x.jsx)(F.a,{}),Object(x.jsxs)("form",{children:[Object(x.jsx)("input",{value:n,onChange:function(e){return c(e.target.value)},placeholder:"Start a post",type:"text"}),Object(x.jsx)("button",{onClick:function(t){t.preventDefault(),w.collection("posts").add({name:e.displayName,description:e.email,message:n,photoUrl:e.photoUrl||"",timeStamp:y.a.firestore.FieldValue.serverTimestamp()}),c("")},type:"submit",children:"Send"})]})]}),Object(x.jsxs)("div",{className:"feed__inputOptions",children:[Object(x.jsx)(L,{Icon:D.a,title:"Photo",color:"#70B5F9"}),Object(x.jsx)(L,{Icon:B.a,title:"Video",color:"#47d147"}),Object(x.jsx)(L,{Icon:Z.a,title:"Event",color:"#ffa31a"}),Object(x.jsx)(L,{Icon:z.a,title:"Write Article",color:"salmon"})]})]}),Object(x.jsx)(ae.a,{children:o.map((function(e){var t=e.id,a=e.data,s=a.name,n=a.description,c=a.message,i=a.photoUrl;return Object(x.jsx)(te,{name:s,description:n,message:c,photoUrl:i},t)}))})]})};a(82);var ne=function(){var e=Object(s.useState)(""),t=Object(S.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(""),i=Object(S.a)(c,2),r=i[0],o=i[1],l=Object(s.useState)(""),d=Object(S.a)(l,2),b=d[0],h=d[1],u=Object(s.useState)(""),O=Object(S.a)(u,2),p=O[0],v=O[1],N=Object(j.b)();return Object(x.jsxs)("div",{className:"login",children:[Object(x.jsx)("img",{className:"Login__logoImage",src:"data:image/png;base64,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",alt:"Logo"}),Object(x.jsx)("h2",{className:"login__appName",children:"NetworKit"}),Object(x.jsxs)("form",{children:[Object(x.jsx)("input",{value:b,onChange:function(e){return h(e.target.value)},placeholder:"Full Name (if registering)",type:"text"}),Object(x.jsx)("input",{value:p,onChange:function(e){return v(e.target.value)},placeholdertype:"text",placeholder:"Profile pic URL (optional)"}),Object(x.jsx)("input",{value:a,onChange:function(e){return n(e.target.value)},placeholder:"Email",type:"email"}),Object(x.jsx)("input",{value:r,onChange:function(e){return o(e.target.value)},placeholder:"Password",type:"password"}),Object(x.jsx)("button",{className:"login__signInButton",type:"submit",onClick:function(e){e.preventDefault(),J.signInWithEmailAndPassword(a,r).then((function(e){N(m({email:e.user.email,uid:e.user.uid,displayName:e.user.displayName,photoUrl:e.user.photoURL}))})).catch((function(e){return alert(e)}))},children:"Sign In"})]}),Object(x.jsxs)("p",{children:["Not a member? "," ",Object(x.jsx)("span",{onClick:function(){if(!b)return alert("Please enter your full name!");J.createUserWithEmailAndPassword(a,r).then((function(e){e.user.updateProfile({displayName:b,photoURL:p}).then((function(){N(m({email:e.user.email,uid:e.user.uid,displayName:b,photoUrl:p}))}))})).catch((function(e){return alert(e)}))},className:"login__register",children:"Register Now!"})]})]})},ce=(a(83),a(61)),ie=a.n(ce),re=a(60),oe=a.n(re);var le=function(){var e=function(e,t){return Object(x.jsxs)("div",{className:"widgets__article",children:[Object(x.jsx)("div",{className:"widgets__left",children:Object(x.jsx)(oe.a,{})}),Object(x.jsxs)("div",{className:"widgets__right",children:[Object(x.jsx)("h4",{children:e}),Object(x.jsx)("p",{children:t})]})]})};return Object(x.jsxs)("div",{className:"widgets",children:[Object(x.jsxs)("div",{className:"widgets__header",children:[Object(x.jsx)("h2",{children:"NetworKit News"}),Object(x.jsx)(ie.a,{})]}),e("Chandran launches NetworKit","The web app has no potential whatsover\ud83d\ude2a"),e("Covid-19 increases","Indian condition severe as cases rise rapidly\ud83d\udc80"),e("Doge hits ATH","Elon tweet boosts the coin yet again\ud83d\ude33"),e("Neuralink making progress","Monkey learns to play video games using neurachip\ud83d\ude0e")]})};var je=function(){var e=Object(j.c)(O),t=Object(j.b)();return Object(s.useEffect)((function(){J.onAuthStateChanged((function(e){t(e?m({email:e.email,uid:e.uid,displayName:e.displayName,photoUrl:e.photoURL}):u())}))}),[t]),Object(x.jsx)("div",{className:"app",children:e?Object(x.jsxs)("div",{className:"app__signedIn",children:[Object(x.jsx)(M,{}),Object(x.jsxs)("div",{className:"app__body",children:[Object(x.jsx)(W,{}),Object(x.jsx)(se,{}),Object(x.jsx)(le,{})]})]}):Object(x.jsx)(ne,{})})},de=Object(d.a)({reducer:{user:p}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(j.a,{store:de,children:Object(x.jsx)(je,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[85,1,2]]]);
//# sourceMappingURL=main.82c62f84.chunk.js.map