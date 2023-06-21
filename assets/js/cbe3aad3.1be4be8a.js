"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16],{876:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>b});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=d(a),m=r,b=l["".concat(i,".").concat(m)]||l[m]||p[m]||s;return a?n.createElement(b,o(o({ref:t},u),{},{components:a})):n.createElement(b,o({ref:t},u))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[l]="string"==typeof e?e:r,o[1]=c;for(var d=2;d<s;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2701:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=a(7896),r=(a(2784),a(876));const s={id:"advanced-data",title:"Data and time range in custom scene objects"},o=void 0,c={unversionedId:"advanced-data",id:"advanced-data",title:"Data and time range in custom scene objects",description:"Custom scene objects can use data and time range information added to a scene to perform additional operations. This topic describes how to use these properties in renderers and custom object classes.",source:"@site/../docs/advanced-data.md",sourceDirName:".",slug:"/advanced-data",permalink:"/scenes/docs/advanced-data",draft:!1,editUrl:"https://github.com/grafana/scenes/edit/main/docusaurus/website/../docs/advanced-data.md",tags:[],version:"current",frontMatter:{id:"advanced-data",title:"Data and time range in custom scene objects"},sidebar:"sidebar",previous:{title:"Activation handlers",permalink:"/scenes/docs/advanced-activation-handlers"},next:{title:"Variables in custom scene objects",permalink:"/scenes/docs/advanced-variables"}},i={},d=[{value:"Use data",id:"use-data",level:2},{value:"Use data in a renderer",id:"use-data-in-a-renderer",level:3},{value:"Use data in a custom object class",id:"use-data-in-a-custom-object-class",level:3},{value:"Use time range",id:"use-time-range",level:2},{value:"Source code",id:"source-code",level:2}],u={toc:d},l="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(l,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Custom scene objects can use data and time range information added to a scene to perform additional operations. This topic describes how to use these properties in renderers and custom object classes."),(0,r.kt)("p",null,"To learn more about data and time range configuration, refer to ",(0,r.kt)("a",{parentName:"p",href:"./core-concepts#data-and-time-range"},"Data and time range")," first."),(0,r.kt)("h2",{id:"use-data"},"Use data"),(0,r.kt)("p",null,"In custom scene object use ",(0,r.kt)("inlineCode",{parentName:"p"},"sceneGraph.getData(model)")," call to find and subscribe to the closest parent that has a ",(0,r.kt)("inlineCode",{parentName:"p"},"SceneDataProvider"),". This means it uses ",(0,r.kt)("inlineCode",{parentName:"p"},"$data")," set on its own level or shares data with other siblings and scene objects if ",(0,r.kt)("inlineCode",{parentName:"p"},"$data")," is set on any parent level."),(0,r.kt)("h3",{id:"use-data-in-a-renderer"},"Use data in a renderer"),(0,r.kt)("p",null,"In your custom scene object renderer, you can subscribe to the closest ",(0,r.kt)("inlineCode",{parentName:"p"},"SceneDataProvider")," by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"sceneGraph.getData")," utility:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { sceneGraph, SceneObjectState, SceneObjectBase, SceneComponentProps } from '@grafana/scenes';\n\ninterface CustomObjectState extends SceneObjectState {}\n\nclass CustomObject extends SceneObjectBase<CustomObjectState> {\n  static Component = CustomObjectRenderer;\n}\n\nfunction CustomObjectRenderer({ model }: SceneComponentProps<CustomObject>) {\n  const data = sceneGraph.getData(model).useState();\n\n  return (\n    <div>\n      <pre>Time range: {JSON.stringify(data.data?.timeRange)}</pre>\n      <pre>Data: {JSON.stringify(data.data?.series)}</pre>\n    </div>\n  );\n}\n")),(0,r.kt)("h3",{id:"use-data-in-a-custom-object-class"},"Use data in a custom object class"),(0,r.kt)("p",null,"You can also use data in your custom object class. To do so, use an ",(0,r.kt)("a",{parentName:"p",href:"/scenes/docs/advanced-activation-handlers"},"activation handler"),". In the activation handler, get the closest ",(0,r.kt)("inlineCode",{parentName:"p"},"SceneDataProvider")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"sceneGraph.getData(this)"),". Then, subscribe to ",(0,r.kt)("inlineCode",{parentName:"p"},"SceneDataProvider")," state changes using the ",(0,r.kt)("inlineCode",{parentName:"p"},"subscribeToState")," method of the ",(0,r.kt)("inlineCode",{parentName:"p"},"SceneObjectBase"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class CustomObject extends SceneObjectBase<CustomObjectState> {\n  static Component = CustomObjectRenderer;\n\n  constructor() {\n    super({});\n    this.addActivationHandler(() => this.activationHandler());\n  }\n\n  private activationHandler() {\n    const sourceData = sceneGraph.getData(this);\n\n    this._subs.add(sourceData.subscribeToState((state) => console.log(state)));\n  }\n}\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The subscription returned from ",(0,r.kt)("inlineCode",{parentName:"p"},"sourceData.subscribeToState")," is added to ",(0,r.kt)("inlineCode",{parentName:"p"},"this._subs"),". Because of this, you don't need to do any cleanup when the custom object is destroyed, as the library will take care of unsubscribing.")),(0,r.kt)("h2",{id:"use-time-range"},"Use time range"),(0,r.kt)("p",null,"Similarly to data, you can use the closest time range in a custom scene object using ",(0,r.kt)("inlineCode",{parentName:"p"},"sceneGraph.getTimeRange(model)"),". This method can be used both in the custom object class and the renderer, as described previously in the ",(0,r.kt)("a",{parentName:"p",href:"#use-data"},"Use data")," section."),(0,r.kt)("h2",{id:"source-code"},"Source code"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/grafana/scenes/tree/main/docusaurus/docs/advanced-data.tsx"},"View the example source code")))}p.isMDXComponent=!0}}]);