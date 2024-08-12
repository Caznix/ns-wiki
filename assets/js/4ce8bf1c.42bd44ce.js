"use strict";(self.webpackChunkns_wiki=self.webpackChunkns_wiki||[]).push([[4147],{5680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>y});var n=r(6540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(r),g=o,y=p["".concat(i,".").concat(g)]||p[g]||m[g]||a;return r?n.createElement(y,l(l({ref:t},s),{},{components:r})):n.createElement(y,l({ref:t},s))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=g;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,l[1]=c;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4343:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=r(8168),o=(r(6540),r(5680));const a={},l="Server Authentification",c={unversionedId:"reference/northstar/msinterface",id:"reference/northstar/msinterface",isDocsHomePage:!1,title:"Server Authentification",description:"Note",source:"@site/docs/reference/northstar/msinterface.md",sourceDirName:"reference/northstar",slug:"/reference/northstar/msinterface",permalink:"/ns-wiki/docs/reference/northstar/msinterface",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/reference/northstar/msinterface.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"modsettings",permalink:"/ns-wiki/docs/reference/northstar/modsettings"},next:{title:"Safe I/O",permalink:"/ns-wiki/docs/reference/northstar/safeio"}},i=[{value:"Masterserver Authentification",id:"masterserver-authentification",children:[]},{value:"Game Server Authentification",id:"game-server-authentification",children:[]},{value:"Server Information",id:"server-information",children:[]},{value:"Connection Callbacks",id:"connection-callbacks",children:[]},{value:"Script Structs",id:"script-structs",children:[]}],u={toc:i},s="wrapper";function p(e){let{components:t,...r}=e;return(0,o.yg)(s,(0,n.A)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"server-authentification"},"Server Authentification"),(0,o.yg)("p",null,":::: note\n::: title\nNote\n:::"),(0,o.yg)("p",null,"All of these functions are only exposed to the ",(0,o.yg)("inlineCode",{parentName:"p"},"UI")," VM.\n::::"),(0,o.yg)("p",null,"These are functions required for the ingame server browser and the\nauthorization process for the Masterserver and game servers."),(0,o.yg)("h2",{id:"masterserver-authentification"},"Masterserver Authentification"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Returns ",(0,o.yg)("inlineCode",{parentName:"p"},"true")," if the client is authenticated with the Masterserver")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Returns ",(0,o.yg)("inlineCode",{parentName:"p"},"true")," if a successful connection has been established")),(0,o.yg)("h2",{id:"game-server-authentification"},"Game Server Authentification"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Tries authing with the fetched server at ",(0,o.yg)("inlineCode",{parentName:"p"},"serverIndex")," and the\nprovided password")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Returns ",(0,o.yg)("inlineCode",{parentName:"p"},"true")," if the client is currently authing with a game server")),(0,o.yg)("p",null,"::: {#NSWasAuthSuccessful}\n:::"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Returns ",(0,o.yg)("inlineCode",{parentName:"p"},"true")," if the client successfully authed with a game server")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Tries to connect to the game server that has previously been\nauthenticated with")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Returns the API reason why the last authentification failed")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Tries to authenticate with the local game server")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Call this after\n",(0,o.yg)("inlineCode",{parentName:"p"},"NSWasAuthSuccessful <NSWasAuthSuccessful>"),'{.interpreted-text\nrole="ref"} returns ',(0,o.yg)("inlineCode",{parentName:"p"},"true")," to complete the local authorization\nprocess.")),(0,o.yg)("h2",{id:"server-information"},"Server Information"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Start fetching all available game servers from the Masterserver")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Returns ",(0,o.yg)("inlineCode",{parentName:"p"},"true")," if the last request by")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Returns the total amount of fetched game servers")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Clears all fetched game servers")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Returns an array of all available Servers fetched from the\nMasterserver.")),(0,o.yg)("h2",{id:"connection-callbacks"},"Connection Callbacks"),(0,o.yg)("p",null,"::: {#AddConnectToServerCallback}\n:::"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Add a callback to be executed right before connecting to a game server\nvia the Server Browser")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Remove a function object from the list of callbacks")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Runs all callbacks that have been registered with\n",(0,o.yg)("inlineCode",{parentName:"p"},"AddConnectToServerCallback <AddConnectToServerCallback>"),'{.interpreted-text\nrole="ref"}')),(0,o.yg)("h2",{id:"script-structs"},"Script Structs"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Contains all info about a game server."),(0,o.yg)("blockquote",{parentName:"blockquote"},(0,o.yg)("p",{parentName:"blockquote"},"Index of the native Object equivalent")),(0,o.yg)("blockquote",{parentName:"blockquote"},(0,o.yg)("p",{parentName:"blockquote"},"ID assigned to the game server by the Masterserver in the\nregistration")),(0,o.yg)("blockquote",{parentName:"blockquote"},(0,o.yg)("p",{parentName:"blockquote"},"Name of this game server")),(0,o.yg)("blockquote",{parentName:"blockquote"},(0,o.yg)("p",{parentName:"blockquote"},"Description of this game server")),(0,o.yg)("blockquote",{parentName:"blockquote"},(0,o.yg)("p",{parentName:"blockquote"},"Unlocalized name of the map that\\'s currently running on the game\nserver")),(0,o.yg)("blockquote",{parentName:"blockquote"},(0,o.yg)("p",{parentName:"blockquote"},"Unlocalized name of the playlist that\\'s currently running on the\ngame server")),(0,o.yg)("blockquote",{parentName:"blockquote"},(0,o.yg)("p",{parentName:"blockquote"},"The total amount of players currently connected to the player")),(0,o.yg)("blockquote",{parentName:"blockquote"},(0,o.yg)("p",{parentName:"blockquote"},"The maximum amount of players that can connect to the server")),(0,o.yg)("blockquote",{parentName:"blockquote"},(0,o.yg)("p",{parentName:"blockquote"},"If ",(0,o.yg)("inlineCode",{parentName:"p"},"true")," an extra password is required to connect to the server.\nOtherwise the password is an empty string")),(0,o.yg)("blockquote",{parentName:"blockquote"},(0,o.yg)("p",{parentName:"blockquote"},"Unlocalized region where the physical server is located")),(0,o.yg)("blockquote",{parentName:"blockquote"},(0,o.yg)("p",{parentName:"blockquote"},"Array of all mods that are required to be loaded on the client to be\nable to join the server"))),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Information of a mod that has to be loaded on the client in order to\njoin a game server"),(0,o.yg)("blockquote",{parentName:"blockquote"},(0,o.yg)("p",{parentName:"blockquote"},"Name of the mod")),(0,o.yg)("blockquote",{parentName:"blockquote"},(0,o.yg)("p",{parentName:"blockquote"},"Version of the mod"))))}p.isMDXComponent=!0}}]);