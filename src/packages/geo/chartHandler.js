import { ceil } from 'lodash'
import echarts from 'echarts/lib/echarts'

import { getMapJSON } from '../../utils'
import { MAP_URL_PREFIX } from '../../base-options'

import cityGeo from './map-data/cityGeo.json'
import cityGeo2 from './map-data/cityGeo2.json'
import mapCityId from './map-data/mapCityId.json'

function convertCityData (data, options) {
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

function getGeoData (args) {
  const { data, settings } = args
  const { measures } = data
  const {
    mode = 'map',
    mapName = 'china',
    labelVisible,
    isMapMode,
    itemStyle,
    visualMap,
    label,
    symbolSize = 10,
    roam = false,
    zoom = 1,
    connect
  } = settings
  const [legendData, seriesData] = [[], []]

  // computed max value
  const max = measures.map(({ data }) => {
    const dataValues = data.map(v => parseInt(v.value))
    return Math.max(...dataValues)
  }).reduce((a, b) => a + b)

  measures && measures.forEach(({ name, data }, index) => {
    const mapData = isMapMode ? data : convertCityData(data, { index, connect })

    const unShowLabel = { normal: { show: false }, emphasis: { show: false } }

    seriesData[index] = {
      name,
      type: mode,
      roam,
      visualMap,
      label: labelVisible ? label : unShowLabel,
      selectedMode: 'single',
      mapType: mapName,
      data: mapData,
      zoom
    }

    if (itemStyle) {
      seriesData[index].itemStyle = itemStyle
    }

    if (!isMapMode) {
      seriesData[index] = { ...seriesData[index],
        ...{
          coordinateSystem: 'geo',
          label: unShowLabel,
          symbolSize,
          showEffectOn: 'render',
          rippleEffect: {
            brushType: 'stroke'
          },
          itemStyle: {}
        } }
    }

    legendData.push(name)
  })

  return {
    legendData,
    seriesData,
    max: ceil(max, -2)
  }
}

function getGeoTooltip (isMapMode) {
  const formatter = function (params) {
    const { seriesName, name, value, marker } = params
    const seriesValue = Array.isArray(value) ? value[2] : value
    return `${seriesName}<br>${marker}${name}: ${seriesValue}`
  }
  return isMapMode
    ? { trigger: 'item' }
    : { trigger: 'item', formatter }
}

function getGeoLegend (args) {
  const { legendData, settings } = args
  const { legendType = 'plain', legendPadding = 5 } = settings

  return {
    type: legendType,
    padding: legendPadding,
    data: legendData
  }
}

function getGeo (args) {
  const {
    labelVisible = false,
    label,
    itemStyle,
    silent = false,
    zoom = 1,
    roam = false,
    mapName = 'china'
  } = args.settings
  const unShowLabel = { normal: { show: false }, emphasis: { show: false } }
  const geo = {
    map: mapName,
    silent,
    roam,
    selectedMode: 'single',
    label: labelVisible ? label : unShowLabel,
    zoom
  }
  if (itemStyle) {
    geo.itemStyle = itemStyle
  }
  return geo
}

function getVisualMap (args) {
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

async function registerMap (args) {
  const {
    mapName = 'china',
    specialAreas,
    mapUrlPrefix = MAP_URL_PREFIX,
    _once
  } = args

  let mapJson = {}
  // load geojson once
  if (!_once[mapName]) {
    mapJson = await getMapJSON({ mapName, mapUrlPrefix })
    Object.assign(_once, { [mapName]: true })
    echarts.registerMap(mapName, mapJson, specialAreas)
  }

  return mapJson
}

export const geo = async (data, settings, extra) => {
  const { tooltipVisible, legendVisible, _once } = extra

  const {
    mode = 'map',
    visualMapVisible = false
  } = settings

  const isMapMode = mode === 'map'
  settings.isMapMode = isMapMode

  const { legendData, seriesData, max } = getGeoData({ data, settings })

  const tooltip = tooltipVisible && getGeoTooltip(isMapMode)

  const legend = legendVisible && getGeoLegend({ legendData, settings })

  const geo = !isMapMode && getGeo({ data, settings })

  const geoVisualMap = visualMapVisible && getVisualMap({ max, settings })

  // build echarts options
  const options = {
    tooltip,
    legend,
    visualMap: geoVisualMap,
    geo,
    series: seriesData
  }

  const mapOptions = {
    mapName: settings.mapName,
    specialAreas: settings.specialAreas,
    mapUrlPrefix: settings.mapUrlPrefix,
    _once
  }

  // console.log(JSON.stringify(options))
  await registerMap(mapOptions)

  return options
}
