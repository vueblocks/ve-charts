# 桑基图

是一种特殊的流图（可以看作是有向无环图）。 它主要用来表示原材料、能量等如何从最初形式经过中间过程的加工或转化达到最终状态。

## 示例

<iframe width="100%" height="470" src="//jsfiddle.net/vecharts/tzm4bn8c/7/embedded/result,html,js/?bodyColor=fff" allowfullscreen="allowfullscreen" frameborder="0"></iframe>


## 基础桑基图

<vuep template="#basicSankey" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="basicSankey">
<template>
  <ve-sankey-chart :data="chartData" :settings="settings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: [
          { name: 'a' },
          { name: 'b' },
          { name: 'x' },
          { name: 'y' },
          { name: 'z' }
        ],
        measures: [
          { source: 'a', target: 'x', value: 5 },
          { source: 'a', target: 'y', value: 6 },
          { source: 'a', target: 'z', value: 7 },
          { source: 'b', target: 'x', value: 4 },
          { source: 'b', target: 'y', value: 6 },
          { source: 'b', target: 'z', value: 8 }
        ]
      }
      this.settings = {}
    }
  }
</script>

## 纵向桑基图

> 纵向展示的桑基图，注意 `label` 同时需要改变朝向

<vuep template="#verticalSankey" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="verticalSankey">
<template>
  <ve-sankey-chart :data="chartData" :settings="settings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: [
          { name: 'a' },
          { name: 'b' },
          { name: 'x' },
          { name: 'y' },
          { name: 'z' }
        ],
        measures: [
          { source: 'a', target: 'x', value: 5 },
          { source: 'a', target: 'y', value: 6 },
          { source: 'a', target: 'z', value: 7 },
          { source: 'b', target: 'x', value: 4 },
          { source: 'b', target: 'y', value: 6 },
          { source: 'b', target: 'z', value: 8 }
        ]
      }
      this.settings = {
        orient: 'vertical',
        label: {
          position: 'top'
        }
      }
    }
  }
</script>

## 高亮节点

> 鼠标 hover 到节点或边上，相邻接的节点和边高亮的交互，默认关闭

<vuep template="#highlightSankey" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="highlightSankey">
<template>
  <ve-sankey-chart :data="chartData" :settings="settings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: [
          { name: 'Canada' },
          { name: 'USA' },
          { name: 'Italy' },
          { name: 'France' },
          { name: 'Germany' },
          { name: 'Spain' }
        ],
        measures: [
          { source: 'Canada', target: 'France', value: 2230000 },
          { source: 'Canada', target: 'Germany', value: 1990000 },
          { source: 'Canada', target: 'Italy', value: 1180000 },
          { source: 'Canada', target: 'Spain', value: 990000 },
          { source: 'USA', target: 'France', value: 880000 },
          { source: 'USA', target: 'Germany', value: 2020000 },
          { source: 'USA', target: 'Spain', value: 1110000 }
        ]
      }
      this.settings = {
        focusNodeAdjacency: true
      }
    }
  }
</script>

## 暗色背景

> 可以结合 `label`、`lineStyle` 适配暗色背景

<vuep template="#darkmodeSankey" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="darkmodeSankey">
<template>
  <ve-sankey-chart :data="chartData" :settings="settings" :background-color="backgroundColor" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: [
          { name: 'Canada' },
          { name: 'USA' },
          { name: 'Italy' },
          { name: 'France' },
          { name: 'Germany' },
          { name: 'Spain' }
        ],
        measures: [
          { source: 'Canada', target: 'France', value: 2230000 },
          { source: 'Canada', target: 'Germany', value: 1990000 },
          { source: 'Canada', target: 'Italy', value: 1180000 },
          { source: 'Canada', target: 'Spain', value: 990000 },
          { source: 'USA', target: 'France', value: 880000 },
          { source: 'USA', target: 'Germany', value: 2020000 },
          { source: 'USA', target: 'Spain', value: 1110000 }
        ]
      }
      this.settings = {
        focusNodeAdjacency: 'allEdges',
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
      }
      this.backgroundColor = '#0e2439'
    }
  }
</script>

## 禁止拖拽

> 控制节点拖拽的交互，默认开启。开启后，用户可以将图中任意节点拖拽到任意位置。

<vuep template="#disabledDrag" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="disabledDrag">
<template>
  <ve-sankey-chart :data="chartData" :settings="settings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: [
          { 'name': 'Total' },
          { 'name': 'Environment' },
          { 'name': 'Land use' },
          { 'name': 'Cocoa butter (Organic)' },
          { 'name': 'Cocoa mass (Organic)' },
          { 'name': 'Hazelnuts (Organic)' },
          { 'name': 'Cane sugar (Organic)' },
          { 'name': 'Vegetables (Organic)' },
          { 'name': 'Climate change' },
          { 'name': 'Harmful substances' },
          { 'name': 'Water use' },
          { 'name': 'Resource depletion' },
          { 'name': 'Refrigeration' },
          { 'name': 'Packaging' },
          { 'name': 'Human rights' },
          { 'name': 'Child labour' },
          { 'name': 'Coconut oil (Organic)' },
          { 'name': 'Forced labour' },
          { 'name': 'Health safety' },
          { 'name': 'Access to water' },
          { 'name': 'Freedom of association' },
          { 'name': 'Access to land' },
          { 'name': 'Sufficient wage' },
          { 'name': 'Equal rights migrants' },
          { 'name': 'Discrimination' },
          { 'name': 'Working hours' }
        ],
        measures: [
          { 'source': 'Total', 'target': 'Environment', 'value': 0.342284047256003 },
          { 'source': 'Environment', 'target': 'Land use', 'value': 0.32322870366987 },
          { 'source': 'Land use', 'target': 'Cocoa butter (Organic)', 'value': 0.177682517071359 },
          { 'source': 'Land use', 'target': 'Hazelnuts (Organic)', 'value': 0.00433076373512774 },
          { 'source': 'Land use', 'target': 'Vegetables (Organic)', 'value': 0.00100453712203756 },
          { 'source': 'Environment', 'target': 'Climate change', 'value': 0.0112886157414413 },
          { 'source': 'Climate change', 'target': 'Cocoa mass (Organic)', 'value': 0.00394686874786743 },
          { 'source': 'Climate change', 'target': 'Cane sugar (Organic)', 'value': 0.000315972058711838 },
          { 'source': 'Climate change', 'target': 'Vegetables (Organic)', 'value': 0.0000382757532567656 },
          { 'source': 'Environment', 'target': 'Harmful substances', 'value': 0.00604275542495656 },
          { 'source': 'Harmful substances', 'target': 'Cocoa butter (Organic)', 'value': 0.000330017607892127 },
          { 'source': 'Harmful substances', 'target': 'Cane sugar (Organic)', 'value': 0.000200138892990337 },
          { 'source': 'Harmful substances', 'target': 'Vegetables (Organic)', 'value': 0 },
          { 'source': 'Environment', 'target': 'Water use', 'value': 0.00148345269044703 },
          { 'source': 'Water use', 'target': 'Cocoa mass (Organic)', 'value': 0.000105714137908639 },
          { 'source': 'Water use', 'target': 'Hazelnuts (Organic)', 'value': 0.0000133452642581887 },
          { 'source': 'Water use', 'target': 'Vegetables (Organic)', 'value': 0.0000025136268682477 },
          { 'source': 'Environment', 'target': 'Resource depletion', 'value': 0.000240519729288764 },
          { 'source': 'Resource depletion', 'target': 'Cane sugar (Organic)', 'value': 0.000226237279345084 },
          { 'source': 'Resource depletion', 'target': 'Vegetables (Organic)', 'value': 0.0000142824499436793 },
          { 'source': 'Resource depletion', 'target': 'Cocoa butter (Organic)', 'value': 0 },
          { 'source': 'Environment', 'target': 'Refrigeration', 'value': 0 },
          { 'source': 'Environment', 'target': 'Packaging', 'value': 0 },
          { 'source': 'Total', 'target': 'Human rights', 'value': 0.307574096993239 },
          { 'source': 'Human rights', 'target': 'Child labour', 'value': 0.0410641202645833 },
          { 'source': 'Child labour', 'target': 'Hazelnuts (Organic)', 'value': 0.0105339381639722 },
          { 'source': 'Child labour', 'target': 'Coconut oil (Organic)', 'value': 0.00474399974233333 },
          { 'source': 'Child labour', 'target': 'Cane sugar (Organic)', 'value': 0.00388226450884445 },
          { 'source': 'Human rights', 'target': 'Forced labour', 'value': 0.0365458590642445 },
          { 'source': 'Forced labour', 'target': 'Hazelnuts (Organic)', 'value': 0.0114913076376389 },
          { 'source': 'Forced labour', 'target': 'Cocoa mass (Organic)', 'value': 0.00765230236575 },
          { 'source': 'Forced labour', 'target': 'Vegetables (Organic)', 'value': 0.00296668823626667 },
          { 'source': 'Human rights', 'target': 'Health safety', 'value': 0.0345435327843611 },
          { 'source': 'Health safety', 'target': 'Hazelnuts (Organic)', 'value': 0.0121419536385 },
          { 'source': 'Health safety', 'target': 'Cocoa butter (Organic)', 'value': 0.0056245892061 },
          { 'source': 'Health safety', 'target': 'Coconut oil (Organic)', 'value': 0.00361616847688889 },
          { 'source': 'Human rights', 'target': 'Access to water', 'value': 0.0340206659360667 },
          { 'source': 'Access to water', 'target': 'Cocoa mass (Organic)', 'value': 0.0105 },
          { 'source': 'Access to water', 'target': 'Cocoa butter (Organic)', 'value': 0.0089274160792 },
          { 'source': 'Access to water', 'target': 'Cane sugar (Organic)', 'value': 0.00333938149786667 },
          { 'source': 'Access to water', 'target': 'Vegetables (Organic)', 'value': 0.00314663377488889 },
          { 'source': 'Human rights', 'target': 'Freedom of association', 'value': 0.0320571523941667 },
          { 'source': 'Freedom of association', 'target': 'Hazelnuts (Organic)', 'value': 0.0132312483463611 },
          { 'source': 'Freedom of association', 'target': 'Cocoa mass (Organic)', 'value': 0.00510606573995 },
          { 'source': 'Freedom of association', 'target': 'Vegetables (Organic)', 'value': 0.00354321156324444 },
          { 'source': 'Freedom of association', 'target': 'Coconut oil (Organic)', 'value': 0 },
          { 'source': 'Human rights', 'target': 'Access to land', 'value': 0.0315022209894056 },
          { 'source': 'Access to land', 'target': 'Hazelnuts (Organic)', 'value': 0.00964970063322223 },
          { 'source': 'Access to land', 'target': 'Cocoa butter (Organic)', 'value': 0.0060110791848 },
          { 'source': 'Access to land', 'target': 'Vegetables (Organic)', 'value': 0.00264795594564445 },
          { 'source': 'Access to land', 'target': 'Coconut oil (Organic)', 'value': 0 },
          { 'source': 'Human rights', 'target': 'Sufficient wage', 'value': 0.0287776757227333 },
          { 'source': 'Sufficient wage', 'target': 'Cocoa mass (Organic)', 'value': 0.00883512456493333 },
          { 'source': 'Sufficient wage', 'target': 'Coconut oil (Organic)', 'value': 0.00347879026511111 },
          { 'source': 'Sufficient wage', 'target': 'Hazelnuts (Organic)', 'value': 0.00316254211388889 },
          { 'source': 'Sufficient wage', 'target': 'Cane sugar (Organic)', 'value': 0.00265674482391111 },
          { 'source': 'Human rights', 'target': 'Equal rights migrants', 'value': 0.0271146645119444 },
          { 'source': 'Equal rights migrants', 'target': 'Cocoa butter (Organic)', 'value': 0.0071042315061 },
          { 'source': 'Equal rights migrants', 'target': 'Hazelnuts (Organic)', 'value': 0.00601459775836111 },
          { 'source': 'Equal rights migrants', 'target': 'Coconut oil (Organic)', 'value': 0.00429185583138889 },
          { 'source': 'Equal rights migrants', 'target': 'Vegetables (Organic)', 'value': 0.00151077259688889 },
          { 'source': 'Human rights', 'target': 'Discrimination', 'value': 0.0211217763359833 },
          { 'source': 'Discrimination', 'target': 'Cocoa mass (Organic)', 'value': 0.00609671700306667 },
          { 'source': 'Discrimination', 'target': 'Coconut oil (Organic)', 'value': 0.00368119084494444 },
          { 'source': 'Discrimination', 'target': 'Cane sugar (Organic)', 'value': 0.00283706180951111 },
          { 'source': 'Discrimination', 'target': 'Hazelnuts (Organic)', 'value': 0.000872827909916666 },
          { 'source': 'Human rights', 'target': 'Working hours', 'value': 0.02082642898975 },
          { 'source': 'Working hours', 'target': 'Coconut oil (Organic)', 'value': 0.00359009052944444 },
          { 'source': 'Working hours', 'target': 'Vegetables (Organic)', 'value': 0.00212300379075556 },
          { 'source': 'Working hours', 'target': 'Cane sugar (Organic)', 'value': 0.000957528158533333 }
        ]
      }
      this.settings = {
        draggable: false
      }
    }
  }
</script>

## 层级设置

> 桑基图每一层的设置

<vuep template="#levelSetting" :options="{ theme: 'vue', lineNumbers: false }"></vuep>

<script v-pre type="text/x-template" id="levelSetting">
<template>
  <ve-sankey-chart :data="chartData" :settings="settings" />
</template>

<script>
  module.exports = {
    created () {
      this.chartData = {
        dimensions: [
          { 'name': 'Total' },
          { 'name': 'Environment' },
          { 'name': 'Land use' },
          { 'name': 'Cocoa butter (Organic)' },
          { 'name': 'Cocoa mass (Organic)' },
          { 'name': 'Hazelnuts (Organic)' },
          { 'name': 'Cane sugar (Organic)' },
          { 'name': 'Vegetables (Organic)' },
          { 'name': 'Climate change' },
          { 'name': 'Harmful substances' },
          { 'name': 'Water use' },
          { 'name': 'Resource depletion' },
          { 'name': 'Refrigeration' },
          { 'name': 'Packaging' },
          { 'name': 'Human rights' },
          { 'name': 'Child labour' },
          { 'name': 'Coconut oil (Organic)' },
          { 'name': 'Forced labour' },
          { 'name': 'Health safety' },
          { 'name': 'Access to water' },
          { 'name': 'Freedom of association' },
          { 'name': 'Access to land' },
          { 'name': 'Sufficient wage' },
          { 'name': 'Equal rights migrants' },
          { 'name': 'Discrimination' },
          { 'name': 'Working hours' }
        ],
        measures: [
          { 'source': 'Total', 'target': 'Environment', 'value': 0.342284047256003 },
          { 'source': 'Environment', 'target': 'Land use', 'value': 0.32322870366987 },
          { 'source': 'Land use', 'target': 'Cocoa butter (Organic)', 'value': 0.177682517071359 },
          { 'source': 'Land use', 'target': 'Hazelnuts (Organic)', 'value': 0.00433076373512774 },
          { 'source': 'Land use', 'target': 'Vegetables (Organic)', 'value': 0.00100453712203756 },
          { 'source': 'Environment', 'target': 'Climate change', 'value': 0.0112886157414413 },
          { 'source': 'Climate change', 'target': 'Cocoa mass (Organic)', 'value': 0.00394686874786743 },
          { 'source': 'Climate change', 'target': 'Cane sugar (Organic)', 'value': 0.000315972058711838 },
          { 'source': 'Climate change', 'target': 'Vegetables (Organic)', 'value': 0.0000382757532567656 },
          { 'source': 'Environment', 'target': 'Harmful substances', 'value': 0.00604275542495656 },
          { 'source': 'Harmful substances', 'target': 'Cocoa butter (Organic)', 'value': 0.000330017607892127 },
          { 'source': 'Harmful substances', 'target': 'Cane sugar (Organic)', 'value': 0.000200138892990337 },
          { 'source': 'Harmful substances', 'target': 'Vegetables (Organic)', 'value': 0 },
          { 'source': 'Environment', 'target': 'Water use', 'value': 0.00148345269044703 },
          { 'source': 'Water use', 'target': 'Cocoa mass (Organic)', 'value': 0.000105714137908639 },
          { 'source': 'Water use', 'target': 'Hazelnuts (Organic)', 'value': 0.0000133452642581887 },
          { 'source': 'Water use', 'target': 'Vegetables (Organic)', 'value': 0.0000025136268682477 },
          { 'source': 'Environment', 'target': 'Resource depletion', 'value': 0.000240519729288764 },
          { 'source': 'Resource depletion', 'target': 'Cane sugar (Organic)', 'value': 0.000226237279345084 },
          { 'source': 'Resource depletion', 'target': 'Vegetables (Organic)', 'value': 0.0000142824499436793 },
          { 'source': 'Resource depletion', 'target': 'Cocoa butter (Organic)', 'value': 0 },
          { 'source': 'Environment', 'target': 'Refrigeration', 'value': 0 },
          { 'source': 'Environment', 'target': 'Packaging', 'value': 0 },
          { 'source': 'Total', 'target': 'Human rights', 'value': 0.307574096993239 },
          { 'source': 'Human rights', 'target': 'Child labour', 'value': 0.0410641202645833 },
          { 'source': 'Child labour', 'target': 'Hazelnuts (Organic)', 'value': 0.0105339381639722 },
          { 'source': 'Child labour', 'target': 'Coconut oil (Organic)', 'value': 0.00474399974233333 },
          { 'source': 'Child labour', 'target': 'Cane sugar (Organic)', 'value': 0.00388226450884445 },
          { 'source': 'Human rights', 'target': 'Forced labour', 'value': 0.0365458590642445 },
          { 'source': 'Forced labour', 'target': 'Hazelnuts (Organic)', 'value': 0.0114913076376389 },
          { 'source': 'Forced labour', 'target': 'Cocoa mass (Organic)', 'value': 0.00765230236575 },
          { 'source': 'Forced labour', 'target': 'Vegetables (Organic)', 'value': 0.00296668823626667 },
          { 'source': 'Human rights', 'target': 'Health safety', 'value': 0.0345435327843611 },
          { 'source': 'Health safety', 'target': 'Hazelnuts (Organic)', 'value': 0.0121419536385 },
          { 'source': 'Health safety', 'target': 'Cocoa butter (Organic)', 'value': 0.0056245892061 },
          { 'source': 'Health safety', 'target': 'Coconut oil (Organic)', 'value': 0.00361616847688889 },
          { 'source': 'Human rights', 'target': 'Access to water', 'value': 0.0340206659360667 },
          { 'source': 'Access to water', 'target': 'Cocoa mass (Organic)', 'value': 0.0105 },
          { 'source': 'Access to water', 'target': 'Cocoa butter (Organic)', 'value': 0.0089274160792 },
          { 'source': 'Access to water', 'target': 'Cane sugar (Organic)', 'value': 0.00333938149786667 },
          { 'source': 'Access to water', 'target': 'Vegetables (Organic)', 'value': 0.00314663377488889 },
          { 'source': 'Human rights', 'target': 'Freedom of association', 'value': 0.0320571523941667 },
          { 'source': 'Freedom of association', 'target': 'Hazelnuts (Organic)', 'value': 0.0132312483463611 },
          { 'source': 'Freedom of association', 'target': 'Cocoa mass (Organic)', 'value': 0.00510606573995 },
          { 'source': 'Freedom of association', 'target': 'Vegetables (Organic)', 'value': 0.00354321156324444 },
          { 'source': 'Freedom of association', 'target': 'Coconut oil (Organic)', 'value': 0 },
          { 'source': 'Human rights', 'target': 'Access to land', 'value': 0.0315022209894056 },
          { 'source': 'Access to land', 'target': 'Hazelnuts (Organic)', 'value': 0.00964970063322223 },
          { 'source': 'Access to land', 'target': 'Cocoa butter (Organic)', 'value': 0.0060110791848 },
          { 'source': 'Access to land', 'target': 'Vegetables (Organic)', 'value': 0.00264795594564445 },
          { 'source': 'Access to land', 'target': 'Coconut oil (Organic)', 'value': 0 },
          { 'source': 'Human rights', 'target': 'Sufficient wage', 'value': 0.0287776757227333 },
          { 'source': 'Sufficient wage', 'target': 'Cocoa mass (Organic)', 'value': 0.00883512456493333 },
          { 'source': 'Sufficient wage', 'target': 'Coconut oil (Organic)', 'value': 0.00347879026511111 },
          { 'source': 'Sufficient wage', 'target': 'Hazelnuts (Organic)', 'value': 0.00316254211388889 },
          { 'source': 'Sufficient wage', 'target': 'Cane sugar (Organic)', 'value': 0.00265674482391111 },
          { 'source': 'Human rights', 'target': 'Equal rights migrants', 'value': 0.0271146645119444 },
          { 'source': 'Equal rights migrants', 'target': 'Cocoa butter (Organic)', 'value': 0.0071042315061 },
          { 'source': 'Equal rights migrants', 'target': 'Hazelnuts (Organic)', 'value': 0.00601459775836111 },
          { 'source': 'Equal rights migrants', 'target': 'Coconut oil (Organic)', 'value': 0.00429185583138889 },
          { 'source': 'Equal rights migrants', 'target': 'Vegetables (Organic)', 'value': 0.00151077259688889 },
          { 'source': 'Human rights', 'target': 'Discrimination', 'value': 0.0211217763359833 },
          { 'source': 'Discrimination', 'target': 'Cocoa mass (Organic)', 'value': 0.00609671700306667 },
          { 'source': 'Discrimination', 'target': 'Coconut oil (Organic)', 'value': 0.00368119084494444 },
          { 'source': 'Discrimination', 'target': 'Cane sugar (Organic)', 'value': 0.00283706180951111 },
          { 'source': 'Discrimination', 'target': 'Hazelnuts (Organic)', 'value': 0.000872827909916666 },
          { 'source': 'Human rights', 'target': 'Working hours', 'value': 0.02082642898975 },
          { 'source': 'Working hours', 'target': 'Coconut oil (Organic)', 'value': 0.00359009052944444 },
          { 'source': 'Working hours', 'target': 'Vegetables (Organic)', 'value': 0.00212300379075556 },
          { 'source': 'Working hours', 'target': 'Cane sugar (Organic)', 'value': 0.000957528158533333 }
        ]
      }
      this.settings = {
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
  }
</script>

## settings 配置项

| 配置项 | 说明 | 类型 | 可选值 | 用法 |
| --- | --- | --- | --- | ---- |
| orient | 桑基图中节点的布局方向 | String | `horizontal`、`vertical` | 参见[文档](https://echarts.apache.org/zh/option.html#series-sankey.orient)，默认值为 `horizontal` |
| draggable | 控制节点拖拽的交互 | Boolean | `true`、`false` | 参见[文档](https://echarts.apache.org/zh/option.html#series-sankey.draggable)，默认值为 `true` |
| focusNodeAdjacency | 鼠标 hover 到节点或边上，相邻接的节点和边高亮的交互 | boolean/String | `false`、`true`/ `allEdges`、`outEdges`、`inEdges` | 参见[文档](https://echarts.apache.org/zh/option.html#series-sankey.focusNodeAdjacency)，默认值为 `fasle` |
| levels | 桑基图每一层的设置。 | Array | - | 参见[文档](https://echarts.apache.org/zh/option.html#series-sankey.levels) |
| label | 描述了每个矩形节点中文本标签的样式。 | Object | - | 参见[文档](https://echarts.apache.org/zh/option.html#series-sankey.label) |
| itemStyle | 桑基图节点矩形的样式。 | Object | - | 参见[文档](https://echarts.apache.org/zh/option.html#series-sankey.itemStyle) |
| lineStyle | 桑基图边的样式。 | Object | - | 参见[文档](https://echarts.apache.org/zh/option.html#series-sankey.lineStyle) |
