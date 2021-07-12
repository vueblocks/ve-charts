# 更新日志

## v0.9.11

* **新增** 柱状图新增（纵坐标指示器类型）配置项

### PRS

* [#166](https://github.com/vueblocks/ve-charts/pull/166) by [zimuZhao](https://github.com/zimuZhao)
  
## v0.9.10

* **新增** 柱状图增加刻度标签旋转角度配置

### PRS

* [#162](https://github.com/vueblocks/ve-charts/pull/162) by [liweina-fans](https://github.com/liweina-fans)

## v0.9.9

* **新增** 折线图、柱状图新增全局 `markLine`、`markArea` 配置

### PRS

* [#158](https://github.com/vueblocks/ve-charts/pull/158) by [zimuZhao](https://github.com/zimuZhao)

## v0.9.8

* **新增** 公共系列配置项 [series-option](https://vueblocks.github.io/ve-charts/#/base-options?id=%e9%80%9a%e7%94%a8%e9%85%8d%e7%bd%ae)

### PRS

* [#149](https://github.com/vueblocks/ve-charts/pull/149) by [zimuZhao](https://github.com/zimuZhao)

## v0.9.7

* **修复** 雷达图刻度轴不可取消的问题

### PRS

* [#144](https://github.com/vueblocks/ve-charts/pull/144) by [liweina-fans](https://github.com/liweina-fans)

## v0.9.6

* **新增** 柱状图/折线图新增维度轴分隔线设置
* **新增** 柱状图/折线图新增维度坐标名称设置
* **新增** 折线图新增坐标轴翻转
* **新增** 柱状图支持双纵坐标分别翻转
* **新增** 柱状图新增坐标轴刻度标签颜色设置
* **新增** 折线图新增坐标轴刻度标签颜色设置
* **新增** 折线图新增坐标轴刻度标签和轴线设置显隐
* **新增** 柱状图新增坐标轴刻度标签和轴线可设置显隐
* **新增** 雷达图新增刻度轴/指示器/标签设置

### PRS

* [#142](https://github.com/vueblocks/ve-charts/pull/142) by [liweina-fans](https://github.com/liweina-fans)
* [#139](https://github.com/vueblocks/ve-charts/pull/139) by [liweina-fans](https://github.com/liweina-fans)

## v0.9.5

* **更新** 极区图新增圆角配置项

## v0.9.4

* **更新** 增强极区图角度轴配置

## v0.9.3

* **更新** 增强地图标记颜色、视觉映射效果配置

## v0.9.2

* **新增** 飞线地图加入弧度特效配置

## v0.9.1

* **新增** - 折线图、柱状图加入 `tooltip`、`legend` 配置

## v0.9.0

* **新增** - [飞线地图](https://vueblocks.github.io/ve-charts/#/chart-geo?id=地图-飞线效果图)
* **更新** - `resize-detector` 升级至 v0.2.2

## v0.8.8

* **优化** - 柱状图增加新增X轴和Y轴反向属性设置

## v0.8.7

* **优化** - 散点图增加坐标轴名称设置

## v0.8.6

* **新增** - [桑基图](https://vueblocks.github.io/ve-charts/#/chart-sankey)

## v0.8.5

* **修复** 修复百分比堆叠图（柱状图/折线图)，因传入指标值是字符串导致的渲染问题

## v0.8.4

> 自此版本起，按需引入方式改变为 `import { VeBarChart } from 've-charts'`

* **升级** - 升级 `echarts` 至 v0.4.6
* **新增** - 极区图（极地图）
* **新增** - 饼图 / 环形图支持默认选中多少个 legend
* **新增** - 折线图支持堆叠面积图，百分比堆叠面积图
* **新增** - 折线图支持自定义系列颜色

## v0.8.3

* **修复** - 获取不到维度名称导致的渲染bug

## v0.8.2

* **新增** - 漏斗图支持传入自定义label
* **修复** - 漏斗图多个指标映射关系

## v0.8.1

* **修复** - 使用 dataset API 时，饼图维度值为 [number/number-like](https://github.com/apache/incubator-echarts/blob/4e4cf884fc8a96b18bd1de537b590042e49df684/src/data/List.js#L339) 类型时，引起的渲染图表效果错误问题

## v0.8.0

* **新增** - [通用配置](https://vueblocks.github.io/ve-charts/#/base-options?id=%e9%80%9a%e7%94%a8%e9%85%8d%e7%bd%ae) `ec`，代表当前组件的 `echarts` 实例，例子参考[获取图表实例](https://vueblocks.github.io/ve-charts/#/setting-demo?id=%e8%8e%b7%e5%8f%96%e5%9b%be%e8%a1%a8%e5%ae%9e%e4%be%8b)
* **修复** - 使用 dataset API 时，维度值为 [number/number-like](https://github.com/apache/incubator-echarts/blob/4e4cf884fc8a96b18bd1de537b590042e49df684/src/data/List.js#L339) 类型时，引起的渲染图表效果错误问题

## v0.7.14

* **修复** - 判断数据是否为空影响到传入数组的问题

## v0.7.13

* **修复** - 饼图度量名称以数字开头引起的显示问题

## v0.7.12

* **优化** - 柱状图支持多个第二个轴线设置

## v0.7.11

* **优化** - 组件数据为空校验，当度量无数据时渲染“空数据”模版

## v0.7.10

* **修复** - 地图模式为map时，不做城市校验

## v0.7.9

* **优化** - 直角坐标系支持多个指标轴格式化小数位传参
* **优化** - 地图支持外部链接加载 `geojson`
* **优化** - 地图加载同一个 `geojson` 只加载一次
* **优化** - 打包去掉了 `zrender` 依赖，此依赖安装 `echarts` 时会自动安装

## v0.7.8

* **优化** - 折线图 & 柱状图优化指标轴配置项

## v0.7.7

* **新增** - 水球图封装

## v0.7.6

* **新增** - 词云图封装
* **新增** - 地图封装

## v0.7.5

* **修复** - `xAxis` / `yAxis` 支持传入数组类型
* **新增** - 暂无数据判断逻辑为 `data` 与 `series` 两者必须传一项

## v0.7.4

* **修复** - 格式化刻度轴数值显示问题
* **新增** - 柱状图、折线图数据标签支持按类型格式化数值

## v0.7.3

* **新增** - 树图

## v0.7.2

* **新增** - 折线图Y轴数值格式化配置方法

## v0.7.1

* **新增** - 支持两种主题使用方式：

  1、全局注册的 `.js` 主题文件，只需绑定主题名称到 `theme` 属性
  2、直接绑定主题对象到 `theme` 属性

## v0.7.0

* **新增** - 主题配置说明

## v0.6.9

* **新增** - 百分比堆叠柱状图 / 条形图配置说明
* **新增** - X、Y轴数值格式化配置方法

## v0.6.8

* **修复** - 改变初始化参数导致的图表频繁更新bug

## v0.6.7

* **新增** - 矩形树图

## v0.6.5

* **新增** - 旭日图

## v0.6.3

* **新增** - 配置项 `renderer` ，用于切换渲染方式，可切换为 `svg`，默认为：`canvas`
* **新增** - 柱状图支持 **瀑布图** 配置，详见文档[柱状图配置]()

## v0.6.0

* **新增** - 提供按需引入组件解决方案，详见文档[按需引入](https://vueblocks.github.io/ve-charts/#/base-usage)

## v0.5.0

* **新增** - 自定义加载图表动效，传入 `loading` 参数
* **新增** - 自定义图表高度，传入 `height` 参数

## v0.4.9

* **修复** - 将 `Echarts` 所有事件代理到组件上，可以通过 `v-on` 绑定所需事件

## v0.4.8

* **修复** - 修复柱状图 & 折线图 `label` 传入 `formatter` 失效bug

## v0.4.7

* **修复** - 饼图 & 环形图标签重叠bug
* **新增** - 雷达图文档样例 

## v0.4.6

* **新增** - 雷达图
* **新增** - 仪表盘

## v0.4.5 

* **更新** - 默认 `window` 环境下使用 `Vue` 自动注册 `ve-charts` 组件
* **新增** - 文档新增部分引入 `ve-charts` 方式

## v0.4.3

* **新增** - 散点图

## v0.4.1

* **修复** - 图表数据改变为空，图表实例未销毁bug
* **更新** - 饼图新增 `环饼图` 配置
* **更新** - 文档新增 `属性配置`

## v0.4.0

* **更新** - ECharts 修复了新API `dataset` 导致的区域折线图以及堆叠柱状图bug，一切变的正常起来。😂

## v0.3.1

* **更新** - 空数据组件改为`slot`方式注入

## v0.3.0

* **更新** - 新增空数据显示空数据组件

## v0.2.9

* **优化** - 柱状图支持双Y轴

## v0.2.8

* **优化** - 柱状图支持
  * 条形图
  * 双向柱状图
  * 折柱混合图

## v0.2.7

* **修复** - 打包去掉console

## v0.2.6

* **新增** - 漏斗图

## v0.2.5

* **更新** - 修改 `dimensions` 数据结构，加入 `name` 属性

## v0.2.4

* **修复** - webpack版本升级导致打包压缩失败bug

## v0.2.3

* **优化** - 折线图支持
  * 堆叠折线图
  * 阶梯折线图
  * 显示文本标签

## v0.2.2

* **优化** - 雷达图

## v0.2.1

* **新增** - 饼图
* **新增** - 环形图
* **更新** - 使用 `dataset` 数据驱动图表展现
* **升级** - 依赖图表库 `ECharts` 升级为4.0版本

## v0.2.0

* **新增** - 堆叠柱状图
* **新增** - 柱状图支持显示文本标签

---

## v0.1.0

ve-charts 基础版本诞生