(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{88:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),l=t(23),c=t(22),m=t(24);a.default=function(e){var a=e.match.params.id,t=Object(c.a)("/api/books/".concat(a)),n=t.loading,r=t.data,o=t.error;if(o){if(401!==o.status)return s.a.createElement(m.a,{number:o.status,message:o.message});window.location.pathname="/login"}return n?s.a.createElement(l.a,null):s.a.createElement("div",{className:"container pt-5 row mx-auto justify-content-around"},s.a.createElement("div",{className:"col-lg-4"},s.a.createElement("img",{src:r.Image,alt:r.Title,style:{width:300,height:480},className:"mx-auto d-block"})),s.a.createElement("div",{className:"col-lg-8 row flex-column justify-content-between"},s.a.createElement("div",null,s.a.createElement("h1",{className:"text-white mt-4 "},r.Title),s.a.createElement("h4",{className:"text-white mt-2 "},s.a.createElement("span",{className:"h6"},"Author: ")," ",r.Author),s.a.createElement("h4",{className:"text-white mt-2 "},s.a.createElement("span",{className:"h6"},"Number Of Pages: ")," ",r.NumberOfPages," ","Page"),s.a.createElement("div",{className:"mt-5"}),r.Tags.map(function(e,a){return s.a.createElement("span",{key:a,className:"badge badge-primary mx-2",style:{fontSize:15}},e)})),s.a.createElement("div",{className:"py-3  d-flex"},s.a.createElement("button",{className:"btn btn-lg btn-success"},"Get This Book Now"))))}}}]);
//# sourceMappingURL=4.f17d8938.chunk.js.map