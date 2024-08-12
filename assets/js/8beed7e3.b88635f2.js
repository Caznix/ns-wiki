"use strict";(self.webpackChunkns_wiki=self.webpackChunkns_wiki||[]).push([[2196],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var r=n(6540);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},y="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),y=c(n),g=a,m=y["".concat(s,".").concat(g)]||y[g]||u[g]||o;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[y]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},2862:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(8168),a=(n(6540),n(5680));const o={},l="Getting Entities",i={unversionedId:"reference/respawn/native_server/getent",id:"reference/respawn/native_server/getent",isDocsHomePage:!1,title:"Getting Entities",description:"get-ent-doc}",source:"@site/docs/reference/respawn/native_server/getent.md",sourceDirName:"reference/respawn/native_server",slug:"/reference/respawn/native_server/getent",permalink:"/ns-wiki/docs/reference/respawn/native_server/getent",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/reference/respawn/native_server/getent.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Gamerules",permalink:"/ns-wiki/docs/reference/respawn/native_server/gamerules"},next:{title:"HUD Messages",permalink:"/ns-wiki/docs/reference/respawn/native_server/hudmessages"}},s=[{value:"Players",id:"players",children:[{value:"Connecting Players",id:"connecting-players",children:[]}]},{value:"Titans",id:"titans",children:[]},{value:"NPCs &amp; Props",id:"npcs--props",children:[]},{value:"Projectiles",id:"projectiles",children:[]},{value:"Find Entities",id:"find-entities",children:[]},{value:"Get Multiple Entites",id:"get-multiple-entites",children:[]}],c={toc:s},p="wrapper";function y(e){let{components:t,...n}=e;return(0,a.yg)(p,(0,r.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"get-ent-doc"},"Getting Entities"),(0,a.yg)("p",null,"There are a multitude of selectors to get specific kinds of entities."),(0,a.yg)("p",null,"Creating entities is documented\n",(0,a.yg)("inlineCode",{parentName:"p"},"here <create-ent-doc>"),'{.interpreted-text role="ref"}.'),(0,a.yg)("h2",{id:"players"},"Players"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Get array of all players")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Get array of all players by class, team within dist. team -1 for any\nteam, ",(0,a.yg)("inlineCode",{parentName:"p"},'"any"')," for any class, otherwise ",(0,a.yg)("inlineCode",{parentName:"p"},'"titan"')," or ",(0,a.yg)("inlineCode",{parentName:"p"},'"pilot"'),", -1 for\nany dist")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Get array of all players that are in a team")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Get array of all players that are not allied with the team")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Get array of all players that are alive")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Get array of all players in a team that are alive")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Get array of all players that are not titans")),(0,a.yg)("h3",{id:"connecting-players"},"Connecting Players"),(0,a.yg)("h2",{id:"titans"},"Titans"),(0,a.yg)("p",null,"Get all players in a titan and souls."),(0,a.yg)("h2",{id:"npcs--props"},"NPCs & Props"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Get array of all NPCs by class, team, within dist. team -1 for any\nteam, ",(0,a.yg)("inlineCode",{parentName:"p"},'"any"')," for any class, otherwise ",(0,a.yg)("inlineCode",{parentName:"p"},'"titan"')," or ",(0,a.yg)("inlineCode",{parentName:"p"},'"pilot"'),", -1 for\nany dist")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Get array of all NPCs by class, team, and subclass (array), within\ndist. team -1 for any team, ",(0,a.yg)("inlineCode",{parentName:"p"},'"\'any"')," for any class, -1 for any dist")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Get array of all NPCs of class")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Get array of all NPCs of class and subclass")),(0,a.yg)("h2",{id:"projectiles"},"Projectiles"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Get array of all NPCs by class, team, within dist. team -1 for any\nteam, ",(0,a.yg)("inlineCode",{parentName:"p"},'"any"')," for any class, otherwise ",(0,a.yg)("inlineCode",{parentName:"p"},'"titan"')," or ",(0,a.yg)("inlineCode",{parentName:"p"},'"pilot"'),", -1 for\nany dist")),(0,a.yg)("h2",{id:"find-entities"},"Find Entities"),(0,a.yg)("h2",{id:"get-multiple-entites"},"Get Multiple Entites"),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Get array of entitites matching a name")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Get array of entities matching a name with support for ","*")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Get array of entities matching a class")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Get array of entities matching a class with support for ","*")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Get array of entities matching a script name")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Get array of entities matching a script name and instance")),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},"Get weapons in the world")))}y.isMDXComponent=!0}}]);