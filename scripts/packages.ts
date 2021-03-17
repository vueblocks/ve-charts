export interface PackageManifest {
  name: string;
  display: string;
  minimal?: boolean;
  author?: string;
  description?: string;
  external?: string[];
  globals?: Record<string, string>;
  manualImport?: boolean;
  deprecated?: boolean;
}

export const packages: PackageManifest[] = [
  {
    name: 'global',
    display: 'VeCharts',
    description: 'VeCharts Component.',
    minimal: false,
    external: [
      'echarts/core',
      'echarts/charts',
      'echarts/components',
      'echarts/renderers'
    ],
    globals: {
      'echarts/core': 'EchartsCore',
      'echarts/charts': 'EchartsCharts',
      'echarts/components': 'EchartsComponents',
      'echarts/renderers': 'EchartsRenderers'
    }
  },
  {
    name: 'base',
    display: 'VeChart',
    description: 'Base Chart Component.',
    minimal: true,
    external: [
      'echarts/core'
    ],
    globals: {
      'echarts/core': 'EchartsCore'
    }
  },
  {
    name: 'bar',
    display: 'VeBarChart',
    description: 'Bar Chart Component.',
    minimal: true,
    external: [
      'echarts/core',
      'echarts/charts',
      'echarts/components',
      'echarts/renderers'
    ],
    globals: {
      'echarts/core': 'EchartsCore',
      'echarts/charts': 'EchartsCharts',
      'echarts/components': 'EchartsComponents',
      'echarts/renderers': 'EchartsRenderers'
    }
  },
  {
    name: 'line',
    display: 'VeLineChart',
    description: 'Line Chart Components.',
    minimal: true,
    external: [
      'echarts/core',
      'echarts/charts',
      'echarts/components',
      'echarts/renderers'
    ],
    globals: {
      'echarts/core': 'EchartsCore',
      'echarts/charts': 'EchartsCharts',
      'echarts/components': 'EchartsComponents',
      'echarts/renderers': 'EchartsRenderers'
    }
  }
]

export const activePackages = packages.filter(i => !i.deprecated)
