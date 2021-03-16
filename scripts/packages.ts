export interface PackageManifest {
  name: string;
  display: string;
  addon?: boolean;
  author?: string;
  description?: string;
  external?: string[];
  globals?: Record<string, string>;
  manualImport?: boolean;
  deprecated?: boolean;
}

export const packages: PackageManifest[] = [
  {
    name: 'bar',
    display: 'VeBarChart',
    description: 'Bar Chart Component.',
    external: [
      'vue-demi',
      'lodash.clonedeep',
      'echarts/core',
      'echarts/charts',
      'echarts/components',
      'echarts/renderers',
      '@vueblocks/vue-use-core'
    ],
    globals: {
      'echarts/charts': 'EchartsCharts'
    }
  },
  {
    name: 'vuex',
    display: 'Vuex',
    description: 'Utilities for Vuex',
    addon: true
  },
  {
    name: 'axios',
    display: 'Axios',
    description: 'Utilities for Axios',
    addon: true
  }
]

export const activePackages = packages.filter(i => !i.deprecated)
