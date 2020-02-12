import {
  base,
  outcome,
  product
} from '../constant/sankeyData'

const sankeyData1 = {
  measures: {
    nodes: base.nodes,
    links: base.links
  }
}

const sankeyData2 = {
  measures: {
    nodes: outcome.nodes,
    links: outcome.links
  }
}

const sankeyData3 = {
  measures: {
    nodes: product.nodes,
    links: product.links
  }
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
      title: '高亮节点',
      data: sankeyData2,
      settings: {
        focusNodeAdjacency: 'allEdges'
      }
    },
    {
      title: '禁止拖拽',
      data: sankeyData3,
      settings: {
        draggable: false
      }
    }
  ]
}
