import Chart from './chart'
import { withInstall } from '../utils'

const LineChart = withInstall<typeof Chart>(Chart)

export { LineChart }
export default LineChart
