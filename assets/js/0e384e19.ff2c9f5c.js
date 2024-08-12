"use strict";(self.webpackChunkns_wiki=self.webpackChunkns_wiki||[]).push([[3976],{5680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>y});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),g=a,y=p["".concat(u,".").concat(g)]||p[g]||d[g]||i;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},5436:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(8168),a=(r(6540),r(5680));const i={sidebar_position:1},o="Tutorial Intro",s={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Tutorial Intro",description:"Let's discover Docusaurus in less than 5 minutes.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/ns-wiki/docs/intro",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Contributing to ModdingDocs",permalink:"/ns-wiki/docs/guides/contributing"}},u=[{value:"Getting Started",id:"getting-started",children:[]},{value:"Generate a new site",id:"generate-a-new-site",children:[]},{value:"Start your site",id:"start-your-site",children:[]}],l={toc:u},c="wrapper";function p(e){let{components:t,...r}=e;return(0,a.yg)(c,(0,n.A)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"tutorial-intro"},"Tutorial Intro"),(0,a.yg)("p",null,"Let's discover ",(0,a.yg)("strong",{parentName:"p"},"Docusaurus in less than 5 minutes"),"."),(0,a.yg)("h2",{id:"getting-started"},"Getting Started"),(0,a.yg)("p",null,"Get started by ",(0,a.yg)("strong",{parentName:"p"},"creating a new site"),"."),(0,a.yg)("p",null,"Or ",(0,a.yg)("strong",{parentName:"p"},"try Docusaurus immediately")," with ",(0,a.yg)("strong",{parentName:"p"},(0,a.yg)("a",{parentName:"strong",href:"https://docusaurus.new"},"docusaurus.new")),"."),(0,a.yg)("h2",{id:"generate-a-new-site"},"Generate a new site"),(0,a.yg)("p",null,"Generate a new Docusaurus site using the ",(0,a.yg)("strong",{parentName:"p"},"classic template"),":"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"npx @docusaurus/init@latest init my-website classic\n")),(0,a.yg)("h2",{id:"start-your-site"},"Start your site"),(0,a.yg)("p",null,"Run the development server:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-shell"},"cd my-website\n\nnpx docusaurus start\n")),(0,a.yg)("p",null,"Your site starts at ",(0,a.yg)("inlineCode",{parentName:"p"},"http://localhost:3000"),"."),(0,a.yg)("p",null,"Open ",(0,a.yg)("inlineCode",{parentName:"p"},"docs/intro.md")," and edit some lines: the site ",(0,a.yg)("strong",{parentName:"p"},"reloads automatically")," and display your changes."))}p.isMDXComponent=!0}}]);