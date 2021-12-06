"use strict";(self.webpackChunkdevops_journey=self.webpackChunkdevops_journey||[]).push([[957],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},1395:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),r=n(944),o=n(6010),i="tabItem_1uMI",l="tabItemActive_2DSg";var s=37,c=39;var u=function(e){var t=e.lazy,n=e.block,u=e.defaultValue,p=e.values,d=e.groupId,m=e.className,f=(0,r.Z)(),v=f.tabGroupChoices,h=f.setTabGroupChoices,g=(0,a.useState)(u),w=g[0],b=g[1],y=a.Children.toArray(e.children),k=[];if(null!=d){var O=v[d];null!=O&&O!==w&&p.some((function(e){return e.value===O}))&&b(O)}var N=function(e){var t=e.currentTarget,n=k.indexOf(t),a=p[n].value;b(a),null!=d&&(h(d,a),setTimeout((function(){var e,n,a,r,o,i,s,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,s=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case c:var a=k.indexOf(e.target)+1;n=k[a]||k[0];break;case s:var r=k.indexOf(e.target)-1;n=k[r]||k[k.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":w===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:C,onFocus:N,onClick:N},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},944:function(e,t,n){var a=n(7294),r=n(9443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},5052:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=n(1395),l=n(8215),s=["components"],c={id:"awakens",title:"Putting My Awakening into Practice",sidebar_label:"Awakening"},u={unversionedId:"practice/awakens",id:"practice/awakens",isDocsHomePage:!1,title:"Putting My Awakening into Practice",description:"_",source:"@site/docs/practice/awaken.md",sourceDirName:"practice",slug:"/practice/awakens",permalink:"/devops/docs/practice/awakens",editUrl:"https://github.com/snohio/devops/docs/practice/awaken.md",version:"current",sidebar_label:"Awakening",frontMatter:{id:"awakens",title:"Putting My Awakening into Practice",sidebar_label:"Awakening"},sidebar:"devopsJourney",previous:{title:"The Road Less Traveled",permalink:"/devops/docs/journey/chef"},next:{title:"My DevOps Dogma",permalink:"/devops/docs/practice/dogma"}},p=[{value:"How DevOps Helped Drive Chef",id:"how-devops-helped-drive-chef",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("img",{src:"../../img/practice/getintodevops-banner.jpeg",alt:"Get Into DevOps",align:"right"}),(0,o.kt)("h2",{id:"how-devops-helped-drive-chef"},"How DevOps Helped Drive Chef"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Building a Team to support the operations of a large Chef environment"),(0,o.kt)("li",{parentName:"ul"},"This will consist of:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Engineering"),(0,o.kt)("li",{parentName:"ul"},"Operations"),(0,o.kt)("li",{parentName:"ul"},"Development"))),(0,o.kt)("li",{parentName:"ul"},"We want to practice Agile DevOps")),(0,o.kt)("p",null,"Thus in 2016, my new ",(0,o.kt)("strong",{parentName:"p"},"DevOps Enablement Services")," team was born."),(0,o.kt)("hr",null),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Notes:")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)(i.Z,{defaultValue:"notes",values:[{label:"Expand",value:"expand"},{label:"Collapse",value:"collapse"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"expand",mdxType:"TabItem"},(0,o.kt)("p",{parentName:"div"},"  ...and so my adventures into Chef begins."),(0,o.kt)("p",{parentName:"div"},'  As I took the role of Product Owner for Chef with the ability to build a team ready to support all of the needs that were forthcoming, it was important to build the team in a "DevOps Model".'),(0,o.kt)("p",{parentName:"div"},"  What does that mean to me? Well, we were certainly going to have plenty of Operations tasks - deploying and maintaing the infrastructure as well as the deploying the Chef Client to thousands of servers and making sure they stayed running. This would also require some levels of continous engineering, monitoring best practices, as well as manage the scale we were about to embark upon."),(0,o.kt)("p",{parentName:"div"},'  Initially we were set to deploy and manage about 8000 nodes but knew that once that "Proof of Concept" was going to deliver value, that we would within a year expand to our entire fleet - consisting of at the time about 60 Thousand Nodes.'),(0,o.kt)("p",{parentName:"div"},"  I knew that, while we were not initially responsible for the Community of Practice for Chef that we would have to participate and drive as much adoption through leading by example. We would need to participate in some coding efforts as well as possibly extending usability and isolation. This would require a few Devs.\nLet's take a look at how I did that."),"  ")))))}m.isMDXComponent=!0},6010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);