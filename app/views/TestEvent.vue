<template>
  <div class="main-test">
    <el-card>
      <div style="position: relative" v-loading="isLoadingLine">
        <ve-geo-chart
          :data="lineData"
          :settings="lineSettings"
          :title="title"
          :height="832"
          backgroundColor="#020933"
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
      // const baseData = {
      //   measures: [
      //     {
      //       name: 'iPhone XR',
      //       data: [
      //         { name: '北京', value: randomData() },
      //         { name: '天津', value: randomData() },
      //         { name: '上海', value: randomData() },
      //         { name: '重庆', value: randomData() },
      //         { name: '河北', value: randomData() },
      //         { name: '河南', value: randomData() },
      //         { name: '云南', value: randomData() },
      //         { name: '辽宁', value: randomData() },
      //         { name: '黑龙江', value: randomData() },
      //         { name: '湖南', value: randomData() },
      //         { name: '安徽', value: randomData() },
      //         { name: '山东', value: randomData() },
      //         { name: '新疆', value: randomData() },
      //         { name: '江苏', value: randomData() },
      //         { name: '浙江', value: randomData() },
      //         { name: '江西', value: randomData() },
      //         { name: '湖北', value: randomData() },
      //         { name: '广西', value: randomData() },
      //         { name: '甘肃', value: randomData() },
      //         { name: '山西', value: randomData() },
      //         { name: '内蒙古', value: randomData() },
      //         { name: '陕西', value: randomData() },
      //         { name: '吉林', value: randomData() },
      //         { name: '福建', value: randomData() },
      //         { name: '贵州', value: randomData() },
      //         { name: '广东', value: randomData() },
      //         { name: '青海', value: randomData() },
      //         { name: '西藏', value: randomData() },
      //         { name: '四川', value: randomData() },
      //         { name: '宁夏', value: randomData() },
      //         { name: '海南', value: randomData() },
      //         { name: '台湾', value: randomData() },
      //         { name: '香港', value: randomData() },
      //         { name: '澳门', value: randomData() }
      //       ]
      //     },
      //     {
      //       name: 'iPhone XS',
      //       data: [
      //         { name: '北京', value: randomData() },
      //         { name: '天津', value: randomData() },
      //         { name: '上海', value: randomData() },
      //         { name: '重庆', value: randomData() },
      //         { name: '河北', value: randomData() },
      //         { name: '安徽', value: randomData() },
      //         { name: '新疆', value: randomData() },
      //         { name: '浙江', value: randomData() },
      //         { name: '江西', value: randomData() },
      //         { name: '山西', value: randomData() },
      //         { name: '内蒙古', value: randomData() },
      //         { name: '吉林', value: randomData() },
      //         { name: '福建', value: randomData() },
      //         { name: '广东', value: randomData() },
      //         { name: '西藏', value: randomData() },
      //         { name: '四川', value: randomData() },
      //         { name: '宁夏', value: randomData() },
      //         { name: '香港', value: randomData() },
      //         { name: '澳门', value: randomData() }
      //       ]
      //     }
      //   ]
      // }
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
      setTimeout(() => {
        this.isLoadingLine = false
        this.lineData = cityData
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
          symbolSize: 15,
          zoom: 1.2
        }
      }, 300)
    },
    onClick(e) {
      this.title = {
        text: `选中省份：${e.name}`,
        textStyle: {
          color: '#fff'
        }
      }
      const idx = findProvince(e.name)
      if (idx !== -1) {
        const province = chinaProvince[idx].pinyin
        this.lineSettings.position = `province/${province}`
      }
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
