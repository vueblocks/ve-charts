import { treemapLevels } from '../../base-options'

function getTreemapTooltip (args) {
  return {
    formatter: '{b}:<br />{c}'
  }
}

function getTreemapSeries (args) {
  const { data, settings } = args
  const { measures } = data
  const {
    name = '根级',
    levels = treemapLevels,
    ...others
  } = settings
  const series = []

  series.push({
    type: 'treemap',
    name,
    levels,
    data: measures,
    ...others
  })

  return series
}

export const treemap = (data, settings, extra) => {
  const { tooltipVisible } = extra

  const tooltip = tooltipVisible && getTreemapTooltip()

  const series = getTreemapSeries({ data, settings })

  // build echarts options
  const options = {
    tooltip,
    series
  }
  return options
}
