import Chart from './chart'
import { withInstall } from '../utils'

const PieChart = withInstall<typeof Chart>(Chart)

export { PieChart }
export default PieChart
