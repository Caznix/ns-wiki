"use strict";(self.webpackChunkns_wiki=self.webpackChunkns_wiki||[]).push([[7950],{5680:(e,n,t)=>{t.d(n,{xA:()=>c,yg:()=>y});var r=t(6540);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,y=u["".concat(l,".").concat(d)]||u[d]||g[d]||a;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1732:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=t(8168),o=(t(6540),t(5680));const a={},i="NPCs",s={unversionedId:"source/reference/respawn/native_server/npc",id:"source/reference/respawn/native_server/npc",isDocsHomePage:!1,title:"NPCs",description:"For settings, see AI Settings {.interpreted-text",source:"@site/docs/source/reference/respawn/native_server/npc.md",sourceDirName:"source/reference/respawn/native_server",slug:"/source/reference/respawn/native_server/npc",permalink:"/ns-wiki/docs/source/reference/respawn/native_server/npc",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/source/reference/respawn/native_server/npc.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Networked Data",permalink:"/ns-wiki/docs/source/reference/respawn/native_server/netvar"},next:{title:"Operators",permalink:"/ns-wiki/docs/source/reference/respawn/native_server/operators"}},l=[{value:"NPC Utils",id:"npc-utils",children:[]},{value:"NPC Squads",id:"npc-squads",children:[]},{value:"NPC Navigation Nodes",id:"npc-navigation-nodes",children:[]},{value:"Navmeshes",id:"navmeshes",children:[]},{value:"Skits",id:"skits",children:[]},{value:"Dangerous Areas",id:"dangerous-areas",children:[]},{value:"AIN",id:"ain",children:[]},{value:"Spawners",id:"spawners",children:[]}],p={toc:l},c="wrapper";function u(e){let{components:n,...t}=e;return(0,o.yg)(c,(0,r.A)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"npcs"},"NPCs"),(0,o.yg)("p",null,"For settings, see ",(0,o.yg)("inlineCode",{parentName:"p"},"AI Settings <ai-settings>"),'{.interpreted-text\nrole="ref"}.'),(0,o.yg)("h2",{id:"npc-utils"},"NPC Utils"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Controls if ",(0,o.yg)("inlineCode",{parentName:"p"},"ent")," is traversable by NPCs")),(0,o.yg)("h2",{id:"npc-squads"},"NPC Squads"),(0,o.yg)("h2",{id:"npc-navigation-nodes"},"NPC Navigation Nodes"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Returns a node index")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Returns a node index")),(0,o.yg)("h2",{id:"navmeshes"},"Navmeshes"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Clamps a goal point to the NavMesh for a given AI. Uses AIs hull size\nas test extents")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Clamps a goal point to the NavMesh for a given AI. As extents increase\nin size more possible clamp positions become available, but too large\nand the clamped position may be very far from the original point.")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Clamps a goal point to the NavMesh for a given hull")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Clamps a goal point to the NavMesh for a given hull. As extents\nincrease in size more possible clamp positions become available, but\ntoo large clamped position may be very far from the original point.")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Get nearby ground positions by following the NavMesh graph")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Get n( \\< 64 ) ground positions around a spot within ",(0,o.yg)("inlineCode",{parentName:"p"},"minDist")," and\n",(0,o.yg)("inlineCode",{parentName:"p"},"maxDist"))),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Get up to n ground positions around a spot within ",(0,o.yg)("inlineCode",{parentName:"p"},"minDist")," and\n",(0,o.yg)("inlineCode",{parentName:"p"},"maxDist"),". Gets center of random polygons.")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Checks if the npc can reach the position over graph")),(0,o.yg)("h2",{id:"skits"},"Skits"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Get skit nodes sorted by nearest to average player position with some\nrandomization")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Get skit nodes sorted by nearest to hardpoints with some randomization")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Get skit nodes sorted by nearest to pos with some randomization")),(0,o.yg)("h2",{id:"dangerous-areas"},"Dangerous Areas"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Create a known dangerous are that AI should avoid if necessary. The\nlifetime of the danger is tied to an entity")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Same as AI_CreateDangerousArea except the origin is always in a single\nplace")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Create dangerous area using damage def")),(0,o.yg)("h2",{id:"ain"},"AIN"),(0,o.yg)("p",null,(0,o.yg)("a",{parentName:"p",href:"https://developer.valvesoftware.com/wiki/AIN"},"AIN on the valve wiki")),(0,o.yg)("h2",{id:"spawners"},"Spawners"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Get array of spawners matching a class name")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Get array of spawners matching a script name")))}u.isMDXComponent=!0}}]);