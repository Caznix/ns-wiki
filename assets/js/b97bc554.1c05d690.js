"use strict";(self.webpackChunkns_wiki=self.webpackChunkns_wiki||[]).push([[6064],{3571:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var r=s(4848),i=s(8453);const t={},a="Serverside RUI {#serverside-rui-doc}",l={id:"reference/northstar/serversiderui",title:"Serverside RUI",description:"serverside-rui-doc}",source:"@site/docs/reference/northstar/serversiderui.md",sourceDirName:"reference/northstar",slug:"/reference/northstar/serversiderui",permalink:"/ns-wiki/docs/reference/northstar/serversiderui",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/reference/northstar/serversiderui.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Safe I/O",permalink:"/ns-wiki/docs/reference/northstar/safeio"},next:{title:"Useful Functions",permalink:"/ns-wiki/docs/reference/northstar/usefulfuncs"}},o={},c=[{value:"Polls",id:"polls",level:2},{value:"Getting Response",id:"getting-response",level:3},{value:"Large Message",id:"large-message",level:2},{value:"Info Message",id:"info-message",level:2},{value:"PopUp",id:"popup",level:2},{value:"Announcement",id:"announcement",level:2},{value:"Status",id:"status",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"serverside-rui-doc",children:"Serverside RUI"})}),"\n",(0,r.jsxs)(n.p,{children:["Server-side Rui provides a set of functions enabling servers to display\r\ncomplex hud elements on clients without requiring a client-side mod.\r\nThese functions were introduced in Northstar ",(0,r.jsx)(n.code,{children:"1.10.0"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"It should be noted that there's no guarantee the client will see the hud\r\nelements."}),"\n",(0,r.jsx)(n.h2,{id:"polls",children:"Polls"}),"\n",(0,r.jsxs)(n.p,{children:["Creates a poll on ",(0,r.jsx)(n.code,{children:"player"}),"."]}),"\n",(0,r.jsxs)("figure",{class:"screenshotalign-center",children:[(0,r.jsx)("img",{src:"/_static/serversiderui/vote.png",class:"screenshot",alt:"/_static/serversiderui/vote.png"}),(0,r.jsx)("figcaption",{children:"Player POV"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Definition:"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'void function CreateDummyPoll()\r\n {\r\n    array<string> options = [ "Vote for a map!", "Amongsus", "sussy", "when", "1.10", "hi H0l0" ]\r\n    foreach(entity player in GetPlayerArray())\r\n        NSCreatePollOnPlayer(player, "Vote who\'s the biggest dummy!", options, 30)\r\n  }\n'})}),"\n",(0,r.jsx)(n.h3,{id:"getting-response",children:"Getting Response"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Definition:"})}),"\n",(0,r.jsxs)(n.p,{children:["Returns the index of the item from ",(0,r.jsx)(n.code,{children:"options"})," the player voted for. If\r\nthe player hadn't voted yet it returns a -1."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'void function CheckResponseToDummyPoll(entity player)\r\n{\r\n    if(NSGetPlayerResponse(player) != -1)\r\n        print("Player has voted!")\r\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"large-message",children:"Large Message"}),"\n",(0,r.jsxs)(n.p,{children:["Sends a large message to ",(0,r.jsx)(n.code,{children:"player"})," which will appear in the top right\r\ncorner."]}),"\n",(0,r.jsxs)("figure",{class:"screenshotalign-center",children:[(0,r.jsx)("img",{src:"/_static/serversiderui/largemessage.gif",class:"screenshot",alt:"/_static/serversiderui/largemessage.gif"}),(0,r.jsx)("figcaption",{children:"Player POV"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Definition:"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'void function SendDummyLargeMessage(entity player)\r\n{\r\n    NSSendLargeMessageToPlayer(player,"I\'m not a dummy >:(", "You are", 10, "ui/fd_tutorial_tip.rpak")\r\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"info-message",children:"Info Message"}),"\n",(0,r.jsxs)(n.p,{children:["Sends a smaller message to ",(0,r.jsx)(n.code,{children:"player"})," which will appear from the center\r\nright."]}),"\n",(0,r.jsxs)("figure",{class:"screenshotalign-center",children:[(0,r.jsx)("img",{src:"/_static/serversiderui/info.gif",class:"screenshot",alt:"/_static/serversiderui/info.gif"}),(0,r.jsx)("figcaption",{children:"Player POV"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Definition:"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'void function SendDummyInfoMessage(entity player)\r\n{\r\n    NSSendInfoMessageToPlayer(player, "we were sent at the same time but I was sent sooner")\r\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"popup",children:"PopUp"}),"\n",(0,r.jsxs)(n.p,{children:["Send a small popup to ",(0,r.jsx)(n.code,{children:"player"})," which will appear in the lower half of\r\ntheir screen under their cursor."]}),"\n",(0,r.jsxs)("figure",{class:"screenshotalign-center",children:[(0,r.jsx)("img",{src:"/_static/serversiderui/popup.gif",class:"screenshot",alt:"/_static/serversiderui/popup.gif"}),(0,r.jsx)("figcaption",{children:"Player POV"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Definition:"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'void funcions SendDummyPopUp(entity player)\r\n{\r\n    NSSendPopUpMessageToPlayer(player, "very cool text I like")\r\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"announcement",children:"Announcement"}),"\n",(0,r.jsxs)(n.p,{children:["Sends a large announcement to ",(0,r.jsx)(n.code,{children:"player"}),"."]}),"\n",(0,r.jsxs)("figure",{class:"screenshotalign-center",children:[(0,r.jsx)("img",{src:"/_static/serversiderui/announcement.gif",class:"screenshot",alt:"/_static/serversiderui/announcement.gif"}),(0,r.jsx)("figcaption",{children:"Player POV"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Definition:"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Example:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'void function SendDummyAnnouncement(entity player)\r\n{\r\n    NSSendAnnouncementMessageToPlayer(player, "Very cool announcement", "Hi Karma", <1,1,0>, 1, ANNOUNCEMENT_STYLE_QUICK)\r\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"status",children:"Status"}),"\n",(0,r.jsx)(n.p,{children:"Status messages allow you to show live data to the player. Currently\r\nstatus messages are limited to 4 and there's no way to know if the\r\nplayer can see your message."}),"\n",(0,r.jsxs)("figure",{class:"screenshotalign-center",children:[(0,r.jsx)("img",{src:"/_static/serversiderui/status.gif",class:"screenshot",alt:"/_static/serversiderui/status.gif"}),(0,r.jsx)("figcaption",{children:"Player POV"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Definitions:"})}),"\n",(0,r.jsxs)(n.p,{children:["Creates a status message on ",(0,r.jsx)(n.code,{children:"player"}),". ",(0,r.jsx)(n.code,{children:"id"})," is used to identify and edit\r\nthe message, make sure your id is unique! To generate a unique id, use\r\nUniqueString()."]}),"\n",(0,r.jsxs)(n.p,{children:["Allows for editing of the ",(0,r.jsx)(n.code,{children:"title"})," and ",(0,r.jsx)(n.code,{children:"description"})," of a message which\r\nwas created using ",(0,r.jsx)(n.code,{children:"id"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Deletes the status message which was created with ",(0,r.jsx)(n.code,{children:"id"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Examples:"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'void function TestStatusMessage_Threaded(entity player)\r\n{\r\n    string id = UniqueString("votes#")\r\n    NSCreateStatusMessageOnPlayer(player, "have voted", "[0/12]", id)\r\n    wait 3\r\n    NSEditStatusMessageOnPlayer(player, "have voted", "[1/12]", id)\r\n    wait 10\r\n    NSDeleteStatusMessageOnPlayer(player, id)    \r\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>a,x:()=>l});var r=s(6540);const i={},t=r.createContext(i);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);