/* eslint-disable @typescript-eslint/no-explicit-any */
import type { App, Ref, SetupContext } from 'vue'

export type Attrs = NonNullable<SetupContext['attrs']>

export type WithInstall<T> = T & {
  install(app: App): void;
}

export type RefTyped<T> = T | Ref<T>
export type RefTypedElement = RefTyped<Element | undefined | null>

export type dataAtom = {
  name: string;
  data: Array<string | number>;
}

export interface VeDataAtom {
  dimensions: dataAtom;
  measures: Array<dataAtom>;
}

export type VeChartsData = VeDataAtom
