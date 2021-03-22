import Chart from './chart'
import { withInstall } from '../utils'

const BarChart = withInstall<typeof Chart>(Chart)

export { BarChart }
export default BarChart
