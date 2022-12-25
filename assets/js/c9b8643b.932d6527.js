"use strict";(self.webpackChunkansible_nas=self.webpackChunkansible_nas||[]).push([[8171],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,b=d["".concat(u,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={title:"YouTubeDL-Material"},i=void 0,l={unversionedId:"applications/download-tools/youtubedlmaterial",id:"applications/download-tools/youtubedlmaterial",title:"YouTubeDL-Material",description:"Homepage:",source:"@site/docs/applications/download-tools/youtubedlmaterial.md",sourceDirName:"applications/download-tools",slug:"/applications/download-tools/youtubedlmaterial",permalink:"/docs/applications/download-tools/youtubedlmaterial",draft:!1,editUrl:"https://github.com/davestephens/ansible-nas/tree/master/website/docs/applications/download-tools/youtubedlmaterial.md",tags:[],version:"current",frontMatter:{title:"YouTubeDL-Material"},sidebar:"tutorialSidebar",previous:{title:"uTorrent",permalink:"/docs/applications/download-tools/utorrent"},next:{title:"Gaming",permalink:"/docs/category/gaming"}},u={},c=[{value:"Usage",id:"usage",level:2},{value:"Specific Configuration",id:"specific-configuration",level:2}],p={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Homepage: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Tzahi12345/YoutubeDL-Material"},"https://github.com/Tzahi12345/YoutubeDL-Material"),"\nDocker Container: ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/tzahi12345/youtubedl-material"},"https://hub.docker.com/r/tzahi12345/youtubedl-material")),(0,o.kt)("p",null,"YoutubeDL-Material is a Material Design frontend for youtube-dl. It's coded using Angular 9 for the frontend, and Node.js on the backend."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"youtubedlmaterial_enabled: true")," in your ",(0,o.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."),(0,o.kt)("p",null,"The YouTubeDL-Material web interface can be found at ",(0,o.kt)("a",{parentName:"p",href:"http://ansible_nas_host_or_ip:8998"},"http://ansible_nas_host_or_ip:8998"),"."),(0,o.kt)("h2",{id:"specific-configuration"},"Specific Configuration"),(0,o.kt)("p",null,"A YouTube directory will be created in your configured downloads spot. YouTubeDL-Material downloads will be placed there.\nYou can change the download location via ",(0,o.kt)("inlineCode",{parentName:"p"},"inventories/<your_inventory>/nas.yml")," file."))}s.isMDXComponent=!0}}]);