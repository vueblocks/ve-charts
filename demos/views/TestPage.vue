<template>
  <div class='main-test'>
    <el-card>
      <div solt='header' class='clearfix'>
        <el-button @click="handleChangeData">改变数据</el-button>
      </div>
      <div style='position: relative; height: 400px;' v-loading="isLoadingLine">
        <ve-line-chart
          :data="lineData"
          :settings="lineSettings"
          v-bind="lineOptions"
        />
      </div>
    </el-card>
    <br>
    <el-card>
      <div style='position: relative; height: 400px;'>
        <ve-radar-chart v-bind="multiRadarOptions" />
      </div>
    </el-card>
  </div>
</template>

<script>
import _ from 'lodash'
import lineOptions from '@/constant/lineOptions'
import multiRadarOptions from '@/constant/multiRadarOptions'
import VeRadarChart from '../../src/packages/radar/index'

export default {
  components: { VeRadarChart },
  name: 'Test',
  data() {
    return {
      isLoadingLine: false,
      lineData: {},
      lineSettings: {},
      lineOptions,
      multiRadarOptions
    }
  },
  methods: {
    loadLineData() {
      this.isLoadingLine = true
      setTimeout(() => {
        this.lineData = {
          dimensions: {
            name: 'Repo',
            data: [
              'Vue.js', 'React', 'Create RA', 'Puppteer', 'Axios',
              'VS Code', 'Prettier', 'RN', 'Element', 'Electron'
            ].reverse()
          },
          measures: [
            {
              name: 'Rising Star',
              data: [
                40000, 27800, 22500, 22000, 21900,
                20200, 17700, 15600, 14900, 14800
              ].reverse()
            }
          ]
        }
        this.lineSettings = {
          smooth: true,
          showSymbol: false,
          symbol: 'circle'
        }
        this.isLoadingLine = false
      }, 2000)
    },
    handleChangeData() {
      _.isEmpty(this.lineData) ? this.loadLineData() : (this.lineData = {})
    }
  },
  created() {
    this.loadLineData()
  }
}
</script>

<style lang='less'>

</style>
