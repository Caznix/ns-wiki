"use strict";(self.webpackChunkns_wiki=self.webpackChunkns_wiki||[]).push([[9595],{5680:(e,n,r)=>{r.d(n,{xA:()=>u,yg:()=>m});var t=r(6540);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},y=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),y=i,m=p["".concat(c,".").concat(y)]||p[y]||d[y]||o;return r?t.createElement(m,a(a({ref:n},u),{},{components:r})):t.createElement(m,a({ref:n},u))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=y;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},9862:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var t=r(8168),i=(r(6540),r(5680));const o={},a="Introduction",l={unversionedId:"source/squirrel/intro",id:"source/squirrel/intro",isDocsHomePage:!1,title:"Introduction",description:"Squirrel is a high level imperative,",source:"@site/docs/source/squirrel/intro.md",sourceDirName:"source/squirrel",slug:"/source/squirrel/intro",permalink:"/ns-wiki/docs/source/squirrel/intro",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/source/squirrel/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/ns-wiki/docs/source/squirrel/index"},next:{title:"networking",permalink:"/ns-wiki/docs/source/squirrel/networking"}},c=[],s={toc:c},u="wrapper";function p(e){let{components:n,...r}=e;return(0,i.yg)(u,(0,t.A)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"introduction"},"Introduction"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"http://squirrel-lang.org/"},"Squirrel")," is a high level imperative,\nobject-oriented programming language used in Titanfall to script large\namounts of content in the game."),(0,i.yg)("p",null,"Respawn modified large parts of the language to fit their needs, for\nexample adding a static type compiler to the language."),(0,i.yg)("p",null,"Squirrel still allows you to write dynamically typed code but this is\ndiscouraged if possible."),(0,i.yg)("p",null,"The syntax of squirrel is very similar to C++ or Javascript and very\neasy to learn."),(0,i.yg)("p",null,"The programmer doesn\\'t need to think about memory management in scripts\nsince all objects are refcounted and the garbage collector can be\ninvoked manually."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"int function fibonacci( int n )\n{\n if ( n < 2 )\n   return n\n\n return fibonacci( n - 1 ) + fibonacci( n - 2 )\n}\n")),(0,i.yg)("p",null,"The language provides easy interfaces for coroutines and asynchronous\ncode."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"void main()\n{\n thread timer( 1.0, timercallback ) \n}\n\nvoid function timercallback( int iteration )\n{\n print( iteration ) \n}\n\n// call the callback function every n seconds\nvoid function timer( float n, void functionref( int ) callback )\n{\n int iterations\n while ( true )\n {\n   wait n\n   iterations += 1\n   callback( iterations )\n }\n}\n")),(0,i.yg)("p",null,"Signals and Flags allow you to control code execution based on events\nthat happen elsewhere in the code or in the ingame world."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'void main()\n{\n AddCallback_OnPlayerRespawned( OnPlayerRespawned )\n}\n\nvoid function OnPlayerRespawned( entity player )\n{\n thread CountPlayerTimeAlive( Time() ) // execute this function as threaded so we can use Signals in there\n}\n\nvoid function CountPlayerTimeAlive( entity player, float time )\n{\n player.WaitSignal( "OnDestroy" ) // wait until the player dies or disconnects\n print( Time() - time ) // print how long the player was alive\n}\n')))}p.isMDXComponent=!0}}]);