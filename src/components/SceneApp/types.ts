import { SceneObject, SceneObjectStatePlain } from '../../core/types';
import { EmbeddedScene } from '../EmbeddedScene';
import { IconName } from '@grafana/data';

export interface SceneRouteMatch<Params extends { [K in keyof Params]?: string } = {}> {
  params: Params;
  isExact: boolean;
  path: string;
  url: string;
}

export interface SceneAppState extends SceneObjectStatePlain {
  // Array of SceneAppPage objects that are considered app's top level pages
  pages: SceneAppPageLike[];
}

export interface SceneAppRoute {
  path: string;
  page?: SceneAppPageLike;
  drilldown?: SceneAppDrilldownView;
}

/**
 * This type is should be imported from @grafana/runtime (prop to PluginPage) but it's not exported
 */
export interface ScenePageInfoItem {
  label: string;
  value: React.ReactNode;
}

export interface SceneAppPageState extends SceneObjectStatePlain {
  /** Page title */
  title: string;
  /** Page subTitle */
  subTitle?: string;
  /** Page info items */
  pageInfo?: ScenePageInfoItem[];
  /** Shown in the top right */
  controls?: SceneObject[];
  /** For an image before title */
  titleImg?: string;
  /** For an icon before title */
  titleIcon?: IconName;
  // Use to provide page absolute URL, i.e. /app/overview
  url: string;
  // Use to provide parametrized page URL, i.e. /app/overview/:clusterId
  routePath?: string;
  // Whether or not page should be visible in the breadcrumbs path
  hideFromBreadcrumbs?: boolean;
  // Array of SceneAppPage objects that are used as page tabs displayed on top of the page
  tabs?: SceneAppPageLike[];
  // Function that returns a scene object for the page
  getScene: (routeMatch: SceneRouteMatch) => EmbeddedScene;
  // Array of scenes used for drilldown views
  drilldowns?: SceneAppDrilldownView[];
  // Function that returns a parent page object, used to create breadcrumbs structure
  getParentPage?: () => SceneAppPageLike;
  // Array of query params that will be preserved in breadcrumb and page tab links, i.e. ['from', 'to', 'var-datacenter',...]
  preserveUrlKeys?: string[];
  /**
   * The current scene, this is set by the framework after scene url initialization
   **/
  currentScene?: SceneObject;
}

export type SceneAppPageLike = SceneObject<SceneAppPageState>;

export interface SceneAppDrilldownView {
  // Use to provide parametrized drilldown URL, i.e. /app/clusters/:clusterId
  routePath: string;
  // Function that returns a page object for a given drilldown route match. Use parent to configure drilldown view parent SceneAppPage via getParentPage method.
  getPage: (routeMatch: SceneRouteMatch<any>, parent: SceneAppPageLike) => SceneAppPageLike;
}

export interface ScenePageHeaderItemState extends SceneObjectStatePlain {
  label?: string;
  value: React.ReactNode;
}