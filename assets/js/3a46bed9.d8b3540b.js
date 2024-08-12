"use strict";(self.webpackChunkns_wiki=self.webpackChunkns_wiki||[]).push([[3139],{5680:(e,t,n)=>{n.d(t,{xA:()=>p,yg:()=>m});var a=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},g="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(n),d=o,m=g["".concat(u,".").concat(d)]||g[d]||s[d]||r;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[g]="string"==typeof e?e:o,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8502:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>g,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var a=n(8168),o=(n(6540),n(5680));const r={},l="DamageInfo",i={unversionedId:"source/reference/respawn/native_server/damageinfo",id:"source/reference/respawn/native_server/damageinfo",isDocsHomePage:!1,title:"DamageInfo",description:"DamageInfos are variables holding information about damage inflicted on",source:"@site/docs/source/reference/respawn/native_server/damageinfo.md",sourceDirName:"source/reference/respawn/native_server",slug:"/source/reference/respawn/native_server/damageinfo",permalink:"/ns-wiki/docs/source/reference/respawn/native_server/damageinfo",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/source/reference/respawn/native_server/damageinfo.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"DamageDef",permalink:"/ns-wiki/docs/source/reference/respawn/native_server/damagedef"},next:{title:"DataTables",permalink:"/ns-wiki/docs/source/reference/respawn/native_server/datatables"}},u=[{value:"Getters",id:"getters",children:[]},{value:"Setters",id:"setters",children:[]},{value:"Utils",id:"utils",children:[]},{value:"Helpers",id:"helpers",children:[]},{value:"Damage Flags",id:"damage-flag-overview",children:[]}],c={toc:u},p="wrapper";function g(e){let{components:t,...n}=e;return(0,o.yg)(p,(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"damageinfo"},"DamageInfo"),(0,o.yg)("p",null,"DamageInfos are variables holding information about damage inflicted on\nan entity."),(0,o.yg)("p",null,"Because damageInfo instances are implemented as userdata they can\\'t be\ntyped."),(0,o.yg)("h2",{id:"getters"},"Getters"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Returns the attacker of this damageInfo")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Returns the inflictor of this damageInfo")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Returns the weapon that dealt this damage")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Get if this damage is supposed to kill the victim regardless of health")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Get the inflicted damage")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Returns the position where the damage originated. Usually this is the\nbarrel attachment of the weapon that inflicted the damage.")),(0,o.yg)("p",null,"::: {#DamageInfo-GetDamageType}\n:::"),(0,o.yg)("p",null,"::: {#damage-source-id-overview}\n:::"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Returns the ",(0,o.yg)("inlineCode",{parentName:"p"},"eDamageSourceId")),(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("inlineCode",{parentName:"p"},"damageSourceId")," is an ",(0,o.yg)("inlineCode",{parentName:"p"},"int")," that references an ",(0,o.yg)("inlineCode",{parentName:"p"},"enum")," and can be used\nto identify what source damage came from."),(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("inlineCode",{parentName:"p"},"damageSourceId")," is mostly found as an argument in some kill and\ndamage related functions. Respawn has created a function that will\nattempt to localise the damageSourceId inputed. To add your own custom\n",(0,o.yg)("inlineCode",{parentName:"p"},"damageSourceID")," , see:\n",(0,o.yg)("inlineCode",{parentName:"p"},"../../northstar/customdamagesources"),'{.interpreted-text role="doc"}'),(0,o.yg)("p",{parentName:"blockquote"},"Other useful functions can be found in the ",(0,o.yg)("inlineCode",{parentName:"p"},"damageinfo")," section of\nthis page and in ",(0,o.yg)("inlineCode",{parentName:"p"},"entities"),'{.interpreted-text role="doc"}'),(0,o.yg)("p",{parentName:"blockquote"},(0,o.yg)("inlineCode",{parentName:"p"},"GetObitFromdamageSourceId")," is a global function that attempts to\nlocalise the ",(0,o.yg)("inlineCode",{parentName:"p"},"damageSourceId")," inputed, if it cannot get a localised\nstring it will simply return the localisation string of the source.")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Get the distance from where the bullet/projectile was fired.")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"If it\\'s a radius damage, gives the distance from the center of the\nblast. Otherwise defaults to zero.")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Get damage force vector.")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Checks if code is allowing this entity to ragdoll on death")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Get all () flags. ",(0,o.yg)("em",{parentName:"p"},"damageflag used to be here"))),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},'\\"Returns true if contains all given () flags. ',(0,o.yg)("em",{parentName:"p"},"and here too"))),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Returns weapon name, even if weapon entity is gone")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Returns if stats should be recorded for damage weapon")),(0,o.yg)("h2",{id:"setters"},"Setters"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Sets whether this damage should force a kill")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Set the amount of damage")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Overrides the damage type that was set by script when firing the\nweapon.")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Add a damage flag.")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Remove damage flag.")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Sets the damage source identifier.")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Set what death (anim) package to use if this damage kills the guy.")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Set damage force vector")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Set which direction the target should flinch in.")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},"Add a () flag. ",(0,o.yg)("em",{parentName:"p"},"here aswell"))),(0,o.yg)("h2",{id:"utils"},"Utils"),(0,o.yg)("h2",{id:"helpers"},"Helpers"),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},":::: note\n::: title\nNote\n:::"),(0,o.yg)("p",{parentName:"blockquote"},"SERVER only\n::::")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},":::: note\n::: title\nNote\n:::"),(0,o.yg)("p",{parentName:"blockquote"},"SERVER only\n::::")),(0,o.yg)("blockquote",null,(0,o.yg)("p",{parentName:"blockquote"},":::: note\n::: title\nNote\n:::"),(0,o.yg)("p",{parentName:"blockquote"},"SERVER only\n::::")),(0,o.yg)("h2",{id:"damage-flag-overview"},"Damage Flags"),(0,o.yg)("p",null,"You can get a bitflag of all damage types used with\n",(0,o.yg)("inlineCode",{parentName:"p"},"DamageInfo_GetDamageType <DamageInfo-GetDamageType>"),'{.interpreted-text\nrole="ref"}.'),(0,o.yg)("p",null,"::: dropdown\nDamage flags"),(0,o.yg)("p",null,"List of all Damage flags"),(0,o.yg)("p",null,"  Variable name           Value"),(0,o.yg)("hr",null),(0,o.yg)("p",null,"  DF_GIB                  1\nDF_DISSOLVE             2\nDF_INSTANT              3\nDF_NO_SELF_DAMAGE       4\nDF_IMPACT               5\nDF_BYPASS_SHIELD        6\nDF_RAGDOLL              7\nDF_TITAN_STEP           8\nDF_RADIUS_DAMAGE        9\nDF_ELECTRICAL           10\nDF_BULLET               11\nDF_EXPLOSION            12\nDF_MELEE                13\nDF_NO_INDICATOR         14\nDF_KNOCK_BACK           15\nDF_STOPS_TITAN_REGEN    16\nDF_DISMEMBERMENT        17\nDF_MAX_RANGE            18\nDF_SHIELD_DAMAGE        19\nDF_CRITICAL             20\nDF_SKIP_DAMAGE_PROT     21\nDF_HEADSHOT             22\nDF_VORTEX_REFIRE        23\nDF_RODEO                24\nDF_BURN_CARD_WEAPON     25\nDF_KILLSHOT             26\nDF_SHOTGUN              27\nDF_SKIPS_DOOMED_STATE   28\nDF_DOOMED_HEALTH_LOSS   29\nDF_DOOM_PROTECTED       30\nDF_DOOM_FATALITY        31\nDF_NO_HITBEEP           32\n:::"),(0,o.yg)("p",null,"::: dropdown\nDamage types"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"global enum damageTypes\n{\n    gibs = (DF_GIB)\n    largeCaliberExp  = (DF_BULLET | DF_GIB | DF_EXPLOSION)\n    gibBullet = (DF_BULLET | DF_GIB)\n    instant = (DF_INSTANT)\n    dissolve = (DF_DISSOLVE)\n    projectileImpact = (DF_GIB)\n    pinkMist = (DF_GIB) //If updated from DF_GIB, change the DF_GIB in Arc Cannon to match.\n    ragdoll = (DF_RAGDOLL)\n    titanStepCrush = (DF_TITAN_STEP)\n    arcCannon = (DF_DISSOLVE | DF_GIB | DF_ELECTRICAL )\n    electric = (DF_ELECTRICAL) //Only increases Vortex Shield decay for bullet weapons atm.\n    explosive = (DF_RAGDOLL | DF_EXPLOSION )\n    bullet = (DF_BULLET)\n    largeCaliber = (DF_BULLET | DF_KNOCK_BACK)\n    shotgun = (DF_BULLET | DF_GIB | DF_SHOTGUN )\n    titanMelee = (DF_MELEE | DF_RAGDOLL)\n    titanBerserkerMelee = (DF_MELEE | DF_RAGDOLL)\n    titanEjectExplosion = (DF_GIB | DF_EXPLOSION)\n    dissolveForce = (DF_DISSOLVE | DF_KNOCK_BACK | DF_EXPLOSION)\n    rodeoBatteryRemoval = (DF_RODEO | DF_EXPLOSION | DF_STOPS_TITAN_REGEN )\n}\n")),(0,o.yg)("p",null,":::"))}g.isMDXComponent=!0}}]);