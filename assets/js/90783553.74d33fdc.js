"use strict";(self.webpackChunkns_wiki=self.webpackChunkns_wiki||[]).push([[6973],{9326:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var i=r(4848),s=r(8453);const t={},o="Getting Started",a={id:"guides/gettingstarted",title:"Getting Started",description:"Northstar supports the creation of many user mods. This guide will teach",source:"@site/docs/guides/gettingstarted.md",sourceDirName:"guides",slug:"/guides/gettingstarted",permalink:"/ns-wiki/docs/guides/gettingstarted",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/guides/gettingstarted.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contributing to ModdingDocs",permalink:"/ns-wiki/docs/guides/contributing"},next:{title:"index",permalink:"/ns-wiki/docs/guides/keyvalue/"}},l={},d=[{value:"Basics",id:"basics",level:2},{value:"Tools",id:"tools",level:2},{value:"Quick Start",id:"quick-start",level:2},{value:"Detailed <code>mod.json</code> architecture",id:"detailed-modjson-architecture",level:2},{value:"Name and description",id:"name-and-description",level:3},{value:"Version",id:"version",level:3},{value:"LoadPriority",id:"loadpriority",level:3},{value:"ConVars",id:"convars",level:3},{value:"Example",id:"example",level:4},{value:"Flags",id:"flags",level:4},{value:"FCVAR_CLIENTCMD_CAN_EXECUTE     1073741824   IVEngineClient::ClientCmd is allowed to execute this command.\r\nNote: IVEngineClient::ClientCmd_Unrestricted can run any client\r\ncommand.",id:"fcvar_clientcmd_can_execute-----1073741824---ivengineclientclientcmd-is-allowed-to-execute-this-commandnote-ivengineclientclientcmd_unrestricted-can-run-any-clientcommand",level:2},{value:"Scripts",id:"scripts",level:3},{value:"Path",id:"path",level:4},{value:"RunOn",id:"runon",level:4},{value:"GAMEMODE_at                         True if the given game mode is\r\nbeing loaded",id:"gamemode_at-------------------------true-if-the-given-game-mode-isbeing-loaded",level:2},{value:"ClientCallback / ServerCallback",id:"clientcallback--servercallback",level:4},{value:"Localisation",id:"localisation",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"getting-started",children:"Getting Started"})}),"\n",(0,i.jsx)(n.p,{children:"Northstar supports the creation of many user mods. This guide will teach\r\nyou the basics of modding to get you started."}),"\n",(0,i.jsxs)(n.p,{children:["Check out the ",(0,i.jsx)(n.code,{children:"usage"}),"  section for further\r\ninformation, including ",(0,i.jsx)(n.code,{children:"installation"})," ."]}),"\n",(0,i.jsx)(n.h2,{id:"basics",children:"Basics"}),"\n",(0,i.jsx)(n.p,{children:"This guide assumes you have basic understanding with programming and\r\nknow how to use developer environments. Listed below are tools useful\r\nfor exporting file formats."}),"\n",(0,i.jsxs)(n.p,{children:["If you'd like a more lengthy set of tutorials covering many topics.\r\nLook at: ",(0,i.jsx)(n.a,{href:"https://noskill.gitbook.io/titanfall2/",children:"NoSkill modding guide"})]}),"\n",(0,i.jsx)(n.h2,{id:"tools",children:"Tools"}),"\n",(0,i.jsxs)(n.p,{children:["To get started with modding for Northstar, we recommend getting yourself\r\nsome tools. Check out the ",(0,i.jsx)(n.code,{children:"tools"}),"  section\r\nfor more information."]}),"\n",(0,i.jsx)(n.h2,{id:"quick-start",children:"Quick Start"}),"\n",(0,i.jsxs)(n.p,{children:["In order to get started with making your mod, create a folder in\r\n",(0,i.jsx)(n.code,{children:"R2Northstar/mods"}),". While it isn't required, it is best practise by mod\r\nauthors to follow the naming scheme ",(0,i.jsx)(n.code,{children:"Author.ModName"}),", such as\r\n",(0,i.jsx)(n.code,{children:"Northstar.Client"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["After making this folder, inside it add a folder named ",(0,i.jsx)(n.code,{children:"mod"})," and a file\r\nnamed ",(0,i.jsx)(n.code,{children:"mod.json"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Provided is a template ",(0,i.jsx)(n.code,{children:"mod.json"}),", for a detailed list of values read\r\nthe ",(0,i.jsx)(n.code,{children:"cheatsheet"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\r\n   "Name": "Yourname.Modname",\r\n   "Description": "Woo yeah wooo!",\r\n\r\n   "LoadPriority": 0,\r\n   "ConVars": [],\r\n   "Scripts": [],\r\n   "Localisation": []\r\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Inside the ",(0,i.jsx)(n.code,{children:"mod"})," folder, existing files found in the engine's virtual\r\nfile system will be overwritten and new files can be added. If you need\r\nto define new Squirrel files ",(0,i.jsx)(n.code,{children:"(.nut/.gnut)"})," they ",(0,i.jsx)(n.em,{children:"must"})," be declared in\r\nthe ",(0,i.jsx)(n.code,{children:'"Scripts"'})," array in ",(0,i.jsx)(n.code,{children:"mod.json"}),". An example for this\r\nmight be:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"Scripts": [\r\n   {\r\n      "Path": "path/to/file.nut",\r\n      "RunOn": "( CLIENT || SERVER ) && MP"\r\n   },\r\n   {\r\n      "Path": "path/to/another_file.nut",\r\n      "RunOn": "( CLIENT || SERVER ) && MP",\r\n      "ClientCallback": {\r\n         "Before": "ClientPreMapspawnThing",\r\n         "After": "AfterMapspawnClientThing"\r\n      },\r\n      "ServerCallback": {\r\n         "Before": "ServerPreMapspawncrap",\r\n         "After": "ServerAfterMapspawnWoo"\r\n      }\r\n   }\r\n]\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:'"Path"'})," indicates where the script is, ",(0,i.jsx)(n.code,{children:'"RunOn"'})," is the Squirrel VM\r\ncontext (see ",(0,i.jsx)(n.code,{children:"../native/sqvm"})," ) as an\r\nexpression, and ",(0,i.jsx)(n.code,{children:'"ClientCallback"'})," and ",(0,i.jsx)(n.code,{children:'"ServerCallback"'})," specify a\r\nfunction call that can be ",(0,i.jsx)(n.code,{children:'"Before"'})," and/or ",(0,i.jsx)(n.code,{children:'"After"'})," map-spawn."]}),"\n",(0,i.jsxs)(n.h2,{id:"detailed-modjson-architecture",children:["Detailed ",(0,i.jsx)(n.code,{children:"mod.json"})," architecture"]}),"\n",(0,i.jsxs)(n.p,{children:["Located at your mod's root folder, the ",(0,i.jsx)(n.code,{children:"mod.json"})," file is the\r\nentrypoint of your mod; it contains human-readable information about it,\r\nwhich scripts to load, and a bunch of interesting stuff."]}),"\n",(0,i.jsxs)(n.p,{children:["This guide will dig into each of the possible ",(0,i.jsx)(n.code,{children:"mod.json"})," fields. Please\r\nnote that ",(0,i.jsx)(n.code,{children:"mod.json"})," keys must start with an uppercase letter."]}),"\n",(0,i.jsxs)(n.p,{children:["This is what a well-formatted ",(0,i.jsx)(n.code,{children:"mod.json"})," looks like:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\r\n    "Name": "Northstar.CustomServers",\r\n    "Description": "Attempts to recreate the behaviour of vanilla Titanfall 2 servers, as well as changing some scripts to allow better support for mods",\r\n    "Version": "1.5.0",\r\n    "LoadPriority": 0,\r\n    "ConVars": [\r\n        {\r\n            "Name": "ns_private_match_last_mode",\r\n            "DefaultValue": "tdm"\r\n        },\r\n        {\r\n            "Name": "ns_private_match_last_map",\r\n            "DefaultValue": "mp_forwardbase_kodai"\r\n        }\r\n    ],\r\n    "Scripts": [\r\n        {\r\n            "Path": "sh_northstar_utils.gnut",\r\n            "RunOn": "CLIENT || SERVER || UI"\r\n        },\r\n        {\r\n            "Path": "mp/_classic_mp_dropship_intro.gnut",\r\n            "RunOn": "SERVER && MP"\r\n        }\r\n    ],\r\n    "Localisation": [\r\n        "resource/northstar_custom_%language%.txt"\r\n    ]\r\n}\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["The real ",(0,i.jsx)(n.code,{children:"Northstar.CustomServers"})," mod contains more convars and\r\nscripts, some have been removed for the readability of the example."]})}),"\n",(0,i.jsx)(n.h3,{id:"name-and-description",children:"Name and description"}),"\n",(0,i.jsxs)(n.p,{children:["Those ones are pretty self-explanatory. Both fields are used by\r\nNorthstar itself to display in-game information about your mod in the\r\nmain screen ",(0,i.jsx)(n.code,{children:"Mods"})," menu."]}),"\n",(0,i.jsxs)(n.p,{children:["Best pratice for your mod's name is to use the ",(0,i.jsx)(n.code,{children:"Author.ModName"}),"\r\nconvention."]}),"\n",(0,i.jsx)(n.h3,{id:"version",children:"Version"}),"\n",(0,i.jsxs)(n.p,{children:["This field specifies version of your mod using ",(0,i.jsx)(n.code,{children:"X.Y.Z"})," scheme; this\r\nfield must be updated each time you release a new version of your mod."]}),"\n",(0,i.jsxs)(n.p,{children:["Common use is to increase ",(0,i.jsx)(n.em,{children:"Z"})," when you publish a fix (",(0,i.jsx)(n.em,{children:"e.g."})," ",(0,i.jsx)(n.code,{children:"1.5.0"})," to\r\n",(0,i.jsx)(n.code,{children:"1.5.1"}),"), and increase ",(0,i.jsx)(n.em,{children:"Y"})," when you release new features (",(0,i.jsx)(n.em,{children:"e.g."})," ",(0,i.jsx)(n.code,{children:"1.5.1"}),"\r\nto ",(0,i.jsx)(n.code,{children:"1.6.0"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["Best practise is to follow semantic versioning (",(0,i.jsx)(n.a,{href:"https://semver.org/",children:"https://semver.org/"}),")."]}),"\n",(0,i.jsx)(n.h3,{id:"loadpriority",children:"LoadPriority"}),"\n",(0,i.jsxs)(n.p,{children:["This field defines the order in which all mods will be loaded by\r\nNorthstar. For example, a mod with ",(0,i.jsx)(n.code,{children:'"LoadPriority": 1'})," will be loaded\r\nafter a mod with ",(0,i.jsx)(n.code,{children:'"LoadPriority": 0'}),"."]}),"\n",(0,i.jsx)(n.p,{children:"If your mod uses code from another mod, make sure to set a greater\r\nLoadPriority than the mod you're using code from."}),"\n",(0,i.jsx)(n.h3,{id:"convars",children:"ConVars"}),"\n",(0,i.jsx)(n.p,{children:"This field lists configuration variables, that can be set by servers\r\nowners to modify behaviour of your mod."}),"\n",(0,i.jsxs)(n.p,{children:["Each configuration variable must have a ",(0,i.jsx)(n.code,{children:'"Name"'})," and a ",(0,i.jsx)(n.code,{children:'"DefaultValue"'}),".\r\nConVars can also have an optional ",(0,i.jsx)(n.code,{children:'"Flags"'})," field which specifies\r\nspecial behaviour and an optional ",(0,i.jsx)(n.code,{children:'"HelpString"'})," field which specifies\r\nthe usage of the ConVar which can be view in-game by running\r\n",(0,i.jsx)(n.code,{children:"help <convar>"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["You can access configuration variables from squirrel code using\r\n",(0,i.jsx)(n.code,{children:"GetConVarInt"}),", ",(0,i.jsx)(n.code,{children:"GetConVarFloat"}),", ",(0,i.jsx)(n.code,{children:"GetConVarBool"})," or ",(0,i.jsx)(n.code,{children:"GetConVarString"}),"\r\ncalls."]}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"No matter the type of your variables, they have to be JSON strings,\r\notherwise game won't start!"})}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["If I don't want to wait 15 seconds for matches to start on my server,\r\n",(0,i.jsx)(n.code,{children:"Northstar.CustomServers"})," mod exposes a ConVar named\r\n",(0,i.jsx)(n.code,{children:"ns_private_match_countdown_length"})," in its ",(0,i.jsx)(n.code,{children:"mod.json"})," manifesto:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"ConVars": [\r\n    {\r\n        "Name": "ns_private_match_countdown_length",\r\n        "DefaultValue": "15"\r\n    },\r\n\r\n    ...\r\n]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["I can setup the ",(0,i.jsx)(n.code,{children:"ns_private_match_countdown_length"})," variable in my\r\n",(0,i.jsx)(n.code,{children:"R2Northstar/mods/Northstar.CustomServers/mod/cfg/autoexec_ns_server.cfg"}),"\r\nconfiguration file."]}),"\n",(0,i.jsxs)(n.p,{children:["When starting a match, ",(0,i.jsx)(n.code,{children:"Northstar.CustomServers"})," mod will retrieve the\r\nconfiguration variable value, or its default value if it hasn't been\r\nspecified in configuration file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'// start countdown\r\nSetUIVar( level, "gameStartTime", Time() + GetConVarFloat( "ns_private_match_countdown_length" ) )\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["All ",(0,i.jsx)(n.code,{children:"Northstar.CustomServers"})," ConVars are listed here:\r\n",(0,i.jsx)(n.a,{href:"https://r2northstar.gitbook.io/r2northstar-wiki/hosting-a-server-with-northstar/basic-listen-server",children:"https://r2northstar.gitbook.io/r2northstar-wiki/hosting-a-server-with-northstar/basic-listen-server"})]})}),"\n",(0,i.jsx)(n.h4,{id:"flags",children:"Flags"}),"\n",(0,i.jsx)(n.p,{children:"You can assign flags to configuration variables; to use several flags at\r\nonce, just add their values."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"Name                            Value        Description"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"FCVAR_UNREGISTERED              1            If this is set, don't add to linked list, etc."}),"\n",(0,i.jsx)(n.p,{children:"FCVAR_DEVELOPMENTONLY           2            Hidden in released products. Flag is removed automatically if\r\nALLOW_DEVELOPMENT_CVARS is defined."}),"\n",(0,i.jsx)(n.p,{children:"FCVAR_GAMEDLL                   4            Defined by the game DLL"}),"\n",(0,i.jsx)(n.p,{children:"FCVAR_CLIENTDLL                 8            Defined by the client DLL"}),"\n",(0,i.jsx)(n.p,{children:"FCVAR_HIDDEN                    16           Hidden. Doesn't appear in find or auto complete. Not deterred\r\nby ALLOW_DEVELOPMENT_CVARS."}),"\n",(0,i.jsx)(n.p,{children:"FCVAR_PROTECTED                 32           It's a server cvar, but we don't send the data since it's a\r\npassword, etc. Sends 1 if it's not bland/zero, 0 otherwise as\r\nvalue."}),"\n",(0,i.jsx)(n.p,{children:"FCVAR_SPONLY                    64           This cvar cannot be changed by clients connected to a\r\nmultiplayer server."}),"\n",(0,i.jsx)(n.p,{children:"FCVAR_ARCHIVE                   128          Save this ConVar's value to vars.rc - this works both server\r\nand client-side."}),"\n",(0,i.jsx)(n.p,{children:"FCVAR_NOTIFY                    256          Notifies players when this ConVar's value was changed."}),"\n",(0,i.jsx)(n.p,{children:"FCVAR_USERINFO                  512          Changes the client's info string"}),"\n",(0,i.jsx)(n.p,{children:"FCVAR_PRINTABLEONLY             1024         This cvar's string cannot contain unprintable characters (\r\ne.g., used for player name etc )."}),"\n",(0,i.jsx)(n.p,{children:"FCVAR_UNLOGGED                  2048         If this is a FCVAR_SERVER, don't log changes to the log file /\r\nconsole if we are creating a log"}),"\n",(0,i.jsx)(n.p,{children:"FCVAR_NEVER_AS_STRING           4096         never try to print that cvar"}),"\n",(0,i.jsx)(n.p,{children:"FCVAR_REPLICATED (AKA           8192         This value is set by server and replicated by clients.\r\nFCVAR_SERVER)"}),"\n",(0,i.jsx)(n.p,{children:"FCVAR_CHEAT                     16384        Do NOT allow changing of this convar by console, unless\r\nsv_cheats is 1."}),"\n",(0,i.jsx)(n.p,{children:"FCVAR_SS                        32768        causes varnameN where N == 2 through max splitscreen slots for\r\nmod to be autogenerated"}),"\n",(0,i.jsx)(n.p,{children:"FCVAR_DEMO                      65536        Record this cvar in a demo."}),"\n",(0,i.jsx)(n.p,{children:"FCVAR_DONTRECORD                131072       Don't record this."}),"\n",(0,i.jsx)(n.p,{children:'FCVAR_SS_ADDED                  262144       This is one of the "added" FCVAR_SS variables for the\r\nsplitscreen players'}),"\n",(0,i.jsx)(n.p,{children:"FCVAR_RELEASE                   524288       This value is available to the end user."}),"\n",(0,i.jsx)(n.p,{children:"FCVAR_RELOAD_MATERIALS          1048576      If this cvar changes, it forces a material reload"}),"\n",(0,i.jsx)(n.p,{children:"FCVAR_RELOAD_TEXTURES           2097152      If this cvar changes, it forces a texture reload"}),"\n",(0,i.jsx)(n.p,{children:"FCVAR_NOT_CONNECTED             4194304      cvar cannot be changed by a client that is connected to a server"}),"\n",(0,i.jsx)(n.p,{children:"FCVAR_MATERIAL_SYSTEM_THREAD    8388608      Indicates this cvar is read from the material system thread"}),"\n",(0,i.jsx)(n.p,{children:"FCVAR_ARCHIVE_PLAYERPROFILE     16777216     Save this, but to profile.cfg instead - meaning this only works\r\nfor clients."}),"\n",(0,i.jsx)(n.p,{children:"FCVAR_ACCESSIBLE_FROM_THREADS   33554432     used as a debugging tool necessary to check material system\r\nthread convars"}),"\n",(0,i.jsx)(n.p,{children:"FCVAR_SERVER_CAN_EXECUTE        268435456    the server is allowed to execute this command on clients via\r\nClientCommand/NET_StringCmd/CBaseClientState::ProcessStringCmd"}),"\n",(0,i.jsx)(n.p,{children:"FCVAR_SERVER_CANNOT_QUERY       536870912    If this is set, then the server is not allowed to query this\r\ncvar's value (via IServerPluginHelpers::StartQueryCvarValue)."}),"\n",(0,i.jsx)(n.h2,{id:"fcvar_clientcmd_can_execute-----1073741824---ivengineclientclientcmd-is-allowed-to-execute-this-commandnote-ivengineclientclientcmd_unrestricted-can-run-any-clientcommand",children:"FCVAR_CLIENTCMD_CAN_EXECUTE     1073741824   IVEngineClient::ClientCmd is allowed to execute this command.\r\nNote: IVEngineClient::ClientCmd_Unrestricted can run any client\r\ncommand."}),"\n",(0,i.jsx)(n.p,{children:": Configuration variable flags"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"Some flags have been skipped due to them being generally useless unless\r\nyou have very specific requirements."})}),"\n",(0,i.jsx)(n.h3,{id:"scripts",children:"Scripts"}),"\n",(0,i.jsx)(n.p,{children:"The scripts field lets you declare an array of Squirrel files to import\r\ninto your mod."}),"\n",(0,i.jsx)(n.p,{children:'Each script entry must have a "Path" value and a "RunOn" value.'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"Scripts": [\r\n    {\r\n        "Path": "path/to/file.nut",\r\n        "RunOn": "( CLIENT || SERVER ) && MP"\r\n    },\r\n    {\r\n        "Path": "path/to/another_file.nut",\r\n        "RunOn": "( CLIENT || SERVER ) && MP",\r\n        "ClientCallback": {\r\n            "Before": "ClientPreMapspawnThing",\r\n            "After": "AfterMapspawnClientThing"\r\n        },\r\n        "ServerCallback": {\r\n            "Before": "ServerPreMapspawncrap",\r\n            "After": "ServerAfterMapspawnWoo"\r\n        }\r\n    }\r\n]\n'})}),"\n",(0,i.jsx)(n.h4,{id:"path",children:"Path"}),"\n",(0,i.jsxs)(n.p,{children:["Path of the Squirrel file to import, without ",(0,i.jsx)(n.code,{children:"mod/scripts/vscripts"}),"\r\nprefix (that's where your script files should go)."]}),"\n",(0,i.jsx)(n.h4,{id:"runon",children:"RunOn"}),"\n",(0,i.jsx)(n.p,{children:"A boolean expression which tells the game when and in which context to\r\ncompile the script."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"Name                                Description"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"SERVER                              Server script VM, recompiles on map\r\nchange"}),"\n",(0,i.jsx)(n.p,{children:"CLIENT                              Client script VM, recompiles on map\r\nchange"}),"\n",(0,i.jsx)(n.p,{children:"UI                                  UI script VM, recompiles on when\r\n[uiscript_reset] is ran"}),"\n",(0,i.jsx)(n.p,{children:"SP                                  Singleplayer"}),"\n",(0,i.jsx)(n.p,{children:"MP                                  Multiplayer"}),"\n",(0,i.jsx)(n.p,{children:"DEV                                 Value of developer convar"}),"\n",(0,i.jsx)(n.p,{children:"LOBBY                               True in mp_lobby. (Server and\r\nclient VMs only)"}),"\n",(0,i.jsx)(n.p,{children:"MAP_mp_box                          True if the given map name is being\r\nloaded"}),"\n",(0,i.jsx)(n.h2,{id:"gamemode_at-------------------------true-if-the-given-game-mode-isbeing-loaded",children:"GAMEMODE_at                         True if the given game mode is\r\nbeing loaded"}),"\n",(0,i.jsx)(n.p,{children:": Avalible flags"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"CLIENT && !LOBBY"})," - Compiles on client and not in the lobby. So during\r\nactual singeplayer and multiplayer gameplay."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"CLIENT && MP && !LOBBY"})," - Compiles on client, only in multiplayer and\r\nnot in the lobby."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"( CLIENT || SERVER ) && MP"})," - Compiles on both client and server only\r\nin multiplayer."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"CLIENT && SP && MAP_sp_boomtown"})," - Compiles only on client in\r\nsingleplayer only when the map ",(0,i.jsx)(n.code,{children:"sp_boomtown"})," is loaded. ( Here ",(0,i.jsx)(n.code,{children:"SP"}),"\r\nisn't needed as ",(0,i.jsx)(n.code,{children:"sp_boomtown"})," is singleplayer only )"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"CLIENT && GAMEMODE_aitdm"})," - Compiles on client on both singleplayer and\r\nmultiplayer only when the ",(0,i.jsx)(n.code,{children:"aitdm"})," gamemode is set. ( ",(0,i.jsx)(n.code,{children:"aitdm"})," is\r\nattrition which is multiplayer only so this script only compiles on\r\nmultiplayer )"]}),"\n",(0,i.jsx)(n.h4,{id:"clientcallback--servercallback",children:"ClientCallback / ServerCallback"}),"\n",(0,i.jsx)(n.p,{children:"Specify methods that will be called before/after map spawn."}),"\n",(0,i.jsx)(n.h3,{id:"localisation",children:"Localisation"}),"\n",(0,i.jsx)(n.p,{children:"This field is an array listing localisation files relative paths."}),"\n",(0,i.jsxs)(n.p,{children:["For more info about localisation works on Northstar, read the\r\n",(0,i.jsx)(n.code,{children:"localisation"}),"  section."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"This project is under active development."})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var i=r(6540);const s={},t=i.createContext(s);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);