"use strict";(self.webpackChunkns_wiki=self.webpackChunkns_wiki||[]).push([[643],{19:(e,t,a)=>{a.d(t,{A:()=>d});var n=a(6540),r=a(53),l=a(467),s=a(4676);const i={sidebar:"sidebar_q+wC",sidebarItemTitle:"sidebarItemTitle_9G5K",sidebarItemList:"sidebarItemList_6T4b",sidebarItem:"sidebarItem_cjdF",sidebarItemLink:"sidebarItemLink_zyXk",sidebarItemLinkActive:"sidebarItemLinkActive_wcJs"};var o=a(4798);function c(e){let{sidebar:t}=e;return 0===t.items.length?null:n.createElement("nav",{className:(0,r.A)(i.sidebar,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,r.A)(i.sidebarItemTitle,"margin-bottom--md")},t.title),n.createElement("ul",{className:i.sidebarItemList},t.items.map((e=>n.createElement("li",{key:e.permalink,className:i.sidebarItem},n.createElement(s.A,{isNavLink:!0,to:e.permalink,className:i.sidebarItemLink,activeClassName:i.sidebarItemLinkActive},e.title))))))}var m=a(1461);const d=function(e){const{sidebar:t,toc:a,children:s,...i}=e,o=t&&t.items.length>0;return n.createElement(l.A,i,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},o&&n.createElement("aside",{className:"col col--3"},n.createElement(c,{sidebar:t})),n.createElement("main",{className:(0,r.A)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&n.createElement("div",{className:"col col--2"},n.createElement(m.A,{toc:a})))))}},3861:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(6540),r=a(4586),l=a(19),s=a(1715),i=a(4676),o=a(4798);const c=function(e){const{metadata:t}=e,{previousPage:a,nextPage:r}=t;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,o.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(i.A,{className:"pagination-nav__link",to:a},n.createElement("div",{className:"pagination-nav__label"},"\xab"," ",n.createElement(o.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&n.createElement(i.A,{className:"pagination-nav__link",to:r},n.createElement("div",{className:"pagination-nav__label"},n.createElement(o.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))};var m=a(9777);const d=function(e){const{metadata:t,items:a,sidebar:i}=e,{siteConfig:{title:o}}=(0,r.A)(),{blogDescription:d,blogTitle:u,permalink:g}=t,p="/"===g?o:u;return n.createElement(l.A,{title:p,description:d,wrapperClassName:m.GN.wrapper.blogPages,pageClassName:m.GN.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"},sidebar:i},a.map((e=>{let{content:t}=e;return n.createElement(s.A,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},n.createElement(t,null))})),n.createElement(c,{metadata:t}))}},1715:(e,t,a)=>{a.d(t,{A:()=>_});var n=a(6540),r=a(53),l=a(5680),s=a(4798),i=a(4676),o=a(6025),c=a(9777),m=a(6597),d=a(6458);const u="blogPostTitle_d4p0",g="blogPostData_-Im+",p="blogPostDetailsFull_xD8n";var h=a(2853);const b="image_9q7L";const E=function(e){let{author:t}=e;const{name:a,title:r,url:l,imageURL:s}=t;return n.createElement("div",{className:"avatar margin-bottom--sm"},s&&n.createElement(i.A,{className:"avatar__photo-link avatar__photo",href:l},n.createElement("img",{className:b,src:s,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(i.A,{href:l,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},v={authorCol:"authorCol_8c0z"};function f(e){let{authors:t,assets:a}=e;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map(((e,t)=>n.createElement("div",{className:(0,r.A)("col col--6",v.authorCol),key:t},n.createElement(E,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}const _=function(e){const t=function(){const{selectMessage:e}=(0,c.Ww)();return t=>{const a=Math.ceil(t);return e(a,(0,s.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,o.h)(),{children:b,frontMatter:E,assets:v,metadata:_,truncated:N,isBlogPostPage:A=!1}=e,{date:k,formattedDate:T,permalink:L,tags:P,readingTime:w,title:C,editUrl:I,authors:y}=_,R=v.image??E.image;return n.createElement("article",{className:A?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(()=>{const e=A?"h1":"h2";return n.createElement("header",null,n.createElement(e,{className:u,itemProp:"headline"},A?C:n.createElement(i.A,{itemProp:"url",to:L},C)),n.createElement("div",{className:(0,r.A)(g,"margin-vert--md")},n.createElement("time",{dateTime:k,itemProp:"datePublished"},T),void 0!==w&&n.createElement(n.Fragment,null," \xb7 ",t(w))),n.createElement(f,{authors:y,assets:v}))})(),R&&n.createElement("meta",{itemProp:"image",content:a(R,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody"},n.createElement(l.xA,{components:m.A},b)),(P.length>0||N)&&n.createElement("footer",{className:(0,r.A)("row docusaurus-mt-lg",{[p]:A})},P.length>0&&n.createElement("div",{className:(0,r.A)("col",{"col--9":!A})},n.createElement(h.A,{tags:P})),A&&I&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.A,{editUrl:I})),!A&&N&&n.createElement("div",{className:"col col--3 text--right"},n.createElement(i.A,{to:_.permalink,"aria-label":`Read more about ${C}`},n.createElement("b",null,n.createElement(s.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},6458:(e,t,a)=>{a.d(t,{A:()=>m});var n=a(6540),r=a(4798),l=a(8168),s=a(53);const i="iconEdit_mS5F",o=e=>{let{className:t,...a}=e;return n.createElement("svg",(0,l.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.A)(i,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var c=a(9777);function m(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.GN.common.editThisPage},n.createElement(o,null),n.createElement(r.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1461:(e,t,a)=>{a.d(t,{m:()=>g,A:()=>p});var n=a(6540),r=a(53),l=a(9777);function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function i(e){let{anchorTopOffset:t}=e;const a=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),n=a.find((e=>s(e).top>=t));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(n))?n:a[a.indexOf(n)-1]??null}return a[a.length-1]}function o(){const e=(0,n.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.pN)();return(0,n.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const c=function(e){const t=(0,n.useRef)(void 0),a=o();(0,n.useEffect)((()=>{const{linkClassName:n,linkActiveClassName:r}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=i({anchorTopOffset:a.current}),s=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current?.classList.remove(r),e.classList.add(r),t.current=e):e.classList.remove(r)}(e,e===s)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},m="tableOfContents_vrFS",d="table-of-contents__link",u={linkClassName:d,linkActiveClassName:"table-of-contents__link--active"};function g(e){let{toc:t,isChild:a}=e;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((e=>n.createElement("li",{key:e.id},n.createElement("a",{href:`#${e.id}`,className:d,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(g,{isChild:!0,toc:e.children}))))):null}const p=function(e){let{toc:t}=e;return c(u),n.createElement("div",{className:(0,r.A)(m,"thin-scrollbar")},n.createElement(g,{toc:t}))}},3373:(e,t,a)=>{a.d(t,{A:()=>c});var n=a(6540),r=a(53),l=a(4676);const s="tag_WK-t",i="tagRegular_LXbV",o="tagWithCount_S5Zl";const c=function(e){const{permalink:t,name:a,count:c}=e;return n.createElement(l.A,{href:t,className:(0,r.A)(s,{[i]:!c,[o]:c})},a,c&&n.createElement("span",null,c))}},2853:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(6540),r=a(53),l=a(4798),s=a(3373);const i={tags:"tags_NBRY",tag:"tag_F03v"};function o(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(l.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.A)(i.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:i.tag},n.createElement(s.A,{name:t,permalink:a}))}))))}}}]);