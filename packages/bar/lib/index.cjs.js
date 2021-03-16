/*!
 * @vueblocks/bar v1.0.0
 * (c) 2021 xiaoluoboding
 * @license MIT
 */
'use strict';

var vueDemi = require('vue-demi');
var core = require('echarts/core');
var charts = require('echarts/charts');
var cloneDeep = require('lodash.clonedeep');
var components = require('echarts/components');
var renderers = require('echarts/renderers');
var vueUseCore = require('@vueblocks/vue-use-core');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var cloneDeep__default = /*#__PURE__*/_interopDefaultLegacy(cloneDeep);

core.use([
    components.GridComponent,
    components.TitleComponent,
    components.TooltipComponent,
    renderers.CanvasRenderer
]);

/* eslint-disable @typescript-eslint/no-explicit-any */
const toKebabCase = (str) => str
    .replace(/([A-Z])([A-Z])/g, '$1-$2')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
const toCamelCase = (arr) => arr
    .map((str, idx) => idx > 0 ? str.charAt(0).toLocaleUpperCase() + str.slice(1) : str)
    .join('');
// Copied from
// https://github.com/vuejs/vue-next/blob/5a7a1b8293822219283d6e267496bec02234b0bc/packages/shared/src/index.ts#L40-L41
const isOn = (key) => /^on[^a-z]/.test(key);
function omitOn(attrs) {
    const result = {};
    for (const key in attrs) {
        if (!isOn(key)) {
            result[key] = attrs[key];
        }
    }
    return result;
}

/* eslint-disable @typescript-eslint/no-explicit-any */
const useAttrs = (attrs) => {
    const echartsAttrs = vueDemi.computed(() => omitOn(attrs));
    const echartsEvents = {};
    Object.keys(attrs)
        .filter(key => isOn(key) && typeof attrs[key] === 'function')
        .forEach(key => {
        const [, ...rest] = toKebabCase(key).split('-');
        const eventKey = rest.length === 1
            ? rest.join('')
            : toCamelCase(rest);
        echartsEvents[eventKey] = attrs[key];
    });
    return {
        echartsAttrs,
        echartsEvents
    };
};

/* eslint-disable @typescript-eslint/no-explicit-any */
var VeChart = vueDemi.defineComponent({
    name: 'VeChart',
    inheritAttrs: false,
    props: {
        option: Object,
        initOptions: Object,
        theme: [String, Object],
        setOptionOpts: Object,
        height: { type: Number, default: 400 },
        needUpdate: { type: Boolean, default: false }
    },
    setup(props, { attrs }) {
        const option = vueDemi.toRef(props, 'option');
        const theme = vueDemi.toRef(props, 'theme');
        const initOptions = vueDemi.toRef(props, 'initOptions');
        const setOptionOpts = vueDemi.toRef(props, 'setOptionOpts');
        const needUpdate = vueDemi.toRef(props, 'needUpdate');
        const echartsRef = vueDemi.ref();
        const echartsInstance = vueDemi.shallowRef();
        const canvasRect = vueDemi.ref({});
        const { echartsEvents } = useAttrs(attrs);
        console.log(option.value);
        const resize = () => {
            if (echartsInstance.value) {
                echartsInstance.value.resize();
            }
        };
        const dispose = () => {
            if (echartsInstance.value) {
                echartsInstance.value.dispose();
                echartsInstance.value = undefined;
            }
        };
        const delegateEvents = (instance) => {
            Object.keys(echartsEvents).forEach(key => {
                const handler = echartsEvents[key];
                if (!handler)
                    return;
                if (key.indexOf('zr:') === 0) {
                    instance.getZr().on(key.slice(3).toLowerCase(), handler);
                }
                else {
                    instance.on(key, handler);
                }
            });
        };
        const init = (option) => {
            if (!echartsRef.value)
                return;
            echartsInstance.value = core.init(echartsRef.value, props.theme, {
                renderer: 'canvas'
            });
            console.log(echartsInstance.value);
            option && echartsInstance.value.setOption(option);
            delegateEvents(echartsInstance.value);
            vueDemi.nextTick(resize);
        };
        const setOption = (option, opts) => {
            if (!echartsInstance.value) {
                init(option);
            }
            else {
                echartsInstance.value.setOption(option, opts);
            }
        };
        vueUseCore.useResizeObserver(echartsRef, ([entry]) => {
            canvasRect.value = entry.contentRect;
            resize();
        });
        vueDemi.watch(needUpdate, (needUpdate) => {
            if (needUpdate && option.value) {
                if (setOptionOpts.value) {
                    setOption(option.value, setOptionOpts.value);
                }
                else {
                    setOption(option.value);
                }
            }
        }, { deep: true });
        vueDemi.watch([theme, initOptions], () => {
            dispose();
            init();
        }, { deep: true });
        vueDemi.onMounted(() => {
            option.value && init(option.value);
        });
        vueDemi.onUnmounted(dispose);
        return {
            echartsRef,
            echartsInstance,
            setOption
        };
    },
    render(props) {
        const echartsStyle = {
            width: 'auto',
            height: `${props.height}px`
        };
        return vueDemi.h('div', {
            ref: 'echartsRef',
            style: echartsStyle
        });
    }
});

/* eslint-disable @typescript-eslint/no-explicit-any */
var HocChart = vueDemi.defineComponent({
    props: {
        /**
         * echarts options
         * ve-charts delegate all echarts options as component props
         * https://echarts.apache.org/zh/option.html
         */
        title: Object,
        legend: Object,
        grid: Object,
        xAxis: [Object, Array],
        yAxis: [Object, Array],
        polar: Object,
        radiusAxis: Object,
        angleAxis: Object,
        radar: [Object, Array],
        dataZoom: [Object, Array],
        visualMap: [Object, Array],
        tooltip: Object,
        axisPointer: Object,
        toolbox: Object,
        brush: Object,
        geo: Object,
        parallel: Object,
        parallelAxis: Array,
        singleAxis: Array,
        timeline: Object,
        graphic: Object,
        calendar: Object,
        dataset: Object,
        aria: Object,
        series: [Object, Array],
        darkMode: { type: [Boolean, String], default: 'auto' },
        color: Array,
        backgroundColor: [Object, String],
        textStyle: Object,
        animation: { type: Boolean, default: true },
        animationThreshold: Number,
        animationDuration: [Number, Function],
        animationEasing: [String, Function],
        animationDelay: [Number, Function],
        animationDurationUpdate: [Number, Function],
        animationEasingUpdate: [String, Function],
        animationDelayUpdate: [String, Function],
        stateAnimation: Object,
        blendMode: String,
        hoverLayerThreshold: Number,
        useUTC: { type: Boolean, default: false },
        options: Object,
        media: Array,
        // ve-charts basic props
        data: [Object, Array],
        settings: [Object, Array],
        loading: { type: Boolean, default: false },
        emptyText: String,
        // ve-charts common props
        option: {
            type: [Object, Array],
            default: {}
        }
    },
    data: () => ({
        initOptions: {
            renderer: 'canvas'
        },
        needUpdate: false,
        setOptionOpts: {},
        mergedOption: {}
    }),
    computed: {
        chartOpts() {
            return {
                option: this.mergedOption,
                initOptions: this.initOptions,
                needUpdate: this.needUpdate,
                setOptionOpts: this.setOptionOpts
            };
        }
    },
    created() {
        this.mergedOption = this.option;
        Object.keys(this.$props)
            .filter(prop => !/data|setting|height|loading|emptyText/.test(prop))
            .forEach((prop) => {
            this.$watch(prop, (val) => {
                // merge echarts default option
                const option = prop === 'option'
                    ? this.option
                    : { [prop]: val };
                this.mergePropsToOption(option);
                this.manualUpdate();
            }, {
                // TODO only object types need deep watch
                deep: true,
                immediate: true
            });
        });
    },
    beforeUnmount() {
        this.mergedOption = {};
    },
    methods: {
        mergePropsToOption(props) {
            const option = cloneDeep__default['default'](this.mergedOption);
            this.mergedOption = { ...option, ...props };
        },
        manualUpdate() {
            // manual update echarts options
            this.needUpdate = true;
            this.$nextTick(() => { this.needUpdate = false; });
        }
    },
    render() {
        // props.$props
        return vueDemi.h(VeChart, this.chartOpts);
    }
});

core.use([charts.BarChart]);
var VeBarChart = vueDemi.defineComponent({
    name: 'VeBarChart',
    extends: HocChart,
    setup(props) {
        console.log(props);
    }
});

module.exports = VeBarChart;
