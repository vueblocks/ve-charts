import { ComposeOption } from 'echarts/core'
import { BarSeriesOption } from 'echarts/charts'
import {
  GridComponentOption,
  TitleComponentOption,
  TooltipComponentOption
} from 'echarts/components'

// Bar Chart Options
type BarChartOptions = ComposeOption<
  BarSeriesOption | GridComponentOption | TitleComponentOption | TooltipComponentOption
>

export { BarChartOptions }
