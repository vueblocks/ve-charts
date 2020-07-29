const randomData = () => {
  return Math.round(Math.random() * 1000)
}

// const planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z'

const baseData = {
  measures: [
    {
      name: '北京',
      data: [
        { name: '上海', value: randomData() },
        { name: '重庆', value: randomData() },
        { name: '河北', value: randomData() },
        { name: '河南', value: randomData() },
        { name: '云南', value: randomData() },
        { name: '辽宁', value: randomData() },
        { name: '黑龙江', value: randomData() },
        { name: '湖南', value: randomData() },
        { name: '安徽', value: randomData() },
        { name: '山东', value: randomData() },
        { name: '新疆', value: randomData() },
        { name: '江苏', value: randomData() },
        { name: '浙江', value: randomData() },
        { name: '江西', value: randomData() },
        { name: '湖北', value: randomData() },
        { name: '广西', value: randomData() },
        { name: '甘肃', value: randomData() },
        { name: '山西', value: randomData() },
        { name: '内蒙古', value: randomData() },
        { name: '陕西', value: randomData() },
        { name: '吉林', value: randomData() },
        { name: '福建', value: randomData() },
        { name: '贵州', value: randomData() },
        { name: '广东', value: randomData() },
        { name: '青海', value: randomData() },
        { name: '西藏', value: randomData() },
        { name: '四川', value: randomData() },
        { name: '宁夏', value: randomData() },
        { name: '海南', value: randomData() },
        { name: '台湾', value: randomData() },
        { name: '香港', value: randomData() },
        { name: '澳门', value: randomData() }
      ]
    }
  ]
}

export default {
  name: '地图',
  type: 'geo',
  chartData: [
    {
      title: '飞线地图',
      data: baseData,
      settings: {
        mode: 'lines',
        visualMapVisible: true,
        visualMap: {
          inRange: {
            color: ['#a6c84c', '#ffa022', '#46bee9']
          }
        },
        symbolSize: 10,
        lineEffectVisible: false,
        lineEffect: {
          period: 0,
          trailLength: 0,
          color: '#fff',
          symbolSize: 3
        },
        lineStyle: {
          color: '#ED3574',
          width: 1,
          opacity: 0.6,
          curveness: 0.2
        },
        overlayEffectVisible: true,
        overlayEffect: {
          period: 5,
          trailLength: 0.7,
          symbol: 'arrow',
          symbolSize: 6
        },
        effectScatterLabelVisible: true,
        effectScatterLabel: {
          normal: { position: 'left' }
        },
        itemStyle: {
          normal: {
            areaColor: '#020933',
            borderColor: '#3fdaff',
            borderWidth: 1,
            shadowColor: 'rgba(63, 218, 255, 0.5)',
            shadowBlur: 10
          },
          emphasis: {
            areaColor: '#2B91B7'
          }
        },
        labelVisible: true,
        label: {
          normal: { show: true, color: '#fff' }, emphasis: { show: true }
        }
      },
      xprops: {
        legendVisible: true
      }
    }
  ]
}
