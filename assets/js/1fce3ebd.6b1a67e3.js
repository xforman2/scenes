"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[55],{876:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>m});var a=t(2784);function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){p(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,p=function(e,n){if(null==e)return{};var t,a,p={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(p[t]=e[t]);return p}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(p[t]=e[t])}return p}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,p=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(t),g=p,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||r;return t?a.createElement(m,i(i({ref:n},c),{},{components:t})):a.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,p=n&&n.mdxType;if("string"==typeof e||p){var r=t.length,i=new Array(r);i[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[u]="string"==typeof e?e:p,i[1]=o;for(var l=2;l<r;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},6358:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=t(7896),p=(t(2784),t(876));const r={id:"scene-app",title:"Building apps with Scenes"},i=void 0,o={unversionedId:"scene-app",id:"scene-app",title:"Building apps with Scenes",description:"This guide requires knowledge about building Grafana plugins. Learn more about building Grafana plugins in the official plugins documentation.",source:"@site/../docs/scene-app.md",sourceDirName:".",slug:"/scene-app",permalink:"/scenes/docs/scene-app",draft:!1,editUrl:"https://github.com/grafana/scenes/edit/main/docusaurus/website/../docs/scene-app.md",tags:[],version:"current",frontMatter:{id:"scene-app",title:"Building apps with Scenes"},sidebar:"docs",previous:{title:"Transformations",permalink:"/scenes/docs/transformations"},next:{title:"Tab navigation in Scenes apps",permalink:"/scenes/docs/scene-app-tabs"}},s={},l=[{value:"SceneApp",id:"sceneapp",level:2},{value:"Step 1. Create a Scenes app",id:"step-1-create-a-scenes-app",level:3},{value:"Step 2. Render scene app in plugin",id:"step-2-render-scene-app-in-plugin",level:3},{value:"SceneAppPage",id:"sceneapppage",level:2},{value:"Step 1. Create a scene",id:"step-1-create-a-scene",level:3},{value:"Step 2. Create <code>SceneAppPage</code>",id:"step-2-create-sceneapppage",level:3},{value:"Step 3. Add page to <code>SceneApp</code>",id:"step-3-add-page-to-sceneapp",level:3}],c={toc:l},u="wrapper";function d(e){let{components:n,...t}=e;return(0,p.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("admonition",{type:"info"},(0,p.kt)("p",{parentName:"admonition"},"This guide requires knowledge about building Grafana plugins. Learn more about building Grafana plugins in the ",(0,p.kt)("a",{parentName:"p",href:"https://grafana.com/docs/grafana/latest/developers/plugins/"},"official plugins documentation"),".")),(0,p.kt)("p",null,"Scenes come with the following objects that make it easy to build highly interactive Grafana app plugins:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"SceneApp")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"SceneAppPage"))),(0,p.kt)("h2",{id:"sceneapp"},"SceneApp"),(0,p.kt)("p",null,(0,p.kt)("inlineCode",{parentName:"p"},"SceneApp")," is the root object you must use to take full advantage of Scenes and Grafana plugin integration. ",(0,p.kt)("inlineCode",{parentName:"p"},"SceneApp")," provides support for routing of your Scenes app."),(0,p.kt)("h3",{id:"step-1-create-a-scenes-app"},"Step 1. Create a Scenes app"),(0,p.kt)("p",null,"Define a new scene app using the ",(0,p.kt)("inlineCode",{parentName:"p"},"SceneApp")," object :"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-tsx"},"const getSceneApp = () =>\n  new SceneApp({\n    pages: [],\n  });\n")),(0,p.kt)("h3",{id:"step-2-render-scene-app-in-plugin"},"Step 2. Render scene app in plugin"),(0,p.kt)("p",null,"Define a component that will render the scene app:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-tsx"},"function MyApp() {\n  const scene = useMemo(() => getSceneApp(), []);\n\n  return <scene.Component model={scene} />;\n}\n")),(0,p.kt)("admonition",{type:"info"},(0,p.kt)("p",{parentName:"admonition"},"Memoize ",(0,p.kt)("inlineCode",{parentName:"p"},"SceneApp")," using ",(0,p.kt)("inlineCode",{parentName:"p"},"React.useMemo")," to avoid unnecessary re-renders.")),(0,p.kt)("p",null,"In app plugin render scene app:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-tsx"},"export class App extends React.PureComponent<AppRootProps> {\n  render() {\n    return (\n      <PluginPropsContext.Provider value={this.props}>\n        <MyApp />\n      </PluginPropsContext.Provider>\n    );\n  }\n}\n")),(0,p.kt)("admonition",{type:"note"},(0,p.kt)("p",{parentName:"admonition"},"The example above will render a blank page because the ",(0,p.kt)("inlineCode",{parentName:"p"},"pages")," property in the ",(0,p.kt)("inlineCode",{parentName:"p"},"SceneApp")," constructor is empty. Use the ",(0,p.kt)("inlineCode",{parentName:"p"},"SceneAppPage")," object to render scenes in your app.")),(0,p.kt)("h2",{id:"sceneapppage"},"SceneAppPage"),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"SceneAppPage")," object allows for rendering scenes in app plugins easily. In addition to rendering scenes, it provides support for:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"Routing"),(0,p.kt)("li",{parentName:"ul"},"Grafana breadcrumbs integration"),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/scenes/docs/scene-app-tabs"},"Tabs navigation")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("a",{parentName:"li",href:"/scenes/docs/scene-app-drilldown"},"Drilldowns"))),(0,p.kt)("p",null,"Use ",(0,p.kt)("inlineCode",{parentName:"p"},"SceneAppPage")," to build your app pages. It accepts the following properties:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-ts"},"  /** Page title */\n  title: string;\n  /** Page subTitle */\n  subTitle?: string;\n  /** For an image before title */\n  titleImg?: string;\n  /** For an icon before title */\n  titleIcon?: IconName;\n  /** Use to provide absolute page URL, for example, /app/overview **/\n  url: string;\n  /** Use to provide parametrized page URL, for example, /app/overview/:clusterId **/\n  routePath?: string;\n  /** Array of scene object to be rendered at the top right of the page, inline with the page title */\n  controls?: SceneObject[];\n  /** Controls whether or not page should be visible in the breadcrumbs path **/\n  hideFromBreadcrumbs?: boolean;\n  /** Array of SceneAppPage objects that are used as page tabs displayed at the top of the page **/\n  tabs?: SceneAppPageLike[];\n  /** Function that returns a scene object for the page **/\n  getScene?: (routeMatch: SceneRouteMatch) => EmbeddedScene;\n  /** Array of scenes used for drilldown views **/\n  drilldowns?: SceneAppDrilldownView[];\n  /** Function that returns a parent page object, used to create breadcrumbs structure **/\n  getParentPage?: () => SceneAppPageLike;\n  /** Array of query params that will be preserved in breadcrumb and page tab links, for example, ['from', 'to', 'var-datacenter',...] **/\n  preserveUrlKeys?: string[];\n")),(0,p.kt)("h3",{id:"step-1-create-a-scene"},"Step 1. Create a scene"),(0,p.kt)("p",null,"First, create a scene to be rendered within ",(0,p.kt)("inlineCode",{parentName:"p"},"SceneApp"),":"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-tsx"},"const getScene = () => {\n  const queryRunner = new SceneQueryRunner({\n    datasource: {\n      type: 'prometheus',\n      uid: '<PROVIDE_GRAFANA_DS_UID>',\n    },\n    queries: [\n      {\n        refId: 'A',\n        expr: 'rate(prometheus_http_requests_total{}[5m])',\n      },\n    ],\n  });\n\n  return new EmbeddedScene({\n    $data: queryRunner,\n    $timeRange: new SceneTimeRange(),\n    body: new SceneFlexLayout({\n      direction: 'column',\n      children: [\n        new SceneFlexItem({\n          minHeight: 300,\n          body: new VizPanel({\n            title: 'Panel title',\n            pluginId: 'timeseries',\n          }),\n        }),\n      ],\n    }),\n  });\n};\n")),(0,p.kt)("h3",{id:"step-2-create-sceneapppage"},"Step 2. Create ",(0,p.kt)("inlineCode",{parentName:"h3"},"SceneAppPage")),(0,p.kt)("p",null,"Use the ",(0,p.kt)("inlineCode",{parentName:"p"},"SceneAppPage")," object to configure app page:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-tsx"},"const myAppPage = new SceneAppPage({\n  title: 'Grafana Scenes App',\n  url: '/a/<PLUGIN_ID>',\n  getScene: getScene,\n});\n")),(0,p.kt)("h3",{id:"step-3-add-page-to-sceneapp"},"Step 3. Add page to ",(0,p.kt)("inlineCode",{parentName:"h3"},"SceneApp")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-tsx"},"const getSceneApp = () =>\n  new SceneApp({\n    pages: [myAppPage],\n  });\n")),(0,p.kt)("p",null,"Navigating to ",(0,p.kt)("inlineCode",{parentName:"p"},"https://your-grafana.url/a/<PLUGIN_ID>")," will render a scene app with a page containing Time series panel that visualizes number of Prometheus HTTP requests."))}d.isMDXComponent=!0}}]);