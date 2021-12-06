"use strict";(self.webpackChunkdevops_journey=self.webpackChunkdevops_journey||[]).push([[138],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},1395:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7294),o=n(944),a=n(6010),i="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,u=39;var c=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,p=e.values,d=e.groupId,m=e.className,f=(0,o.Z)(),v=f.tabGroupChoices,h=f.setTabGroupChoices,y=(0,r.useState)(c),g=y[0],b=y[1],k=r.Children.toArray(e.children),O=[];if(null!=d){var w=v[d];null!=w&&w!==g&&p.some((function(e){return e.value===w}))&&b(w)}var N=function(e){var t=e.currentTarget,n=O.indexOf(t),r=p[n].value;b(r),null!=d&&(h(d,r),setTimeout((function(){var e,n,r,o,a,i,l,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,o=e.bottom,a=e.right,i=window,l=i.innerHeight,u=i.innerWidth,n>=0&&a<=u&&o<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},T=function(e){var t,n;switch(e.keyCode){case u:var r=O.indexOf(e.target)+1;n=O[r]||O[0];break;case l:var o=O.indexOf(e.target)-1;n=O[o]||O[O.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,a.Z)("tabs__item",i,{"tabs__item--active":g===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:T,onFocus:N,onClick:N},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},944:function(e,t,n){var r=n(7294),o=n(9443);t.Z=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},8409:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=n(1395),s=n(8215),l=["components"],u={id:"begins",title:"The Saga Begins",sidebar_label:"The Beginning"},c={unversionedId:"journey/begins",id:"journey/begins",isDocsHomePage:!1,title:"The Saga Begins",description:"_",source:"@site/docs/journey/begins.md",sourceDirName:"journey",slug:"/journey/begins",permalink:"/devops/docs/journey/begins",editUrl:"https://github.com/snohio/devops/docs/journey/begins.md",version:"current",sidebar_label:"The Beginning",frontMatter:{id:"begins",title:"The Saga Begins",sidebar_label:"The Beginning"},sidebar:"devopsJourney",next:{title:"A Bit of Backstory",permalink:"/devops/docs/journey/history"}},p=[{value:"My DevOps Transformation Experiences",id:"my-devops-transformation-experiences",children:[{value:"Welcome to the Presentation",id:"welcome-to-the-presentation",children:[]},{value:"Four part Series on my last 5 years of DevOps",id:"four-part-series-on-my-last-5-years-of-devops",children:[]}]}],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"my-devops-transformation-experiences"},"My DevOps Transformation Experiences"),(0,a.kt)("img",{src:"../../img/journey/putittogether.jpg",alt:"Put it Together",align:"right"}),(0,a.kt)("h3",{id:"welcome-to-the-presentation"},"Welcome to the Presentation"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"This one is going to be different!"))),(0,a.kt)("h3",{id:"four-part-series-on-my-last-5-years-of-devops"},"Four part Series on my last 5 years of DevOps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Saga Begins - From my Aha moment to Building a Team"),(0,a.kt)("li",{parentName:"ul"},"Putting DevOps into Practice - How we used DevOps to build a Chef Enterprise Solution"),(0,a.kt)("li",{parentName:"ul"},"Transformation Tips - DevOps Transformation / Where you can start"),(0,a.kt)("li",{parentName:"ul"},"Cooking up Awesomeness - How Organizations Can Use Chef to Drive DevOps")),(0,a.kt)("hr",null),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Notes:")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)(i.Z,{defaultValue:"notes",values:[{label:"Expand",value:"expand"},{label:"Collapse",value:"collapse"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"expand",mdxType:"TabItem"},(0,a.kt)("h2",{parentName:"div",id:"notes-for-this-slide"},"Notes for this Slide"),(0,a.kt)("h3",{parentName:"div",id:"about-this-presentation"},"About this presentation"),(0,a.kt)("p",{parentName:"div"},"This presentation is intended to be a four part series on my DevOps Journey focused around the deployment, usage, and socializtion of Chef."),(0,a.kt)("p",{parentName:"div"},"The first part is focused on my backstory, what worked looked like, that time I discovered the DevOps Community, the building of a team to utilize practices and principles that I had discoverd."))))))}m.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);