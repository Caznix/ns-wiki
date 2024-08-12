"use strict";(self.webpackChunkns_wiki=self.webpackChunkns_wiki||[]).push([[8991],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var a=n(6540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=i,m=d["".concat(o,".").concat(h)]||d[h]||g[h]||r;return n?a.createElement(m,l(l({ref:t},u),{},{components:n})):a.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6495:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var a=n(8168),i=(n(6540),n(5680));const r={},l="UI Image Atlases",s={unversionedId:"source/repak/assets/uiatlas",id:"source/repak/assets/uiatlas",isDocsHomePage:!1,title:"UI Image Atlases",description:"UI Image Atlases (uimg) are what the game uses to store multiple UI",source:"@site/docs/source/repak/assets/uiatlas.md",sourceDirName:"source/repak/assets",slug:"/source/repak/assets/uiatlas",permalink:"/ns-wiki/docs/source/repak/assets/uiatlas",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/source/repak/assets/uiatlas.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Textures",permalink:"/ns-wiki/docs/source/repak/assets/texture"},next:{title:"Asset Types",permalink:"/ns-wiki/docs/source/repak/index"}},o=[{value:"Examples:",id:"examples",children:[{value:"1. Basic UI Image Atlas with 2 Textures",id:"1-basic-ui-image-atlas-with-2-textures",children:[]},{value:"2. Full Map File With a UI Image Atlas",id:"2-full-map-file-with-a-ui-image-atlas",children:[]}]},{value:"Asset Structure:",id:"asset-structure",children:[{value:"<code>$type</code>",id:"type",children:[]},{value:"<code>path</code>",id:"path",children:[]},{value:"<code>atlas</code>",id:"atlas",children:[]},{value:"<code>textures</code>",id:"textures",children:[]}]}],p={toc:o},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.yg)(u,(0,a.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h1",{id:"ui-image-atlases"},"UI Image Atlases"),(0,i.yg)("p",null,"UI Image Atlases (",(0,i.yg)("inlineCode",{parentName:"p"},"uimg"),") are what the game uses to store multiple UI\nassets, they reference a single texture asset, known as the ",(0,i.yg)("inlineCode",{parentName:"p"},"atlas")," and\nhave an array of ",(0,i.yg)("inlineCode",{parentName:"p"},"textures")," which defines the different usable UI\nassets."),(0,i.yg)("h2",{id:"examples"},"Examples:"),(0,i.yg)("h3",{id:"1-basic-ui-image-atlas-with-2-textures"},"1. Basic UI Image Atlas with 2 Textures"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "$type":"uimg",\n    "path":"rui/atlas/example1",\n    "atlas":"rui/example1",\n    "textures":\n    [\n        {\n            "path":"rui/example1/texture1",\n            "width":128,\n            "height":128,\n            "posX":0,\n            "posY":0\n        },\n        {\n            "path":"rui/example1/texture2",\n            "width":128,\n            "height":128,\n            "posX":128,\n            "posY":0\n        }\n    ]\n}\n')),(0,i.yg)("p",null,":::: note\n::: title\nNote\n:::"),(0,i.yg)("p",null,"This UI Image Atlas expects a texture with the path of ",(0,i.yg)("inlineCode",{parentName:"p"},"rui/example1"),"\nwhich is at least 256x128\n::::"),(0,i.yg)("h3",{id:"2-full-map-file-with-a-ui-image-atlas"},"2. Full Map File With a UI Image Atlas"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-json"},'{\n    "name":"blue_fire",\n    "assetsDir":"../depot",\n    "outputDir":"../rpaks",\n    "version": 7,\n    "files":[\n        {\n            "$type":"txtr",\n            "path":"rui/blue_fire"\n        },\n        {\n            "$type":"uimg",\n            "path":"rui/atlas/blue_fire",\n            "atlas":"rui/blue_fire",\n            "textures":[\n                {\n                    "path":"blue_fire/hud/flame_wall",\n                    "width":128,\n                    "height":128,\n                    "posX":0,\n                    "posY":0\n                },\n                {\n                    "path":"blue_fire/menu/flame_wall",\n                    "width":128,\n                    "height":128,\n                    "posX":128,\n                    "posY":0\n                },\n                {\n                    "path":"blue_fire/hud/flame_shield",\n                    "width":128,\n                    "height":128,\n                    "posX":0,\n                    "posY":128\n                },\n                {\n                    "path":"blue_fire/menu/flame_shield",\n                    "width":128,\n                    "height":128,\n                    "posX":128,\n                    "posY":128\n                }\n            ]\n        }\n    ]\n}\n')),(0,i.yg)("p",null,":::: note\n::: title\nNote\n:::"),(0,i.yg)("p",null,"This map file is a shortened version of the one used in EXRILL\\'s ",(0,i.yg)("a",{parentName:"p",href:"https://northstar.thunderstore.io/package/EXRILL/Exrills_BlueFire_mod_Beta/"},"Blue\nFire"),"\nmod\n::::"),(0,i.yg)("h2",{id:"asset-structure"},"Asset Structure:"),(0,i.yg)("h3",{id:"type"},(0,i.yg)("inlineCode",{parentName:"h3"},"$type")),(0,i.yg)("p",null,"For an asset to be a UI Image Atlas asset, the ",(0,i.yg)("inlineCode",{parentName:"p"},"$type")," field must be\n",(0,i.yg)("inlineCode",{parentName:"p"},'"uimg"'),"."),(0,i.yg)("h3",{id:"path"},(0,i.yg)("inlineCode",{parentName:"h3"},"path")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"path")," field for a UI Image Atlas asset is mostly unused, and as\nsuch can be set to almost any value. It is used when logging information\nabout the asset."),(0,i.yg)("h3",{id:"atlas"},(0,i.yg)("inlineCode",{parentName:"h3"},"atlas")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"atlas")," field for a UI Image Atlas asset determines which texture\nasset it will use."),(0,i.yg)("p",null,":::: error\n::: title\nError\n:::"),(0,i.yg)("p",null,"If the uimg asset doesn\\'t contain a valid ",(0,i.yg)("inlineCode",{parentName:"p"},"atlas")," field, RePak will\noutput one of the following errors to the console:"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"Required field 'atlas' not found for uimg asset '%s'. Exiting...")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"'atlas' field is not of required type 'string' for uimg asset '%s'. Exiting...")),(0,i.yg)("p",null,"where ",(0,i.yg)("inlineCode",{parentName:"p"},"%s")," is the ",(0,i.yg)("inlineCode",{parentName:"p"},"path")," field of the UI Image Atlas\n::::"),(0,i.yg)("p",null,":::: error\n::: title\nError\n:::"),(0,i.yg)("p",null,"If the texture asset cannot be found, RePak will output the following\nmessage to the console before exiting:"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"Atlas asset was not found when trying to add uimg asset '%s'. Make sure that the txtr is above the uimg in your map file. Exiting...\"")),(0,i.yg)("p",null,"where ",(0,i.yg)("inlineCode",{parentName:"p"},"%s")," is the ",(0,i.yg)("inlineCode",{parentName:"p"},"path")," field of the UI Image Atlas\n::::"),(0,i.yg)("h3",{id:"textures"},(0,i.yg)("inlineCode",{parentName:"h3"},"textures")),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"textures")," array in a UI Image Atlas asset defines the different UI\ntextures that the atlas contains. Any number of UI textures may be\ncontained within one UI Image Atlas."),(0,i.yg)("h4",{id:"path-1"},(0,i.yg)("inlineCode",{parentName:"h4"},"path")),(0,i.yg)("p",null,"An entry in the ",(0,i.yg)("inlineCode",{parentName:"p"},"textures")," array must have a ",(0,i.yg)("inlineCode",{parentName:"p"},"path")," field, as the game\nmust use it to identify and show the texture."),(0,i.yg)("p",null,":::: error\n::: title\nError\n:::"),(0,i.yg)("p",null,"If the entry in the ",(0,i.yg)("inlineCode",{parentName:"p"},"textures")," array doesn\\'t contain a valid ",(0,i.yg)("inlineCode",{parentName:"p"},"path"),"\nfield, RePak will output one of the following errors to the console:"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"Required field 'path' not found for a texture in uimg asset '%s'. Exiting...")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"'path' field is not of required type 'string' for a texture in uimg asset '%s'. Exiting...")),(0,i.yg)("p",null,"where ",(0,i.yg)("inlineCode",{parentName:"p"},"%s")," is the ",(0,i.yg)("inlineCode",{parentName:"p"},"path")," field of the UI Image Atlas\n::::"),(0,i.yg)("h4",{id:"width-and-height"},(0,i.yg)("inlineCode",{parentName:"h4"},"width")," and ",(0,i.yg)("inlineCode",{parentName:"h4"},"height")),(0,i.yg)("p",null,"An entry in the ",(0,i.yg)("inlineCode",{parentName:"p"},"textures")," array must have both a ",(0,i.yg)("inlineCode",{parentName:"p"},"width")," and a ",(0,i.yg)("inlineCode",{parentName:"p"},"height"),"\nfield, these values should both be integers."),(0,i.yg)("p",null,":::: error\n::: title\nError\n:::"),(0,i.yg)("p",null,"If the entry in the ",(0,i.yg)("inlineCode",{parentName:"p"},"textures")," array doesn\\'t contain a valid ",(0,i.yg)("inlineCode",{parentName:"p"},"width")," or\na valid ",(0,i.yg)("inlineCode",{parentName:"p"},"height")," field, RePak will output one of the following errors to\nthe console:"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"Required field 'width' not found for texture '%s' in uimg asset '%s'. Exiting...")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"Required field 'height' not found for texture '%s' in uimg asset '%s'. Exiting...")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"'width' field is not of required type 'number' for texture '%s' in uimg asset '%s'. Exiting...")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"'height' field is not of required type 'number' for texture '%s' in uimg asset '%s'. Exiting...")),(0,i.yg)("p",null,"where the first ",(0,i.yg)("inlineCode",{parentName:"p"},"%s")," is the ",(0,i.yg)("inlineCode",{parentName:"p"},"path")," field of the texture, and the second\n",(0,i.yg)("inlineCode",{parentName:"p"},"%s")," is the ",(0,i.yg)("inlineCode",{parentName:"p"},"path")," field of the UI Image Atlas\n::::"),(0,i.yg)("h4",{id:"posx-and-posy"},(0,i.yg)("inlineCode",{parentName:"h4"},"posX")," and ",(0,i.yg)("inlineCode",{parentName:"h4"},"posY")),(0,i.yg)("p",null,"An entry in the ",(0,i.yg)("inlineCode",{parentName:"p"},"textures")," array must have both a ",(0,i.yg)("inlineCode",{parentName:"p"},"posX")," and a ",(0,i.yg)("inlineCode",{parentName:"p"},"posY"),"\nfield, these values should both be integers. These fields determine the\nlocation of the top-left pixel in the UI texture."),(0,i.yg)("p",null,":::: error\n::: title\nError\n:::"),(0,i.yg)("p",null,"If the entry in the ",(0,i.yg)("inlineCode",{parentName:"p"},"textures")," array doesn\\'t contain a valid ",(0,i.yg)("inlineCode",{parentName:"p"},"posX")," or\na valid ",(0,i.yg)("inlineCode",{parentName:"p"},"posY")," field, RePak will output one of the following errors to\nthe console:"),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"Required field 'posX' not found for texture '%s' in uimg asset '%s'. Exiting...")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"Required field 'posY' not found for texture '%s' in uimg asset '%s'. Exiting...")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"'posX' field is not of required type 'number' for texture '%s' in uimg asset '%s'. Exiting...")),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"'posY' field is not of required type 'number' for texture '%s' in uimg asset '%s'. Exiting...")),(0,i.yg)("p",null,"where the first ",(0,i.yg)("inlineCode",{parentName:"p"},"%s")," is the ",(0,i.yg)("inlineCode",{parentName:"p"},"path")," field of the texture, and the second\n",(0,i.yg)("inlineCode",{parentName:"p"},"%s")," is the ",(0,i.yg)("inlineCode",{parentName:"p"},"path")," field of the UI Image Atlas\n::::"))}d.isMDXComponent=!0}}]);