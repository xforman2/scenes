"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[598],{876:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var a=t(2784);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),c=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},l=function(e){var n=c(e.components);return a.createElement(o.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(t),g=r,m=u["".concat(o,".").concat(g)]||u[g]||d[g]||i;return t?a.createElement(m,s(s({ref:n},l),{},{components:t})):a.createElement(m,s({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=g;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[u]="string"==typeof e?e:r,s[1]=p;for(var c=2;c<i;c++)s[c]=t[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},4378:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=t(7896),r=(t(2784),t(876));const i={id:"scene-app-tabs",title:"Tab navigation in Scenes apps"},s=void 0,p={unversionedId:"scene-app-tabs",id:"scene-app-tabs",title:"Tab navigation in Scenes apps",description:"SceneAppPage provides support for building Grafana applications with tabs navigation. Tabs navigation is especially useful for designing information architecture for complex Grafana apps, where visualizations are grouped into meaningful sections.",source:"@site/../docs/scene-app-tabs.md",sourceDirName:".",slug:"/scene-app-tabs",permalink:"/scenes/docs/scene-app-tabs",draft:!1,editUrl:"https://github.com/grafana/scenes/edit/main/docusaurus/website/../docs/scene-app-tabs.md",tags:[],version:"current",frontMatter:{id:"scene-app-tabs",title:"Tab navigation in Scenes apps"},sidebar:"docs",previous:{title:"Building apps with Scenes",permalink:"/scenes/docs/scene-app"},next:{title:"Drill-down pages in Scenes apps",permalink:"/scenes/docs/scene-app-drilldown"}},o={},c=[{value:"Add tabs navigation to Scenes apps",id:"add-tabs-navigation-to-scenes-apps",level:2},{value:"Step 1. Create a Scenes app",id:"step-1-create-a-scenes-app",level:3},{value:"Step 2. Create scenes for individual tabs",id:"step-2-create-scenes-for-individual-tabs",level:3},{value:"Step 3. Configure tabs for page",id:"step-3-configure-tabs-for-page",level:3}],l={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"SceneAppPage")," provides support for building Grafana applications with tabs navigation. Tabs navigation is especially useful for designing information architecture for complex Grafana apps, where visualizations are grouped into meaningful sections."),(0,r.kt)("h2",{id:"add-tabs-navigation-to-scenes-apps"},"Add tabs navigation to Scenes apps"),(0,r.kt)("p",null,"Defining tabs navigation for apps using scenes is a matter of utilizing ",(0,r.kt)("inlineCode",{parentName:"p"},"SceneAppPage")," property ",(0,r.kt)("inlineCode",{parentName:"p"},"tabs"),"."),(0,r.kt)("h3",{id:"step-1-create-a-scenes-app"},"Step 1. Create a Scenes app"),(0,r.kt)("p",null,"Follow the ",(0,r.kt)("a",{parentName:"p",href:"/scenes/docs/scene-app"},"Building apps with scenes guide")," to build your app."),(0,r.kt)("h3",{id:"step-2-create-scenes-for-individual-tabs"},"Step 2. Create scenes for individual tabs"),(0,r.kt)("p",null,"Each tab renders its own scene, similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"SceneAppPage"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const getOverviewScene =() => {\n    const queryRunner = new SceneQueryRunner({\n    $timeRange: new SceneTimeRange()\n    datasource: {\n      type: 'prometheus',\n      uid: '<PROVIDE_GRAFANA_DS_UID>',\n    },\n    queries: [\n      {\n        refId: 'A',\n        expr: 'rate(prometheus_http_requests_total{}[5m])',\n      },\n    ],\n  });\n\n  return new EmbeddedScene({\n    $data: queryRunner,\n    body: new SceneFlexLayout({\n      direction: 'column',\n      children: [new SceneFlexItem({\n        minHeight: 300,\n        body: new VizPanel({\n          title: 'HTTP Requests per handler',\n          pluginId: 'timeseries',\n        })\n      })],\n    }),\n  });\n}\n\nconst getHandlersScene =() => {\n  const queryRunner = new SceneQueryRunner({\n    $timeRange: new SceneTimeRange()\n    datasource: {\n      type: 'prometheus',\n      uid: '<PROVIDE_GRAFANA_DS_UID>',\n    },\n    queries: [\n      {\n        refId: 'A',\n        expr: 'sort_desc(avg by(handler) (rate(prometheus_http_request_duration_seconds_sum {}[5m]) * 1e3))',\n        format: 'table',\n        instant: true,\n      },\n    ],\n  });\n\n    return new EmbeddedScene({\n    $data: queryRunner,\n    body: new SceneFlexLayout({\n      direction: 'column',\n      children: [new SceneFlexItem({\n        minHeight: 300,\n        body: new VizPanel({\n          title: 'HTTP Requests per handler',\n          pluginId: 'table',\n        })\n      })],\n    }),\n  });\n}\n")),(0,r.kt)("h3",{id:"step-3-configure-tabs-for-page"},"Step 3. Configure tabs for page"),(0,r.kt)("p",null,"Tabs are instances of ",(0,r.kt)("inlineCode",{parentName:"p"},"SceneAppPage")," objects. Similar to creating a scene page, you create tabs. To render tabs, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"tabs")," property of the ",(0,r.kt)("inlineCode",{parentName:"p"},"SceneAppPage")," object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"\nconst overviewTab = new SceneAppPage({\n  title: 'Overview',\n  url: '/a/<PLUGIN_ID>/my-app/overview',\n  getScene: getOverviewScene,\n});\n\nconst handlersTab = new SceneAppPage({\n  title: 'Handlers',\n  url: '/a/<PLUGIN_ID>/my-app/handlers',\n  getScene: getHandlersScene,\n});\n\n\nconst myAppPage = new SceneAppPage({\n  title: 'Grafana Scenes App',\n  url: '`/a/<PLUGIN_ID>/my-app`,\n  tabs: [\n    overviewTab,\n    handlersTab\n  ]\n});\n")),(0,r.kt)("p",null,"Navigating to ",(0,r.kt)("inlineCode",{parentName:"p"},"https://your-grafana.url/a/<PLUGIN_ID>/my-app")," will render a scene app with two tabs: ",(0,r.kt)("strong",{parentName:"p"},"Overview")," and ",(0,r.kt)("strong",{parentName:"p"},"Handlers"),". The ",(0,r.kt)("strong",{parentName:"p"},"Overview")," tab contains a time series panel with a Prometheus HTTP Requests summary. The ",(0,r.kt)("strong",{parentName:"p"},"Handlers")," tab contains a table panel with a Prometheus HTTP request average duration summary, per handler."))}d.isMDXComponent=!0}}]);