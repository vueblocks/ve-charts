import { DefineComponent, PropType, Ref, ComponentOptionsMixin, VNodeProps, AllowedComponentProps, ComponentCustomProps } from 'vue-demi';
import { init, EChartsType } from 'echarts/core';
import { EChartsOption } from 'echarts/types/dist/shared';

declare type InitParameters = Parameters<typeof init>;
declare type Theme = NonNullable<InitParameters[1]>;
interface SetOptionOpts {
    notMerge?: boolean;
    lazyUpdate?: boolean;
    silent?: boolean;
    replaceMerge?: any;
    transition?: any;
}

declare const _default: DefineComponent<{
    option: PropType<EChartsOption>;
    initOptions: PropType<{
        renderer?: ("canvas" | "svg") | undefined;
        devicePixelRatio?: number | undefined;
        width?: number | undefined;
        height?: number | undefined;
        locale?: string | {
            time: {
                month: string[];
                monthAbbr: string[];
                dayOfWeek: string[];
                dayOfWeekAbbr: string[];
            };
            legend: {
                selector: {
                    all: string;
                    inverse: string;
                };
            };
            toolbox: {
                brush: {
                    title: {
                        rect: string;
                        polygon: string;
                        lineX: string;
                        lineY: string;
                        keep: string;
                        clear: string;
                    };
                };
                dataView: {
                    title: string;
                    lang: string[];
                };
                dataZoom: {
                    title: {
                        zoom: string;
                        back: string;
                    };
                };
                magicType: {
                    title: {
                        line: string;
                        bar: string;
                        stack: string;
                        tiled: string;
                    };
                };
                restore: {
                    title: string;
                };
                saveAsImage: {
                    title: string;
                    lang: string[];
                };
            };
            series: {
                typeNames: {
                    pie: string;
                    bar: string;
                    line: string;
                    scatter: string;
                    effectScatter: string;
                    radar: string;
                    tree: string;
                    treemap: string;
                    boxplot: string;
                    candlestick: string;
                    k: string;
                    heatmap: string;
                    map: string;
                    parallel: string;
                    lines: string;
                    graph: string;
                    sankey: string;
                    funnel: string;
                    gauge: string;
                    pictorialBar: string;
                    themeRiver: string;
                    sunburst: string;
                };
            };
            aria: {
                general: {
                    withTitle: string;
                    withoutTitle: string;
                };
                series: {
                    single: {
                        prefix: string;
                        withName: string;
                        withoutName: string;
                    };
                    multiple: {
                        prefix: string;
                        withName: string;
                        withoutName: string;
                        separator: {
                            middle: string;
                            end: string;
                        };
                    };
                };
                data: {
                    allData: string;
                    partialData: string;
                    withName: string;
                    withoutName: string;
                    separator: {
                        middle: string;
                        end: string;
                    };
                };
            };
        } | undefined;
    }>;
    theme: PropType<Theme>;
    setOptionOpts: PropType<SetOptionOpts>;
    height: {
        type: NumberConstructor;
        default: number;
    };
    needUpdate: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    echartsRef: Ref<HTMLElement | undefined>;
    echartsInstance: Ref<EChartsType | undefined>;
    setOption: (option: EChartsOption, opts?: SetOptionOpts | undefined) => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{
    height: number;
    needUpdate: boolean;
} & {
    option?: EChartsOption | undefined;
    initOptions?: {
        renderer?: ("canvas" | "svg") | undefined;
        devicePixelRatio?: number | undefined;
        width?: number | undefined;
        height?: number | undefined;
        locale?: string | {
            time: {
                month: string[];
                monthAbbr: string[];
                dayOfWeek: string[];
                dayOfWeekAbbr: string[];
            };
            legend: {
                selector: {
                    all: string;
                    inverse: string;
                };
            };
            toolbox: {
                brush: {
                    title: {
                        rect: string;
                        polygon: string;
                        lineX: string;
                        lineY: string;
                        keep: string;
                        clear: string;
                    };
                };
                dataView: {
                    title: string;
                    lang: string[];
                };
                dataZoom: {
                    title: {
                        zoom: string;
                        back: string;
                    };
                };
                magicType: {
                    title: {
                        line: string;
                        bar: string;
                        stack: string;
                        tiled: string;
                    };
                };
                restore: {
                    title: string;
                };
                saveAsImage: {
                    title: string;
                    lang: string[];
                };
            };
            series: {
                typeNames: {
                    pie: string;
                    bar: string;
                    line: string;
                    scatter: string;
                    effectScatter: string;
                    radar: string;
                    tree: string;
                    treemap: string;
                    boxplot: string;
                    candlestick: string;
                    k: string;
                    heatmap: string;
                    map: string;
                    parallel: string;
                    lines: string;
                    graph: string;
                    sankey: string;
                    funnel: string;
                    gauge: string;
                    pictorialBar: string;
                    themeRiver: string;
                    sunburst: string;
                };
            };
            aria: {
                general: {
                    withTitle: string;
                    withoutTitle: string;
                };
                series: {
                    single: {
                        prefix: string;
                        withName: string;
                        withoutName: string;
                    };
                    multiple: {
                        prefix: string;
                        withName: string;
                        withoutName: string;
                        separator: {
                            middle: string;
                            end: string;
                        };
                    };
                };
                data: {
                    allData: string;
                    partialData: string;
                    withName: string;
                    withoutName: string;
                    separator: {
                        middle: string;
                        end: string;
                    };
                };
            };
        } | undefined;
    } | undefined;
    theme?: Theme | (Theme & {}) | undefined;
    setOptionOpts?: SetOptionOpts | undefined;
}>, {
    height: number;
    needUpdate: boolean;
}>;

export default _default;
