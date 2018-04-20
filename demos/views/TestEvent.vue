<template>
  <div class='main-test'>
    <el-card>
      <div solt='header' class='clearfix'>
      </div>
      <div style='position: relative; height: 400px;' v-loading="isLoadingLine">
        <ve-line-chart
          :data="lineData"
          :settings="lineSettings"
          v-bind="lineOptions"
          @click="onClick"
        />
      </div>
    </el-card>
  </div>
</template>

<script>
import lineOptions from '@/constant/lineOptions'

export default {
  name: 'TestEvent',
  data() {
    return {
      isLoadingLine: false,
      lineData: {},
      lineSettings: {},
      lineOptions
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
    onClick (e) {
      console.log(e)
    }
  },
  created() {
    this.loadLineData()
  }
}
</script>

<style lang='less'>

</style>
