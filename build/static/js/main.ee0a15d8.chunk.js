(this["webpackJsonpbasic-burger-builder"]=this["webpackJsonpbasic-burger-builder"]||[]).push([[0],{109:function(e,t,c){},114:function(e,t,c){},115:function(e,t,c){},116:function(e,t,c){"use strict";c.r(t);var r=c(2),n=c(0),s=c.n(n),a=c(12),i=c.n(a),o=c(22),j=c(8),l=c(44),u=c(14),d=(c(80),c(143)),b=c(144),h=c(145),O=c(146),x=c(147),g=c(142),m=c(148),p=(c(81),c.p+"static/media/bun-top.6a415c9e.png"),f=c.p+"static/media/bun-bottom.59a31b24.png",C=c.p+"static/media/burger-patty.d7000a2b.png",v=c.p+"static/media/burger-cheese.ff355075.png",y=c.p+"static/media/burger-lettuce.36b3a83e.png",k=function(e){return Object(r.jsx)("div",{className:"Burger",children:Object(r.jsxs)("div",{className:"column",children:[Object(r.jsx)("img",{id:"burgertop",src:p,alt:"bun"}),e.lettuce?Object(r.jsx)("img",{id:"burgerlettuce",src:y,alt:"lettuce"}):null,e.cheese?Object(r.jsx)("img",{id:"burgercheese",src:v,alt:"cheese"}):null,e.meat?Object(r.jsx)("img",{id:"burgerpatty",src:C,alt:"meat"}):null,Object(r.jsx)("img",{id:"burgerbottom",src:f,alt:"bun"})]})})},S=(c(82),c(150)),P=Object(j.f)((function(e){var t=Object(n.useState)(!1),c=Object(u.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)(""),o=Object(u.a)(i,2),j=o[0],l=o[1],m=Object(n.useState)(0),p=Object(u.a)(m,2),f=p[0],C=p[1],v=function(){a(!1)};return Object(n.useEffect)((function(){var t="1 x Burger with ",c=0,r=[];e.lettuce&&(r.push("Lettuce"),c+=e.prices.lettucePrice),e.cheese&&(r.push("Cheese"),c+=e.prices.cheesePrice),e.meat&&(r.push("Meat"),c+=e.prices.meatPrice);for(var n=0;n<r.length;n++)0!==n&&(t+=", "),t+=r[n];l(t),C(c)}),[e.prices.lettucePrice,e.prices.cheesePrice,e.prices.meatPrice,e.lettuce,e.cheese,e.meat]),Object(r.jsxs)("div",{className:"BurgerControls",children:[Object(r.jsx)("h2",{id:"ctrl-heading",children:"Customize Burger"}),Object(r.jsxs)("div",{className:"row",children:[Object(r.jsx)("h4",{id:"ctrl-name",children:"Lettuce"}),Object(r.jsx)(S.a,{checked:e.lettuce,onChange:e.changeLettuce})]}),Object(r.jsxs)("div",{className:"row",style:{marginLeft:20},children:[Object(r.jsx)("h4",{id:"ctrl-name",children:"Cheese"}),Object(r.jsx)(S.a,{checked:e.cheese,onChange:e.changeCheese})]}),Object(r.jsxs)("div",{className:"row",style:{marginLeft:20},children:[Object(r.jsx)("h4",{id:"ctrl-name",children:"Meat"}),Object(r.jsx)(S.a,{checked:e.meat,onChange:e.changeMeat})]}),Object(r.jsxs)("h3",{id:"ctrl-price",children:["Price: $",f]}),Object(r.jsx)(g.a,{disabled:!e.lettuce&&!e.cheese&&!e.meat,onClick:function(){e.history.push("/checkout")},id:"checkout-button",variant:"outlined",color:"secondary",children:"Checkout"}),Object(r.jsxs)(d.a,{open:s,onClose:v,children:[Object(r.jsx)(b.a,{id:"responsive-dialog-title",children:"Confirm Order"}),Object(r.jsxs)(h.a,{children:[Object(r.jsx)(O.a,{children:j}),Object(r.jsx)(O.a,{children:"Would you like to place this order?"})]}),Object(r.jsxs)(x.a,{children:[Object(r.jsx)(g.a,{autoFocus:!0,onClick:v,color:"secondary",children:"Cancel"}),Object(r.jsx)(g.a,{onClick:function(){a(!1),e.checkout(j,f)},color:"secondary",autoFocus:!0,children:"PLACE ORDER"})]})]})]})})),B=c(62),N=c.n(B).a.create({baseURL:"https://burger-builder-71f50-default-rtdb.firebaseio.com/"}),w=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(!1),i=Object(u.a)(a,2),o=i[0],j=i[1],p=Object(n.useState)(!1),f=Object(u.a)(p,2),C=f[0],v=f[1],y=Object(n.useState)(0),S=Object(u.a)(y,2),B=S[0],w=S[1],L=Object(n.useState)(0),E=Object(u.a)(L,2),M=E[0],F=E[1],R=Object(n.useState)(0),A=Object(u.a)(R,2),D=A[0],I=A[1],J=Object(n.useState)(!1),U=Object(u.a)(J,2),z=U[0],G=U[1],T=Object(n.useState)(!1),W=Object(u.a)(T,2),Y=W[0],$=W[1],q=Object(n.useState)(!1),H=Object(u.a)(q,2),K=H[0],Q=H[1],V={lettuce:c,cheese:o,meat:C};Object(n.useEffect)((function(){G(!0),N.get("/ingrediant-costs.json").then((function(e){200===e.status&&(w(e.data.lettuce),F(e.data.cheese),I(e.data.meat))})),G(!1)}),[]);var X=function(){G(!1),$(!1),Q(!1)};return Object(r.jsxs)("div",{className:"BurgerBuilder",children:[Object(r.jsx)(k,Object(l.a)({},V)),Object(r.jsx)(P,Object(l.a)(Object(l.a)({},V),{},{prices:{lettucePrice:B,cheesePrice:M,meatPrice:D},checkout:function(e,t){G(!0);var c={ingrediants:V,orderString:e,price:t,customer:{name:"Dhananjayan P N",address:{house:"NCC Urban Green Province",street:"Sarjapur Road",pinCode:"562125",country:"India"},email:"pndjay@gmail.com"},deliveryMethod:"regular"};N.post("/orders.json",c).then((function(e){G(!1),200===e.status?$(!0):(console.log(e),Q(!0))})).catch((function(e){G(!1),console.log(e),Q(!0)}))},changeLettuce:function(){return s(!c)},changeCheese:function(){return j(!o)},changeMeat:function(){return v(!C)}})),Object(r.jsx)(d.a,{open:z,children:Object(r.jsx)(m.a,{style:{padding:"50px"},color:"secondary"})}),Object(r.jsxs)(d.a,{open:Y,onClose:X,children:[Object(r.jsx)(b.a,{id:"responsive-dialog-title",children:"Order Placed"}),Object(r.jsx)(h.a,{children:Object(r.jsx)(O.a,{children:"Your order was successfully placed! Bon Apetit!"})}),Object(r.jsx)(x.a,{children:Object(r.jsx)(g.a,{autoFocus:!0,onClick:X,color:"secondary",children:"Ok"})})]}),Object(r.jsxs)(d.a,{open:K,onClose:X,children:[Object(r.jsx)(b.a,{id:"responsive-dialog-title",children:"Error"}),Object(r.jsx)(h.a,{children:Object(r.jsx)(O.a,{children:"Somthing went wrong! Try again later"})}),Object(r.jsx)(x.a,{children:Object(r.jsx)(g.a,{autoFocus:!0,onClick:X,color:"secondary",children:"Ok"})})]})]})},L=(c(109),c(139)),E=c(151),M=c(149),F=c(63),R=c.n(F),A=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),c=t[0],s=t[1],a=function(){return s(!c)};return Object(r.jsxs)("div",{className:"Navbar",children:[Object(r.jsx)(o.b,{to:"/",exact:!0,id:"logo",children:"Burger Builder"}),Object(r.jsx)(o.b,{to:"/",exact:!0,id:"links",style:{color:"#9e9e9e"},activeStyle:{color:"#f50057"},children:"Builder"}),Object(r.jsx)(o.b,{to:"/orders",id:"links",style:{color:"#9e9e9e"},activeStyle:{color:"#f50057"},children:"Orders"}),Object(r.jsx)(L.a,{onClick:a,id:"menu-icon-button","aria-label":"menu",children:Object(r.jsx)(R.a,{id:"menu-icon"})}),Object(r.jsxs)(E.a,{anchor:"left",open:c,onClose:a,children:[Object(r.jsx)(o.b,{to:"/",exact:!0,id:"logo-menu",onClick:a,children:"Burger Builder"}),Object(r.jsx)(M.a,{}),Object(r.jsx)(o.b,{to:"/",exact:!0,id:"links-menu",onClick:a,style:{color:"#9e9e9e"},activeStyle:{color:"#f50057"},children:"Builder"}),Object(r.jsx)(o.b,{to:"/orders",id:"links-menu",onClick:a,style:{color:"#9e9e9e"},activeStyle:{color:"#f50057"},children:"Orders"})]})]})},D=(c(114),function(){return Object(r.jsxs)("div",{className:"Layout",children:[Object(r.jsx)(j.a,{path:"/",component:A}),Object(r.jsxs)(j.c,{children:[Object(r.jsx)(j.a,{path:"/",exact:!0,component:w}),Object(r.jsx)(j.a,{path:"/orders",render:function(){return Object(r.jsx)("h1",{children:"Orders Page"})}}),Object(r.jsx)(j.a,{path:"/checkout",render:function(){return Object(r.jsx)("h1",{children:"Checkout Page"})}}),Object(r.jsx)(j.a,{render:function(){return Object(r.jsx)("h1",{children:"404 Page Not Found!"})}})]})]})}),I=(c(115),function(){return Object(r.jsx)(o.a,{children:Object(r.jsx)("div",{className:"App",children:Object(r.jsx)(D,{})})})});i.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(I,{})}),document.getElementById("root"))},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){}},[[116,1,2]]]);
//# sourceMappingURL=main.ee0a15d8.chunk.js.map