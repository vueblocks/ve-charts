import Chart from './chart'
import Variants from './variants'
import { withInstall } from '../utils'

const ScatterChart = withInstall<typeof Chart>(Chart)
const VeScatterChart = withInstall<typeof Variants>(Variants)

export { ScatterChart, VeScatterChart }
export default ScatterChart
