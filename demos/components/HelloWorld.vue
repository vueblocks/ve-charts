<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ve-bar-chart
      class="charts-content"
      :data="chartData"
      :settings="chartSettings"
      :title="title"
    />
  </div>
</template>

<script>
import bar from '../data/bar'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'ECharts 3.x for Vue.js 2.x.',
      chartData: bar.data,
      colors: bar.colors,
      title: {
        text: 'ECharts 柱形图示例'
      }
    }
  },
  created () {
    this.chartSettings = {
    }
  },
  methods: {
    onClick (e) {
      console.log(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.charts-content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 400px;
}
</style>
