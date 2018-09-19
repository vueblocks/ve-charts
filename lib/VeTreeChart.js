!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("vue"),require("echarts/lib/echarts"),require("echarts/lib/component/title"),require("echarts/lib/component/tooltip"),require("echarts/lib/component/legend"),require("echarts/lib/component/dataset"),require("echarts/lib/chart/tree")):"function"==typeof define&&define.amd?define(["vue","echarts/lib/echarts","echarts/lib/component/title","echarts/lib/component/tooltip","echarts/lib/component/legend","echarts/lib/component/dataset","echarts/lib/chart/tree"],t):"object"==typeof exports?exports["ve-charts"]=t(require("vue"),require("echarts/lib/echarts"),require("echarts/lib/component/title"),require("echarts/lib/component/tooltip"),require("echarts/lib/component/legend"),require("echarts/lib/component/dataset"),require("echarts/lib/chart/tree")):e["ve-charts"]=t(e.vue,e["echarts/lib/echarts"],e["echarts/lib/component/title"],e["echarts/lib/component/tooltip"],e["echarts/lib/component/legend"],e["echarts/lib/component/dataset"],e["echarts/lib/chart/tree"])}("undefined"!=typeof self?self:this,function(e,t,r,n,i,a,o){return webpackJsonpve_charts([4],{1:function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r}},11:function(e,r){e.exports=t},12:function(e,t){e.exports=r},129:function(e,t,r){"use strict";var n=r(8),i=r(3),a=r(323),o=r(324),s=(r.n(o),r(43));t.a={name:"VeTreeChart",mixins:[n.a],data:function(){return{options:i.b}},created:function(){this.chartHandler=a.a},components:{BaseEcharts:s.a}}},13:function(e,t){e.exports=n},14:function(e,t){e.exports=i},15:function(e,t){e.exports=a},2:function(e,t,r){"use strict";t.__esModule=!0;var n,i=r(6),a=(n=i)&&n.__esModule?n:{default:n};t.default=a.default||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}},321:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(322);t.default=n.a},322:function(e,t,r){"use strict";var n=r(129),i=r(325),a=r(4)(n.a,i.a,!1,null,null,null);t.a=a.exports},323:function(e,t,r){"use strict";r.d(t,"a",function(){return c});var n=r(27),i=(r.n(n),r(2)),a=r.n(i),o=r(1),s=r.n(o);var c=function(e,t,r){var n=r.tooltipVisible,i=r.legendVisible,o={tooltip:n&&{trigger:"item",triggerOn:"mousemove"},legend:i&&function(e,t){var r=t.legendType,n=void 0===r?"plain":r,i=t.legendPadding;return{type:n,padding:void 0===i?5:i,data:e.measures.map(function(e){return e.name})}}(e,t),series:function(e,t){var r=t.seriesMap,n=void 0===r?[]:r,i=t.labelRotate;return s()(t,["seriesMap","labelRotate"]),e.measures.map(function(e,t){var r=n&&n[t]&&n[t].layout,o=n&&n[t]&&n[t].orient,s="radial"===r?{}:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"LR",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r="",n="",i="",a="";switch(e){case"LR":r="left",n="right",i="right",a="left";break;case"RL":r="right",n="left",i="left",a="right";break;case"TB":r="top",n=t>0?"right":"middle",i="bottom",a=t>0?"left":"middle";break;case"BT":r="bottom",n=t>0?"right":"middle",i="top",a=t>0?"left":"middle"}return{label:{normal:{position:r,verticalAlign:"middle",align:n,rotate:t}},leaves:{label:{normal:{position:i,verticalAlign:"middle",align:a,rotate:t}}}}}(o,i);return a()({type:"tree",name:e.name,data:[e.value]},s,n[t])})}(e,t)};return o}},324:function(e,t){e.exports=o},325:function(e,t,r){"use strict";var n={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"ve-charts-parent",style:e.parentStyle},[e.isEmptyData?e._e():r("base-echarts",e._g({attrs:{"init-options":e.initOptions,options:e.options,autoResize:!0,theme:e.theme,"chart-height":e.height}},e.$listeners)),e._v(" "),e.isEmptyData&&!e.loading?e._t("default",[r("empty-data",{attrs:{"empty-text":e.emptyText}})]):e._e(),e._v(" "),e.loading?r("loading-chart"):e._e()],2)},staticRenderFns:[]};t.a=n},7:function(t,r){t.exports=e}},[321])});
//# sourceMappingURL=VeTreeChart.js.map