import { ceil } from 'lodash-es'
import echarts from 'echarts/lib/echarts'

import { getMapJSON } from '../../utils'
import { MAP_URL_PREFIX } from '../../base-options'
import BaseChart from '../../BaseChart'

import cityGeo from './map-data/cityGeo.json'
import cityGeo2 from './map-data/cityGeo2.json'
import mapCityId from './map-data/mapCityId.json'

class GeoChart extends BaseChart {
  static convertCityName (name) {
    return isNaN(name * 1) ? name : mapCityId[name]
  }

  static convertCoord (name) {
    return cityGeo[name] || cityGeo2[name]
  }

  static convertCityData (data, options) {
    const { index, connect } = options
    const dataIndex = connect ? connect.dataIndex : -1
    const seriesIndex = connect ? connect.seriesIndex : -1
    const symbolSize = connect ? connect.symbolSize : 10
    const normalShadowBlur = connect ? connect.normalShadowBlur : 0

    const res = []
    for (let i = 0; i < data.length; i++) {
      const name = GeoChart.convertCityName(data[i].name)
      const value = data[i].value
      const geoCoord = GeoChart.convertCoord(name)

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

  static convertLinesData (name, data) {
    const res = []
    name = GeoChart.convertCityName(name)
    const fromCoord = GeoChart.convertCoord(name)
    if (!fromCoord) return []
    for (let i = 0, len = data.length; i < len; i++) {
      const dataItem = data[i]
      const dataItemName = GeoChart.convertCityName(dataItem.name)
      const toCoord = GeoChart.convertCoord(dataItemName)
      if (toCoord) {
        res.push({
          fromName: name,
          toName: dataItemName,
          coords: [fromCoord, toCoord],
          value: dataItem.value
        })
      }
    }
    return res
  }

  static convertEffectScatterData (data) {
    const res = []
    for (let i = 0, len = data.length; i < len; i++) {
      const dataItem = data[i]
      const dataItemName = GeoChart.convertCityName(dataItem.name)
      const geoCoord = GeoChart.convertCoord(dataItemName)
      if (geoCoord) {
        res.push({
          name: dataItemName,
          value: geoCoord.concat([dataItem.value])
        })
      }
    }
    return res
  }

  static getGeoData (args) {
    const { data, settings } = args
    const { measures } = data
    const {
      mode = 'map',
      mapName = 'china',
      labelVisible,
      isMapMode,
      isLinesMode,
      itemStyle,
      visualMap,
      label,
      symbolSize = 10,
      roam = false,
      zoom = 1,
      lineEffectVisible = false,
      lineEffect = {},
      overlayEffectVisible = true,
      overlayEffect = {},
      effectScatterLabelVisible = false,
      effectScatterLabel = {},
      lineStyle = {},
      connect
    } = settings

    const [legendData, seriesData] = [[], []]

    // computed max value
    const max = measures.map(({ data }) => {
      const dataValues = data.map(v => parseInt(v.value))
      return Math.max(...dataValues)
    }).reduce((a, b) => a + b)

    measures && measures.forEach(({ name, data }, index) => {
      const mapData = isMapMode ? data : isLinesMode ? GeoChart.convertLinesData(name, data) : GeoChart.convertCityData(data, { index, connect })

      const unShowLabel = { normal: { show: false }, emphasis: { show: false } }
      if (isLinesMode) {
        name = GeoChart.convertCityName(name)
        seriesData.push(
          // lines trailLength settings
          {
            name: name,
            type: 'lines',
            zlevel: 1,
            effect: {
              show: lineEffectVisible,
              period: 5,
              trailLength: 0,
              color: '#fff',
              symbolSize: 3,
              ...lineEffect
            },
            lineStyle: {
              normal: {
                width: 0
              }
            },
            data: mapData
          },
          // overlay and lines settings
          {
            name: name,
            type: 'lines',
            zlevel: 2,
            effect: {
              show: overlayEffectVisible,
              period: 5,
              trailLength: 0.4,
              symbol: 'arrow',
              symbolSize: 6,
              ...overlayEffect
            },
            lineStyle: {
              normal: {
                color: '#ED3574',
                width: 1,
                opacity: 0.6,
                curveness: 0.2,
                ...lineStyle
              }
            },
            data: mapData
          },
          // target nodes settings
          {
            name: name,
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 2,
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            label: effectScatterLabelVisible ? {
              normal: {
                show: true,
                formatter: '{b}',
                ...effectScatterLabel.normal
              },
              emphasis: {
                ...effectScatterLabel.emphasis
              }
            } : unShowLabel,
            symbolSize: symbolSize,
            itemStyle: {},
            data: GeoChart.convertEffectScatterData(data)
          },
          // source nodes settings
          {
            name: name,
            type: 'effectScatter',
            coordinateSystem: 'geo',
            zlevel: 3,
            showEffectOn: 'render',
            rippleEffect: {
              brushType: 'stroke'
            },
            label: effectScatterLabelVisible ? {
              normal: {
                show: true,
                formatter: '{b}',
                ...effectScatterLabel.normal
              },
              emphasis: {
                ...effectScatterLabel.emphasis
              }
            } : unShowLabel,
            symbolSize: symbolSize,
            itemStyle: {},
            data: [{
              name: name,
              value: GeoChart.convertCoord(name)
            }]
          }
        )
      } else {
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
      }

      legendData.push(name)
    })

    return {
      legendData,
      seriesData,
      max: ceil(max, -2)
    }
  }

  static getGeoTooltip (isMapMode, isLinesMode) {
    const formatter = function (params) {
      const { seriesName, name, value, marker, seriesType, data } = params
      const seriesValue = Array.isArray(value) ? value[2] : value

      if (isLinesMode) {
        const { fromName, toName, name } = data
        if (seriesType === 'effectScatter') {
          return `线路：${name} ${seriesValue || ''}`
        } else if (seriesType === 'lines') {
          return `${fromName} -> ${toName}<br>${seriesValue}`
        } else {
          return `${toName}`
        }
      }
      return `${seriesName}<br>${marker}${name}: ${seriesValue}`
    }

    return isMapMode
      ? { trigger: 'item' }
      : { trigger: 'item', formatter }
  }

  static getGeoLegend (args) {
    const { legendData, settings } = args
    const { legendType = 'plain', legendPadding = 5 } = settings

    return {
      type: legendType,
      padding: legendPadding,
      data: legendData
    }
  }

  static getGeo (args) {
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

  static getVisualMap (args) {
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

  static async registerMap (args) {
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

  async geo (data, settings, extra) {
    const { tooltipVisible, legendVisible, _once } = extra

    const {
      mode = 'map',
      visualMapVisible = false
    } = settings

    const isMapMode = mode === 'map'
    const isLinesMode = mode === 'lines'
    settings.isMapMode = isMapMode
    settings.isLinesMode = isLinesMode

    const { legendData, seriesData, max } = GeoChart.getGeoData({ data, settings })

    const tooltip = tooltipVisible && GeoChart.getGeoTooltip(isMapMode, isLinesMode)

    const legend = legendVisible && GeoChart.getGeoLegend({ legendData, settings })

    const geo = !isMapMode && GeoChart.getGeo({ data, settings })

    const geoVisualMap = visualMapVisible && GeoChart.getVisualMap({ max, settings })

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
    await GeoChart.registerMap(mapOptions)

    return options
  }
}

export default GeoChart
