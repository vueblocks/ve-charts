import Chart from './chart'
import { withInstall } from '../utils'

const GaugeChart = withInstall<typeof Chart>(Chart)

export { GaugeChart }
export default GaugeChart
