(this["webpackJsonphacker-news"]=this["webpackJsonphacker-news"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(4),r=c.n(s),i=c(2),h=(c(9),c(0));var l=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(!0),r=Object(i.a)(s,2),l=r[0],j=r[1],o=Object(n.useState)(""),d=Object(i.a)(o,2),u=d[0],b=d[1],O="https://hn.algolia.com/api/v1/search?";function m(e){var t=e?"".concat(O,"query=").concat(e):"".concat(O,"tags=front_page");j(!0),fetch(t).then((function(e){return e.json()})).then((function(e){j(!1),a(e.hits)})).catch((function(){return console.log("request failed")}))}return Object(n.useEffect)(m,[]),console.log(u),Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("header",{className:"App-header",children:Object(h.jsx)("h1",{children:"the daily hacker"})}),Object(h.jsxs)("main",{children:[Object(h.jsxs)("div",{className:"SearchContainer",children:[Object(h.jsx)("div",{className:"SearchItem",children:Object(h.jsx)("input",{onChange:function(e){return b(e.target.value)},value:u,className:"SearchInput",name:"search",placeholder:"search the daily hacker..."})}),Object(h.jsx)("div",{className:"SearchItem",children:Object(h.jsx)("button",{className:"SearchButton",onClick:function(){return m(u)},children:"search"})}),Object(h.jsx)("div",{className:"SearchItem",children:Object(h.jsx)("button",{className:"ResetButton",onClick:function(){b(""),m()},children:"most recent"})})]}),Object(h.jsx)("div",{className:"HackerContentContainer",children:l?Object(h.jsx)("div",{children:"be patient..."}):c.map((function(e){var t=e.title,c=e.url,n=e.author,a=e.created_at;return Object(h.jsxs)("div",{className:"HackerContent",children:[Object(h.jsx)("div",{className:"NewsTitle",children:Object(h.jsx)("a",{href:c,children:t})}),Object(h.jsxs)("div",{className:"NewsAuthor",children:["written by ",n," on ",a.substr(0,10)]})]})}))})]})]})};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(l,{})}),document.getElementById("root"))},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.a320154c.chunk.js.map