import Chart from './chart'
import Variants from './variants'
import { withInstall } from '../utils'

const PieChart = withInstall<typeof Chart>(Chart)
const VePieChart = withInstall<typeof Variants>(Variants)

export { PieChart, VePieChart }
export default PieChart
