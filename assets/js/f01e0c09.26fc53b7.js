"use strict";(self.webpackChunkns_wiki=self.webpackChunkns_wiki||[]).push([[7249],{5680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>f});var n=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,f=u["".concat(p,".").concat(d)]||u[d]||y[d]||a;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9459:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=t(8168),o=(t(6540),t(5680));const a={},i="Var",s={unversionedId:"source/squirrel/types/var",id:"source/squirrel/types/var",isDocsHomePage:!1,title:"Var",description:"var stands for a variable of any type. Any primitive can be var,",source:"@site/docs/source/squirrel/types/var.md",sourceDirName:"source/squirrel/types",slug:"/source/squirrel/types/var",permalink:"/ns-wiki/docs/source/squirrel/types/var",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/source/squirrel/types/var.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Typedefs",permalink:"/ns-wiki/docs/source/squirrel/types/typedefs"},next:{title:"Vectors",permalink:"/ns-wiki/docs/source/squirrel/types/vectors"}},p=[],c={toc:p},l="wrapper";function u(e){let{components:r,...t}=e;return(0,o.yg)(l,(0,n.A)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"var"},"Var"),(0,o.yg)("p",null,(0,o.yg)("inlineCode",{parentName:"p"},"var")," stands for a variable of any type. Any ",(0,o.yg)("strong",{parentName:"p"},"primitive")," can be ",(0,o.yg)("inlineCode",{parentName:"p"},"var"),",\nhowever complex types can never be ",(0,o.yg)("inlineCode",{parentName:"p"},"var"),"."),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'// var can be just about anything. \nvar v = 1\nv = "string"\nv = []\nv = {}\n')),(0,o.yg)("p",null,"in ",(0,o.yg)("inlineCode",{parentName:"p"},"untyped")," files you can also use the ",(0,o.yg)("inlineCode",{parentName:"p"},"local")," keyword instead of\n",(0,o.yg)("inlineCode",{parentName:"p"},"var"),". However the keyword is deprecated and should not be used."),(0,o.yg)("p",null,"If possible, usage of ",(0,o.yg)("inlineCode",{parentName:"p"},"var")," should be avoided and other static types\nshould be used instead to benefit from the type checking of squirrel."))}u.isMDXComponent=!0}}]);