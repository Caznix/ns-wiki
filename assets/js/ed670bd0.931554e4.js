"use strict";(self.webpackChunkns_wiki=self.webpackChunkns_wiki||[]).push([[5903],{5680:(e,n,t)=>{t.d(n,{xA:()=>u,yg:()=>y});var o=t(6540);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var p=o.createContext({}),s=function(e){var n=o.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return o.createElement(p.Provider,{value:n},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(t),m=l,y=c["".concat(p,".").concat(m)]||c[m]||g[m]||r;return t?o.createElement(y,a(a({ref:n},u),{},{components:t})):o.createElement(y,a({ref:n},u))}));function y(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,a=new Array(r);a[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[c]="string"==typeof e?e:l,a[1]=i;for(var s=2;s<r;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9718:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=t(8168),l=(t(6540),t(5680));const r={},a=void 0,i={unversionedId:"reference/respawn/hud_element_notation",id:"reference/respawn/hud_element_notation",isDocsHomePage:!1,title:"hud_element_notation",description:"Element Notation ====",source:"@site/docs/reference/respawn/hud_element_notation.md",sourceDirName:"reference/respawn",slug:"/reference/respawn/hud_element_notation",permalink:"/ns-wiki/docs/reference/respawn/hud_element_notation",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/reference/respawn/hud_element_notation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Entities",permalink:"/ns-wiki/docs/reference/respawn/entities"},next:{title:"hud_menus",permalink:"/ns-wiki/docs/reference/respawn/hud_menus"}},p=[{value:"Properties",id:"properties",children:[{value:"Inheritance / Parenting",id:"inheritance--parenting",children:[]},{value:"Identifying",id:"identifying",children:[]},{value:"Position",id:"position",children:[]},{value:"Text",id:"text",children:[]},{value:"Rui",id:"rui",children:[]}]}],s={toc:p},u="wrapper";function c(e){let{components:n,...t}=e;return(0,l.yg)(u,(0,o.A)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"::: {#element-notation}\nElement Notation ====\n:::"),(0,l.yg)("p",null,"Elements are notated as\n",(0,l.yg)("a",{parentName:"p",href:"https://developer.valvesoftware.com/wiki/KeyValues"},"VDF")),(0,l.yg)("p",null,"UI elements are created when a menu is initialized. References to the\nelements will stay the same, regardless if the menu is open or not."),(0,l.yg)("p",null,"It is not possible to create elements at runtime so you have to define\nall elements a menu or panel contains beforehand in appropriate files."),(0,l.yg)("p",null,"An Element is declared in the following way:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"// please follow this structure\nElementName\n{\n    ControlName name\n    // optional: classname, inheritance, ids ...\n\n    // optional: other properties\n\n    // optional: pinning\n}\n")),(0,l.yg)("p",null,"If you\\'re working on a ",(0,l.yg)("strong",{parentName:"p"},"menu"),", you need a ",(0,l.yg)("inlineCode",{parentName:"p"},"menu")," object that contains\nall elements, for example like this:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},'resource/ui/menus/profiles_menu.menu\n{\n    menu\n    {\n        ControlName Frame\n        xpos 0\n        ypos 0\n        zpos 3\n        wide f0\n        tall f0\n        autoResize 0\n        visible 1\n        enabled 1\n        pinCorner 0\n        PaintBackgroundType 0\n        infocus_bgcolor_override "0 0 0 0"\n        outoffocus_bgcolor_override "0 0 0 0"\n\n        // elements\n    }\n}\n')),(0,l.yg)("p",null,"It usually doesn\\'t matter if you use quotation marks to assign string\nvalues to parameters."),(0,l.yg)("h1",{id:"hud--panel-files"},"HUD & Panel files"),(0,l.yg)("p",null,"The first line of a ",(0,l.yg)("inlineCode",{parentName:"p"},".menu")," or ",(0,l.yg)("inlineCode",{parentName:"p"},".res")," file needs to be the resource path\nto itself, starting from the resource folder."),(0,l.yg)("p",null,"It\\'s not possible to load other files as menus or panels. A ",(0,l.yg)("inlineCode",{parentName:"p"},".menu"),"\nrepresents an independant menu of the game, while ",(0,l.yg)("inlineCode",{parentName:"p"},".res"),' files are\n\\"Panels\\" that can be loaded from other elements.'),(0,l.yg)("p",null,"The rest of the file needs to be wrapped in curly brackets."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre"},"resource/ui/menus/more/folders/my_menu.menu\n{\n    MyObject\n    {\n        // object properties go here\n    }\n\n    // more objects ...\n}\n")),(0,l.yg)("h2",{id:"properties"},"Properties"),(0,l.yg)("p",null,"Capitalization of the properties shouldn\\'t matter."),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"This isn\\'t a regular property and comes ",(0,l.yg)("strong",{parentName:"p"},"before")," the opening\nbracket"),(0,l.yg)("p",{parentName:"blockquote"},"Unique string identifier used in scripts to look up an element. Every\nelement is required to have a name.")),(0,l.yg)("h3",{id:"inheritance--parenting"},"Inheritance / Parenting"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Controls what type of Component the element is and what parameters\nhave an effect. Every element is required to have control name.")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Load a ",(0,l.yg)("inlineCode",{parentName:"p"},".res")," file. All elements in the settings file are instantiated\nand set as children of the element."),(0,l.yg)("p",{parentName:"blockquote"},(0,l.yg)("inlineCode",{parentName:"p"},"Hud_GetChild")," only works if the parent element is (has the\n",(0,l.yg)("inlineCode",{parentName:"p"},"ControlName"),") a ",(0,l.yg)("strong",{parentName:"p"},"CNestedPanel"),"!")),(0,l.yg)("h3",{id:"identifying"},"Identifying"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Classname used for identifying groups of elements")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Set an unique integer id for this element that\\'s retrievable in\nscript.")),(0,l.yg)("h3",{id:"position"},"Position"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Set the base x position relative to the element\\'s sibling position."),(0,l.yg)("p",{parentName:"blockquote"},"inverted when attached to the left corner or smth")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Set the base y position relative to the element\\'s sibling position."),(0,l.yg)("p",{parentName:"blockquote"},"inverted when attached to the top corner or smth")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"The layer this element sits in. Elements with a higher z will be\nprioritized to be selected / focused. They are also drawn on top of\nelements with a lower z position.")),(0,l.yg)("p",null,"Dimensions \\^\\^\\^\\^"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Set the base width of this element.")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Set the base height of this element.")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Float that scales the element.")),(0,l.yg)("h3",{id:"text"},"Text"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Set the label text of this element, if it is a Label.")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Controls the element boundary point the element\\'s text gets aligned\nwith. ",(0,l.yg)("inlineCode",{parentName:"p"},"east")," -",">"," Left, ",(0,l.yg)("inlineCode",{parentName:"p"},"north")," -",">"," Top, ",(0,l.yg)("inlineCode",{parentName:"p"},"west")," -",">"," Right, ",(0,l.yg)("inlineCode",{parentName:"p"},"south"),"\nBottom."),(0,l.yg)("p",{parentName:"blockquote"},"You can also combine the directions like this: ",(0,l.yg)("inlineCode",{parentName:"p"},"north-west"),".")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Controls if the text of this element is rendered in all caps. Defaults\nto 0.")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Set the text font of this element.")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"don\\'t wrape text")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"wrap text from east")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"wrap text from center")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Set if the text input supports multiline input.")),(0,l.yg)("p",null,"Pinning \\^\\^\\^\\^"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Controls the sibling this element will be pinned to. Takes an\nelement\\'s name as a parameter.")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Sets which corner of this element is pinned to the sibling.")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Set to which corner of the sibling this element is pinned to.")),(0,l.yg)("h3",{id:"rui"},"Rui"),(0,l.yg)("p",null,"Images \\^\\^\\^\\^"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"vgui asset to render")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},'apply this color on top. Format is \\"r g b a\\".')),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},'Fill transparent pixels with this color. Format is \\"r g b a\\"')),(0,l.yg)("p",null,"Navigation \\^\\^\\^\\^"),(0,l.yg)("p",null,"Slider \\^\\^\\^\\^"),(0,l.yg)("p",null,"Other \\^\\^\\^\\^"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Controls if this element is rendered. Defaults to 1.")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Controls if this element starts enabled. Defaults to 1.")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Controls if this element is enabled. Only enabled elements can be\nfocused / selected. Defaults to 1.")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"// 0 for normal(opaque), 1 for single texture from Texture1, and 2 for\nrounded box w/ four corner textures")),(0,l.yg)("p",null,"Conditional Properties ","~","~","~","~"),(0,l.yg)("p",null,"You can declare properties for specific conditions by adding\n",(0,l.yg)("inlineCode",{parentName:"p"},"[CONDITION]")," after the property value."),(0,l.yg)("p",null,"When putting a condition after an element\\'s name, the element will only\nbe created if the condition evaluates to true."),(0,l.yg)("p",null,"Usable conditions are:"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"game is running on 32 bit windows")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"game is running on windows")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"game is running on xbox")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"game is running on a PS4")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"game resolution is 16/9")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"the game\\'s language."),(0,l.yg)("pre",{parentName:"blockquote"},(0,l.yg)("code",{parentName:"pre",className:"language-text"},"// use allcaps only in russian\nallCaps                 0   [!$RUSSIAN]\nallCaps                 1   [$RUSSIAN]\n"))),(0,l.yg)("p",null,"On top of that, logical operators like ",(0,l.yg)("inlineCode",{parentName:"p"},"!"),", ",(0,l.yg)("inlineCode",{parentName:"p"},"&&")," and ",(0,l.yg)("inlineCode",{parentName:"p"},"||")," are available\nas well."),(0,l.yg)("p",null,"Example: \\^\\^\\^\\^"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-text"},'// This element only shows on pc\nIngameTextChat [$WINDOWS]\n{\n    ControlName             CBaseHudChat\n    InheritProperties       ChatBox\n\n    destination             "match"\n\n    visible                 0\n\n    pin_to_sibling          Screen\n    pin_corner_to_sibling   TOP_LEFT\n    pin_to_sibling_corner   TOP_LEFT\n    xpos                    -45\n    ypos                    -616\n}\n\n// This element has different widths depending on the game resolution\nLoadingTip\n{\n    ControlName             Label\n    ypos                    10\n    wide                    1630 [$WIDESCREEN_16_9]\n    wide                    1441 [!$WIDESCREEN_16_9]\n    auto_tall_tocontents    1\n    labelText               ""\n    textalign               "north-west"\n    font                    Default_28\n    wrap                    1\n    fgcolor_override        "217 170 75 255"\n    visible                 0\n\n    pin_to_sibling          LoadingGameMode\n    pin_corner_to_sibling   TOP_LEFT\n    pin_to_sibling_corner   BOTTOM_LEFT\n}\n')),(0,l.yg)("p",null,"Pinning ","~","~","~","~"),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"The calculated center of the element")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Element\\'s top y bounds, x axis center.")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Element\\'s lowest y bounds, x axis center.")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Element\\'s lowest x bounds, y axis center.")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Element\\'s highest x bounds, y axis center.")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Top left corner")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Top right corner")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Bottom left corner")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"Bottom right corner")),(0,l.yg)("p",null,"Units ","~","~","~","~"),(0,l.yg)("p",null,"You can calculate the position or dimensions etc. with different units.\nIf you provide no extra unit, the game uses pixels."),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"x percent of the screen."),(0,l.yg)("blockquote",{parentName:"blockquote"},(0,l.yg)("p",{parentName:"blockquote"},"// cover the entire screen width %100 height %100"))),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"use 100%")),(0,l.yg)("blockquote",null,(0,l.yg)("p",{parentName:"blockquote"},"something with the screen edges not exactly sure how positions get\ncalculated")),(0,l.yg)("p",null,"Including KeyValues ","~","~","~","~"),(0,l.yg)("p",null,"To include another KeyValue file, use ",(0,l.yg)("inlineCode",{parentName:"p"},'#base "filepath"')," at the top of a\nVDF file."))}c.isMDXComponent=!0}}]);