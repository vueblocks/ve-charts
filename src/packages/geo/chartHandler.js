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
  const { measures } = data
  const {
    mode = 'map',
    symbolSize = 10,
    zoom = 1,
    connect
  } = settings
  const legendData = []
  const seriesData = []
  let allDataValue = []

  measures && measures.forEach(({ name, data }, i) => {
    const dataValue = data.map(v => parseInt(v.value))
    allDataValue = [...allDataValue, ...dataValue]

    if (mode === 'map') {
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
        }),
        zoom
      }
    } else {
      seriesData[i] = {
        name,
        type: mode,
        symbolSize,
        roam: true,
        selectedMode: 'single',
        // showEffectOn: 'render',
        // rippleEffect: {
        //   brushType: 'stroke'
        // },
        coordinateSystem: 'geo',
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        data: convertCityData(data, {
          index: i,
          connect
        }),
        zoom
      }
    }

    legendData.push(name)
  })

  return {
    legendData,
    seriesData,
    max: Math.max(...allDataValue)
  }
}

function getGeoTooltip() {
  return {
    trigger: 'item'
  }
}

function getGeoLegend(args) {
  const { legendData, settings } = args
  const { legendType = 'plain', legendPadding = 5 } = settings

  return {
    type: legendType,
    padding: legendPadding,
    data: legendData
  }
}

function getGeo(args) {
  const {
    labelVisible = false,
    label,
    silent = false,
    zoom = 1,
    itemStyle,
    position = 'china'
  } = args.settings
  const defaultLabel = {
    normal: {
      show: false
    },
    emphasis: {
      show: false
    }
  }
  return {
    map: position,
    silent,
    roam: true,
    selectedMode: 'single',
    label: labelVisible ? label : defaultLabel,
    itemStyle,
    zoom
  }
}

function getVisualMap(args) {
  const { max = 200, settings } = args
  const { visualMap } = settings

  return {
    min: 0,
    max,
    left: 'left',
    top: 'bottom',
    show: true,
    calculable: true,
    ...visualMap
  }
}

function getGeoSeries(args) {
  const { seriesData } = args

  return seriesData
}

export const geo = (data, settings, extra) => {
  const { tooltipVisible, legendVisible } = extra

  const { legendData, seriesData, max } = getGeoData({ data, settings })

  const {
    mode = 'map',
    visualMapVisible = false
  } = settings

  const isProvinceMode = mode === 'map'
  settings.isProvinceMode = isProvinceMode

  const tooltip = tooltipVisible && getGeoTooltip()

  const legend = legendVisible && getGeoLegend({ legendData, settings })

  const geo = !isProvinceMode && getGeo({ data, settings })

  const series = getGeoSeries({ seriesData, settings })

  const geoVisualMap = visualMapVisible && getVisualMap({ max, settings })

  // build echarts options
  const options = {
    tooltip,
    legend,
    visualMap: geoVisualMap,
    geo,
    series
  }

  console.log(JSON.stringify(options))

  return options
}
