import { round } from 'lodash'

const formatterTooltip = (data) => {
  let [name, template] = ['', '', '']
  for (const [, v] of data.entries()) {
    name = `${v.name}`
    template += `
      <span style="color:${v.color};position: relative;margin-left:5px;">
        <i style="background:${v.color};width:10px;height:10px;display:inline-block;border-radius:100%;margin-right:10px;"></i><i style="background:${v.color};height:1px;width:20px;position:absolute;left: -5px;top: 9px;"></i>
        ${v.seriesName}：${round(v.value[v.seriesIndex + 1], 2)}
      </span><br/>
      `
  }
  template = `<div style="margin:15px;">${name}<br/>${template}</div>`
  return template
}

const tooltip = {
  trigger: 'axis',
  axisPointer: {
    type: 'line'
  },
  backgroundColor: 'rgba(250, 250, 250, 0.8)',
  extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);',
  textStyle: {
    color: '#000'
  },
  formatter: data => formatterTooltip(data)
}

const xAxis = {
  type: 'category',
  boundaryGap: true,
  axisLine: {
    lineStyle: {
      color: '#E9E9E9',
      width: 1
    }
  },
  axisLabel: {
    color: '#454545'
  },
  axisTick: {
    lineStyle: {
      color: '#E9E9E9',
      width: 3
    }
  }
}

const yAxis = [{
  axisTick: {
    show: false
  },
  axisLine: {
    show: false
  },
  splitLine: {
    show: true,
    lineStyle: {
      color: '#f1f1f1'
    }
  }
}]

export default {
  tooltip,
  xAxis,
  yAxis
}
