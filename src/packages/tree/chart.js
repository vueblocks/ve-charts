import BaseChart from '../../BaseChart'

class TreeChart extends BaseChart {
  static getTreeTooltip () {
    return {
      trigger: 'item',
      triggerOn: 'mousemove'
    }
  }

  static getTreeLegend (data, settings) {
    const { legendType = 'plain', legendPadding = 5 } = settings
    const { measures } = data
    return {
      type: legendType,
      padding: legendPadding,
      data: measures.map(v => v.name)
    }
  }

  static formatTreeLabels (orient = 'LR', rotate = 0) {
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

  static getTreeSeries (data, settings) {
    const {
      seriesMap = [],
      labelRotate
    } = settings

    const series = data.measures.map((item, idx) => {
      const layout = seriesMap && seriesMap[idx] && seriesMap[idx].layout
      const orient = seriesMap && seriesMap[idx] && seriesMap[idx].orient
      const labelVSLeaves = layout === 'radial' ? {} : TreeChart.formatTreeLabels(orient, labelRotate)
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

  tree (data, settings, extra) {
    const { tooltipVisible, legendVisible } = extra

    const tooltip = tooltipVisible && TreeChart.getTreeTooltip()

    const legend = legendVisible && TreeChart.getTreeLegend(data, settings)

    const series = TreeChart.getTreeSeries(data, settings)

    // build echarts options
    const options = {
      tooltip,
      legend,
      series
    }

    // console.log(JSON.stringify(options))
    return options
  }
}

export default TreeChart
