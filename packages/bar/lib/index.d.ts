import { TitleOption, LegendComponentOption, GridOption, XAXisOption, YAXisOption, PolarOption, RadiusAxisOption, AngleAxisOption, RadarOption, DataZoomComponentOption, VisualMapComponentOption, ToolboxComponentOption, AxisPointerOption, BrushOption, GeoOption, ParallelCoordinateSystemOption, SingleAxisOption, TimelineOption, GraphicComponentLooseOption, CalendarOption, DatasetOption, AriaOption, SeriesOption, EChartsOption } from 'echarts/types/dist/shared';
import { DefineComponent, ComponentOptionsMixin, PropType, VNodeProps, AllowedComponentProps, ComponentCustomProps, EmitsOptions } from 'vue-demi';

declare const _default: DefineComponent<{}, void, {}, {}, {}, ComponentOptionsMixin, DefineComponent<{
    title: PropType<TitleOption>;
    legend: PropType<LegendComponentOption>;
    grid: PropType<GridOption>;
    xAxis: PropType<XAXisOption>;
    yAxis: PropType<YAXisOption>;
    polar: PropType<PolarOption>;
    radiusAxis: PropType<RadiusAxisOption>;
    angleAxis: PropType<AngleAxisOption>;
    radar: PropType<RadarOption>;
    dataZoom: PropType<DataZoomComponentOption>;
    visualMap: PropType<VisualMapComponentOption>;
    tooltip: PropType<ToolboxComponentOption>;
    axisPointer: PropType<AxisPointerOption>;
    toolbox: PropType<ToolboxComponentOption>;
    brush: PropType<BrushOption>;
    geo: PropType<GeoOption>;
    parallel: PropType<ParallelCoordinateSystemOption>;
    parallelAxis: PropType<ParallelCoordinateSystemOption>;
    singleAxis: PropType<SingleAxisOption>;
    timeline: PropType<TimelineOption>;
    graphic: PropType<GraphicComponentLooseOption>;
    calendar: PropType<CalendarOption>;
    dataset: PropType<DatasetOption>;
    aria: PropType<AriaOption>;
    series: PropType<SeriesOption>;
    darkMode: {
        type: (BooleanConstructor | StringConstructor)[];
        default: string;
    };
    color: ArrayConstructor;
    backgroundColor: (ObjectConstructor | StringConstructor)[];
    textStyle: ObjectConstructor;
    animation: {
        type: BooleanConstructor;
        default: boolean;
    };
    animationThreshold: NumberConstructor;
    animationDuration: (NumberConstructor | FunctionConstructor)[];
    animationEasing: (StringConstructor | FunctionConstructor)[];
    animationDelay: (NumberConstructor | FunctionConstructor)[];
    animationDurationUpdate: (NumberConstructor | FunctionConstructor)[];
    animationEasingUpdate: (StringConstructor | FunctionConstructor)[];
    animationDelayUpdate: (StringConstructor | FunctionConstructor)[];
    stateAnimation: ObjectConstructor;
    blendMode: StringConstructor;
    hoverLayerThreshold: NumberConstructor;
    useUTC: {
        type: BooleanConstructor;
        default: boolean;
    };
    options: ObjectConstructor;
    media: ArrayConstructor;
    data: (ObjectConstructor | ArrayConstructor)[];
    settings: (ObjectConstructor | ArrayConstructor)[];
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    emptyText: StringConstructor;
    option: {
        type: PropType<EChartsOption>;
        default: {};
    };
}, unknown, {
    initOptions: {
        renderer: string;
    };
    needUpdate: boolean;
    setOptionOpts: {};
    mergedOption: {};
}, {
    chartOpts(): any;
}, {
    mergePropsToOption(props: any): void;
    manualUpdate(): void;
}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{
    animation: boolean;
    darkMode: string | boolean;
    useUTC: boolean;
    loading: boolean;
    option: EChartsOption;
} & {
    title?: TitleOption | undefined;
    legend?: LegendComponentOption | undefined;
    grid?: GridOption | undefined;
    xAxis?: XAXisOption | undefined;
    yAxis?: YAXisOption | undefined;
    polar?: PolarOption | undefined;
    radiusAxis?: RadiusAxisOption | undefined;
    angleAxis?: AngleAxisOption | undefined;
    radar?: RadarOption | undefined;
    dataZoom?: DataZoomComponentOption | undefined;
    visualMap?: VisualMapComponentOption | undefined;
    color?: unknown[] | undefined;
    toolbox?: ToolboxComponentOption | undefined;
    axisPointer?: AxisPointerOption | undefined;
    animationDurationUpdate?: number | Function | undefined;
    animationEasingUpdate?: string | Function | undefined;
    brush?: BrushOption | undefined;
    geo?: GeoOption | undefined;
    parallel?: ParallelCoordinateSystemOption | undefined;
    parallelAxis?: ParallelCoordinateSystemOption | undefined;
    singleAxis?: SingleAxisOption | undefined;
    timeline?: TimelineOption | undefined;
    graphic?: GraphicComponentLooseOption | undefined;
    calendar?: CalendarOption | undefined;
    dataset?: DatasetOption | undefined;
    aria?: AriaOption | undefined;
    series?: SeriesOption | (SeriesOption & {}) | undefined;
    blendMode?: string | undefined;
    data?: unknown;
    hoverLayerThreshold?: number | undefined;
    stateAnimation?: Record<string, any> | undefined;
    animationThreshold?: number | undefined;
    animationDuration?: number | Function | undefined;
    animationEasing?: string | Function | undefined;
    animationDelay?: number | Function | undefined;
    animationDelayUpdate?: string | Function | undefined;
    tooltip?: ToolboxComponentOption | undefined;
    backgroundColor?: unknown;
    textStyle?: Record<string, any> | undefined;
    options?: Record<string, any> | undefined;
    media?: unknown[] | undefined;
    settings?: unknown;
    emptyText?: string | undefined;
}>, {
    animation: boolean;
    darkMode: string | boolean;
    useUTC: boolean;
    loading: boolean;
    option: EChartsOption;
}>, EmitsOptions, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<{} & {}>, {}>;

export default _default;
