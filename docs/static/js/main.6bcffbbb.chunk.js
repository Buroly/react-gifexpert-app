(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=n(4),o=n(10),s=n(0),d=1,u=function(e){var t=e.items,n=e.setItems,a=e.placeholder,c="add-item-".concat(d),r=function(e){e.preventDefault();var a=document.querySelector("#".concat(c,"-input")),r=a.value;if(!r||!t||-1===t.indexOf(r)){var i=document.querySelector("#".concat(c,"-button"));n&&n((function(e){return[r].concat(Object(o.a)(e))})),a.value="",i.disabled=!0}};return window.addEventListener("DOMContentLoaded",(function(e){document.querySelector("#".concat(c,"-button")).disabled=!0})),d++,Object(s.jsxs)("form",{className:"add-item",onSubmit:r,children:[Object(s.jsx)("input",{id:"".concat(c,"-input"),placeholder:a,onChange:function(e){var n=e.target.value,a=document.querySelector("#".concat(c,"-button"));n?t&&-1!==t.indexOf(n)?a.disabled=!0:a.disabled=!1:a.disabled=!0},onKeyUp:function(e){13===e.keyCode&&r(e)}}),Object(s.jsx)("button",{id:"".concat(c,"-button"),type:"submit",children:"Agregar"})]})};u.defaultProps={items:null,placeholder:"Escribe un nuevo elemento"};var l=n(11),j=function(e){var t=e.title,n=e.url;return console.log(),Object(s.jsxs)("div",{className:"card animate__animated animate__fadeIn",children:[Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:n,alt:t})}),Object(s.jsx)("div",{children:t})]})};j.defaultProps={title:""};var b=n(8),m=n.n(b),p=n(6),f=n.n(p),h=n(9),v=function(){var e=Object(h.a)(f.a.mark((function e(t){var n,a,c,r,i;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=xG9XIjeIB7BlzFo0U2PFHoyX7GiptdhK"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,i=r.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){v(e).then((function(e){return setTimeout((function(){return r({data:e,loading:!1})}),1e3)}))}),[e]),c};O.propTypes={category:m.a.string.isRequired};var x=function(e){var t=e.category,n=O(t),a=n.data,c=n.loading;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h2",{className:"animate__animated animate__fadeIn",children:t}),c&&Object(s.jsx)("h3",{className:"animate__animated animate__flash",children:"Cargando..."}),Object(s.jsx)("div",{className:"card-grid",children:a.map((function(e){return Object(s.jsx)(j,Object(l.a)({},e),e.id)}))})]})},g=function(){var e=Object(a.useState)(["Rick and Morty"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:"GifExpertApp"}),Object(s.jsx)(u,{items:n,setItems:c,placeholder:"Escribe una nueva categor\xeda"})]}),Object(s.jsx)("hr",{}),Object(s.jsx)("div",{id:"categories",children:Object(s.jsx)("ol",{children:n.map((function(e){return Object(s.jsx)(x,{category:e},e)}))})})]})},y=(n(20),document.querySelector("#root"));r.a.render(Object(s.jsx)(g,{}),y)}},[[21,1,2]]]);
//# sourceMappingURL=main.6bcffbbb.chunk.js.map