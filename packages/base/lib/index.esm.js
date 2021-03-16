/*!
 * @vueblocks/base v1.0.0
 * (c) 2021 xiaoluoboding
 * @license MIT
 */
import { init } from 'echarts/core';
import { computed, defineComponent, toRef, ref, shallowRef, watch, onMounted, onUnmounted, h, nextTick } from 'vue-demi';
import { useResizeObserver } from '@vueblocks/vue-use-core';

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

export default VeChart;
