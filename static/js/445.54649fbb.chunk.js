"use strict";(self.webpackChunkreact_router_training=self.webpackChunkreact_router_training||[]).push([[445],{50:function(n,e,t){t.d(e,{X:function(){return i},g:function(){return a}});var r=[{id:"h-1",name:"Hoodie 1"},{id:"h-2",name:"Hoodie 2"},{id:"h-3",name:"Hoodie 3"},{id:"s-1",name:"Sneakers 1"},{id:"s-2",name:"Sneakers 2"},{id:"s-3",name:"Sneakers 3"},{id:"s-4",name:"Sneakers 4"},{id:"p-1",name:"Pants 1"},{id:"p-2",name:"Pants 2"},{id:"p-3",name:"Pants 3"}],i=function(){return r},a=function(n){return r.find((function(e){return e.id===n}))}},445:function(n,e,t){t.r(e),t.d(e,{Products:function(){return w},default:function(){return S}});var r,i,a,o,s,u,d=t(439),c=t(689),p=t(87),l=t(168),x=t(444),m=x.ZP.div(r||(r=(0,l.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 200px);\n  gap: 16px;\n"]))),f=x.ZP.div(i||(i=(0,l.Z)(["\n  border: 1px solid black;\n  border-radius: 4px;\n\n  > a {\n    text-decoration: none;\n  }\n"]))),h=x.ZP.h3(a||(a=(0,l.Z)(["\n  padding: 4px;\n  margin-top: 8px;\n  margin-bottom: 0;\n  color: black;\n"]))),g=t(184),v=function(n){var e=n.products,t=(0,c.TH)();return(0,g.jsx)(m,{children:e.map((function(n){return(0,g.jsx)(f,{children:(0,g.jsxs)(p.Link,{to:"".concat(n.id),state:{from:t},children:[(0,g.jsx)("img",{src:"https://via.placeholder.com/200x100",alt:""}),(0,g.jsx)(h,{children:n.name})]})},n.id)}))})},Z=t(128),j=x.ZP.div(o||(o=(0,l.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n"]))),k=x.ZP.input(s||(s=(0,l.Z)(["\n  padding: 8px 32px 8px 8px;\n  border-radius: 4px;\n  font: inherit;\n"]))),P=(0,x.ZP)(Z.G4C)(u||(u=(0,l.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 6px;\n"]))),b=function(n){var e=n.value,t=n.onChange;return(0,g.jsxs)(j,{children:[(0,g.jsx)(P,{}),(0,g.jsx)(k,{type:"text",value:e,onChange:function(n){return t(n.target.value)}})]})},C=t(50),w=function(){var n,e=(0,C.X)(),t=(0,p.useSearchParams)(),r=(0,d.Z)(t,2),i=r[0],a=r[1],o=null!==(n=i.get("name"))&&void 0!==n?n:"",s=e.filter((function(n){return n.name.toLowerCase().includes(o.toLowerCase())}));return(0,g.jsxs)("main",{children:[(0,g.jsx)(b,{value:o,onChange:function(n){a(""!==n?{name:n}:{})}}),(0,g.jsx)(v,{products:s})]})},S=w}}]);
//# sourceMappingURL=445.54649fbb.chunk.js.map