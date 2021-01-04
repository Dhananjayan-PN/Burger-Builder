(this["webpackJsonpbasic-burger-builder"]=this["webpackJsonpbasic-burger-builder"]||[]).push([[0],{121:function(e,t,c){},126:function(e,t,c){},128:function(e,t,c){},129:function(e,t,c){},130:function(e,t,c){},131:function(e,t,c){},132:function(e,t,c){},133:function(e,t,c){},134:function(e,t,c){},135:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(0),i=c.n(a),o=c(12),r=c.n(o),s=c(18),l=c(11),d=c(42),u=c(8),j=(c(92),c(172)),b=c(173),h=(c(93),c.p+"static/media/bun-top.6a415c9e.png"),O=c.p+"static/media/bun-bottom.59a31b24.png",g=c.p+"static/media/burger-patty.d7000a2b.png",m=c.p+"static/media/burger-cheese.ff355075.png",p=c.p+"static/media/burger-lettuce.36b3a83e.png",x=function(e){return Object(n.jsx)("div",{className:"Burger",children:Object(n.jsxs)("div",{className:"column",children:[Object(n.jsx)("img",{id:"burgertop",src:h,alt:"bun"}),e.lettuce?Object(n.jsx)("img",{id:"burgerlettuce",src:p,alt:"lettuce"}):null,e.cheese?Object(n.jsx)("img",{id:"burgercheese",src:m,alt:"cheese"}):null,e.meat?Object(n.jsx)("img",{id:"burgerpatty",src:g,alt:"meat"}):null,Object(n.jsx)("img",{id:"burgerbottom",src:O,alt:"bun"})]})})},f=(c(94),c(180)),y=c(171),v=Object(l.g)((function(e){var t=Object(a.useState)(""),c=Object(u.a)(t,2),i=c[0],o=c[1],r=Object(a.useState)(0),s=Object(u.a)(r,2),l=s[0],d=s[1];return Object(a.useEffect)((function(){var t="1 x Burger with ",c=0,n=[];e.lettuce&&(n.push("Lettuce"),c+=e.prices.lettucePrice),e.cheese&&(n.push("Cheese"),c+=e.prices.cheesePrice),e.meat&&(n.push("Meat"),c+=e.prices.meatPrice);for(var a=0;a<n.length;a++)0!==a&&(t+=", "),t+=n[a];o(t),d(c)}),[e.prices.lettucePrice,e.prices.cheesePrice,e.prices.meatPrice,e.lettuce,e.cheese,e.meat]),Object(n.jsxs)("div",{className:"BurgerControls",children:[Object(n.jsx)("h2",{id:"ctrl-heading",children:"Customize Burger"}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("h4",{id:"ctrl-name",children:"Lettuce"}),Object(n.jsx)(f.a,{checked:e.lettuce,onChange:e.changeLettuce})]}),Object(n.jsxs)("div",{className:"row",style:{marginLeft:20},children:[Object(n.jsx)("h4",{id:"ctrl-name",children:"Cheese"}),Object(n.jsx)(f.a,{checked:e.cheese,onChange:e.changeCheese})]}),Object(n.jsxs)("div",{className:"row",style:{marginLeft:20},children:[Object(n.jsx)("h4",{id:"ctrl-name",children:"Meat"}),Object(n.jsx)(f.a,{checked:e.meat,onChange:e.changeMeat})]}),Object(n.jsxs)("h3",{id:"ctrl-price",children:["Price: $",l]}),Object(n.jsx)(y.a,{disabled:!e.lettuce&&!e.cheese&&!e.meat,onClick:function(){e.history.push({pathname:"/checkout",data:{lettuce:e.lettuce,cheese:e.cheese,meat:e.meat,price:l,orderString:i}})},id:"checkout-button",variant:"outlined",color:"secondary",children:"Checkout"})]})})),k=c(74),S=c.n(k).a.create({baseURL:"https://burger-builder-71f50-default-rtdb.firebaseio.com/"}),C=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),c=t[0],i=t[1],o=Object(a.useState)(!1),r=Object(u.a)(o,2),s=r[0],l=r[1],h=Object(a.useState)(!1),O=Object(u.a)(h,2),g=O[0],m=O[1],p=Object(a.useState)(0),f=Object(u.a)(p,2),y=f[0],k=f[1],C=Object(a.useState)(0),N=Object(u.a)(C,2),T=N[0],w=N[1],P=Object(a.useState)(0),L=Object(u.a)(P,2),B=L[0],I=L[1],A=Object(a.useState)(!1),E=Object(u.a)(A,2),R=E[0],M=E[1],D={lettuce:c,cheese:s,meat:g};Object(a.useEffect)((function(){M(!0),S.get("/ingrediant-costs.json").then((function(e){200===e.status&&(k(e.data.lettuce),w(e.data.cheese),I(e.data.meat))})),M(!1)}),[]);return Object(n.jsxs)("div",{className:"BurgerBuilder",children:[Object(n.jsx)(x,Object(d.a)({},D)),Object(n.jsx)(v,Object(d.a)(Object(d.a)({},D),{},{prices:{lettucePrice:y,cheesePrice:T,meatPrice:B},changeLettuce:function(){return i(!c)},changeCheese:function(){return l(!s)},changeMeat:function(){return m(!g)}})),Object(n.jsx)(j.a,{open:R,children:Object(n.jsx)(b.a,{style:{padding:"50px"},color:"secondary"})})]})},N=(c(121),c(167)),T=c(181),w=c(174),P=c(75),L=c.n(P),B=c(27),I=c.n(B),A=function(){var e=Object(a.useState)(!1),t=Object(u.a)(e,2),c=t[0],i=t[1],o=Object(a.useState)(null),r=Object(u.a)(o,2),l=r[0],d=r[1],j=function(){return i(!c)};return Object(a.useEffect)((function(){d(I.a.getJSON("user"))}),[]),Object(n.jsxs)("div",{className:"Navbar",children:[Object(n.jsx)(s.b,{to:"/",exact:!0,id:"logo",children:"Burger Builder"}),Object(n.jsx)(s.b,{to:"/",exact:!0,id:"links",style:{color:"#9e9e9e"},activeStyle:{color:"#f50057"},children:"Builder"}),Object(n.jsx)(s.b,{to:"/orders",id:"links",style:{color:"#9e9e9e"},activeStyle:{color:"#f50057"},children:"Orders"}),null===l||void 0===l?[Object(n.jsx)(s.b,{to:"/signup",id:"acc-links",style:{color:"#9e9e9e",marginRight:45},activeStyle:{color:"#f50057"},children:"Sign Up"},"singup"),Object(n.jsx)(s.b,{to:"/login",id:"acc-links",style:{color:"#9e9e9e"},activeStyle:{color:"#f50057"},children:"Log In"},"login")]:Object(n.jsx)(s.b,{to:"/profile",id:"acc-links",style:{color:"#9e9e9e",marginRight:50},activeStyle:{color:"#f50057"},children:l.displayName}),Object(n.jsx)(N.a,{onClick:j,id:"menu-icon-button","aria-label":"menu",children:Object(n.jsx)(L.a,{id:"menu-icon"})}),Object(n.jsxs)(T.a,{anchor:"left",open:c,onClose:j,children:[Object(n.jsx)(s.b,{to:"/",exact:!0,id:"logo-menu",onClick:j,children:"Burger Builder"}),Object(n.jsx)(w.a,{}),Object(n.jsx)(s.b,{to:"/",exact:!0,id:"links-menu",onClick:j,style:{color:"#9e9e9e"},activeStyle:{color:"#f50057"},children:"Builder"}),Object(n.jsx)(s.b,{to:"/orders",id:"links-menu",onClick:j,style:{color:"#9e9e9e"},activeStyle:{color:"#f50057"},children:"Orders"})]})]})},E=c(179),R=c(175),M=c(176),D=c(177),q=c(178),W=(c(126),function(e){var t,c,i,o,r,s,d=I.a.getJSON("user"),h=Object(a.useState)(!1),O=Object(u.a)(h,2),g=O[0],m=O[1],p=Object(a.useState)(!1),x=Object(u.a)(p,2),f=x[0],v=x[1],k=Object(a.useState)(!1),C=Object(u.a)(k,2),N=C[0],T=C[1],w=Object(a.useState)(""),P=Object(u.a)(w,2),L=P[0],B=P[1],A=Object(a.useState)(""),W=Object(u.a)(A,2),J=W[0],U=W[1],Y=Object(a.useState)(""),F=Object(u.a)(Y,2),z=F[0],Q=F[1],G=Object(a.useState)(""),_=Object(u.a)(G,2),Z=_[0],$=_[1],V=function(){m(!1),v(!1),T(!1)};return null===d||void 0===d?Object(n.jsx)(l.a,{to:"/login"}):Object(n.jsxs)("div",{className:"Checkout",children:[Object(n.jsx)("h2",{id:"chk-heading",children:"Place Order"}),Object(n.jsxs)("h3",{id:"chk-content",children:["Order: ",null!==(t=null===(c=e.location.data)||void 0===c?void 0:c.orderString)&&void 0!==t?t:"No Order"]}),Object(n.jsxs)("h3",{id:"chk-content",children:["Total Price: $",null!==(i=null===(o=e.location.data)||void 0===o?void 0:o.price)&&void 0!==i?i:0]}),Object(n.jsx)(E.a,{value:null!==(r=d.displayName)&&void 0!==r?r:"",color:"secondary",required:!0,style:{display:"inline-block",marginTop:20,marginRight:20},label:"Name"}),Object(n.jsx)(E.a,{value:null!==(s=d.email)&&void 0!==s?s:"",color:"secondary",required:!0,style:{display:"inline-block",marginTop:20,marginRight:20},label:"Email"}),Object(n.jsx)(E.a,{onChange:function(e){return B(e.target.value)},color:"secondary",required:!0,style:{display:"inline-block",marginTop:20},label:"Building"}),Object(n.jsx)(E.a,{onChange:function(e){return U(e.target.value)},color:"secondary",required:!0,fullWidth:!0,style:{display:"block",marginTop:20,marginRight:100},label:"Street"}),Object(n.jsx)(E.a,{onChange:function(e){return Q(e.target.value)},color:"secondary",required:!0,style:{display:"inline-block",marginTop:20,marginRight:20},label:"Pin Code"}),Object(n.jsx)(E.a,{onChange:function(e){return $(e.target.value)},color:"secondary",required:!0,style:{display:"inline-block",marginTop:20,marginBottom:20},label:"Country"}),Object(n.jsx)("br",{}),Object(n.jsxs)("div",{className:"buttonGroup",children:[Object(n.jsx)(y.a,{onClick:function(){e.history.push("/")},style:{marginTop:40,marginRight:25,display:"inline-block"},id:"checkout-button",variant:"outlined",color:"default",children:"Cancel"}),Object(n.jsx)(y.a,{onClick:function(){var t,c;!function(t,c){m(!0);var n={ingrediants:{lettuce:e.location.data.lettuce,cheese:e.location.data.cheese,meat:e.location.data.meat},orderString:t,price:c,customer:{name:d.displayName,email:d.email,address:{builing:L,street:J,pinCode:z,country:Z}}};S.post("/orders.json",n).then((function(e){m(!1),200===e.status?v(!0):T(!0)})).catch((function(e){m(!1),console.log(e),T(!0)}))}(null===(t=e.location.data)||void 0===t?void 0:t.orderString,null===(c=e.location.data)||void 0===c?void 0:c.price)},disabled:null===e.location.data||void 0===e.location.data||""===d.displayName||""===d.email||""===L||""===J||""===z||""===Z,style:{marginTop:40,display:"inline-block"},id:"checkout-button",variant:"outlined",color:"secondary",children:"Place Order"}),Object(n.jsx)(j.a,{open:g,children:Object(n.jsx)(b.a,{style:{padding:"50px"},color:"secondary"})}),Object(n.jsxs)(j.a,{open:f,onClose:V,children:[Object(n.jsx)(R.a,{id:"responsive-dialog-title",children:"Order Placed"}),Object(n.jsx)(M.a,{children:Object(n.jsx)(D.a,{children:"Your order was successfully placed! Bon Apetit!"})}),Object(n.jsx)(q.a,{children:Object(n.jsx)(y.a,{autoFocus:!0,onClick:function(){V(),e.history.push("/orders")},color:"secondary",children:"Ok"})})]}),Object(n.jsxs)(j.a,{open:N,onClose:V,children:[Object(n.jsx)(R.a,{id:"responsive-dialog-title",children:"Error"}),Object(n.jsx)(M.a,{children:Object(n.jsx)(D.a,{children:"Somthing went wrong! Try again later"})}),Object(n.jsx)(q.a,{children:Object(n.jsx)(y.a,{autoFocus:!0,onClick:function(){V(),e.history.push("/")},color:"secondary",children:"Ok"})})]})]})]})}),J=(c(128),function(e){return Object(n.jsxs)("div",{className:"Order",children:[Object(n.jsxs)("h2",{className:"order-string",children:[e.orderString," - $",e.price]}),Object(n.jsx)("h2",{className:"order-by",children:e.customer.name})]})}),U=(c(129),function(e){var t=I.a.getJSON("user"),c=Object(a.useState)(null),i=Object(u.a)(c,2),o=i[0],r=i[1],s=Object(a.useState)(!1),h=Object(u.a)(s,2),O=h[0],g=h[1];Object(a.useEffect)((function(){g(!0),S.get("/orders.json").then((function(e){200===e.status&&r(e.data)})),g(!1)}),[]);return Object(n.jsxs)("div",{className:"Orders",children:[null===t||void 0===t?Object(n.jsx)(l.a,{to:"/login"}):null,null===o?Object(n.jsx)("h2",{style:{textAlign:"center",fontSize:28,fontWeight:300},children:"No Orders"}):function(){var e=Object.keys(o).map((function(e){return o[e].customer.email===t.email?Object(n.jsx)(J,Object(d.a)({},o[e]),e):null}));return e.every((function(e){return null===e}))?Object(n.jsx)("h2",{style:{textAlign:"center",fontSize:28,fontWeight:300},children:"No Orders"}):e}(),Object(n.jsx)(j.a,{open:O,children:Object(n.jsx)(b.a,{style:{padding:"50px"},color:"secondary"})})]})}),Y=(c(130),function(e){var t=Object(a.useState)(!1),c=Object(u.a)(t,2),i=c[0],o=c[1],r=Object(a.useState)(!1),s=Object(u.a)(r,2),l=s[0],d=s[1],h=Object(a.useState)(!1),O=Object(u.a)(h,2),g=O[0],m=O[1],p=Object(a.useState)("Somthing went wrong! Try again later"),x=Object(u.a)(p,2),f=x[0],v=x[1],k=Object(a.useState)(""),S=Object(u.a)(k,2),C=S[0],N=S[1],T=Object(a.useState)(""),w=Object(u.a)(T,2),P=w[0],L=w[1],B=Object(a.useState)(""),I=Object(u.a)(B,2),A=I[0],W=I[1],J=Object(a.useState)(""),U=Object(u.a)(J,2),Y=U[0],F=U[1],z=function(){o(!1),d(!1),m(!1),v("Somthing went wrong! Try again later")};return Object(n.jsxs)("div",{className:"SignUp",children:[Object(n.jsx)("h2",{id:"chk-heading",children:"Sign Up"}),Object(n.jsx)(E.a,{id:"name",fullWidth:!0,onChange:function(e){N(e.target.value)},value:C,color:"secondary",required:!0,style:{width:"75%",display:"block",marginTop:35,marginRight:"auto",marginLeft:"auto"},label:"Name"}),Object(n.jsx)(E.a,{id:"email",fullWidth:!0,onChange:function(e){L(e.target.value)},value:P,color:"secondary",required:!0,style:{width:"75%",display:"block",marginTop:25,marginRight:"auto",marginLeft:"auto"},label:"Email"}),Object(n.jsx)(E.a,{fullWidth:!0,value:A,type:"password",onChange:function(e){W(e.target.value)},color:"secondary",helperText:A.length<6&&""!==A?"Password too short":"",required:!0,style:{width:"75%",display:"block",marginTop:25,marginRight:"auto",marginLeft:"auto"},label:"Password"}),Object(n.jsx)(E.a,{fullWidth:!0,type:"password",value:Y,onChange:function(e){F(e.target.value)},helperText:""!==Y&&Y!==A?"Passwords don't match":"",color:"secondary",required:!0,style:{width:"75%",display:"block",marginTop:25,marginRight:"auto",marginLeft:"auto"},label:"Confirm Password"}),Object(n.jsx)(y.a,{onClick:function(){o(!0),fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDj7fGfYjQQDBvZkybj2h2MDY4AMP5BBlI",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:P,password:A,returnSecureToken:!0})}).then((function(e){return e.json()})).then((function(e){void 0!==e.error?("EMAIL_EXISTS"===e.error.message&&v("The provided email is already registered! Log in or use a different email."),o(!1),N(""),L(""),W(""),F(""),m(!0)):fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDj7fGfYjQQDBvZkybj2h2MDY4AMP5BBlI",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({idToken:e.idToken,displayName:C,returnSecureToken:!0})}).then((function(e){e.ok?(o(!1),N(""),L(""),W(""),F(""),d(!0)):(o(!1),N(""),L(""),W(""),F(""),m(!0))})).catch((function(e){o(!1),N(""),L(""),W(""),F(""),m(!0)}))})).catch((function(e){o(!1),N(""),L(""),W(""),F(""),m(!0)}))},disabled:""===P||""===A||""===Y||A!==Y||A.length<6,style:{marginTop:50,marginRight:"auto",marginLeft:"auto",display:"block"},id:"checkout-button",variant:"outlined",color:"secondary",children:"Sign UP"}),Object(n.jsx)(j.a,{open:i,children:Object(n.jsx)(b.a,{style:{padding:"50px"},color:"secondary"})}),Object(n.jsxs)(j.a,{open:l,onClose:z,children:[Object(n.jsx)(R.a,{id:"responsive-dialog-title",children:"Account Created"}),Object(n.jsx)(M.a,{children:Object(n.jsx)(D.a,{children:"Your account was successfully created! Log In!"})}),Object(n.jsx)(q.a,{children:Object(n.jsx)(y.a,{autoFocus:!0,onClick:function(){z(),e.history.push("/login")},color:"secondary",children:"Ok"})})]}),Object(n.jsxs)(j.a,{open:g,onClose:z,children:[Object(n.jsx)(R.a,{id:"responsive-dialog-title",children:"Error"}),Object(n.jsx)(M.a,{children:Object(n.jsx)(D.a,{children:f})}),Object(n.jsx)(q.a,{children:Object(n.jsx)(y.a,{autoFocus:!0,onClick:function(){z()},color:"secondary",children:"Ok"})})]})]})}),F=(c(131),function(e){var t=Object(a.useState)(!1),c=Object(u.a)(t,2),i=c[0],o=c[1],r=Object(a.useState)(!1),s=Object(u.a)(r,2),l=s[0],d=s[1],h=Object(a.useState)("Somthing went wrong! Try again later"),O=Object(u.a)(h,2),g=O[0],m=O[1],p=Object(a.useState)(""),x=Object(u.a)(p,2),f=x[0],v=x[1],k=Object(a.useState)(""),S=Object(u.a)(k,2),C=S[0],N=S[1],T=function(){o(!1),d(!1),m("Somthing went wrong! Try again later")};return Object(n.jsxs)("div",{className:"Login",children:[Object(n.jsx)("h2",{id:"chk-heading",children:"Log In"}),Object(n.jsx)(E.a,{id:"email",fullWidth:!0,onChange:function(e){v(e.target.value)},value:f,color:"secondary",required:!0,style:{width:"75%",display:"block",marginTop:35,marginRight:"auto",marginLeft:"auto"},label:"Email"}),Object(n.jsx)(E.a,{fullWidth:!0,value:C,type:"password",onChange:function(e){N(e.target.value)},color:"secondary",required:!0,style:{width:"75%",display:"block",marginTop:25,marginRight:"auto",marginLeft:"auto"},label:"Password"}),Object(n.jsx)(y.a,{onClick:function(){o(!0),fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDj7fGfYjQQDBvZkybj2h2MDY4AMP5BBlI",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:f,password:C,returnSecureToken:!0})}).then((function(e){return e.json()})).then((function(t){console.log(t),void 0!==t.error?("EMAIL_NOT_FOUND"===t.error.message&&m("The provided email is not registered! Sign up or use a registered email."),"INVALID_PASSWORD"===t.error.message&&m("The provided password is incorrect! Enter the right password for this email."),"INVALID_EMAIL"===t.error.message&&m("The provided email is invalid! Enter a valid email to log in."),o(!1),v(""),N(""),d(!0)):(o(!1),v(""),N(""),I.a.set("user",t),e.history.push("/"),document.location.reload())}))},style:{marginTop:50,marginRight:"auto",marginLeft:"auto",display:"block"},id:"checkout-button",variant:"outlined",color:"secondary",children:"Log IN"}),Object(n.jsx)(j.a,{open:i,children:Object(n.jsx)(b.a,{style:{padding:"50px"},color:"secondary"})}),Object(n.jsxs)(j.a,{open:l,onClose:T,children:[Object(n.jsx)(R.a,{id:"responsive-dialog-title",children:"Error"}),Object(n.jsx)(M.a,{children:Object(n.jsx)(D.a,{children:g})}),Object(n.jsx)(q.a,{children:Object(n.jsx)(y.a,{autoFocus:!0,onClick:function(){T()},color:"secondary",children:"Ok"})})]})]})}),z=(c(132),function(e){var t=Object(a.useState)(null),c=Object(u.a)(t,2),i=c[0],o=c[1];Object(a.useEffect)((function(){o(I.a.getJSON("user"))}),[]);return Object(n.jsxs)("div",{className:"Profile",children:[Object(n.jsx)("h2",{id:"chk-heading",children:"Profile"}),void 0===i?Object(n.jsx)(l.a,{to:"/login"}):null,null!==i&&void 0!==i?[Object(n.jsxs)("h2",{id:"chk-content",style:{textAlign:"center"},children:["Name: ",i.displayName]},"name"),Object(n.jsxs)("h2",{id:"chk-content",style:{textAlign:"center"},children:["Email: ",i.email]},"email")]:null,Object(n.jsx)(y.a,{onClick:function(){I.a.remove("user"),document.location.reload(),e.history.push("/login")},style:{marginTop:30,marginRight:"auto",marginLeft:"auto",display:"block"},id:"checkout-button",variant:"outlined",color:"secondary",children:"SIGN OUT"})]})}),Q=(c(133),function(){return Object(n.jsxs)("div",{className:"Layout",children:[Object(n.jsx)(l.b,{path:"/",component:A}),Object(n.jsxs)(l.d,{children:[Object(n.jsx)(l.b,{path:"/",exact:!0,component:C}),Object(n.jsx)(l.b,{path:"/orders",component:U}),Object(n.jsx)(l.b,{path:"/checkout",component:W}),Object(n.jsx)(l.b,{path:"/signup",component:Y}),Object(n.jsx)(l.b,{path:"/login",component:F}),Object(n.jsx)(l.b,{path:"/profile",component:z}),Object(n.jsx)(l.b,{render:function(){return Object(n.jsx)("h1",{children:"404 Page Not Found!"})}})]})]})}),G=(c(134),function(){return Object(n.jsx)(s.a,{children:Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(Q,{})})})});r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(G,{})}),document.getElementById("root"))},92:function(e,t,c){},93:function(e,t,c){},94:function(e,t,c){}},[[135,1,2]]]);
//# sourceMappingURL=main.f89dc4df.chunk.js.map