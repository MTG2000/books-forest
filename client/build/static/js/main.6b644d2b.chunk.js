(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){"use strict";a.d(t,"a",function(){return s});var n=a(14),r=a(7),c=a(0),l=a.n(c),o=a(22),s=Object(c.createContext)();t.b=function(e){var t=Object(c.useState)({name:localStorage.getItem("user"),isAdmin:!1}),a=Object(r.a)(t,2),m=a[0],i=a[1],u=Object(o.a)("/api/users/authenticate"),b=u.loading,d=u.error,f=u.data;return Object(c.useEffect)(function(){b||d||f.isAdmin&&i(Object(n.a)({},m,{isAdmin:!0}))},[b]),l.a.createElement(s.Provider,{value:{user:m,setUser:i}},e.children)}},22:function(e,t,a){"use strict";var n=a(12),r=a.n(n),c=a(16),l=a(7),o=a(0),s=a(17),m=a.n(s);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=Object(o.useState)(null),s=Object(l.a)(n,2),i=s[0],u=s[1],b=Object(o.useState)(!0),d=Object(l.a)(b,2),f=d[0],g=d[1],p=Object(o.useState)(null),v=Object(l.a)(p,2),h=v[0],E=v[1];return Object(o.useEffect)(function(){return g(!0),Object(c.a)(r.a.mark(function n(){var c,l,o;return r.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return c=localStorage.getItem("auth-token"),n.prev=1,n.next=4,m()({method:t,url:e,body:a,headers:{Authorization:"Bearer ".concat(c)}});case 4:200===(l=n.sent).status?u(l.data):E({status:l.status,message:l.statusText}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),o=n.t0.response,E({status:o.status,message:o.statusText});case 12:return n.prev=12,g(!1),n.finish(12);case 15:case"end":return n.stop()}},n,null,[[1,8,12,15]])}))(),function(){}},[e]),{loading:f,data:i,error:h}}},23:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(44),l=a.n(c);t.a=function(){return r.a.createElement("div",{className:"container mx-auto mt-5 row justify-content-center"},r.a.createElement(l.a,{type:"bars",color:"#f1ee3b",height:200,width:160}),r.a.createElement("h2",{className:"text-white text-center col-12"},"Loading . . ."))}},24:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.number,a=e.message;return r.a.createElement("div",{className:"container pt-5"},r.a.createElement("h1",{className:"text-center text-white mt-5"},"Error ",r.a.createElement("span",{className:"text-danger"},t)," :("),r.a.createElement("h5",{className:" text-center text-white mt-5"},a))}},45:function(e,t,a){e.exports={overlay:"overlay_overlay__1IbJj"}},46:function(e,t,a){e.exports=a.p+"static/media/forest.2180ecba.jpg"},51:function(e,t,a){e.exports=a(84)},56:function(e,t,a){},79:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(37),l=a.n(c),o=(a(56),a(38)),s=a(39),m=a(49),i=a(40),u=a(50),b=a(9),d=function(e){function t(){return Object(o.a)(this,t),Object(m.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(n.Component),f=Object(b.g)(d),g=a(5),p=a(43),v=a.n(p);a(61);v.a.init({offset:100,duration:700,easing:"ease-in-sine",delay:100});var h=a(11),E=function(e){return r.a.createElement(g.a,null,r.a.createElement(f,null,r.a.createElement(h.b,null,e.children)))},N=(a(79),function(){var e=Object(n.useContext)(h.a),t=e.user,a=e.setUser;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark "},r.a.createElement("div",{className:"container"},r.a.createElement(g.b,{className:"navbar-brand ml-5 text-primary ",to:"/"},"Books Forest"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item "},r.a.createElement(g.b,{className:"nav-link",to:"/"},"All Books")),t.isAdmin&&r.a.createElement("li",{className:"nav-item "},r.a.createElement(g.b,{className:"nav-link",to:"/book/add"},"Add Book")),r.a.createElement("li",{className:"nav-item"},t.name?r.a.createElement("button",{className:"nav-link btn",onClick:function(){localStorage.removeItem("user"),localStorage.removeItem("auth-token"),a({name:"",isAdmin:!1}),window.location.pathname="/"}},"Log-out"):r.a.createElement(g.b,{className:"nav-link",to:"/login"},"Login"))))))}),j=function(){return r.a.createElement("footer",null)},O=a(23),x=a(45),y=a.n(x),k=a(46),w=a.n(k),A=function(){return Object(n.useEffect)(function(){var e=document.querySelector("img[lazysrc]");e.setAttribute("src",e.getAttribute("lazysrc"))},[]),r.a.createElement("div",{className:y.a.overlay},r.a.createElement("img",{lazysrc:w.a,alt:"",className:"overlay-image"}))},S=a(47),B=a(24),I=function(e){var t=e.component,a=e.onlyAdmin,c=Object(S.a)(e,["component","onlyAdmin"]),l=Object(n.useContext)(h.a).user;return console.log(l),console.log(a),a&&!l.isAdmin?r.a.createElement(B.a,{number:403,message:"Forbidden, only admin"}):r.a.createElement(b.b,Object.assign({},c,{render:function(e){return l.name?r.a.createElement(t,e):r.a.createElement(b.a,{to:"/login"})}}))},z=a(12),C=a.n(z),P=a(16),T=a(15),L=a(14),q=a(7),U=a(17),F=a.n(U),J=function(){var e=Object(n.useState)({title:"",author:"",numberOfPages:100,image:"",tags:[1,2]}),t=Object(q.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(q.a)(l,2),s=o[0],m=o[1],i=Object(n.useState)(!1),u=Object(q.a)(i,2),d=u[0],f=u[1],g=function(e){var t=e.target.name;c(Object(L.a)({},a,Object(T.a)({},t,e.target.value)))},p=function(){var e=Object(P.a)(C.a.mark(function e(t){var n;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,F.a.post("/api/books",{Title:a.title,Author:a.author,Image:a.image,NumberOfPages:a.numberOfPages,Tags:a.tags},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("auth-token"))}});case 4:n=e.sent,console.log(n),f(!0),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),400===e.t0.response.status&&m("Invalid Username/Password");case 13:case"end":return e.stop()}},e,null,[[1,9]])}));return function(t){return e.apply(this,arguments)}}();return d?r.a.createElement(b.a,{to:"/"}):r.a.createElement("main",{className:"py-3 container"},r.a.createElement("form",{className:"row mt-5 mb-5 justify-content-center w-100",onSubmit:p,style:{overflowX:"hidden"}},r.a.createElement("h1",{className:"text-primary text-center col-12 "},"Add New Book "),r.a.createElement("h6",{className:"text-danger text-left"},s),r.a.createElement("div",{className:"form-group mb-5 col-lg-6 mx-2","data-aos123":"fade-right"},r.a.createElement("label",{className:"text-white"},"Book Title"),r.a.createElement("input",{value:a.title,type:"text",className:"form-control",name:"title",required:!0,onChange:g,minLength:"5"})),r.a.createElement("div",{className:"form-group mb-5 col-lg-6 mx-2","data-aos123":"fade-right"},r.a.createElement("label",{className:"text-white"},"Book Author"),r.a.createElement("input",{value:a.author,type:"text",className:"form-control",name:"author",required:!0,onChange:g,minLength:"5"})),r.a.createElement("div",{className:"form-group mb-5 col-lg-6 mx-2","data-aos123":"fade-right"},r.a.createElement("label",{className:"text-white"},"Book Image Url"),r.a.createElement("input",{value:a.image,type:"text",className:"form-control",name:"image",required:!0,onChange:g,minLength:"5"})),r.a.createElement("div",{className:"form-group mb-5 col-lg-6 mx-2","data-aos123":"fade-right"},r.a.createElement("label",{className:"text-white"},"Number Of Pages"),r.a.createElement("input",{value:a.numberOfPages,type:"text",className:"form-control",name:"numberOfPages",required:!0,onChange:g,minLength:"5"})),r.a.createElement("div",{className:"col-12 d-flex px-2 justify-content-center"},r.a.createElement("button",{type:"submit",className:"btn btn-lg btn-primary","data-aos123":"flip-right","data-aos123-offset":"0"},"Add Book"))))};var _=function(){var e=Object(n.lazy)(function(){return a.e(3).then(a.bind(null,89))}),t=Object(n.lazy)(function(){return a.e(5).then(a.bind(null,86))}),c=Object(n.lazy)(function(){return a.e(6).then(a.bind(null,87))}),l=Object(n.lazy)(function(){return a.e(4).then(a.bind(null,88))});return document.title="Books Forest",r.a.createElement(E,null,r.a.createElement("div",{className:"App"},r.a.createElement(N,null),r.a.createElement(A,null),r.a.createElement(n.Suspense,{fallback:r.a.createElement(O.a,null)},r.a.createElement(b.d,null,r.a.createElement(b.b,{path:"/login",component:t}),r.a.createElement(b.b,{path:"/register",component:c}),r.a.createElement(I,{path:"/book/add",component:J,onlyAdmin:!0}),r.a.createElement(I,{path:"/book/:id",component:l}),r.a.createElement(b.b,{path:"/",component:e}))),r.a.createElement(j,null)))},D=(a(36),a(80),a(81),a(48)),G=a(21);D.a.add(G.b,G.a),l.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.6b644d2b.chunk.js.map