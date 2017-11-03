import { treemapLevels } from '../../echarts-base'

function getTreemapTooltip (args) {
  return {
    formatter: '{b}:<br />{c}'
  }
}

function getTreemapSeries(args) {
  const { data, settings } = args
  const { measure } = data
  const {
    width,
    height,
    rootName,
    isRoma,
    levels
  } = settings
  const series = []

  series.push({
    type: 'treemap',
    name: rootName || '根级',
    leafDepth: 1,
    roam: isRoma || true,
    width: width || '80%',
    height: height || '80%',
    data: measure,
    levels: levels || treemapLevels
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
