import Chart from './chart'
import Variants from './variants'
import { withInstall } from '../utils'

const LineChart = withInstall<typeof Chart>(Chart)
const VeLineChart = withInstall<typeof Variants>(Variants)

export { LineChart, VeLineChart }
export default LineChart
