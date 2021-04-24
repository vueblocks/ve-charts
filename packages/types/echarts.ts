import { SetupContext } from 'vue'
import { init } from 'echarts/core'
import {
  AriaComponentOption,
  AxisPointerComponentOption,
  BrushComponentOption,
  CalendarComponentOption,
  DatasetComponentOption,
  GeoComponentOption,
  GraphicComponentOption,
  GridComponentOption,
  LegendComponentOption,
  ParallelComponentOption,
  PolarComponentOption,
  SingleAxisComponentOption,
  TimelineComponentOption,
  TitleComponentOption
} from 'echarts/components'
import {
  AngleAxisOption,
  DataZoomComponentOption,
  ParallelCoordinateSystemOption,
  RadarOption,
  RadiusAxisOption,
  SeriesOption,
  ToolboxComponentOption,
  TooltipOption,
  VisualMapComponentOption,
  XAXisOption,
  YAXisOption
} from 'echarts/types/dist/shared'

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

export type ECSetOption = {
  readonly aria: AriaComponentOption;
  readonly axisPointer: AxisPointerComponentOption;
  readonly brush: BrushComponentOption;
  readonly calendar: CalendarComponentOption;
  readonly dataset: DatasetComponentOption;
  readonly geo: GeoComponentOption;
  readonly graphic: GraphicComponentOption;
  readonly grid: GridComponentOption;
  readonly legend: LegendComponentOption;
  readonly parallel: ParallelComponentOption;
  readonly polar: PolarComponentOption;
  readonly singleAxis: SingleAxisComponentOption;
  readonly timeline: TimelineComponentOption;
  readonly title: TitleComponentOption;
  readonly angleAxis: AngleAxisOption;
  readonly dataZoom: DataZoomComponentOption;
  readonly parallelAxis: ParallelCoordinateSystemOption;
  readonly radar: RadarOption;
  readonly radiusAxis: RadiusAxisOption;
  readonly series: SeriesOption;
  readonly toolbox: ToolboxComponentOption;
  readonly tooltip: TooltipOption;
  readonly visualMap: VisualMapComponentOption;
  readonly xAxis: XAXisOption;
  readonly yAxis: YAXisOption;
}
