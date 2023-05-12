"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[606],{876:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var o=n(2784);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,c=function(e,t){if(null==e)return{};var n,o,c={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=o.createContext({}),u=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,c=e.mdxType,r=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(n),d=c,b=p["".concat(i,".").concat(d)]||p[d]||m[d]||r;return n?o.createElement(b,s(s({ref:t},l),{},{components:n})):o.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=n.length,s=new Array(r);s[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[p]="string"==typeof e?e:c,s[1]=a;for(var u=2;u<r;u++)s[u]=n[u];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3011:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>u});var o=n(7896),c=(n(2784),n(876));const r={id:"advanced-custom-scene-objects",title:"Custom scene objects"},s=void 0,a={unversionedId:"advanced-custom-scene-objects",id:"advanced-custom-scene-objects",title:"Custom scene objects",description:"Scenes comes with extensibility in mind. In addition to the library primitives, you can build your own custom scene objects that extend the basic functionality of the library. This topic describes how to create a custom object.",source:"@site/../docs/advanced-custom-scene-objects.md",sourceDirName:".",slug:"/advanced-custom-scene-objects",permalink:"/scenes/docs/advanced-custom-scene-objects",draft:!1,editUrl:"https://github.com/grafana/scenes/edit/main/docusaurus/website/../docs/advanced-custom-scene-objects.md",tags:[],version:"current",frontMatter:{id:"advanced-custom-scene-objects",title:"Custom scene objects"},sidebar:"sidebar",previous:{title:"Drill-down pages in Scenes apps",permalink:"/scenes/docs/scene-app-drilldown"},next:{title:"Activation handlers",permalink:"/scenes/docs/advanced-activation-handlers"}},i={},u=[{value:"Create custom scene objects",id:"create-custom-scene-objects",level:2},{value:"Step 1. Define the state type of the custom object",id:"step-1-define-the-state-type-of-the-custom-object",level:3},{value:"Step 2. Implement a custom object class",id:"step-2-implement-a-custom-object-class",level:3},{value:"Step 3. Implement a custom object renderer",id:"step-3-implement-a-custom-object-renderer",level:3},{value:"Step 4. Use a custom object state in the renderer",id:"step-4-use-a-custom-object-state-in-the-renderer",level:3},{value:"Step 5. Modify the state of the custom object from the component",id:"step-5-modify-the-state-of-the-custom-object-from-the-component",level:3},{value:"Step 6. Use the custom object in a scene",id:"step-6-use-the-custom-object-in-a-scene",level:3}],l={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,c.kt)(p,(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Scenes comes with extensibility in mind. In addition to the library primitives, you can build your own custom scene objects that extend the basic functionality of the library. This topic describes how to create a custom object."),(0,c.kt)("h2",{id:"create-custom-scene-objects"},"Create custom scene objects"),(0,c.kt)("p",null,"Follow these steps to create a custom scene object."),(0,c.kt)("h3",{id:"step-1-define-the-state-type-of-the-custom-object"},"Step 1. Define the state type of the custom object"),(0,c.kt)("p",null,"Start by defining the state type for your custom object. This interface must extend the ",(0,c.kt)("inlineCode",{parentName:"p"},"SceneObjectState")," interface:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"interface CounterState extends SceneObjectState {\n  count: number;\n}\n")),(0,c.kt)("h3",{id:"step-2-implement-a-custom-object-class"},"Step 2. Implement a custom object class"),(0,c.kt)("p",null,"Implement a class for the custom scene object. This class must extend the ",(0,c.kt)("inlineCode",{parentName:"p"},"SceneObjectBase")," class:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"export class Counter extends SceneObjectBase<CounterState> {\n  public constructor(state?: Partial<CounterState>) {\n    super({count: 0, ...state});\n  }\n}\n")),(0,c.kt)("h3",{id:"step-3-implement-a-custom-object-renderer"},"Step 3. Implement a custom object renderer"),(0,c.kt)("p",null,"Implement a React component that will be shown when the custom object is used in a scene. This component must use the ",(0,c.kt)("inlineCode",{parentName:"p"},"SceneComponentProps<T extends SceneObjectBase>")," type for props:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"function CounterRenderer(props: SceneComponentProps<Counter>) {\n  return <div>Counter</div>;\n}\n")),(0,c.kt)("p",null,"Set a renderer for the ",(0,c.kt)("inlineCode",{parentName:"p"},"Counter")," custom object using the ",(0,c.kt)("inlineCode",{parentName:"p"},"static Component")," property:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"export class Counter extends SceneObjectBase<CounterState> {\n  static Component = CounterRenderer;\n\n}\n")),(0,c.kt)("h3",{id:"step-4-use-a-custom-object-state-in-the-renderer"},"Step 4. Use a custom object state in the renderer"),(0,c.kt)("p",null,"Use the ",(0,c.kt)("inlineCode",{parentName:"p"},"model")," property passed to the component and subscribe to its state using the ",(0,c.kt)("inlineCode",{parentName:"p"},"model.useState()")," hook. Any changes to the object state will re-render the component:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"function CounterRenderer({ model }: SceneComponentProps<Counter>) {\n  const { count } = model.useState();\n\n  return (\n    <div>\n      <div>Counter: {count}</div>\n    </div>\n  );\n}\n")),(0,c.kt)("h3",{id:"step-5-modify-the-state-of-the-custom-object-from-the-component"},"Step 5. Modify the state of the custom object from the component"),(0,c.kt)("p",null,"Define the state-modifying method, (",(0,c.kt)("inlineCode",{parentName:"p"},"onIncrement"),"), in the custom scene object:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"export class Counter extends SceneObjectBase<CounterState> {\n  public static Component = CounterRenderer;\n\n\n  public onIncrement = () => {\n    this.setState({ count: this.state.count + 1 });\n  };\n}\n")),(0,c.kt)("p",null,"Use the ",(0,c.kt)("inlineCode",{parentName:"p"},"onIncrement")," method in the renderer:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"function CounterRenderer({ model }: SceneComponentProps<Counter>) {\n  const { count } = model.useState();\n\n  return (\n    <div>\n      <div>Counter: {count}</div>\n      <button onClick={model.onIncrement}>Increment counter</button>\n    </div>\n  );\n}\n")),(0,c.kt)("h3",{id:"step-6-use-the-custom-object-in-a-scene"},"Step 6. Use the custom object in a scene"),(0,c.kt)("p",null,"Now your custom scene object, ",(0,c.kt)("inlineCode",{parentName:"p"},"Counter"),", is ready to be used in a scene. Create a scene that uses it:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"const myScene = new EmbeddedScene({\n  body: new SceneFlexLayout({\n    children: [\n      new SceneFlexItem({\n        body: new Counter(),\n      }),\n    ],\n  }),\n});\n")))}m.isMDXComponent=!0}}]);