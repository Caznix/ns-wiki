"use strict";(self.webpackChunkns_wiki=self.webpackChunkns_wiki||[]).push([[9937],{5680:(e,r,t)=>{t.d(r,{xA:()=>p,yg:()=>m});var n=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(t),f=o,m=u["".concat(l,".").concat(f)]||u[f]||y[f]||a;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8221:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(8168),o=(t(6540),t(5680));const a={},i="Booleans",s={unversionedId:"source/squirrel/types/booleans",id:"source/squirrel/types/booleans",isDocsHomePage:!1,title:"Booleans",description:"Booleans are a primitive type that can be either true or false",source:"@site/docs/source/squirrel/types/booleans.md",sourceDirName:"source/squirrel/types",slug:"/source/squirrel/types/booleans",permalink:"/ns-wiki/docs/source/squirrel/types/booleans",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/source/squirrel/types/booleans.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Arrays",permalink:"/ns-wiki/docs/source/squirrel/types/arrays"},next:{title:"Entities",permalink:"/ns-wiki/docs/source/squirrel/types/entities"}},l=[],c={toc:l},p="wrapper";function u(e){let{components:r,...t}=e;return(0,o.yg)(p,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"booleans"},"Booleans"),(0,o.yg)("p",null,"Booleans are a primitive type that can be either ",(0,o.yg)("inlineCode",{parentName:"p"},"true")," or ",(0,o.yg)("inlineCode",{parentName:"p"},"false")),(0,o.yg)("p",null,"The type name and keyword for Booleans is ",(0,o.yg)("inlineCode",{parentName:"p"},"bool"),". Booleans default\ninitialize as ",(0,o.yg)("inlineCode",{parentName:"p"},"false"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"bool b = false\nb = true\n")))}u.isMDXComponent=!0}}]);