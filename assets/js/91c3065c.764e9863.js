"use strict";(self.webpackChunkns_wiki=self.webpackChunkns_wiki||[]).push([[9073],{5680:(e,r,n)=>{n.d(r,{xA:()=>l,yg:()=>g});var t=n(6540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},l=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,g=p["".concat(s,".").concat(f)]||p[f]||d[f]||i;return n?t.createElement(g,c(c({ref:r},l),{},{components:n})):t.createElement(g,c({ref:r},l))}));function g(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=f;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1041:(e,r,n)=>{n.r(r),n.d(r,{contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>s});var t=n(8168),o=(n(6540),n(5680));const i={},c="Introduction",a={unversionedId:"source/reverse-engineering/introduction",id:"source/reverse-engineering/introduction",isDocsHomePage:!1,title:"Introduction",description:"The documentation for reverse engineering Titanfall2, adding new hooks",source:"@site/docs/source/reverse-engineering/introduction.md",sourceDirName:"source/reverse-engineering",slug:"/source/reverse-engineering/introduction",permalink:"/ns-wiki/docs/source/reverse-engineering/introduction",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/source/reverse-engineering/introduction.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Map Files",permalink:"/ns-wiki/docs/source/repak/map"},next:{title:"Threads, Signals and Flags",permalink:"/ns-wiki/docs/source/squirrel/async"}},s=[],u={toc:s},l="wrapper";function p(e){let{components:r,...n}=e;return(0,o.yg)(l,(0,t.A)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"introduction"},"Introduction"),(0,o.yg)("p",null,"The documentation for reverse engineering Titanfall2, adding new hooks\nto Northstar using information gathered during reverse engineering etc.\nis very much incomplete."),(0,o.yg)("p",null,"If you have experience with reversing Titanfall2 to develop for\nNorthstar or just reverse engineering experience in general, feel free\nto add more information here, be it tools, workflows, etc."))}p.isMDXComponent=!0}}]);