/* eslint-disable @typescript-eslint/no-explicit-any */
import { SetupContext } from 'vue-demi'
import { init } from 'echarts/core'

export type Attrs = NonNullable<SetupContext['attrs']>

export type { EChartsType, EChartsCoreOption } from 'echarts/core'
export type { ECBasicOption, EChartsOption } from 'echarts/types/dist/shared'
export type InitParameters = Parameters<typeof init>
export type Theme = NonNullable<InitParameters[1]>
export type InitOpts = NonNullable<InitParameters[2]>

export interface SetOptionOpts {
  notMerge?: boolean;
  lazyUpdate?: boolean;
  silent?: boolean;
  replaceMerge?: any;
  transition?: any;
}

