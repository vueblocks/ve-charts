import {
  base,
  outcome,
  product
} from '../constant/sankeyData'

const sankeyData1 = {
  dimensions: base.nodes,
  measures: base.links
}

const sankeyData2 = {
  dimensions: outcome.nodes,
  measures: outcome.links
}

const sankeyData3 = {
  dimensions: product.nodes,
  measures: product.links
}

export default {
  name: '桑基图',
  type: 'sankey',
  chartData: [
    {
      title: '基础桑基图',
      data: sankeyData1,
      settings: {}
    },
    {
      title: '纵向桑基图',
      data: sankeyData1,
      settings: {
        orient: 'vertical',
        label: {
          position: 'top'
        }
      }
    },
    {
      title: '高亮节点',
      data: sankeyData2,
      settings: {
        focusNodeAdjacency: true
      }
    },
    {
      title: '暗色背景',
      data: sankeyData2,
      settings: {
        focusNodeAdjacency: true,
        label: {
          normal: {
            color: '#fff'
          }
        },
        lineStyle: {
          normal: {
            opacity: 0.5
          }
        }
      },
      xprops: {
        backgroundColor: '#0e2439'
      }
    },
    {
      title: '禁止拖拽',
      data: sankeyData3,
      settings: {
        draggable: false
      }
    },
    {
      title: 'Levels Setting',
      data: sankeyData3,
      settings: {
        draggable: false,
        levels: [
          {
            depth: 0,
            itemStyle: {
              color: '#fbb4ae'
            },
            lineStyle: {
              color: 'source',
              opacity: 0.6
            }
          },
          {
            depth: 1,
            itemStyle: {
              color: '#b3cde3'
            },
            lineStyle: {
              color: 'source',
              opacity: 0.6
            }
          },
          {
            depth: 2,
            itemStyle: {
              color: '#ccebc5'
            },
            lineStyle: {
              color: 'source',
              opacity: 0.6
            }
          },
          {
            depth: 3,
            itemStyle: {
              color: '#decbe4'
            },
            lineStyle: {
              color: 'source',
              opacity: 0.6
            }
          }
        ]
      }
    }
  ]
}
