"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[806],{9806:function(t,e,n){n.r(e),n.d(e,{default:function(){return q}});var r,a,c=n(2791),o=n(9434),s=n(5162),i=n(1413),u=n(9439),l="ContactForm_contactsFormWrapper__j8XWy",m="ContactForm_formContainer__TWEE2",f="ContactForm_submitButton__8wEUJ",d="ContactForm_inputWrapper__9zhfJ",h="ContactForm_inputContacts__LPCRd",v=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,e="",n=crypto.getRandomValues(new Uint8Array(t));t--;){var r=63&n[t];e+=r<36?r.toString(36):r<62?(r-26).toString(36).toUpperCase():r<63?"_":"-"}return e},p=function(t){return t.contactsStore.contacts.items},_=function(t){return t.contactsStore.contacts.isLoading},j=function(t){return t.contactsStore.contacts.error},x=n(2722),C=n(8348),b=(n(5462),n(184)),g=function(){var t=(0,o.I0)(),e=(0,o.v9)(p),n=(0,c.useState)(!1),r=(0,u.Z)(n,2),a=r[0],_=r[1],j=(0,c.useState)(""),g=(0,u.Z)(j,2),w=g[0],y=g[1],N=(0,c.useState)(""),A=(0,u.Z)(N,2),I=A[0],L=A[1],S=function(t){var e=t.target.value;switch(t.target.name){case"name":return void y(e);case"number":return void L(e);default:return}};return(0,b.jsx)("div",{className:l,children:(0,b.jsxs)("form",{className:m,onSubmit:function(n){n.preventDefault();var r={name:w,number:I};""!==r.name.toLowerCase().trim()&&""!==r.number.toLowerCase().trim()&&function(n){if(e.some((function(t){return t.name.toLowerCase()===n.name.toLowerCase()||t.number.toLowerCase()===n.number.toLowerCase()})))C.Am.info("'".concat(n.name&&n.number,"' is already in contacts!"),{});else{var r=(0,i.Z)({id:v()},n);_(!0),t((0,s.je)(r)).then((function(){_(!1),L(""),y(""),C.Am.info("Contact added successfully!",{})})).catch((function(t){_(!1),C.Am.info("Error adding contact: ".concat(t),{})}))}}(r)},children:[(0,b.jsxs)("label",{className:d,children:[(0,b.jsx)("p",{children:"Name"}),(0,b.jsx)("input",{className:h,type:"text",name:"name",required:!0,pattern:"[a-zA-Z\u0430-\u044f\u0410-\u042f\u0456\u0406\u0457\u0407\u0491\u0490\u0454\u0404']+",value:w,onChange:function(t){return S(t)}})]}),(0,b.jsxs)("label",{className:d,children:[(0,b.jsx)("p",{children:"Number"}),(0,b.jsx)("input",{className:h,type:"tel",name:"number",required:!0,pattern:"^\\+?\\d{1,4}[ .\\-]?\\(?\\d{1,3}\\)?[ .\\-]?\\d{1,4}[ .\\-]?\\d{1,4}[ .\\-]?\\d{1,9}$",title:"Format: XXX-XXX-XX-XX",value:I,onChange:function(t){return S(t)}})]}),(0,b.jsx)("button",{className:f,type:"submit",children:a?(0,b.jsx)(x.Z,{}):"Add contact"})]})})},w="ContactItem_contactItem__Z4FuP",y="ContactItem_deleteButton__AvFnv",N="ContactItem_contactName__ZAMAK",A="ContactItem_contactNumber__Xjnxb",I="ContactItem_svgIcon__T4txl",L=["title","titleId"];function S(){return S=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},S.apply(this,arguments)}function X(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},c=Object.keys(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(r=0;r<c.length;r++)n=c[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}function E(t,e){var n=t.title,o=t.titleId,s=X(t,L);return c.createElement("svg",S({xmlns:"http://www.w3.org/2000/svg",width:32,height:32,viewBox:"0 0 32 32",ref:e,"aria-labelledby":o},s),n?c.createElement("title",{id:o},n):null,r||(r=c.createElement("path",{fill:"currentColor",d:"M12 12h2v12h-2zm6 0h2v12h-2z"})),a||(a=c.createElement("path",{fill:"currentColor",d:"M4 6v2h2v20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8h2V6zm4 22V8h16v20zm4-26h8v2h-8z"})))}var F=c.forwardRef(E);n.p;function O(t){var e=t.contact,n=e.id,r=e.name,a=e.number,i=(0,o.I0)(),l=(0,c.useState)(!1),m=(0,u.Z)(l,2),f=m[0],d=m[1];return(0,b.jsxs)("li",{className:w,children:[(0,b.jsx)("span",{className:N,children:r}),(0,b.jsxs)("span",{className:A,children:[" ",a]}),(0,b.jsx)("button",{className:y,type:"button",onClick:function(){!function(t){d(!0),i((0,s.xX)(t)).then((function(){d(!1),C.Am.info("Contact deleted successfully!",{})})).catch((function(t){d(!1),C.Am.info("Error deleting contact: ".concat(t),{})}))}(n)},children:f?(0,b.jsx)(x.Z,{}):(0,b.jsx)(F,{className:I})})]},n)}var Z="ContactList_contactList__n4ZkG",k="ContactList_contactListWrapper__0cTDT";function z(){var t=(0,o.v9)((function(t){return t.filtersStore.filters})),e=(0,o.v9)(p).filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return(0,b.jsx)("div",{className:k,children:(0,b.jsxs)("ul",{className:Z,children:[" ",e.map((function(t){return(0,b.jsx)(O,{contact:t},t.id)}))]})})}var P="Filter_filterWrapper__ohvAm",W=n(8355),T=function(t){return t.filtersStore.filters};function V(){var t=(0,o.I0)(),e=(0,o.v9)(T);return(0,b.jsxs)("label",{className:P,children:[(0,b.jsx)("p",{children:"Filter contacts by name:"}),(0,b.jsx)("input",{type:"text",name:"filter",value:e,onChange:function(e){return function(e){var n=e.target.value;t((0,W.T)(n))}(e)}})]})}var R="ContactsPage_contactsPageWrapper__cymND",q=function(){var t=(0,o.I0)(),e=(0,o.v9)(p),n=(0,o.v9)(_),r=(0,o.v9)(j),a=!r&&!n&&e&&e.length>0;return(0,c.useEffect)((function(){t((0,s.VC)()).then((function(){C.Am.info("Contacts downloaded successfully!",{})})).catch((function(t){C.Am.info("Error downloading contacts: ".concat(t),{})}))}),[t]),(0,b.jsxs)("div",{className:R,children:[(0,b.jsx)(g,{}),(0,b.jsx)(V,{}),null!==r&&(0,b.jsx)("p",{className:"error-bage",children:r}),(0,b.jsx)("div",{children:n&&"Request in progress..."}),a&&(0,b.jsx)(z,{})]})}}}]);
//# sourceMappingURL=806.dfe00b67.chunk.js.map