(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{86:function(e,t,a){"use strict";a.r(t);var n=a(12),r=a.n(n),s=a(16),c=a(15),o=a(14),m=a(7),l=a(0),i=a.n(l),u=a(17),p=a.n(u),d=a(9),b=a(5),f=a(11);t.default=function(){var e=Object(l.useState)({name:"",password:""}),t=Object(m.a)(e,2),a=t[0],n=t[1],u=Object(l.useState)(""),g=Object(m.a)(u,2),w=g[0],v=g[1],h=Object(l.useState)(!1),x=Object(m.a)(h,2),N=x[0],E=x[1],j=Object(l.useContext)(f.a).setUser,y=function(e){var t=e.target.name;n(Object(o.a)({},a,Object(c.a)({},t,e.target.value)))},O=function(){var e=Object(s.a)(r.a.mark(function e(t){var n,s;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,p.a.post("/api/users/login",{Name:a.name,Password:a.password});case 4:n=e.sent,(s=n.data.token)&&(localStorage.setItem("auth-token",s),localStorage.setItem("user",a.name),j({name:a.name,isAdmin:n.data.isAdmin})),E(!0),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(1),400===e.t0.response.status&&v("Invalid Username/Password");case 14:case"end":return e.stop()}},e,null,[[1,10]])}));return function(t){return e.apply(this,arguments)}}();return N?i.a.createElement(d.a,{to:"/"}):i.a.createElement("main",{className:"py-3 container"},i.a.createElement("form",{className:"row mt-5 mb-5 justify-content-center w-100",onSubmit:O,style:{overflowX:"hidden"}},i.a.createElement("h1",{className:"text-primary text-center col-12 "},"Login"),i.a.createElement("h6",{className:"text-danger text-center col-12"},w),i.a.createElement("div",{className:"form-group mb-5 col-lg-6 mx-2","data-aos123":"fade-right"},i.a.createElement("label",{className:"text-white"},"User Name"),i.a.createElement("input",{value:a.name,type:"text",className:"form-control",name:"name",required:!0,onChange:y,minLength:"5"})),i.a.createElement("div",{className:"form-group mb-5 col-lg-6 mx-2","data-aos123":"fade-right"},i.a.createElement("label",{className:"text-white"},"Password"),i.a.createElement("input",{value:a.password,type:"password",className:"form-control",name:"password",required:!0,onChange:y,minLength:"8"})),i.a.createElement("div",{className:"col-12 d-flex px-2 justify-content-center"},i.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary","data-aos123":"flip-right","data-aos123-offset":"0"},"Login")),i.a.createElement(b.b,{to:"/register",className:"col-12 text-center my-5"},"Dont Have an account yet ?")))}}}]);
//# sourceMappingURL=5.a2d054bb.chunk.js.map