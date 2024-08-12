"use strict";(self.webpackChunkns_wiki=self.webpackChunkns_wiki||[]).push([[6188],{5680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>d});var n=r(6540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,d=p["".concat(s,".").concat(m)]||p[m]||y[m]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2435:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(8168),a=(r(6540),r(5680));const o={},l="Miscellaneous",i={unversionedId:"source/reference/respawn/native_server/misc",id:"source/reference/respawn/native_server/misc",isDocsHomePage:!1,title:"Miscellaneous",description:"Returns if otherTeam is an enemy of ownTeam",source:"@site/docs/source/reference/respawn/native_server/misc.md",sourceDirName:"source/reference/respawn/native_server",slug:"/source/reference/respawn/native_server/misc",permalink:"/ns-wiki/docs/source/reference/respawn/native_server/misc",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/source/reference/respawn/native_server/misc.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Math",permalink:"/ns-wiki/docs/source/reference/respawn/native_server/math"},next:{title:"Networked Data",permalink:"/ns-wiki/docs/source/reference/respawn/native_server/netvar"}},s=[{value:"Parents &amp; Children",id:"parents--children",children:[]},{value:"Visual Options",id:"visual-options",children:[]},{value:"VPK",id:"vpk",children:[]},{value:"Levels",id:"levels",children:[]},{value:"Entity Utils",id:"entity-utils",children:[]},{value:"Weapon Utils",id:"weapon-utils",children:[]},{value:"Preinstall",id:"preinstall",children:[]},{value:"Script Reloads",id:"script-reloads",children:[]}],c={toc:s},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.yg)(u,(0,n.A)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"miscellaneous"},"Miscellaneous"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Returns if ",(0,a.yg)("inlineCode",{parentName:"p"},"otherTeam")," is an enemy of ",(0,a.yg)("inlineCode",{parentName:"p"},"ownTeam"))),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Creates a rope between two points or entities.")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Execute ",(0,a.yg)("inlineCode",{parentName:"p"},"cmd")," on the local host")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Get the map name of the current map")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Returns value of IsTestMap from the level\\'s script list .rson file")),(0,a.yg)("h2",{id:"parents--children"},"Parents & Children"),(0,a.yg)("h2",{id:"visual-options"},"Visual Options"),(0,a.yg)("h2",{id:"vpk"},"VPK"),(0,a.yg)("p",null,"Player Utils ","-","-","-","-","-","-","-","-","-"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Returns the best window hint.")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Fade the player\\'s scren."),(0,a.yg)("p",{parentName:"blockquote"},"Fade flags start with ",(0,a.yg)("inlineCode",{parentName:"p"},"FFADE_"))),(0,a.yg)("h2",{id:"levels"},"Levels"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Sets the XP required for a player to get to a certain level")),(0,a.yg)("h2",{id:"entity-utils"},"Entity Utils"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Returns if an entity is a magnetic target")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Returns if an entity is a magnetic target")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Is entity a turret")),(0,a.yg)("h2",{id:"weapon-utils"},"Weapon Utils"),(0,a.yg)("h2",{id:"preinstall"},"Preinstall"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Returns true if the full game is installed. You can\\'t start mp or any\nsp map but sp_training and sp_crashsite if this is false.")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Returns true if the game is partially installed. You can\\'t start sp\ntraining this is false.")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Returns fraction 0.0 to 1.0 of downloading of full game progress.")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Only call when we have an active user.")),(0,a.yg)("h2",{id:"script-reloads"},"Script Reloads"))}p.isMDXComponent=!0}}]);