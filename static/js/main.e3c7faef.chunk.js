(this["webpackJsonphacker-news"]=this["webpackJsonphacker-news"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(4),r=c.n(a),i=c(2),l=(c(9),c(0));function h(e){return e.newsItems.map((function(e){var t=e.title,c=e.url,n=e.author,s=e.created_at;return Object(l.jsxs)("div",{className:"HackerContent",children:[Object(l.jsx)("div",{className:"NewsTitle",children:Object(l.jsx)("a",{href:c,children:t})}),Object(l.jsxs)("div",{className:"NewsAuthor",children:["written by ",n," on ",s.substr(0,10)]})]})}))}var o=function(){var e=Object(n.useState)(0),t=Object(i.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)([]),r=Object(i.a)(a,2),o=r[0],j=r[1],d=Object(n.useState)(!0),b=Object(i.a)(d,2),u=b[0],O=b[1],m=Object(n.useState)(!1),p=Object(i.a)(m,2),x=p[0],f=p[1],v=Object(n.useState)(""),g=Object(i.a)(v,2),N=g[0],S=g[1],w="https://hn.algolia.com/api/v1/search?";function k(){var e=N?"".concat(w,"query=").concat(N,"&hitsPerPage=5&page=").concat(c):"".concat(w,"tags=front_page&hitsPerPage=5&page=").concat(c);f(!1),O(!0),fetch(e).then((function(e){return e.json()})).then((function(e){O(!1),j(e.hits)})).catch((function(e){return f(!0)}))}return Object(n.useEffect)(k,[c,N]),console.log(c),console.log(N),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)("h1",{children:"the daily hacker"})}),Object(l.jsxs)("main",{children:[Object(l.jsxs)("div",{className:"SearchContainer",children:[Object(l.jsx)("div",{className:"SearchItem",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),s(0),S(e.target.search.value)},children:[Object(l.jsx)("input",{className:"SearchInput",name:"search",placeholder:"search the daily hacker..."}),Object(l.jsx)("button",{className:"SearchButton SearchItem",children:"search"})]})}),Object(l.jsx)("div",{className:"SearchItem",children:Object(l.jsx)("button",{className:"ResetButton",onClick:function(){s(0),S(""),k()},children:"recent"})})]}),Object(l.jsxs)("div",{className:"HackerContentContainer",children:[x?Object(l.jsx)("div",{className:"ResponsePanels",children:"something went wrong :( try again later"}):u?Object(l.jsxs)("div",{className:"ResponsePanels",children:[Object(l.jsx)("p",{children:"i am a tiny person trapped inside the internet who can only communicate through loading messages "}),Object(l.jsx)("p",{children:" please send for help!"})]}):o.length?Object(l.jsx)(h,{newsItems:o}):Object(l.jsx)("div",{className:"ResponsePanels",children:"no results, try something else"}),Object(l.jsxs)("div",{className:"PagContainer",children:[Object(l.jsx)("button",{onClick:function(){s(c-1)},disabled:0===c,children:"prev"}),Object(l.jsx)("button",{onClick:function(){s(c+1)},children:"next"})]})]})]})]})};r.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(o,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.e3c7faef.chunk.js.map