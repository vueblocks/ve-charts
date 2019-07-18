import Vue from 'vue'
import { max, min, round } from 'lodash'
import { getDataset } from '../../utils'

function getFunnelTooltip(args) {
  return {
    trigger: 'item'
  }
}

function getFunnelLegend(args) {
  const { settings } = args
  const {
    legendType = 'plain',
    legendPadding = 5
  } = settings
  return {
    type: legendType,
    padding: legendPadding
  }
}

function getFunnelSeries(args) {
  const { data, settings } = args
  const { measures } = data
  const {
    funnelSort = 'desc',
    funnelAlign = 'center',
    contrast = false,
    symmetric = false,
    labelPosition = 'outside',
    ...others
  } = settings

  const getMaxSize = (measures) => {
    if (measures.length > 2) {
      Vue.util.warn(`data.measures.length is more then 2 in [Contrastive funnel chart]. Please use 2 measures`, this)
      return
    }
    let maxSize = ''
    if (measures.length > 1) {
      const quotient = measures.reduce((prev, next) => {
        return round(min([max(prev.data), max(next.data)]) / max([max(prev.data), max(next.data)]), 2)
      })
      maxSize = `${quotient * 100}%`
    }
    return maxSize
  }

  const getX = (symmetric, idx) => {
    return symmetric ? idx === 0 ? '10%' : '50%' : '10%'
  }

  const getAlign = (symmetric, idx) => {
    return symmetric
      ? idx === 0 ? 'right' : 'left'
      : funnelAlign
  }

  const getLabel = (settings, idx) => {
    const {
      contrast,
      symmetric
    } = settings
    let label = {
      normal: {
        position: labelPosition
      }
    }

    if (contrast) {
      const contrastLabel = {
        normal: {
          position: 'inside',
          formatter: '{d}%'
        },
        emphasis: {
          position: 'inside',
          formatter: '{a}: {d}%'
        }
      }

      label = idx === 0 ? label : contrastLabel
    }

    if (symmetric) {
      const rightLabel = {
        normal: {
          position: labelPosition !== 'outside' ? labelPosition : 'left'
        }
      }

      const leftLabel = {
        normal: {
          position: labelPosition !== 'outside' ? labelPosition : 'right'
        }
      }
      label = idx === 0 ? rightLabel : leftLabel
    }

    return label
  }

  const series = []
  measures.forEach(({ name, data }, idx) => {
    series.push({
      type: 'funnel',
      name,
      sort: funnelSort === 'desc' ? 'descending' : 'ascending',
      funnelAlign: getAlign(symmetric, idx),
      width: symmetric ? '40%' : '80%',
      x: getX(symmetric, idx),
      maxSize: !contrast || idx === 0 ? '100%' : getMaxSize(measures),
      label: getLabel({ contrast, symmetric }, idx),
      ...others
    })
  })
  return series
}

export const funnel = (data, settings, extra, isDonut) => {
  const { tooltipVisible, legendVisible } = extra

  extra.chartType = 'funnel'
  const dataset = getDataset(data, settings, extra)

  const tooltip = tooltipVisible && getFunnelTooltip()

  const legend = legendVisible && getFunnelLegend({ settings })

  const series = getFunnelSeries({ data, settings, isDonut })

  // build echarts options
  const options = {
    dataset,
    tooltip,
    legend,
    series
  }

  // console.log(options)

  return options
}
