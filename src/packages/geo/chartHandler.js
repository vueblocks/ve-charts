import { isUndefined } from 'lodash'

import cityGeo from './cityGeo.json'
import cityGeo2 from './cityGeo2.json'
import mapProvinceId from './mapProvinceId.json'
import mapCityId from './mapCityId.json'

function convertCityData(data, options) {
  const { index, connect } = options
  const dataIndex = connect ? connect.dataIndex : -1
  const seriesIndex = connect ? connect.seriesIndex : -1
  const symbolSize = connect ? connect.symbolSize : 10
  const normalShadowBlur = connect ? connect.normalShadowBlur : 0

  const res = []
  for (let i = 0; i < data.length; i++) {
    const name = isNaN(data[i].name * 1) ? data[i].name : mapCityId[data[i].name]
    const value = data[i].value
    const geoCoord = cityGeo[name] || cityGeo2[name]

    if (geoCoord) {
      res.push({
        name: name,
        value: geoCoord.concat(value),
        pattern: data[i].name
      })
    }
  }

  if (seriesIndex === index) {
    res[dataIndex] = {
      ...res[dataIndex],
      symbolSize,
      itemStyle: {
        normal: {
          shadowBlur: normalShadowBlur
        }
      }
    }
  }
  return res
}

function convertProvinceData(data, options) {
  const { connect } = options
  const dataIndex = connect ? connect.dataIndex : -1
  const normalShadowBlur = connect ? connect.normalShadowBlur : 0

  const convertData = isNaN(data[0].name * 1) ? data : data.map((v, i) => {
    const provinceIndex = mapProvinceId.findIndex(province => province.id === v.name)

    return {
      ...v,
      name: provinceIndex !== -1 ? mapProvinceId[provinceIndex].name : v.name,
      pattern: data[i].name
    }
  })

  if (dataIndex !== -1) {
    convertData[dataIndex] = {
      ...convertData[dataIndex],
      selected: true,
      itemStyle: {
        normal: {
          shadowBlur: normalShadowBlur
        }
      }
    }
  }

  return convertData
}

function getGeoData(args) {
  const { data, settings } = args
  const { measure } = data
  const { position, seriesSymbolSize, connect } = settings
  const legendData = []
  const seriesData = []
  let getMaxArr = []

  measure && measure.forEach(({ name, data }, i) => {
    legendData.push(name)
    if (i === 0) {
      getMaxArr.push(...data)
    } else {
      getMaxArr = getMaxArr.map(v => {
        return {
          ...v,
          value: v.value + data[data.findIndex(vv => vv.name === v.name)].value
        }
      })
    }

    if (position === 'province') {
      seriesData[i] = {
        name,
        type: 'map',
        roam: true,
        selectedMode: 'single',
        mapType: 'china',
        label: {
          normal: {
            show: true
          },
          emphasis: {
            show: true
          }
        },
        data: convertProvinceData(data, {
          connect
        })
      }
    } else if (position === 'city') {
      seriesData[i] = {
        name,
        type: 'scatter',
        symbolSize: seriesSymbolSize,
        coordinateSystem: 'geo',
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: false
          },
          emphasis: {
            show: true
          }
        },
        data: convertCityData(data, {
          index: i,
          connect
        })
      }
    }
  })

  return {
    legendData,
    seriesData,
    max: Math.max(...getMaxArr.map(v => v.value))
  }
}

function getGeoTooltip() {
  return {
    trigger: 'item'
  }
}

function getGeoLegend(args) {
  const { legendData, settings } = args
  const { legendType, legendPadding } = settings

  return {
    type: legendType || 'plain',
    padding: legendPadding || 5,
    data: legendData
  }
}

function getGeo(args) {
  const {
    settings: {
      geoLabelShow,
      geoSilent
    }
  } = args
  return {
    map: 'china',
    silent: !isUndefined(geoSilent) ? geoSilent : false,
    roam: true,
    label: {
      normal: {
        show: !isUndefined(geoLabelShow) ? geoLabelShow : false
      }
    }
  }
}

function getVisualMap(args) {
  const { max, settings } = args
  const { showVisualMap } = settings

  return {
    splitNumber: 4,
    max: parseInt(max) || 200,
    min: 0,
    show: showVisualMap !== undefined ? showVisualMap : true
  }
}

function getGeoSeries(args) {
  const { seriesData } = args

  return seriesData
}

export const geo = (data, settings, extra) => {
  const { tooltipVisible, legendVisible } = extra

  const { legendData, seriesData, max } = getGeoData({ data, settings })

  const { position } = settings

  const tooltip = tooltipVisible && getGeoTooltip()

  const legend = legendVisible && getGeoLegend({ legendData, settings })

  const geo = position === 'city' && getGeo({ data, settings })

  const series = getGeoSeries({ seriesData, settings })

  const visualMap = position === 'province' && series.length && getVisualMap({ max, settings })

  // build echarts options
  const options = {
    tooltip,
    legend,
    visualMap,
    geo,
    series
  }

  return options
}
