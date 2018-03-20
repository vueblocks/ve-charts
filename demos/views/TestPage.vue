<template>
  <div class="main-test">
    <el-card>
      <div solt="header" class="clearfix">
        <el-button @click="handleChangeData">改变数据</el-button>
      </div>
      <div style="position: relative; height: 400px;" v-loading="isLoadingLine">
        <ve-line-chart 
          :data="lineData"
          :settings="lineSettings"
          v-bind="lineOptions"
          :title="title" />
      </div>

      <div style="position: relative; height: 400px;">
         <ve-radar-chart :backgroundColor="'#333'" :data="data" :title="title" :radar="radar" :series="series"/>
      </div>

    </el-card>
  </div>
</template>

<script>
import _ from 'lodash'
import lineOptions from '@/constant/lineOptions'
import VeRadarChart from '../../src/packages/radar/index'

export default {
  components: {VeRadarChart},
  name: 'Test',
  data () {
    return {
      isLoadingLine: false,
      lineData: {},
      lineSettings: {},
      lineOptions,
      data: {
        dimensions: [],
        measures: []
      },
      title: {text: '多雷达图'},
      radar: [{
        indicator: [{
          text: '开创',
          max: 13
        }, {
          text: '变动',
          max: 13
        }, {
          text: '固定',
          max: 13
        }],
        splitNumber: 1,
        center: ['50%', '50%'],
        name: {
          formatter: '{value}',
          textStyle: {
            fontSize: 20,
            color: '#fff'
          }
        },
        splitArea: {
          areaStyle: {
            color: ['rgba(0, 0, 0, 0)',
              'rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0)',
              'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)'
            ],
            shadowColor: 'rgba(255, 255, 255, 1)',
            shadowBlur: 40
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0)'
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.6)'
          }
        },
        radius: 150
      }, {
        indicator: [{
          text: '强化',
          max: 13
        }, {
          text: '和谐',
          max: 13
        }, {
          text: '压迫',
          max: 13
        }, {
          text: '冲突',
          max: 13
        }, {
          text: '阻滞',
          max: 13
        }, {
          text: '调和',
          max: 13
        }],
        startAngle: 60,
        splitNumber: 1,
        center: ['50%', '40%'],
        name: {
          formatter: '{value}',
          textStyle: {
            fontSize: 16,
            color: 'rgba(255, 255, 255, 0.6)'
          }
        },
        splitArea: {
          areaStyle: {
            color: ['rgba(0, 0, 0, 0)',
              'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)',
              'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)'
            ],
            shadowColor: 'rgba(255, 255, 255, 1)',
            shadowBlur: 40
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.3)'
          }
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(255, 255, 255, 0.6)'
          }
        },
        radius: 190,
        center: ['50%', '50%']
      }],
      series: [
        {
        type: 'radar',
        tooltip: {
          trigger: 'item'
        },
        itemStyle: {
          normal: {
            areaStyle: {
              type: 'default'
            }
          }
        },
        data: [{
          value: [9, 7, 7],
          name: '三型基本人格'
        }]
      },
        {
        type: 'radar',
        tooltip: {
          trigger: 'item'
        },
        radarIndex: 1,
        data: [{
          value: [3, 6, 9, 6, 2, 10],
          name: '势能',
          symbol: 'rect',
          symbolSize: 5,
          lineStyle: {
            normal: {
              type: 'dashed',
              Color: '#fff'
            }
          }
        }]
      }]

    }
  },
  methods: {
    loadLineData () {
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
          measures: [{
            name: 'Rising Star',
            data: [40000, 27800, 22500, 22000, 21900, 20200, 17700, 15600, 14900, 14800].reverse()
          }]
        }
        this.lineSettings = {
          smooth: true,
          showSymbol: false,
          symbol: 'circle'
        }
        this.isLoadingLine = false
      }, 2000)
    },
    handleChangeData () {
      _.isEmpty(this.lineData) ? this.loadLineData() : this.lineData = {}
    }
  },
  created () {
    this.loadLineData()
  }
}
</script>

<style lang="less">
</style>
