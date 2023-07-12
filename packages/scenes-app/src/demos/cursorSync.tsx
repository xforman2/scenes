import {
  behaviors,
  EmbeddedScene,
  PanelBuilders,
  SceneAppPage,
  SceneAppPageState,
  SceneFlexItem,
  SceneFlexLayout,
  VizPanel,
} from '@grafana/scenes';
import { DashboardCursorSync } from '@grafana/schema';
import { getEmbeddedSceneDefaults, getQueryRunnerWithRandomWalkQuery } from './utils';

export function getCursorSyncTest(defaults: SceneAppPageState) {
  return new SceneAppPage({
    ...defaults,
    subTitle: 'A simple demo of scoped cursor sync',
    getScene: () => {
      return new EmbeddedScene({
        ...getEmbeddedSceneDefaults(),
        key: 'Flex layout embedded scene',
        body: new SceneFlexLayout({
          direction: 'column',
          children: [
            new SceneFlexLayout({
              direction: 'row',
              $behaviors: [new behaviors.EnableCursorSync({ key: 'sync1', sync: DashboardCursorSync.Tooltip })],
              children: [
                new SceneFlexItem({
                  body: new VizPanel({
                    title: 'Panel 1 - syncs tooltip with Panel 2',
                    pluginId: 'timeseries',
                    $data: getQueryRunnerWithRandomWalkQuery({
                      scenarioId: 'csv_metric_values',
                      stringInput: '1,20,90,30,5,0',
                    }),
                  }),
                }),
                new SceneFlexItem({
                  body: PanelBuilders.timeseries()
                    .setData(
                      getQueryRunnerWithRandomWalkQuery(
                        {
                          scenarioId: 'csv_metric_values',
                          stringInput: '1,20,90,30,5,0',
                        },
                        { maxDataPoints: 50 }
                      )
                    )
                    .setTitle('Panel 2')
                    .build(),
                }),
              ],
            }),
            new SceneFlexLayout({
              direction: 'row',
              $behaviors: [new behaviors.EnableCursorSync({ key: 'sync2', sync: DashboardCursorSync.Crosshair })],
              children: [
                new SceneFlexItem({
                  body: new VizPanel({
                    title: 'Panel 3 - syncs crosshair with Panel 4',
                    pluginId: 'timeseries',
                    $data: getQueryRunnerWithRandomWalkQuery({}),
                  }),
                }),
                new SceneFlexItem({
                  body: PanelBuilders.timeseries()
                    .setData(getQueryRunnerWithRandomWalkQuery({}, { maxDataPoints: 50 }))
                    .setTitle('Panel 4')
                    .build(),
                }),
              ],
            }),
            new SceneFlexLayout({
              direction: 'row',
              $behaviors: [new behaviors.EnableCursorSync({ key: 'sync3', sync: DashboardCursorSync.Off })],
              children: [
                new SceneFlexItem({
                  body: new VizPanel({
                    title: 'No sync',
                    pluginId: 'timeseries',
                    $data: getQueryRunnerWithRandomWalkQuery({}),
                  }),
                }),
                new SceneFlexItem({
                  body: PanelBuilders.timeseries()
                    .setData(getQueryRunnerWithRandomWalkQuery({}, { maxDataPoints: 50 }))
                    .setTitle('No sync')
                    .build(),
                }),
              ],
            }),
          ],
        }),
      });
    },
  });
}
