"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[184],{876:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>h});var a=t(2784);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=a.createContext({}),l=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(i.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return t?a.createElement(h,c(c({ref:n},u),{},{components:t})):a.createElement(h,c({ref:n},u))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,c=new Array(r);c[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[d]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<r;l++)c[l]=t[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6219:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(7896),o=(t(2784),t(876));const r={id:"core-concepts",title:"Core concepts"},c=void 0,s={unversionedId:"core-concepts",id:"core-concepts",title:"Core concepts",description:"This topic explains the core concepts of Scenes and how to use them in creating your own scene.",source:"@site/../docs/core-concepts.md",sourceDirName:".",slug:"/core-concepts",permalink:"/scenes/docs/core-concepts",draft:!1,editUrl:"https://github.com/grafana/scenes/edit/main/docusaurus/website/../docs/core-concepts.md",tags:[],version:"current",frontMatter:{id:"core-concepts",title:"Core concepts"},sidebar:"sidebar",previous:{title:"Set up Scenes",permalink:"/scenes/docs/getting-started"},next:{title:"Building a scene layout",permalink:"/scenes/docs/scene-layout"}},i={},l=[{value:"Scene",id:"scene",level:2},{value:"Scene object",id:"scene-object",level:2},{value:"State",id:"state",level:2},{value:"Subscribe to state changes",id:"subscribe-to-state-changes",level:3},{value:"Modify state",id:"modify-state",level:3},{value:"Data and time range",id:"data-and-time-range",level:2},{value:"Source code",id:"source-code",level:2}],u={toc:l},d="wrapper";function p(e){let{components:n,...r}=e;return(0,o.kt)(d,(0,a.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This topic explains the core concepts of Scenes and how to use them in creating your own scene."),(0,o.kt)("h2",{id:"scene"},"Scene"),(0,o.kt)("p",null,"A scene is a collection of objects, called ",(0,o.kt)("em",{parentName:"p"},"scene objects"),". These objects represent different aspects of the scene: data, time ranges, variables, layout, and visualizations. Together, scene objects form an ",(0,o.kt)("em",{parentName:"p"},"object tree"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Scene objects tree",src:t(2501).Z,width:"1341",height:"921"})),(0,o.kt)("p",null,"Scenes allow you to group and nest objects. Things like data, time ranges, or variables can be added to any object in the tree, making them available to that object and all descendant objects. Because of this, scenes allow you to create dashboards that have multiple time ranges, queries that can be shared and transformed, or nested variables."),(0,o.kt)("p",null,"@grafana/scenes comes with multiple objects","\u2014","like ",(0,o.kt)("inlineCode",{parentName:"p"},"SceneQueryRunner"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"SceneFlexLayout"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"VizPanel"),", and more","\u2014","to solve common problems. However, you can also create your own scene objects to extend functionality."),(0,o.kt)("h2",{id:"scene-object"},"Scene object"),(0,o.kt)("p",null,"Scenes are built from atomic objects called scene objects. A scene object is defined with:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"State - An interface extending ",(0,o.kt)("inlineCode",{parentName:"li"},"SceneObjectState"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { SceneObjectState } from '@grafana/scenes';\n\n// 1. Create interface that describes state of the scene object\ninterface CounterState extends SceneObjectState {\n  count: number;\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Model - A class extending ",(0,o.kt)("inlineCode",{parentName:"li"},"SceneObjectBase")," class. The Model contains scene object logic.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { SceneObjectBase } from '@grafana/scenes';\n\nexport class Counter extends SceneObjectBase<CounterState> {\n  public static Component = CounterRenderer;\n\n  public constructor() {\n    super({\n      count: 0,\n    });\n  }\n\n  public onIncrement = () => {\n    this.setState({\n      count: this.state.count + 1,\n    });\n  };\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"React component - Used to render a scene object.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport { SceneComponentProps } from '@grafana/scenes';\n\nfunction CounterRenderer({ model }: SceneComponentProps<Counter>) {\n  const { count } = model.useState();\n\n  return (\n    <div>\n      <div>Counter: {count}</div>\n      <button onClick={model.onIncrement}>Increase</button>\n    </div>\n  );\n}\n")),(0,o.kt)("h2",{id:"state"},"State"),(0,o.kt)("p",null,"Scene objects can have associated state. The shape of an object's state is expressed through an interface that ",(0,o.kt)("em",{parentName:"p"},"must")," extend the ",(0,o.kt)("inlineCode",{parentName:"p"},"SceneObjectState")," interface:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"interface CounterState extends SceneObjectState {\n  count: number;\n}\n")),(0,o.kt)("h3",{id:"subscribe-to-state-changes"},"Subscribe to state changes"),(0,o.kt)("p",null,"A component can read the state from a scene object by using the ",(0,o.kt)("inlineCode",{parentName:"p"},"model")," property that it receives when rendered. To subscribe to state changes, call the ",(0,o.kt)("inlineCode",{parentName:"p"},"model.useState")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function CounterRenderer({ model }: SceneComponentProps<Counter>) {\n  const { count } = model.useState();\n\n  // ...\n}\n")),(0,o.kt)("p",null,"Subscribing to an object's state using ",(0,o.kt)("inlineCode",{parentName:"p"},"model.useState()")," will make the component reactive to state changes. Every change to the scene object state is immutable and will cause a re-render of the component."),(0,o.kt)("h3",{id:"modify-state"},"Modify state"),(0,o.kt)("p",null,"To change the state of a scene object, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"setState")," method that each scene object has. This can be done directly from the component:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"function CounterRenderer({ model }: SceneComponentProps<Counter>) {\n  const { count } = model.useState();\n  const onIncrement = () => model.setState({ count: count + 1 });\n\n  // ...\n}\n")),(0,o.kt)("p",null,"This can also be done from a scene object class:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"export class Counter extends SceneObjectBase<CounterState> {\n  // ...\n  public onIncrement = () => {\n    this.setState({\n      count: this.state.count + 1,\n    });\n  };\n}\n\nfunction CounterRenderer({ model }: SceneComponentProps<Counter>) {\n  const { count } = model.useState();\n\n  return (\n    <div>\n      <div>Counter: {count}</div>\n      <button onClick={model.onIncrement}>Increase</button>\n    </div>\n  );\n}\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We suggest that you implement the state-modifying methods in the scene object rather than in the component to separate the model complexity from the component.")),(0,o.kt)("h2",{id:"data-and-time-range"},"Data and time range"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"$data")," property to add data coming from Grafana data sources to a scene. Queries are configured using the ",(0,o.kt)("inlineCode",{parentName:"p"},"SceneQueryRunner")," scene object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { SceneQueryRunner } from '@grafana/scenes';\n\nconst queryRunner = new SceneQueryRunner({\n  datasource: {\n    type: 'prometheus',\n    uid: '<PROVIDE_GRAFANA_DS_UID>',\n  },\n  queries: [\n    {\n      refId: 'A',\n      expr: 'rate(prometheus_http_requests_total{}[5m])',\n    },\n  ],\n});\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Your Grafana instance must have a specified data source configured.")),(0,o.kt)("p",null,"For ",(0,o.kt)("inlineCode",{parentName:"p"},"SceneQueryRunner")," to work, you must add a time range to a scene. Each scene object has a ",(0,o.kt)("inlineCode",{parentName:"p"},"$timeRange")," property to which the ",(0,o.kt)("inlineCode",{parentName:"p"},"SceneTimeRange")," scene object can be added. To specify a time range for the query runner created in the previous example, add the ",(0,o.kt)("inlineCode",{parentName:"p"},"$timeRange")," property in the object passed to the constructor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import { SceneQueryRunner, SceneTimeRange } from '@grafana/scenes';\n\nconst queryRunner = new SceneQueryRunner({\n  datasource: {\n    type: 'prometheus',\n    uid: '<PROVIDE_GRAFANA_DS_UID>',\n  },\n  queries: [\n    {\n      refId: 'A',\n      expr: 'rate(prometheus_http_requests_total{}[5m])',\n    },\n  ],\n  $timeRange: new SceneTimeRange({ from: 'now-5m', to: 'now' }),\n});\n")),(0,o.kt)("p",null,"Add the created ",(0,o.kt)("inlineCode",{parentName:"p"},"queryRunner")," to your scene. Each object in the scene will now be able to access the provided data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const scene = new EmbeddedScene({\n    $data: queryRunner,\n    body: ...\n})\n")),(0,o.kt)("p",null,"Each scene object has a ",(0,o.kt)("inlineCode",{parentName:"p"},"$data")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"$timeRange")," property that can be configured. Because a scene is an object tree, the data and time range configured through ",(0,o.kt)("inlineCode",{parentName:"p"},"SceneQueryRunner")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"SceneTimeRange")," respectively are available to the objects they're added to ",(0,o.kt)("em",{parentName:"p"},"and")," all descendant objects."),(0,o.kt)("p",null,"In the following example, each ",(0,o.kt)("inlineCode",{parentName:"p"},"VizPanel"),' uses different data. "Panel A" uses data defined on the ',(0,o.kt)("inlineCode",{parentName:"p"},"EmbeddedScene"),', while "Panel B" has its own data and time range configured:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"// Scene data, used by Panel A\nconst queryRunner1 = new SceneQueryRunner({\n  datasource: {\n    type: 'prometheus',\n    uid: '<PROVIDE_GRAFANA_DS_UID>',\n  },\n  queries: [\n    {\n      refId: 'A',\n      expr: 'rate(prometheus_http_requests_total{}[5m])',\n    },\n  ],\n});\n\n// Panel B data\nconst queryRunner2 = new SceneQueryRunner({\n  datasource: {\n    type: 'prometheus',\n    uid: '<PROVIDE_GRAFANA_DS_UID>',\n  },\n  queries: [\n    {\n      refId: 'A',\n      expr: 'avg by (job, instance, mode) (rate(node_cpu_seconds_total[5m]))',\n    },\n  ],\n});\n\nconst scene = new EmbeddedScene({\n  $data: queryRunner1,\n  // Global time range. queryRunner1 will use this time range.\n  $timeRange: new SceneTimeRange({ from: 'now-5m', to: 'now' }),\n  body: new SceneFlexLayout({\n    direction: 'row',\n    children: [\n      new SceneFlexItem({\n        width: '50%',\n        height: 300,\n        body: PanelBuilders.timeseries().setTitle('Panel using global time range').build(),\n      }),\n      new SceneFlexItem({\n        width: '50%',\n        height: 300,\n        body: PanelBuilders.timeseries()\n          .setTitle('Panel using local time range')\n          // Time range defined on VizPanel object. queryRunner2 will use this time range.\n          .setTimeRange(new SceneTimeRange({ from: 'now-6h', to: 'now' }))\n          .setData(queryRunner2)\n          .build(),\n      }),\n    ],\n  }),\n});\n")),(0,o.kt)("h2",{id:"source-code"},"Source code"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/grafana/scenes/tree/main/docusaurus/docs/core-concepts.tsx"},"View the examples source code")))}p.isMDXComponent=!0},2501:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/sceneTree-d39fdb5e339a83eebcaf46985cc778e6.png"}}]);