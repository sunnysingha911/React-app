(this.webpackJsonpuiux=this.webpackJsonpuiux||[]).push([[0],{47:function(e,a,t){e.exports=t(93)},52:function(e,a,t){},53:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){e.exports=t.p+"static/media/side3.32f56a10.png"},61:function(e,a,t){},62:function(e,a,t){e.exports=t.p+"static/media/side.d9d79795.png"},63:function(e,a,t){},64:function(e,a,t){e.exports=t.p+"static/media/side2.29d52323.png"},65:function(e,a,t){},82:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){},92:function(e,a,t){},93:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(36),c=t.n(r),m=(t(52),t(37)),i=(t(53),t(15)),o=t(20),s=t.n(o),u=t(46),d=t(17),E=t(7),p=t(21),f=t.n(p);function h(){return l.a.createElement(i.a,null,(function(e){return l.a.createElement("div",{className:"dark-mode-toggle",onClick:function(a){return e.setTheme("dark"===e.mode?Object(d.a)({},e,{mode:"light"}):Object(d.a)({},e,{mode:"dark"}))}},l.a.createElement("i",{className:"dark"===e.mode?"fa fa-sun-o fa-2x":"fa fa-moon-o fa-2x","aria-hidden":"true"}))}))}var v=t(41),g=t(42),N=t(45),b=t(44),w=(t(58),t(9)),O=t(8);t(59);var k=function(){return l.a.createElement("div",{className:"row-1"},l.a.createElement("img",{src:t(60),alt:"SomeImage"}),l.a.createElement("h1",null,"UI/UX .Dev"),l.a.createElement("p",null,"Developing UI and UX for better User Experience"),l.a.createElement("button",null,"Let's Go"))};t(61);var y=function(){return l.a.createElement("div",{className:"row-2"},l.a.createElement("h2",null,"Lorem, ipsum."),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellat quo eos unde nostrum autem obcaecati illum at qui maiores vitae deleniti, amet laudantium delectus?"),l.a.createElement("div",{className:"row-2-l1"},l.a.createElement("div",{className:"row-2-l2"},l.a.createElement("h2",null,"Lorem, ipsum."),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, ducimus aperiam, perspiciatis quos accusamus architecto exercitationem consequuntur impedit, tenetur fugiat vitae voluptatibus cupiditate. Accusantium, quisquam."),l.a.createElement("h2",null,"Lorem, ipsum dolor."),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, odit!")),l.a.createElement("img",{src:t(62),alt:"SomeImage"})))};t(63);var j=function(){return l.a.createElement("div",{className:"row-3"},l.a.createElement("img",{src:t(64),alt:"SomeImage"}),l.a.createElement("div",{className:"row-3-l1"},l.a.createElement("h2",null,"Lorem ipsum dolor sit."),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi voluptatem, libero provident eveniet quidem dicta!"),l.a.createElement("div",{className:"list"},l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-deaf fa-2x","aria-hidden":"true"}),"Lorem, ipsum."),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-fighter-jet fa-2x","aria-hidden":"true"}),"Lorem, ipsum dolor."),l.a.createElement("li",null,l.a.createElement("i",{className:"fa fa-cog fa-2x","aria-hidden":"true"}),"Lorem ipsum dolor sit."))))};t(65);var C=function(){return l.a.createElement("div",{className:"body"},l.a.createElement(k,null),l.a.createElement(y,null),l.a.createElement(j,null))},L=t(6),S=t(11),x=t.n(S),I=(t(82),function(e){e.url,e.key;var a=Object(n.useState)([]),t=Object(E.a)(a,2),r=t[0],c=t[1];return Object(n.useEffect)((function(){x.a.get("".concat("https://api.unsplash.com","/photos/random?client_id=").concat("aOVQav5e-8STQKC8sO6SHEFuABEFLsI98N2xknXFWuQ","&count=7&query=iphone")).then((function(e){return c([].concat(Object(L.a)(r),Object(L.a)(e.data)))}))}),[]),l.a.createElement("div",{className:"new-product"},l.a.createElement("h1",null,"New Products"),l.a.createElement("div",{className:"new-products-container"},l.a.createElement("div",{className:"new-products-slide"},l.a.createElement("ul",null,r.map((function(e){return l.a.createElement("li",null,l.a.createElement("div",{className:"new-product-card"},l.a.createElement("div",{className:"new-product-card-upper"},null===e.alt_description?"No Data":e.alt_description.replace(/ .*/,"")),l.a.createElement("img",{src:e.urls.thumb,alt:e.alt_description}),l.a.createElement("div",{className:"new-product-card-lower"},"Rs. ",1e3*Math.round(100*Math.random()),"/-")))}))))))}),P=(t(83),function(){var e=Object(n.useState)([]),a=Object(E.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){x.a.get("".concat("https://api.unsplash.com","/photos/random?client_id=").concat("aOVQav5e-8STQKC8sO6SHEFuABEFLsI98N2xknXFWuQ","&count=12&query=computer")).then((function(e){return r([].concat(Object(L.a)(t),Object(L.a)(e.data)))}))}),[]),l.a.createElement("div",{className:"new-product"},l.a.createElement("h1",null,"All Products"),l.a.createElement("div",{className:"all-product-images"},t.map((function(e){return l.a.createElement("div",{className:"all-product-image"},l.a.createElement("div",{className:"all-product-image-top"},l.a.createElement("h3",null,null===e.alt_description?"No Data":e.alt_description.replace(/ .*/,""))),l.a.createElement("img",{src:e.urls.regular,alt:e.alt_description}),l.a.createElement("div",{className:"all-product-image-bottom"},l.a.createElement("p",null,"Rs. ",1e3*Math.round(100*Math.random()),"/-"),l.a.createElement("p",null,"Views: ",e.views),l.a.createElement("p",null,"Description: "),l.a.createElement("p",null,e.alt_description," ")))}))))});t(84);var U=function(){return l.a.createElement("div",{className:"product"},l.a.createElement(I,null),l.a.createElement(P,null))},q=(t(85),function(){var e=Object(n.useState)([]),a=Object(E.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)((function(){x.a.get("https://newsapi.org/v2/everything?q=apple&from=2020-05-07&to=2020-05-07&sortBy=popularity&apiKey=f0d62bdd6c12476e974b4f16babcdd92").then((function(e){return r([].concat(Object(L.a)(t),Object(L.a)(e.data.articles)))}))}),[]),console.log(t),l.a.createElement("div",{className:"blog"},l.a.createElement("h1",null,"Blog"),l.a.createElement("div",{className:"blog-list"},t.map((function(e){return l.a.createElement("a",{href:e.url},l.a.createElement("div",{key:Math.random(),className:"single-blog"},l.a.createElement("div",{className:"title"},l.a.createElement("h2",null,e.title.replace(/^(.{11}[^\s]*).*/,"$1"))),l.a.createElement("img",{src:e.urlToImage,alt:e.title}),l.a.createElement("div",{className:"description"},e.content,l.a.createElement("br",null),l.a.createElement("a",{href:e.url},"Read more.."))))}))))}),B=(t(86),function(){return l.a.createElement("div",{className:"contact"},l.a.createElement("div",{className:"contact-container"},l.a.createElement("div",{className:"contact-form"},l.a.createElement("h1",null,"Contact Us"),l.a.createElement("form",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"items"},"Name"),l.a.createElement("div",{className:"items"},l.a.createElement("input",{type:"text",name:"name",placeholder:"Full name"})),l.a.createElement("div",{className:"items"},"Email"),l.a.createElement("div",{className:"items"},l.a.createElement("input",{type:"text",name:"email",placeholder:"Email"})),l.a.createElement("div",{className:"items"},"Message"),l.a.createElement("div",{className:"items"},l.a.createElement("textarea",{name:"message",placeholder:"Your message...",rows:"10"})),l.a.createElement("div",{className:"items"},l.a.createElement("button",null,"Submit"))))),l.a.createElement("div",{className:"get-in-touch"},l.a.createElement("h2",null,"Get In Touch"),l.a.createElement("div",{className:"address"},l.a.createElement("h4",null,"Phone:"),l.a.createElement("p",null,"+91 1234567890"),l.a.createElement("h4",null,"Email:"),l.a.createElement("p",null,"dummymail@somemail.com"),l.a.createElement("h4",null,"Address:"),l.a.createElement("p",null,"1,XYZ Street, Bengaluru,India")),l.a.createElement("div",{className:"map"}))))}),T=(t(87),function(){return l.a.createElement("div",{className:"login"},l.a.createElement("div",{className:"login-form"},l.a.createElement("h2",null,"Login"),l.a.createElement("div",{className:"form"},l.a.createElement("form",null,"User Id",l.a.createElement("input",{className:"user-id",type:"text",name:"userId",placeholder:"User ID"}),"Password",l.a.createElement("input",{className:"password",type:"password",name:"",placeholder:"Password"}),l.a.createElement("p",null,"Forgot password?"),l.a.createElement("button",{className:"login-btn"},"Login"),l.a.createElement("button",{className:"register-btn"},"Register")))))}),F=function(e){Object(N.a)(t,e);var a=Object(b.a)(t);function t(){var e;Object(v.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=a.call.apply(a,[this].concat(l))).state={isNavOpen:!1},e.handleClick=function(){e.setState({isNavOpen:!e.state.isNavOpen})},e}return Object(g.a)(t,[{key:"render",value:function(){return l.a.createElement(w.a,null,l.a.createElement("nav",{className:"nav"},l.a.createElement("div",{className:"logo"},l.a.createElement(w.b,{to:"/Home"},"UI/UX"),l.a.createElement("div",{className:"menu-bar",onClick:this.handleClick},l.a.createElement("i",{className:this.state.isNavOpen?"fa fa-times fa-2x":"fa fa-bars fa-2x","aria-hidden":"true"}))),l.a.createElement("ul",{className:this.state.isNavOpen?"showNav":"undefined"},l.a.createElement("li",null,l.a.createElement(w.b,{onClick:this.handleClick,to:"/Home"},"Home")),l.a.createElement("li",null,l.a.createElement(w.b,{onClick:this.handleClick,to:"/components/Pages/Products/product"},"Products")),l.a.createElement("li",null,l.a.createElement(w.b,{onClick:this.handleClick,to:"/components/Pages/Blog/blog"},"Blog")),l.a.createElement("li",null,l.a.createElement(w.b,{onClick:this.handleClick,to:"/components/Pages/Contact/contact"},"Contact")),l.a.createElement("li",null,l.a.createElement(w.b,{onClick:this.handleClick,to:"/components/Pages/Login/login"},"Login")))),l.a.createElement(O.c,null,l.a.createElement(O.a,{path:"/components/Pages/Products/product",component:U}),l.a.createElement(O.a,{path:"/components/Pages/Blog/blog",component:q}),l.a.createElement(O.a,{path:"/components/Pages/Contact/contact",component:B}),l.a.createElement(O.a,{path:"/components/Pages/Login/login",component:T}),l.a.createElement(O.a,{path:"",component:C})))}}]),t}(l.a.Component);t(92);var H=function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"footer-top"},l.a.createElement("div",{className:"footer-row-1"},l.a.createElement("h2",null,"UI/UX"),l.a.createElement("p",null,"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum laudantium maxime delectus officia incidunt perferendis sit eius esse voluptas, corrupti culpa debitis ullam sequi, blanditiis mollitia enim dolores et accusamus. Nemo, saepe aliquid ipsum praesentium harum fugit eos tenetur doloribus!")),l.a.createElement("div",{className:"footer-row-2"},l.a.createElement("ul",null,l.a.createElement("h3",null,"Quick Links"),l.a.createElement("li",null,l.a.createElement("a",{href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"#product"},"Products")),l.a.createElement("li",null,l.a.createElement("a",{href:"#blog"},"Blog")),l.a.createElement("li",null,l.a.createElement("a",{href:"#contact"},"Contact")),l.a.createElement("li",null,l.a.createElement("a",{href:"#login"},"Login")))),l.a.createElement("div",{className:"footer-row-3"},l.a.createElement("ul",null,l.a.createElement("h3",null,"Tutorials"),l.a.createElement("li",null,l.a.createElement("a",{href:"#help/faq"},"HTML/CSS")),l.a.createElement("li",null,l.a.createElement("a",{href:"#press"},"JavaScript")),l.a.createElement("li",null,l.a.createElement("a",{href:"#affiliates"},"PHP")),l.a.createElement("li",null,l.a.createElement("a",{href:"#partners"},"C")),l.a.createElement("li",null,l.a.createElement("a",{href:"#partners"},"Java")))),l.a.createElement("div",{className:"footer-row-4"},l.a.createElement("ul",null,l.a.createElement("h3",null,"Contact Us"),l.a.createElement("li",null,l.a.createElement("a",{href:"#address"},l.a.createElement("i",{className:"fa fa-map-marker","aria-hidden":"true"}),"1, XYZ Street, Bengaluru, India")),l.a.createElement("li",null,l.a.createElement("a",{href:"#phone"},l.a.createElement("i",{className:"fa fa-phone","aria-hidden":"true"}),"+91 1234567890")),l.a.createElement("li",null,l.a.createElement("a",{href:"#mail"},l.a.createElement("i",{className:"fa fa-envelope-o","aria-hidden":"true"}),"dummymail@somemail.com"))),l.a.createElement("div",{className:"footer-social-media"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#facebook"},l.a.createElement("i",{className:"fa fa-facebook fa-lg","aria-hidden":"true"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#instagram"},l.a.createElement("i",{className:"fa fa-instagram fa-lg","aria-hidden":"true"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#twitter"},l.a.createElement("i",{className:"fa fa-twitter fa-lg","aria-hidden":"true"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"#twitter"},l.a.createElement("i",{className:"fa fa-youtube-play fa-lg","aria-hidden":"true"}))))))),l.a.createElement("div",{className:"footer-line-separate"}),l.a.createElement("div",{className:"footer-bottom"},l.a.createElement("div",{className:"copyrights"},"Copyright \xa9 2020 UI/UX Inc. All rights reserved."),l.a.createElement("div",{className:"privacy"},l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#privacypolicy"},"Privacy Policy")),l.a.createElement("li",null,l.a.createElement("a",{href:"#termsofuse"},"Terms of Use")),l.a.createElement("li",null,l.a.createElement("a",{href:"#legal"},"Legal")),l.a.createElement("li",null,l.a.createElement("a",{href:"#sitemap"},"Site Map")))),l.a.createElement("div",{className:"country"},"India.")))};function M(){var e=Object(m.a)(["\nbody{\n  background-color: ",";\n  color: ",";\n  transition: 0.5s ease;\n}\na{\n  color: ",";\n}\n"]);return M=function(){return e},e}var X=s()("mode",{light:"#fff",dark:"#3d3d3d"}),_=s()("mode",{light:"#3d3d3d",dark:"#fff"}),A=Object(i.c)(M(),X,_,_);var Q=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{mode:"light"},a=Object(n.useState)(c),t=Object(E.a)(a,2),l=t[0],r=t[1];function c(){var a=f.a.getItem("theme");return a?JSON.parse(a):e}return Object(n.useEffect)((function(){f.a.setItem("theme",JSON.stringify(l))}),[l]),Object(d.a)({},l,{setTheme:function(e){e.setTheme;var a=Object(u.a)(e,["setTheme"]);return r(a)}})}();return l.a.createElement(i.b,{theme:e},l.a.createElement(l.a.Fragment,null,l.a.createElement(A,null),l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement(F,null),l.a.createElement(H,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.5741bc6e.chunk.js.map