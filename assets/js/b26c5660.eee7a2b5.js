"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[428],{876:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(2784);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(a),c=r,f=d["".concat(m,".").concat(c)]||d[c]||u[c]||l;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},143:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(7896),r=(a(2784),a(876));const l={id:"transformations",title:"Transformations"},o=void 0,i={unversionedId:"transformations",id:"transformations",title:"Transformations",description:"Before you begin: You must already know about connecting data in Scenes apps before continuing with this guide.",source:"@site/../docs/transformations.md",sourceDirName:".",slug:"/transformations",permalink:"/scenes/docs/transformations",draft:!1,editUrl:"https://github.com/grafana/scenes/edit/main/docusaurus/website/../docs/transformations.md",tags:[],version:"current",frontMatter:{id:"transformations",title:"Transformations"},sidebar:"sidebar",previous:{title:"Variables",permalink:"/scenes/docs/variables"},next:{title:"Building apps with Scenes",permalink:"/scenes/docs/scene-app"}},m={},s=[{value:"Transform query results in a scene",id:"transform-query-results-in-a-scene",level:2},{value:"Step 1. Create a scene",id:"step-1-create-a-scene",level:3},{value:"Step 2. Configure a data transformation",id:"step-2-configure-a-data-transformation",level:3},{value:"Step 3. Configure multiple transformations",id:"step-3-configure-multiple-transformations",level:3},{value:"Add custom transformations",id:"add-custom-transformations",level:2},{value:"Step 1. Create a custom transformation",id:"step-1-create-a-custom-transformation",level:3},{value:"Step 2. Use a custom transformation",id:"step-2-use-a-custom-transformation",level:3},{value:"Combine and filter",id:"combine-and-filter",level:2},{value:"Source code",id:"source-code",level:2}],p={toc:s},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Before you begin"),": You must already know about ",(0,r.kt)("a",{parentName:"p",href:"/scenes/docs/core-concepts#data-and-time-range"},"connecting data in Scenes apps")," before continuing with this guide.")),(0,r.kt)("p",null,"Transformations are a powerful way to manipulate data returned by the ",(0,r.kt)("inlineCode",{parentName:"p"},"SceneQueryRunner")," object before scenes render a visualization. Using transformations, you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Rename fields"),(0,r.kt)("li",{parentName:"ul"},"Join time series data"),(0,r.kt)("li",{parentName:"ul"},"Perform mathematical operations across queries"),(0,r.kt)("li",{parentName:"ul"},"Use the output of one transformation as the input for another transformation")),(0,r.kt)("p",null,"With transformations you can query data once, manipulate it, and display it in a scene."),(0,r.kt)("p",null,"Learn more about Grafana transformations in ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/panels-visualizations/query-transform-data/transform-data/"},"the official Grafana documentation"),"."),(0,r.kt)("h2",{id:"transform-query-results-in-a-scene"},"Transform query results in a scene"),(0,r.kt)("h3",{id:"step-1-create-a-scene"},"Step 1. Create a scene"),(0,r.kt)("p",null,"Create a scene with a single Table panel and a Prometheus query. The example query returns the average duration of HTTP requests for Prometheus API endpoints. The resulting table consists of three columns: ",(0,r.kt)("inlineCode",{parentName:"p"},"Time"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"handler"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"Value"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const queryRunner = new SceneQueryRunner({\n  $timeRange: new SceneTimeRange(),\n  datasource: {\n    type: 'prometheus',\n    uid: '<PROVIDE_GRAFANA_DS_UID>',\n  },\n  queries: [\n    {\n      refId: 'A',\n      expr: 'sort_desc(avg by(handler) (rate(prometheus_http_request_duration_seconds_sum {}[5m]) * 1e3))',\n      format: 'table',\n      instant: true,\n    },\n  ],\n});\n\nconst scene = new EmbeddedScene({\n  $data: queryRunner,\n  body: new SceneFlexLayout({\n    direction: 'column',\n    children: [\n      new SceneFlexItem({\n        body: PanelBuilders.table().setTitle('Average duration of HTTP request').build(),\n      }),\n    ],\n  }),\n});\n")),(0,r.kt)("h3",{id:"step-2-configure-a-data-transformation"},"Step 2. Configure a data transformation"),(0,r.kt)("p",null,"The resulting table from the previous step will look similar to the one that follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Time"),(0,r.kt)("th",{parentName:"tr",align:null},"handler"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2023-05-09 14:00:00.000"),(0,r.kt)("td",{parentName:"tr",align:null},"/metrics"),(0,r.kt)("td",{parentName:"tr",align:null},"1.10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2023-05-09 14:00:00.000"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/label/:name/values"),(0,r.kt)("td",{parentName:"tr",align:null},"0.361")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2023-05-09 14:00:00.000"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"0.113")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2023-05-09 14:00:00.000"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/query_range"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0847")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2023-05-09 14:00:00.000"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/query"),(0,r.kt)("td",{parentName:"tr",align:null},"0.14")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2023-05-09 14:00:00.000"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/labels"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0194")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2023-05-09 14:00:00.000"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/series"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2023-05-09 14:00:00.000"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/status/buildinfo"),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("p",null,"Add the ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/panels-visualizations/query-transform-data/transform-data/#organize-fields"},(0,r.kt)("em",{parentName:"a"},"Organize fields")," transformation")," to hide the ",(0,r.kt)("inlineCode",{parentName:"p"},"Time")," field:"),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"SceneDataTransformer")," object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const transformedData = new SceneDataTransformer({\n  $data: queryRunner,\n  transformations: [\n    {\n      id: 'organize',\n      options: {\n        excludeByName: {\n          Time: true,\n        },\n        indexByName: {},\n        renameByName: {},\n      },\n    },\n  ],\n});\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Objects used in ",(0,r.kt)("inlineCode",{parentName:"p"},"transformations")," are the same transformation configuration objects you would see in a typical dashboard panel when you view the ",(0,r.kt)("strong",{parentName:"p"},"JSON")," tab in the panel inspect drawer. To access this tab, click ",(0,r.kt)("strong",{parentName:"p"},"Inspect > Panel JSON")," in the panel edit menu.")),(0,r.kt)("p",null,"Use the newly created ",(0,r.kt)("inlineCode",{parentName:"p"},"transformedData")," object in place of the previously used ",(0,r.kt)("inlineCode",{parentName:"p"},"SceneQueryRunner"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const scene = new EmbeddedScene({\n  $data: transformedData,\n  body: new SceneFlexLayout({\n    direction: 'column',\n    children: [\n      new SceneFlexItem({\n        body: PanelBuilders.table().setTitle('Average duration of HTTP request').build(),\n      }),\n    ],\n  }),\n});\n")),(0,r.kt)("p",null,"The resulting table will look similar to the one that follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"handler"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/metrics"),(0,r.kt)("td",{parentName:"tr",align:null},"1.10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/label/:name/values"),(0,r.kt)("td",{parentName:"tr",align:null},"0.361")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"0.113")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/query_range"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0847")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/query"),(0,r.kt)("td",{parentName:"tr",align:null},"0.14")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/labels"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0194")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/series"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/status/buildinfo"),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("h3",{id:"step-3-configure-multiple-transformations"},"Step 3. Configure multiple transformations"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SceneDataTransformer")," allows you to configure multiple transformations. The transformations are executed in the same order as they are added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"transformations")," array."),(0,r.kt)("p",null,"Modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"transformedData")," object and add ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/panels-visualizations/query-transform-data/transform-data/#rename-by-regex"},(0,r.kt)("em",{parentName:"a"},"Rename by regex")," transformations")," to change the field names: ",(0,r.kt)("inlineCode",{parentName:"p"},"handler")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Value")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Average duration"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const transformedData = new SceneDataTransformer({\n  $data: queryRunner,\n  transformations: [\n    {\n      id: 'organize',\n      options: {\n        excludeByName: {\n          Time: true,\n        },\n        indexByName: {},\n        renameByName: {},\n      },\n    },\n    {\n      id: 'renameByRegex',\n      options: {\n        regex: 'handler',\n        renamePattern: 'Handler',\n      },\n    },\n    {\n      id: 'renameByRegex',\n      options: {\n        regex: 'Value',\n        renamePattern: 'Average duration',\n      },\n    },\n  ],\n});\n")),(0,r.kt)("p",null,"The resulting table will look similar to the one that follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Handler"),(0,r.kt)("th",{parentName:"tr",align:null},"Average duration"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/metrics"),(0,r.kt)("td",{parentName:"tr",align:null},"1.10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/label/:name/values"),(0,r.kt)("td",{parentName:"tr",align:null},"0.361")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"0.113")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/query_range"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0847")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/query"),(0,r.kt)("td",{parentName:"tr",align:null},"0.14")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/labels"),(0,r.kt)("td",{parentName:"tr",align:null},"0.0194")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/series"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/api/v1/status/buildinfo"),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("h2",{id:"add-custom-transformations"},"Add custom transformations"),(0,r.kt)("p",null,"In addition to all the transformations available in Grafana, scenes allow you to create custom transformations."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SceneDataTransformer")," accepts ",(0,r.kt)("inlineCode",{parentName:"p"},"CustomTransformOperator")," as an item of the ",(0,r.kt)("inlineCode",{parentName:"p"},"transformations")," array:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"  transformations: Array<DataTransformerConfig | CustomTransformOperator>;\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CustomTransformOperator")," is a function that returns the RxJS Operator, which transforms data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type CustomTransformOperator = (context: DataTransformContext) => MonoTypeOperatorFunction<DataFrame[]>;\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Read more about RxJS operators in the ",(0,r.kt)("a",{parentName:"p",href:"https://rxjs.dev/guide/operators"},"RxJS official documentation"),".")),(0,r.kt)("h3",{id:"step-1-create-a-custom-transformation"},"Step 1. Create a custom transformation"),(0,r.kt)("p",null,"Create a custom transformation that will apply to the ",(0,r.kt)("inlineCode",{parentName:"p"},"handler")," field and prefix all values with a URL:"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Custom transformations depend heavily on manipulating internal Grafana data objects called ",(0,r.kt)("em",{parentName:"p"},"data frames"),". Learn more about data frames in ",(0,r.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/developers/plugins/data-frames/"},"the official Grafana documentation"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { DataFrame } from '@grafana/data';\nimport { Observable } from 'rxjs';\nimport { map } from 'rxjs/operators';\n\nconst prefixHandlerTransformation: CustomTransformOperator = () => (source: Observable<DataFrame[]>) => {\n  return source.pipe(\n    map((data: DataFrame[]) => {\n      return data.map((frame: DataFrame) => {\n        return {\n          ...frame,\n          fields: frame.fields.map((field) => {\n            if (field.name === 'handler') {\n              return {\n                ...field,\n                values: field.values.map((v) => 'http://www.my-api.com' + v),\n              };\n            }\n            return field;\n          }),\n        };\n      });\n    })\n  );\n};\n")),(0,r.kt)("h3",{id:"step-2-use-a-custom-transformation"},"Step 2. Use a custom transformation"),(0,r.kt)("p",null,"Add a custom transformation to the previously created ",(0,r.kt)("inlineCode",{parentName:"p"},"transformedData")," object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const transformedData = new SceneDataTransformer({\n  $data: queryRunner,\n  transformations: [\n    prefixHandlerTransformation,\n    {\n      id: 'organize',\n      options: {\n        excludeByName: {\n          Time: true,\n        },\n        indexByName: {},\n        renameByName: {},\n      },\n    },\n    {\n      id: 'renameByRegex',\n      options: {\n        regex: 'handler',\n        renamePattern: 'Handler',\n      },\n    },\n    {\n      id: 'renameByRegex',\n      options: {\n        regex: 'Value',\n        renamePattern: 'Average duration',\n      },\n    },\n  ],\n});\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"prefixHandlerTransformation")," custom transformation is added as the first one because it applies to the ",(0,r.kt)("inlineCode",{parentName:"p"},"handler")," field that's renamed to ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler")," in the following transformations. You can modify the custom transformation implementation so that it doesn't have to be used prior to other transformations.")),(0,r.kt)("p",null,"The resulting table will look similar to the one that follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Handler"),(0,r.kt)("th",{parentName:"tr",align:null},"Average duration"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"http://www.my-api.com/metrics")),(0,r.kt)("td",{parentName:"tr",align:null},"1.10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"http://www.my-api.com/api/v1/label/:name/values")),(0,r.kt)("td",{parentName:"tr",align:null},"0.361")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"http://www.my-api.com/api/v1/metadata")),(0,r.kt)("td",{parentName:"tr",align:null},"0.113")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"http://www.my-api.com/api/v1/query_range")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0847")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"http://www.my-api.com/api/v1/query")),(0,r.kt)("td",{parentName:"tr",align:null},"0.14")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"http://www.my-api.com/api/v1/labels")),(0,r.kt)("td",{parentName:"tr",align:null},"0.0194")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"http://www.my-api.com/api/v1/series")),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"http://www.my-api.com/api/v1/status/buildinfo")),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("h2",{id:"combine-and-filter"},"Combine and filter"),(0,r.kt)("p",null,"One powerful thing you can do with transformations (custom and built-in) is share query results between panels in interesting ways. This allows you to place most of your queries in a single query runner that lives at the top of the scene. Then you can use a ",(0,r.kt)("inlineCode",{parentName:"p"},"SceneDataTransformer")," object on the ",(0,r.kt)("inlineCode",{parentName:"p"},"VizPanel")," level to join and filter the resulting data in different ways. Some panels may need the result of two of the queries, and another may need the results of all of them."),(0,r.kt)("p",null,"It's easy to filter the resulting ",(0,r.kt)("inlineCode",{parentName:"p"},"DataFrame")," array by which query they came from using the ",(0,r.kt)("inlineCode",{parentName:"p"},"refId")," property on ",(0,r.kt)("inlineCode",{parentName:"p"},"DataFrame"),"."),(0,r.kt)("h2",{id:"source-code"},"Source code"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/grafana/scenes/tree/main/docusaurus/docs/transformations.tsx"},"View the example source code")))}u.isMDXComponent=!0}}]);