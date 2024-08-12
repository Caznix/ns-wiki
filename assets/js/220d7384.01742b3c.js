"use strict";(self.webpackChunkns_wiki=self.webpackChunkns_wiki||[]).push([[6045],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>y});var o=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=s(n),g=r,y=d["".concat(u,".").concat(g)]||d[g]||p[g]||i;return n?o.createElement(y,l(l({ref:t},c),{},{components:n})):o.createElement(y,l({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=g;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[d]="string"==typeof e?e:r,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},7584:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var o=n(8168),r=(n(6540),n(5680));const i={},l="Contributing to ModdingDocs",a={unversionedId:"source/guides/contributing",id:"source/guides/contributing",isDocsHomePage:!1,title:"Contributing to ModdingDocs",description:"How can I contribute?",source:"@site/docs/source/guides/contributing.md",sourceDirName:"source/guides",slug:"/source/guides/contributing",permalink:"/ns-wiki/docs/source/guides/contributing",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/source/guides/contributing.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"api",permalink:"/ns-wiki/docs/source/api"},next:{title:"Getting Started",permalink:"/ns-wiki/docs/source/guides/gettingstarted"}},u=[{value:"Contributing without a local build",id:"contributing-without-a-local-build",children:[]},{value:"Building locally",id:"building-locally",children:[]},{value:"VSCode",id:"vscode",children:[]}],s={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.yg)(c,(0,o.A)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"contributing-to-moddingdocs"},"Contributing to ModdingDocs"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"How can I contribute?")),(0,r.yg)("p",null,"All contributions to ModdingDocs are welcome."),(0,r.yg)("p",null,"Including:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"GitHub Issues containing any knowledge you want to share"),(0,r.yg)("li",{parentName:"ul"},"Pull Requests with changes to the docs, even small ones")),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},"What do I need to know to contribute?")),(0,r.yg)("p",null,"ModdingDocs uses\n",(0,r.yg)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ReStructuredText"},"reStructuredText"),"."),(0,r.yg)("p",null,"Cheatsheet for reStructuredText syntax:\n",(0,r.yg)("a",{parentName:"p",href:"https://docs.generic-mapping-tools.org/6.2/rst-cheatsheet.html"},"https://docs.generic-mapping-tools.org/6.2/rst-cheatsheet.html"),"."),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},".rst")," files can be found in the ",(0,r.yg)("inlineCode",{parentName:"p"},"docs/source")," directory. If you\\'re\nadding a new file, make sure to link it in ",(0,r.yg)("inlineCode",{parentName:"p"},"index.rst")),(0,r.yg)("h2",{id:"contributing-without-a-local-build"},"Contributing without a local build"),(0,r.yg)("p",null,"You don\\'t necessarily need to set up a local build environment."),(0,r.yg)("p",null,"To contribute without doing so, you can just edit the files in an editor\nof your choice and create a GitHub pull request from them."),(0,r.yg)("p",null,'There will be a test-build done for each PR, which you can find on your\nPR as a \\"Check\\" by clicking ',(0,r.yg)("inlineCode",{parentName:"p"},"show all checks")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"details"),"."),(0,r.yg)("p",null,"This should take you to a online version of the docs with your PRs\nchanges."),(0,r.yg)("h2",{id:"building-locally"},"Building locally"),(0,r.yg)("p",null,"You need to have a relatively recent version of Python installed - 3.8\nor higher. ",(0,r.yg)("a",{parentName:"p",href:"https://www.python.org/downloads/"},"Download here")),(0,r.yg)("p",null,"::::: tab-set\n::: tab-item\nWindows"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-powershell"},"git clone https://github.com/R2Northstar/ModdingDocs/\ncd ModdingDocs\n./run.ps1\n")),(0,r.yg)("p",null,":::"),(0,r.yg)("p",null,"::: tab-item\nLinux"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/R2Northstar/ModdingDocs/\ncd ModdingDocs\n./run.sh\n")),(0,r.yg)("p",null,":::\n:::::"),(0,r.yg)("p",null,":::: warning\n::: title\nWarning\n:::"),(0,r.yg)("p",null,"On Windows, if you are not able to run the script by running\n","[./run.ps1]","{.title-ref}, try running it with: ","[powershell.exe\n-ExecutionPolicy Bypass -File .run.ps1]","{.title-ref}"),(0,r.yg)("p",null,"After this you should be able to run with just ","[./run.ps1]","{.title-ref}.\n::::"),(0,r.yg)("h2",{id:"vscode"},"VSCode"),(0,r.yg)("p",null,"If you\\'re using ",(0,r.yg)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"Visual Studio Code"),",\nthe following extensions might be of interest:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=trond-snekvik.simple-rst"},"snekvik.simple-rst"),":\nfor syntax highlighting"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=lextudio.restructuredtext"},"lextudio.restructuredtext"),":\nfor autocompletion and syntax checks.")),(0,r.yg)("p",null,":::: note\n::: title\nNote\n:::"),(0,r.yg)("p",null,"To get the ReStructuredText support working, you will likely need to\ntell VSCode to use the Poetry environment."),(0,r.yg)("p",null,"To do so, open one of the .py files, which should make the python\nversion appear in the bottom right of VSCode."),(0,r.yg)("p",null,"Click on it, and select the version with ",(0,r.yg)("inlineCode",{parentName:"p"},"(moddingdocs")," after it."),(0,r.yg)("p",null,"Then, when looking at a ReStructuredText file there should be ",(0,r.yg)("inlineCode",{parentName:"p"},"esbonio:"),"\nin the bottom right."),(0,r.yg)("p",null,"Click that to restart the ReStructuredText support. This allows it to\nsee all the dependencies Poetry installed.\n::::"))}d.isMDXComponent=!0}}]);