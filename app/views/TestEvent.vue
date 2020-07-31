<template>
  <div class="main-test">
    <el-card>
      <div style="position: relative; background-color: #020933;" v-loading="isLoadingLine">
        <ve-geo-chart
          :data="chartData"
          :settings="chartSettings"
          :title="title"
          :height="832"
          backgroundColor="transparent"
          :legendVisible="false"
          @click="onClick"
          @blankClick="onClickBlank"
        />
      </div>
    </el-card>
  </div>
</template>

<script>
import lineOptions from '@/constant/lineOptions'
import { chinaProvince, findProvince } from '@/constant/chinaProvince'

export default {
  name: 'TestEvent',
  data () {
    return {
      isLoadingLine: false,
      chartData: {},
      chartSettings: {},
      lineOptions,
      title: {},
      visualMap: {}
    }
  },
  methods: {
    loadLineData () {
      const randomData = () => {
        return Math.round(Math.random() * 1000)
      }
      const cityData = {
        measures: [
          {
            name: 'iPhone XR',
            data: [
              { name: '北京市', value: randomData() },
              { name: '鄂尔多斯', value: randomData() },
              { name: '天津市', value: randomData() },
              { name: '重庆市', value: randomData() },
              { name: '齐齐哈尔', value: randomData() },
              { name: '桂林', value: randomData() },
              { name: '赤峰', value: randomData() },
              { name: '青岛', value: randomData() },
              { name: '乳山', value: randomData() },
              { name: '泉州', value: randomData() },
              { name: '文登', value: randomData() },
              { name: '烟台', value: randomData() },
              { name: '长沙', value: randomData() },
              { name: '阳泉', value: randomData() },
              { name: '贵阳', value: randomData() },
              { name: '威海', value: randomData() },
              { name: '宿迁', value: randomData() },
              { name: '珠海', value: randomData() },
              { name: '海口', value: randomData() },
              { name: '佛山', value: randomData() },
              { name: '广州', value: randomData() },
              { name: '乌鲁木齐', value: randomData() },
              { name: '葫芦岛', value: randomData() },
              { name: '连云港', value: randomData() },
              { name: '昆明', value: randomData() },
              { name: '大理', value: randomData() },
              { name: '丽江', value: randomData() },
              { name: '成都', value: randomData() },
              { name: '乐山', value: randomData() },
              { name: '宁波', value: randomData() },
              { name: '杭州', value: randomData() },
              { name: '深圳', value: randomData() },
              { name: '武汉', value: randomData() },
              { name: '洛阳', value: randomData() },
              { name: '太原', value: randomData() },
              { name: '长春', value: randomData() },
              { name: '玉溪', value: randomData() }
            ]
          }
        ]
      }
      this.chartData = cityData
      this.chartSettings = {
        roam: false,
        mode: 'effectScatter',
        mapName: 'china',
        visualMapVisible: true,
        visualMap: {
          inRange: { color: ['#4af', '#1ea'] },
          textStyle: {
            color: '#fff'
          }
        },
        labelVisible: true,
        itemStyle: {
          normal: {
            areaColor: 'transparent',
            borderColor: '#3fdaff',
            borderWidth: 1,
            shadowColor: 'rgba(63, 218, 255, 0.5)',
            shadowBlur: 30
          },
          emphasis: {
            areaColor: '#2B91B7'
          }
        },
        label: {
          normal: {
            show: true,
            color: '#1af',
            fontSize: 13
          },
          emphasis: {
            show: false
          }
        },
        symbolSize: 15,
        zoom: 1.2
      }
    },
    onClick (e) {
      this.title = {
        text: `选中省份：${e.name}`,
        textStyle: {
          color: '#fff'
        }
      }
      const idx = findProvince(e.name)
      if (idx !== -1) {
        const province = chinaProvince[idx].pinyin
        console.log(province)
        this.chartSettings.mapName = `province/${province}`
      }
    },
    onClickBlank (e) {
      this.chartSettings.mapName = 'china'
    }
  },
  created () {
    this.loadLineData()
  }
}
</script>

<style lang='less'>
</style>
