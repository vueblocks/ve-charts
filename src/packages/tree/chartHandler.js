function getTreeTooltip() {
  return {
    trigger: 'item',
    triggerOn: 'mousemove'
  }
}

function getTreeLegend(data, settings) {
  const { legendType = 'plain', legendPadding = 5 } = settings
  const { measures } = data
  return {
    type: legendType,
    padding: legendPadding,
    data: measures.map(v => v.name)
  }
}

function formatTreeLabels (orient = 'LR', rotate = 0) {
  let [labelPosition, labelAlign, leavesPosition, leavesAlign] = ['', '', '', '']
  switch (orient) {
    case 'LR':
      labelPosition = 'left'
      labelAlign = 'right'
      leavesPosition = 'right'
      leavesAlign = 'left'
      break
    case 'RL':
      labelPosition = 'right'
      labelAlign = 'left'
      leavesPosition = 'left'
      leavesAlign = 'right'
      break
    case 'TB':
      labelPosition = 'top'
      labelAlign = rotate > 0 ? 'right' : 'middle'
      leavesPosition = 'bottom'
      leavesAlign = rotate > 0 ? 'left' : 'middle'
      break
    case 'BT':
      labelPosition = 'bottom'
      labelAlign = rotate > 0 ? 'right' : 'middle'
      leavesPosition = 'top'
      leavesAlign = rotate > 0 ? 'left' : 'middle'
      break
    default:
  }
  return {
    label: {
      normal: {
        position: labelPosition,
        verticalAlign: 'middle',
        align: labelAlign,
        rotate
      }
    },
    leaves: {
      label: {
        normal: {
          position: leavesPosition,
          verticalAlign: 'middle',
          align: leavesAlign,
          rotate
        }
      }
    }
  }
}

function getTreeSeries(data, settings) {
  const {
    seriesMap = [],
    labelRotate,
    ...others
  } = settings

  const series = data.measures.map((item, idx) => {
    const layout = seriesMap && seriesMap[idx] && seriesMap[idx].layout
    const orient = seriesMap && seriesMap[idx] && seriesMap[idx].orient
    const labelVSLeaves = layout === 'radial' ? {} : formatTreeLabels(orient, labelRotate)
    const treeItem = {
      type: 'tree',
      name: item.name,
      data: [item.value],
      ...labelVSLeaves,
      ...seriesMap[idx]
    }
    return treeItem
  })
  return series
}

export const tree = (data, settings, extra) => {
  const { tooltipVisible, legendVisible } = extra

  const tooltip = tooltipVisible && getTreeTooltip()

  const legend = legendVisible && getTreeLegend(data, settings)

  const series = getTreeSeries(data, settings)

  // build echarts options
  const options = {
    tooltip,
    legend,
    series
  }
  console.log(JSON.stringify(options))
  return options
}
