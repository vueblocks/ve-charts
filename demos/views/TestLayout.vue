<template>
  <div class='main-test'>
    <el-row :gutter="16">
      <el-col :span="12">
        <el-card>
          <div solt='header' class='clearfix'>
            <el-button @click="handleChangeData">改变数据</el-button>
          </div>
          <ve-line-chart
            class="custom-loading"
            :data="lineData"
            :settings="lineSettings"
            :loading="isLoadingLine"
            v-bind="lineOptions"
          />
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div solt='header' class='clearfix'>
            <el-button @click="handleChangeData">改变数据</el-button>
          </div>
          <ve-line-chart
            :data="lineData"
            :settings="lineSettings"
            :loading="isLoadingLine"
            :height="200"
            renderer="svg"
            v-bind="lineOptions"
          />
        </el-card>
      </el-col>
    </el-row>
    <br/>
    <el-row :gutter="16">
      <el-col :span="24">
        <el-card>
          <div solt='header' class='clearfix'>
            <el-button @click="handleChangeData">改变数据</el-button>
          </div>
          <ve-line-chart
            :data="lineData"
            :settings="lineSettings"
            :loading="isLoadingLine"
            :height="300"
            ref="lineChart"
            v-bind="lineOptions"
          />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import _ from 'lodash'
import lineOptions from '@/constant/lineOptions'

export default {
  name: 'TestLayout',
  data() {
    return {
      isLoadingLine: false,
      lineData: {},
      lineSettings: {
        smooth: true,
        showSymbol: false,
        symbol: 'circle'
      },
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
        this.isLoadingLine = false
      }, 2000)
    },
    handleChangeData() {
      _.isEmpty(this.lineData) ? this.loadLineData() : (this.lineData = {})
    }
  },
  created () {
    this.loadLineData()
  }
}
</script>

<style lang='less'>
// .echarts {
//   width: 300px !important;
//   height: 200px !important;
// }
.custom-loading {
  .ve-charts-loading-mask {
    background: rgba(0, 0, 0, .8);
    .path {
      stroke: #f35352;
    }
  }
}
</style>
