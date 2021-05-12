import Chart from './chart'
import Variants from './variants'
import { withInstall } from '../utils'

const BarChart = withInstall<typeof Chart>(Chart)
const VeBarChart = withInstall<typeof Variants>(Variants)

export { BarChart, VeBarChart }
export default BarChart
