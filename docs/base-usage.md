# 开始使用

## 通过 npm 安装

我们提供了 `ve-charts` npm 包，通过下面命令即可完成安装。

```bash
npm i ve-charts -S
```
## 完整引入 VeCharts

安装完成后，即可使用 `import` 或 `require` 使用。

```js
import VeCharts from 've-charts'

Vue.use(VeCharts)
```

## 创建图表

```html
<ve-bar-chart :data="chartData" />
```