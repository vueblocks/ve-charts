function getScatterData(args) {
  const { data, settings } = args
  const { connect } = settings
  const dataIndex = connect ? connect.dataIndex : -1
  const legendData = []
  const seriesData = []

  data.measure.forEach(({ name, data }, i) => {
    legendData.push(name);
    seriesData[i] = {
      type: 'scatter',
      data: dataIndex === -1 ? data : getSeriesData(data, {
        index: i,
        connect
      }),
      symbolSize: (data) => {
        return data[2] == null ? 12 : Math.sqrt(data[2] / 5e2)
      },
      name
    };
  });

  return {
    legendData,
    seriesData
  }
}

function getSeriesData(data, options) {
  const {
    index,
    connect: {
      dataIndex,
      seriesIndex,
      symbolSize,
      normalShadowBlur
    }
  } = options

  if (index !== seriesIndex) {
    return data
  }
  return data.map((v, i) => {
    if (i === dataIndex) {
      return {
        value: v,
        symbolSize,
        itemStyle: {
          normal: {
            shadowBlur: normalShadowBlur
          }
        }
      }
    }
    return {
      value: v
    }
  })
}

function getScatterTooltip() {
  return {
    trigger: 'axis',
    axisPointer: {
      type: 'cross'
    }
  }
}

function getScatterLegend(args) {
  const { legendData, settings } = args
  const { legendType, legendPadding } = settings

  return {
    type: legendType || 'plain',
    padding: legendPadding || 5,
    data: legendData
  }
}

function getScatterSeries(args) {
  const { seriesData } = args

  return seriesData
}

function getScatterXAxis() {
  return {
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    }
  }
}

function getScatterYAxis(args) {
  const { data, settings } = args
  const { yAxisScale } = settings

  return {
    scale: yAxisScale ? yAxisScale : false,
    splitLine: {
      lineStyle: {
        type: 'dashed'
      }
    }
  }
}

export const scatter = (data, settings, extra) => {
  const { tooltipVisible, legendVisible } = extra

  const tooltip = tooltipVisible && getScatterTooltip()

  const { legendData, seriesData } = getScatterData({ data, settings })

  const legend = legendVisible && getScatterLegend({ legendData, settings })

  const series = getScatterSeries({ seriesData })

  const xAxis = getScatterXAxis()

  const yAxis = getScatterYAxis({ data, settings })

  // build echarts options
  const options = {
    tooltip,
    legend,
    series,
    xAxis,
    yAxis
  }

  return options
}
