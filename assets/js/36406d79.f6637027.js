"use strict";(self.webpackChunkns_wiki=self.webpackChunkns_wiki||[]).push([[6318],{1319:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(4848),o=n(8453);const i={},s="VTF Modding",a={id:"guides/tools/VTFModding",title:"VTF Modding",description:"VTF Overview",source:"@site/docs/guides/tools/VTFModding.md",sourceDirName:"guides/tools",slug:"/guides/tools/VTFModding",permalink:"/ns-wiki/docs/guides/tools/VTFModding",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/tools/VTFModding.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"MDL Modding",permalink:"/ns-wiki/docs/guides/tools/MDLModding"},next:{title:"RPak Modding",permalink:"/ns-wiki/docs/guides/tools/rpakmodding"}},l={},d=[{value:"VTF Overview",id:"vtf-overview",level:2},{value:"VMT Overview",id:"vmt-overview",level:2},{value:"Editing FX that use VTFs",id:"editing-fx-that-use-vtfs",level:2},{value:"VTF Skins",id:"vtf-skins",level:2},{value:"VPK Tool",id:"vpk-tool",level:2},{value:"Hex Editor",id:"hex-editor",level:2},{value:"Creating VMT",id:"creating-vmt",level:2},{value:"models materials",id:"models-materials",level:4},{value:"VTFEdit",id:"vtfedit",level:2},{value:"Configuring your .vmt",id:"configuring-your-vmt",level:2},{value:"Final VPK folder",id:"final-vpk-folder",level:2},{value:"Finished.",id:"finished",level:2},{value:"Making your Skin Animated",id:"making-your-skin-animated",level:2}];function h(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"vtf-modding",children:"VTF Modding"})}),"\n",(0,r.jsx)(t.h2,{id:"vtf-overview",children:"VTF Overview"}),"\n",(0,r.jsx)(t.p,{children:'VTF, short for "Valve Texture Format", is a texture type used by Valve\r\nin the source engine and is occasionally in Titanfall. vtf\'s are used\r\nfor fx, animation, and other textures.'}),"\n",(0,r.jsx)(t.h2,{id:"vmt-overview",children:"VMT Overview"}),"\n",(0,r.jsxs)(t.p,{children:['VMT, short for "Valve Material Type", is a text\r\n',(0,r.jsx)(t.a,{href:"https://developer.valvesoftware.com/wiki/Material",children:"material"})," system\r\nthat dictates how the game perceives a vtf outside of how it looks. It\r\nuses\r\n",(0,r.jsx)(t.a,{href:"https://developer.valvesoftware.com/wiki/Category:List_of_Shader_Parameters",children:"parameters"}),"\r\nand ",(0,r.jsx)(t.a,{href:"https://developer.valvesoftware.com/wiki/Material_proxies",children:"proxies"}),"\r\nto dictate how\r\n",(0,r.jsx)(t.a,{href:"https://developer.valvesoftware.com/wiki/Shader",children:"shaders"})," will show the\r\ngame. We will go into greater detail later."]}),"\n",(0,r.jsx)(t.h2,{id:"editing-fx-that-use-vtfs",children:"Editing FX that use VTFs"}),"\n",(0,r.jsxs)(t.p,{children:["A lot of fx in Titanfall use vtf's as textures. Therefore, if the\r\ncorresponding vtf can be found, we can do almost anything with the fx's\r\nappearence. Example Mod: ",(0,r.jsx)(t.a,{href:"https://northstar.thunderstore.io/package/EXRILL/Exrills_Blue_Lstar/",children:"Exrill's Blue\r\nL-Star"}),".\r\nSince the L-Star has a physical bullet that is counted as fx, we can\r\nedit how it looks."]}),"\n",(0,r.jsx)(t.h2,{id:"vtf-skins",children:"VTF Skins"}),"\n",(0,r.jsx)(t.p,{children:"Since vtf modding was originally for introducing custom weapon skins,\r\nmost of the development on it was focused on that. The same concepts\r\napply to modding other textures though."}),"\n",(0,r.jsx)(t.p,{children:"Most textures in the game use .dds but we can make them use .vtf."}),"\n",(0,r.jsx)(t.p,{children:"What we'll be doing is:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Extracting the model."}),"\n",(0,r.jsx)(t.li,{children:"Replacing the texture path in the mdl to point to our texture."}),"\n",(0,r.jsx)(t.li,{children:"Creating our directory."}),"\n",(0,r.jsx)(t.li,{children:"Setting up a .vmt file."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"vpk-tool",children:"VPK Tool"}),"\n",(0,r.jsxs)(t.p,{children:["You have 2 options for a VPK tool. Pick either the older VPK tool: ",(0,r.jsx)(t.a,{href:"https://github.com/Wanty5883/Titanfall2/blob/master/tools/Titanfall_VPKTool3.4_Portable.zip",children:"cra0\r\nVPKTool"}),"\r\nor the Newer VPK tool: ",(0,r.jsx)(t.a,{href:"https://github.com/harmonytf/HarmonyVPKTool",children:"Harmony\r\nVPKTool"})," (better)."]}),"\n",(0,r.jsxs)(t.p,{children:["With your VPK tool opened. 'Open'\r\n",(0,r.jsx)(t.code,{children:"englishclient_mp_common.pak000_dir.vpk"})," which is located in\r\n",(0,r.jsx)(t.code,{children:"Titanfall2/vpk"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Inside of the VPK, not all guns filenames match their ingame names. Here\r\nis ",(0,r.jsx)(t.a,{href:"https://noskill.gitbook.io/titanfall2/documentation/file-location/weapon/weapon-model",children:"list of weapon\r\nnames"}),"\r\nto help you out."]}),"\n",(0,r.jsxs)(t.p,{children:["Navigate to ",(0,r.jsx)(t.code,{children:"models/weapons/car101"}),". Extract all the viewmodel versions\r\n(ptpov) and normal model (w) mdl's."]}),"\n",(0,r.jsx)(t.h2,{id:"hex-editor",children:"Hex Editor"}),"\n",(0,r.jsxs)(t.p,{children:["To change the path in the .mdl to the custom .vmt. We need a hex editor.\r\nBefore editing with hex editors, you need to be aware that hex editors\r\ncannot add or delete data, only replace it. I will use\r\n",(0,r.jsx)(t.a,{href:"https://mh-nexus.de/en/hxd/",children:"HxD"}),", but you can also use\r\n",(0,r.jsx)(t.a,{href:"https://hex-rays.com/ida-free/",children:"ida"}),", or anything else as its personal\r\npreference."]}),"\n",(0,r.jsx)(t.p,{children:"Open your .mdl in your hex editor."}),"\n",(0,r.jsxs)(t.p,{children:["We want to get closer to the path we need or else you'll be scrolling\r\nand searching for hours. Search:(CTRL+F) for skin_31. If you don't get\r\nany matches, try skn_31, skin31, elite, or prime. The path should look\r\nsomething like ",(0,r.jsx)(t.code,{children:".models\\Weapons_R2\\weaponname\\weaponname_skin_31"}),".\r\nDon't change this unless you want to effect skin31 textures."]}),"\n",(0,r.jsxs)(t.p,{children:["The path we do need to change is\r\n",(0,r.jsx)(t.code,{children:".models\\Weapons_R2\\weaponname\\weaponname"}),". This comes before the\r\n",(0,r.jsx)(t.code,{children:"skin_31"})," path. I recommend only changing the last section of the path.\r\nWe'll change ",(0,r.jsx)(t.code,{children:".models\\Weapons_r2\\car_smg\\CAR_smg"})," to\r\n",(0,r.jsx)(t.code,{children:".models\\weapons_r2\\car_smg\\car_ctm"}),". Note the capitalization, as some\r\nvpk repacking tools cannot repack properly if the changed path contains\r\ncapitals."]}),"\n",(0,r.jsxs)(t.p,{children:["Now copy these changes for ",(0,r.jsx)(t.code,{children:"ptpov_"})," and/or ",(0,r.jsx)(t.code,{children:"w_"})," model(s). As these are\r\nthe stow (On your back) and main menu models. If don't change these.\r\nYour texture will only work when in a match."]}),"\n",(0,r.jsx)(t.h2,{id:"creating-vmt",children:"Creating VMT"}),"\n",(0,r.jsxs)(t.p,{children:["In the same folder you extracted your mdl's. Make a ",(0,r.jsx)(t.code,{children:"materials"})," folder\r\nnext to the ",(0,r.jsx)(t.code,{children:"models"})," folder."]}),"\n",(0,r.jsxs)(t.p,{children:["Example: ",(0,r.jsx)(t.code,{children:".. code-block:: text"})]}),"\n",(0,r.jsx)(t.h4,{id:"models-materials",children:"models materials"}),"\n",(0,r.jsxs)(t.p,{children:["Recreate the path you changed in the ",(0,r.jsx)(t.code,{children:"materials"})," folder, such that the\r\nlast section is a .vmt file:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"materials\r\n\u2514\u2500 models\r\n      \u2514\u2500 weapons_r2\r\n            \u2514\u2500 car_smg\r\n                 \u2514\u2500 car_ctm.vmt\n"})}),"\n",(0,r.jsx)(t.p,{children:"Inside your .vmt paste: .. code-block:: text"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:'language-"UnlitTwoTexture"',children:'{\r\n\r\n> \\"\\$surfaceprop\\" \\"metal\\" \\"\\$basetexture\\" \\"\\" \\"\\$texture2\\"\r\n> \\"\\" \\"\\$bumpmap\\" \\"\\" \\"\\$allowoverbright\\" \\"1\\"\r\n> \\"\\$vertexcolor\\" 1 \\"\\$vertexalpha\\" 1 \\"\\$decal\\" \\"1\\"\r\n> \\"\\$model\\" 1 \\"\\$nocull\\" \\"1\\"\r\n\r\n}\n'})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["When we use vtf textures, we can only use the albedo and normal. Learn\r\nmore about ",(0,r.jsx)(t.a,{href:"https://retryy.gitbook.io/tf2/wiki/create/texturemaps",children:"texture\r\nmaps"})," here."]}),"\n",(0,r.jsx)(t.h2,{id:"vtfedit",children:"VTFEdit"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://nemstools.github.io/pages/VTFLib-Download.html",children:"VTFEdit"})," is a\r\ntool to edit, view, and create .vtf files."]}),"\n",(0,r.jsxs)(t.p,{children:["Launch\r\n",(0,r.jsx)(t.a,{href:"https://nemstools.github.io/pages/VTFLib-Download.html",children:"VTFEdit"}),". Top\r\nleft, click ",(0,r.jsx)(t.code,{children:"File"}),", ",(0,r.jsx)(t.code,{children:"Import"}),", find and Import your custom texture(s)."]}),"\n",(0,r.jsxs)(t.p,{children:["When importing your normal map. Choose to import as a ",(0,r.jsx)(t.code,{children:"Volume Map"})," When\r\nimporting your diffuse map. Choose to import as a ",(0,r.jsx)(t.code,{children:"Animated Map"})]}),"\n",(0,r.jsxs)(t.p,{children:["More info about .vtf format possibilities\r\n",(0,r.jsx)(t.a,{href:"https://retryy.gitbook.io/tf2/wiki/create/formats",children:"here"}),", or the\r\nofficial source docs\r\n",(0,r.jsx)(t.a,{href:"https://developer.valvesoftware.com/wiki/Valve_Texture_Format",children:"here"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"After that, save your new .vtf's into the same folder as your custom\r\n.vmt with a simple name."}),"\n",(0,r.jsx)(t.h2,{id:"configuring-your-vmt",children:"Configuring your .vmt"}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.code,{children:'"$basetexture"'})," argument enter your .vtf texture directory.\r\nWe'll use ",(0,r.jsx)(t.code,{children:"models\\weapons_r2\\car_smg\\car_ctm\\NAMEOFVTF"}),". This should\r\npoint to your custom diffuse .vtf with the simple name. The game expects\r\nthese paths to be without the ",(0,r.jsx)(t.code,{children:".vtf"})," file extension - don't add it."]}),"\n",(0,r.jsx)(t.p,{children:"Do the same for your normal map with the ```bluemapp```` argument."}),"\n",(0,r.jsxs)(t.p,{children:["In some cases you might have to create another vtf with literally any\r\nimage. Put its path in the ",(0,r.jsx)(t.code,{children:'"$texture2"'})," argument. As far as i know,\r\nthis is sometimes necessary even though the texture isn't used."]}),"\n",(0,r.jsx)(t.h2,{id:"final-vpk-folder",children:"Final VPK folder"}),"\n",(0,r.jsx)(t.p,{children:"Your root folder should look somewhat like this"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-text",children:"root\r\n\u251c\u2500 materials\r\n\u2502  \u2514\u2500 models\r\n\u2502     \u2514\u2500 weapons_r2\r\n\u2502        \u2514\u2500 car_smg\r\n\u2502           \u251c\u2500 YOURTEXTURE.vtf\r\n\u2502           \u251c\u2500 YOURTEXTURE.vtf\r\n\u2502           \u2514\u2500 car_ctm.vmt\r\n\u2514\u2500 models\r\n   \u2514\u2500 weapons\r\n      \u2514\u2500car101\r\n        \u251c\u2500 ptpov_car101.mdl\r\n        \u2514\u2500 w_car101.mdl\n"})}),"\n",(0,r.jsx)(t.h2,{id:"finished",children:"Finished."}),"\n",(0,r.jsxs)(t.p,{children:["You're done! You just need to pack it into a vpk with a vpk tool (for\r\nour gun mod, we'd repack to ",(0,r.jsx)(t.code,{children:"englishclient_mp_common.pak000_dir.vpk"}),"),\r\nand put the vpk into a Northstar mod inside a ",(0,r.jsx)(t.code,{children:"vpk"})," folder."]}),"\n",(0,r.jsxs)(t.p,{children:["Help with repacking\r\n",(0,r.jsx)(t.a,{href:"https://noskill.gitbook.io/titanfall2/intro/duction/vpk-packpack",children:"here"}),",\r\nand help with Northstar mods\r\n",(0,r.jsx)(t.a,{href:"https://r2northstar.readthedocs.io/en/latest/guides/gettingstarted.html",children:"here"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"making-your-skin-animated",children:"Making your Skin Animated"}),"\n",(0,r.jsxs)(t.p,{children:["To add animation functionality, all we need to do is add a Proxie; which\r\nis just a modifier inside a ",(0,r.jsx)(t.code,{children:".vmt"}),", and change our albedo vtf texture."]}),"\n",(0,r.jsxs)(t.p,{children:["You need to create a .vtf texture with multiple frames imported to a\r\nsingle .vtf texture, that's your animated texture. You can do this with\r\n",(0,r.jsx)(t.a,{href:"https://nemstools.github.io/pages/VTFLib-Download.html",children:"VTFEdit"}),". Then\r\nassign the texture in ",(0,r.jsx)(t.code,{children:"$basetexture"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["At the bottom of your vmt but before the ",(0,r.jsx)(t.code,{children:"}"}),", add this:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:'language-"Proxies"',metastring:"{ AnimatedTexture { animatedTextureVar $basetexture",children:"animatedTextureFrameNumVar \\$frame animatedTextureFrameRate 30 } }\n"})}),"\n",(0,r.jsxs)(t.p,{children:["To change the fps of the texture, change the value after\r\n",(0,r.jsx)(t.code,{children:"animatedTextureFrameRate"}),", and you'll be done making your texture\r\nanimated!"]})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(6540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);