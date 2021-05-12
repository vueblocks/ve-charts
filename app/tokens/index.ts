import type { InjectionKey, Ref, ComputedRef } from 'vue'

interface OtherChartOptions {
  darkMode: Ref<boolean>;
  backgroundColor: ComputedRef<string>;
  height: Ref<number>;
  theme?: Ref<string>;
}

// For individual build sharing injection key, we had to make `Symbol` to string
export const OTHER_CHART_OPTIONS_KEY = 'OtherChartOptions' as unknown as InjectionKey<OtherChartOptions>
