(this["webpackJsonphacker-news"]=this["webpackJsonphacker-news"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),a=c(4),r=c.n(a),i=c(2),l=(c(9),c(0));function j(e){return e.newsItems.map((function(e){var t=e.title,c=e.url,s=e.author,n=e.created_at;return Object(l.jsxs)("div",{className:"HackerContent",children:[Object(l.jsx)("div",{className:"NewsTitle",children:Object(l.jsx)("a",{href:c,children:t})}),Object(l.jsxs)("div",{className:"NewsAuthor",children:["written by ",s," on ",n.substr(0,10)]})]})}))}var h=function(){var e=Object(s.useState)(0),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(s.useState)([]),r=Object(i.a)(a,2),h=r[0],o=r[1],d=Object(s.useState)(!0),b=Object(i.a)(d,2),u=b[0],O=b[1],m=Object(s.useState)(!1),p=Object(i.a)(m,2),x=p[0],f=p[1],v=Object(s.useState)(""),N=Object(i.a)(v,2),g=N[0],S=N[1],k="https://hn.algolia.com/api/v1/search?";return Object(s.useEffect)((function(){var e=g?"".concat(k,"query=").concat(g,"&hitsPerPage=5&page=").concat(c):"".concat(k,"tags=front_page&hitsPerPage=5&page=").concat(c);f(!1),O(!0),fetch(e).then((function(e){return e.json()})).then((function(e){O(!1),o(e.hits)})).catch((function(e){return f(!0)}))}),[c,g]),console.log(c),console.log(g),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)("h1",{children:"the daily hacker"})}),Object(l.jsxs)("main",{children:[Object(l.jsxs)("div",{className:"SearchContainer",children:[Object(l.jsx)("div",{className:"SearchItem",children:Object(l.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(0),S(e.target.search.value)},children:[Object(l.jsx)("input",{className:"SearchInput",name:"search",placeholder:"search the daily hacker..."}),Object(l.jsx)("button",{className:"SearchButton SearchItem",children:"search"})]})}),Object(l.jsx)("div",{className:"SearchItem",children:Object(l.jsx)("button",{className:"ResetButton",onClick:function(){n(0),S("")},children:"recent"})})]}),Object(l.jsxs)("div",{className:"HackerContentContainer",children:[x?Object(l.jsx)("div",{className:"ResponsePanels",children:"the api fell asleep, try a refresh"}):u?Object(l.jsxs)("div",{className:"ResponsePanels",children:[Object(l.jsx)("p",{children:"loading"}),Object(l.jsx)("p",{children:"pop the kettle on"})]}):h.length?Object(l.jsx)(j,{newsItems:h}):Object(l.jsx)("div",{className:"ResponsePanels",children:"no results, try something else"}),Object(l.jsxs)("div",{className:"PagContainer",children:[Object(l.jsx)("button",{onClick:function(){n(c-1)},disabled:0===c,children:"prev"}),Object(l.jsx)("button",{onClick:function(){n(c+1)},children:"next"})]})]})]})]})};r.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.93134aa5.chunk.js.map