/*!
 * @vueblocks/base v1.0.0
 * (c) 2021 xiaoluoboding
 * @license MIT
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('echarts/core'), require('vue-demi'), require('@vueblocks/vue-use-core')) :
  typeof define === 'function' && define.amd ? define(['echarts/core', 'vue-demi', '@vueblocks/vue-use-core'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.VeChart = factory(global.EchartsCore, global.VueDemi, global.VueUseCore));
}(this, (function (core, vueDemi, vueUseCore) { 'use strict';

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

  return VeChart;

})));
