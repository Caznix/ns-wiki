"use strict";(self.webpackChunkns_wiki=self.webpackChunkns_wiki||[]).push([[4813],{19:(e,t,a)=>{a.d(t,{A:()=>d});var r=a(6540),n=a(53),l=a(467),s=a(4676);const i={sidebar:"sidebar_q+wC",sidebarItemTitle:"sidebarItemTitle_9G5K",sidebarItemList:"sidebarItemList_6T4b",sidebarItem:"sidebarItem_cjdF",sidebarItemLink:"sidebarItemLink_zyXk",sidebarItemLinkActive:"sidebarItemLinkActive_wcJs"};var o=a(4798);function c(e){let{sidebar:t}=e;return 0===t.items.length?null:r.createElement("nav",{className:(0,n.A)(i.sidebar,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,n.A)(i.sidebarItemTitle,"margin-bottom--md")},t.title),r.createElement("ul",{className:i.sidebarItemList},t.items.map((e=>r.createElement("li",{key:e.permalink,className:i.sidebarItem},r.createElement(s.A,{isNavLink:!0,to:e.permalink,className:i.sidebarItemLink,activeClassName:i.sidebarItemLinkActive},e.title))))))}var m=a(1461);const d=function(e){const{sidebar:t,toc:a,children:s,...i}=e,o=t&&t.items.length>0;return r.createElement(l.A,i,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},o&&r.createElement("aside",{className:"col col--3"},r.createElement(c,{sidebar:t})),r.createElement("main",{className:(0,n.A)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&r.createElement("div",{className:"col col--2"},r.createElement(m.A,{toc:a})))))}},1715:(e,t,a)=>{a.d(t,{A:()=>N});var r=a(6540),n=a(53),l=a(5680),s=a(4798),i=a(4676),o=a(6025),c=a(9777),m=a(6597),d=a(6458);const u="blogPostTitle_d4p0",g="blogPostData_-Im+",h="blogPostDetailsFull_xD8n";var p=a(2853);const b="image_9q7L";const E=function(e){let{author:t}=e;const{name:a,title:n,url:l,imageURL:s}=t;return r.createElement("div",{className:"avatar margin-bottom--sm"},s&&r.createElement(i.A,{className:"avatar__photo-link avatar__photo",href:l},r.createElement("img",{className:b,src:s,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(i.A,{href:l,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},f={authorCol:"authorCol_8c0z"};function v(e){let{authors:t,assets:a}=e;return 0===t.length?r.createElement(r.Fragment,null):r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map(((e,t)=>r.createElement("div",{className:(0,n.A)("col col--6",f.authorCol),key:t},r.createElement(E,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}const N=function(e){const t=function(){const{selectMessage:e}=(0,c.Ww)();return t=>{const a=Math.ceil(t);return e(a,(0,s.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,o.h)(),{children:b,frontMatter:E,assets:f,metadata:N,truncated:A,isBlogPostPage:_=!1}=e,{date:k,formattedDate:T,permalink:P,tags:L,readingTime:w,title:C,editUrl:y,authors:I}=N,R=f.image??E.image;return r.createElement("article",{className:_?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(()=>{const e=_?"h1":"h2";return r.createElement("header",null,r.createElement(e,{className:u,itemProp:"headline"},_?C:r.createElement(i.A,{itemProp:"url",to:P},C)),r.createElement("div",{className:(0,n.A)(g,"margin-vert--md")},r.createElement("time",{dateTime:k,itemProp:"datePublished"},T),void 0!==w&&r.createElement(r.Fragment,null," \xb7 ",t(w))),r.createElement(v,{authors:I,assets:f}))})(),R&&r.createElement("meta",{itemProp:"image",content:a(R,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(l.xA,{components:m.A},b)),(L.length>0||A)&&r.createElement("footer",{className:(0,n.A)("row docusaurus-mt-lg",{[h]:_})},L.length>0&&r.createElement("div",{className:(0,n.A)("col",{"col--9":!_})},r.createElement(p.A,{tags:L})),_&&y&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(d.A,{editUrl:y})),!_&&A&&r.createElement("div",{className:"col col--3 text--right"},r.createElement(i.A,{to:N.permalink,"aria-label":`Read more about ${C}`},r.createElement("b",null,r.createElement(s.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},6033:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var r=a(6540),n=a(4676),l=a(19),s=a(1715),i=a(4798),o=a(9777);function c(e){const{metadata:t,items:a,sidebar:c}=e,{allTagsPath:m,name:d,count:u}=t,g=function(){const{selectMessage:e}=(0,o.Ww)();return t=>e(t,(0,i.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}(),h=(0,i.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:g(u),tagName:d});return r.createElement(l.A,{title:h,wrapperClassName:o.GN.wrapper.blogPages,pageClassName:o.GN.page.blogTagPostListPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:c},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,h),r.createElement(n.A,{href:m},r.createElement(i.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.map((e=>{let{content:t}=e;return r.createElement(s.A,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))}},6458:(e,t,a)=>{a.d(t,{A:()=>m});var r=a(6540),n=a(4798),l=a(8168),s=a(53);const i="iconEdit_mS5F",o=e=>{let{className:t,...a}=e;return r.createElement("svg",(0,l.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.A)(i,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var c=a(9777);function m(e){let{editUrl:t}=e;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.GN.common.editThisPage},r.createElement(o,null),r.createElement(n.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1461:(e,t,a)=>{a.d(t,{m:()=>g,A:()=>h});var r=a(6540),n=a(53),l=a(9777);function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function i(e){let{anchorTopOffset:t}=e;const a=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=a.find((e=>s(e).top>=t));if(r){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(r))?r:a[a.indexOf(r)-1]??null}return a[a.length-1]}function o(){const e=(0,r.useRef)(0),{navbar:{hideOnScroll:t}}=(0,l.pN)();return(0,r.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}const c=function(e){const t=(0,r.useRef)(void 0),a=o();(0,r.useEffect)((()=>{const{linkClassName:r,linkActiveClassName:n}=e;function l(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(r),l=i({anchorTopOffset:a.current}),s=e.find((e=>l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current?.classList.remove(n),e.classList.add(n),t.current=e):e.classList.remove(n)}(e,e===s)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),()=>{document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},m="tableOfContents_vrFS",d="table-of-contents__link",u={linkClassName:d,linkActiveClassName:"table-of-contents__link--active"};function g(e){let{toc:t,isChild:a}=e;return t.length?r.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((e=>r.createElement("li",{key:e.id},r.createElement("a",{href:`#${e.id}`,className:d,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(g,{isChild:!0,toc:e.children}))))):null}const h=function(e){let{toc:t}=e;return c(u),r.createElement("div",{className:(0,n.A)(m,"thin-scrollbar")},r.createElement(g,{toc:t}))}},3373:(e,t,a)=>{a.d(t,{A:()=>c});var r=a(6540),n=a(53),l=a(4676);const s="tag_WK-t",i="tagRegular_LXbV",o="tagWithCount_S5Zl";const c=function(e){const{permalink:t,name:a,count:c}=e;return r.createElement(l.A,{href:t,className:(0,n.A)(s,{[i]:!c,[o]:c})},a,c&&r.createElement("span",null,c))}},2853:(e,t,a)=>{a.d(t,{A:()=>o});var r=a(6540),n=a(53),l=a(4798),s=a(3373);const i={tags:"tags_NBRY",tag:"tag_F03v"};function o(e){let{tags:t}=e;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.A)(i.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return r.createElement("li",{key:a,className:i.tag},r.createElement(s.A,{name:t,permalink:a}))}))))}}}]);