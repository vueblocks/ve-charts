/*!
 * @vueblocks/line v1.0.0
 * (c) 2021 xiaoluoboding
 * @license MIT
 */
import { computed, defineComponent, toRef, ref, shallowRef, watch, onMounted, onUnmounted, h, nextTick } from 'vue-demi';
import { use, init } from 'echarts/core';
import { LineChart } from 'echarts/charts';
import cloneDeep from 'lodash.clonedeep';
import { GridComponent, TitleComponent, TooltipComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { useResizeObserver } from '@vueblocks/vue-use-core';

use([
    GridComponent,
    TitleComponent,
    TooltipComponent,
    CanvasRenderer
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
    const echartsAttrs = computed(() => omitOn(attrs));
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
var VeChart = defineComponent({
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
        const option = toRef(props, 'option');
        const theme = toRef(props, 'theme');
        const initOptions = toRef(props, 'initOptions');
        const setOptionOpts = toRef(props, 'setOptionOpts');
        const needUpdate = toRef(props, 'needUpdate');
        const echartsRef = ref();
        const echartsInstance = shallowRef();
        const canvasRect = ref({});
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
        const init$1 = (option) => {
            if (!echartsRef.value)
                return;
            echartsInstance.value = init(echartsRef.value, props.theme, {
                renderer: 'canvas'
            });
            console.log(echartsInstance.value);
            option && echartsInstance.value.setOption(option);
            delegateEvents(echartsInstance.value);
            nextTick(resize);
        };
        const setOption = (option, opts) => {
            if (!echartsInstance.value) {
                init$1(option);
            }
            else {
                echartsInstance.value.setOption(option, opts);
            }
        };
        useResizeObserver(echartsRef, ([entry]) => {
            canvasRect.value = entry.contentRect;
            resize();
        });
        watch(needUpdate, (needUpdate) => {
            if (needUpdate && option.value) {
                if (setOptionOpts.value) {
                    setOption(option.value, setOptionOpts.value);
                }
                else {
                    setOption(option.value);
                }
            }
        }, { deep: true });
        watch([theme, initOptions], () => {
            dispose();
            init$1();
        }, { deep: true });
        onMounted(() => {
            option.value && init$1(option.value);
        });
        onUnmounted(dispose);
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
        return h('div', {
            ref: 'echartsRef',
            style: echartsStyle
        });
    }
});

/* eslint-disable @typescript-eslint/no-explicit-any */
var HocChart = defineComponent({
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
            const option = cloneDeep(this.mergedOption);
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
        return h(VeChart, this.chartOpts);
    }
});

use([LineChart]);
var VeLineChart = defineComponent({
    name: 'VeLineChart',
    extends: HocChart,
    setup(props) {
        console.log(props);
    }
});

export default VeLineChart;
