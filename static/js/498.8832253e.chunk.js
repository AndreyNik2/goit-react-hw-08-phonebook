"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[498],{7498:function(n,e,t){t.r(e),t.d(e,{default:function(){return R}});var a,r,s,o,i,c,l=t(2791),u=t(8402),d=t(168),h=t(6444),m=h.ZP.h1(a||(a=(0,d.Z)(["\n  margin: 20px;\n  color: #d4fe00;\n"]))),p=h.ZP.h2(r||(r=(0,d.Z)(["\n  margin: 20px;\n  color: #d4fe00;\n"]))),x=h.ZP.div(s||(s=(0,d.Z)(["\n  padding: 10px;\n  color: orange;\n"]))),b=t(9439),f=h.ZP.form(o||(o=(0,d.Z)(["\n"]))),g=h.ZP.label(i||(i=(0,d.Z)(["\nmargin-right:10px;\nfont-weight: 700;\n"]))),v=h.ZP.input(c||(c=(0,d.Z)(["\nmargin-left:10px;\n"]))),Z=t(9434),j=t(3634),y=t(1771),C=t(3329);var w,k,P,A,z=function(){var n=(0,l.useState)(""),e=(0,b.Z)(n,2),t=e[0],a=e[1],r=(0,l.useState)(""),s=(0,b.Z)(r,2),o=s[0],i=s[1],c=(0,Z.I0)(),u=(0,Z.v9)(y.K2),d=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":a(r);break;case"number":i(r);break;default:console.warn("There is no such")}},h=function(){a(""),i("")};return(0,C.jsxs)(f,{onSubmit:function(n){var e;n.preventDefault(),e={name:t,number:o},u.filter((function(n){return n.name===e.name})).length>0?alert("".concat(e.name,"  is already in contacts")):c((0,j.el)(e)),h()},children:[(0,C.jsxs)(g,{children:["Name",(0,C.jsx)(v,{onChange:d,value:t,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,C.jsxs)(g,{children:["Number",(0,C.jsx)(v,{onChange:d,value:o,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,C.jsx)("button",{type:"submit",children:"Add contact"})]})},S=t(7948),N=t.n(S),E=h.ZP.ul(w||(w=(0,d.Z)(["\n  padding-inline-start: 0px;\n"]))),I=h.ZP.li(k||(k=(0,d.Z)(["\ndisplay: flex;\nmargin: 5px;\nlist-style: none;\n"]))),K=h.ZP.button(P||(P=(0,d.Z)(["\npadding: 10px 25px;\nborder: none;\nborder-radius: 5px;\nbackground-color: #111111;\ncolor: orange;\n"]))),_=h.ZP.p(A||(A=(0,d.Z)(["\nwidth:300px;\nfont-size: 16px\n"]))),q=t(4808);var F=function(n){var e=n.contact;console.log(e);var t=(0,l.useState)(e.name),a=(0,b.Z)(t,2),r=a[0],s=a[1],o=(0,l.useState)(e.number),i=(0,b.Z)(o,2),c=i[0],u=i[1],d=(0,Z.I0)(),h=(0,Z.v9)(y.K2),m=e.id,p=function(n){var e=n.currentTarget,t=e.name,a=e.value;switch(t){case"name":s(a);break;case"number":u(a);break;default:console.warn("There is no such")}},x=function(){s(""),u("")};return(0,C.jsxs)(f,{onSubmit:function(n){var e;n.preventDefault(),e={name:r,number:c,contactId:m},h.filter((function(n){return n.name===e.name})).length>0?alert("".concat(e.name,"  is already in contacts")):d((0,j.E_)(e)),x()},children:[(0,C.jsxs)(g,{children:["Name",(0,C.jsx)(v,{onChange:p,value:r,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,C.jsxs)(g,{children:["Number",(0,C.jsx)(v,{onChange:p,value:c,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,C.jsx)("button",{type:"submit",children:"Edit contact"})]})},T={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}};N().setAppElement("#root");var B,D,L=function(){var n=(0,l.useState)(null),e=(0,b.Z)(n,2),t=e[0],a=e[1],r=(0,Z.I0)(),s=(0,Z.v9)(y.K2),o=(0,Z.v9)(q.zK),i=function(){a(!0)},c=function(){a(null)};return(0,C.jsx)(C.Fragment,{children:(0,C.jsx)(E,{children:function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))}(s,o).map((function(n){return(0,C.jsxs)(I,{children:[(0,C.jsxs)(_,{children:[n.name,": ",n.number]}),(0,C.jsx)(K,{onClick:function(){return e=n.id,void r((0,j._f)(e));var e},type:"button",children:"Delete"}),(0,C.jsx)("button",{onClick:i,children:"Edit"}),(0,C.jsx)(N(),{isOpen:null!==t,onRequestClose:c,style:T,shouldCloseOnEsc:null!==t,children:(0,C.jsx)(F,{contact:n})})]},n.id)}))})})},M=h.ZP.input(B||(B=(0,d.Z)(["\nmargin-left:10px;\nwidth: 300px\n"]))),J=h.ZP.label(D||(D=(0,d.Z)(["\ndisplay: block;\nfont-weight: 700;\n\n"]))),O=function(n){n.value,n.onChange;var e=(0,Z.v9)(q.zK),t=(0,Z.I0)();return(0,C.jsxs)(J,{children:["Find contacts by name:",(0,C.jsx)(M,{type:"text",value:e,onChange:function(n){t((0,q.M6)(n.currentTarget.value))}})]})};var R=function(){var n=(0,Z.v9)(y.K2),e=(0,Z.v9)(y.Vc),t=(0,Z.I0)();return(0,l.useEffect)((function(){t((0,j.yF)())}),[t]),(0,C.jsx)("main",{children:(0,C.jsxs)(x,{children:[(0,C.jsx)(m,{children:"Phonebook"}),(0,C.jsx)(z,{}),(0,C.jsx)(p,{children:"Contacts"}),(0,C.jsx)(O,{}),(0,C.jsx)(u.NB,{visible:Boolean(e),height:"80",width:"80",ariaLabel:"blocks-loading",wrapperStyle:{},wrapperClass:"blocks-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]}),(0,C.jsx)(L,{}),0===n.length&&!e&&(0,C.jsx)("p",{children:"Contactlist empty. Please add contact."})]})})}}}]);
//# sourceMappingURL=498.8832253e.chunk.js.map