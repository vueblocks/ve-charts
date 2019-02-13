<template>
  <div class='main-test'>
    <el-card>
      <div style='position: relative' v-loading='isLoadingLine'>
        <ve-geo-chart
          :data='lineData'
          :settings='lineSettings'
          :title='title'
          :height='832'
          backgroundColor='#020933'
          :legendVisible='false'
          @click='onClick'
          @blankClick='onClickBlank'
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
  data() {
    return {
      isLoadingLine: false,
      lineData: {},
      lineSettings: {},
      lineOptions,
      title: {},
      visualMap: {}
    }
  },
  methods: {
    loadLineData() {
      this.isLoadingLine = true
      const randomData = () => {
        return Math.round(Math.random() * 1000)
      }
      const baseData = {
        measures: [
          {
            name: 'iPhone XR',
            data: [
              { name: '北京', value: randomData() },
              { name: '天津', value: randomData() },
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
          },
          {
            name: 'iPhone XS',
            data: [
              { name: '北京', value: randomData() },
              { name: '天津', value: randomData() },
              { name: '上海', value: randomData() },
              { name: '重庆', value: randomData() },
              { name: '河北', value: randomData() },
              { name: '安徽', value: randomData() },
              { name: '新疆', value: randomData() },
              { name: '浙江', value: randomData() },
              { name: '江西', value: randomData() },
              { name: '山西', value: randomData() },
              { name: '内蒙古', value: randomData() },
              { name: '吉林', value: randomData() },
              { name: '福建', value: randomData() },
              { name: '广东', value: randomData() },
              { name: '西藏', value: randomData() },
              { name: '四川', value: randomData() },
              { name: '宁夏', value: randomData() },
              { name: '香港', value: randomData() },
              { name: '澳门', value: randomData() }
            ]
          }
        ]
      }
      setTimeout(() => {
        this.isLoadingLine = false
        this.lineData = baseData
        this.lineSettings = {
          mode: 'effectScatter',
          position: 'china',
          visualMapVisible: true,
          visualMap: {
            inRange: { color: ['#ee0979', '#ff6a00'] },
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
              color: '#00ff00',
              fontSize: 13
            },
            emphasis: {
              show: false,
              color: '#fff'
            }
          },
          symbolSize: 20,
          zoom: 1.2
        }
      }, 300)
    },
    onClick(e) {
      console.log(e)
      this.title = {
        text: `选中省份：${e.name}`
      }
      const idx = findProvince(e.name)
      const province = idx !== -1 ? chinaProvince[idx].pinyin : 'china'
      this.lineSettings.position = province
    },
    onClickBlank(e) {
      this.lineSettings.position = 'china'
    }
  },
  created() {
    this.loadLineData()
  }
}
</script>

<style lang='less'>
</style>
