/* eslint-disable @typescript-eslint/no-explicit-any */
import type { App, Ref, SetupContext } from 'vue'

export type Attrs = NonNullable<SetupContext['attrs']>
export type AnyRecord = Record<string, any>

export type WithInstall<T> = T & {
  install(app: App): void;
}

export type RefTyped<T> = T | Ref<T>
export type RefTypedElement = RefTyped<Element | undefined | null>


export type DataAtom = {
  name: string;
  data: Array<string | number | Array<string | number>>;
}

export type RadarIndicator = {
  name: string;
  max?: number;
  min?: number;
  color?: string;
}
export interface VeDataset {
  dimensions: DataAtom | Array<RadarIndicator>;
  measures: Array<DataAtom>;
}

export type VeChartsData = VeDataset
