(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{87:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a.n(n),s=a(16),c=a(15),o=a(14),m=a(7),l=a(0),i=a.n(l),u=a(17),p=a.n(u),d=a(9);t.default=function(){var e=Object(l.useState)({name:"",password:""}),t=Object(m.a)(e,2),a=t[0],n=t[1],u=Object(l.useState)(""),f=Object(m.a)(u,2),b=f[0],w=f[1],g=Object(l.useState)(!1),h=Object(m.a)(g,2),v=h[0],x=h[1],N=function(e){var t=e.target.name;n(Object(o.a)({},a,Object(c.a)({},t,e.target.value)))},E=function(){var e=Object(s.a)(r.a.mark(function e(t){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,p.a.post("/api/users/register",{Name:a.name,Password:a.password});case 4:200===e.sent.status&&x(!0),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),400===e.t0.response.status&&w("Invalid Username/Password");case 12:case"end":return e.stop()}},e,null,[[1,8]])}));return function(t){return e.apply(this,arguments)}}();return v?i.a.createElement(d.a,{to:"/login"}):i.a.createElement("main",{className:"py-3 container"},i.a.createElement("form",{className:"row mt-5 mb-5 justify-content-center w-100",onSubmit:E,style:{overflowX:"hidden"}},i.a.createElement("h1",{className:"text-primary text-center col-12 "},"Register "),i.a.createElement("h6",{className:"text-danger text-left"},b),i.a.createElement("div",{className:"form-group mb-5 col-lg-6 mx-2","data-aos123":"fade-right"},i.a.createElement("label",{className:"text-white"},"User Name"),i.a.createElement("input",{value:a.name,type:"text",className:"form-control",name:"name",required:!0,onChange:N,minLength:"5"})),i.a.createElement("div",{className:"form-group mb-5 col-lg-6 mx-2","data-aos123":"fade-right"},i.a.createElement("label",{className:"text-white"},"Password"),i.a.createElement("input",{value:a.password,type:"password",className:"form-control",name:"password",required:!0,onChange:N,minLength:"8"})),i.a.createElement("div",{className:"col-12 d-flex px-2 justify-content-center"},i.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary","data-aos123":"flip-right","data-aos123-offset":"0"},"Create Account"))))}}}]);
//# sourceMappingURL=6.e62147a9.chunk.js.map