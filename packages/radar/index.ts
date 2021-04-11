import Chart from './chart'
import { withInstall } from '../utils'

const RadarChart = withInstall<typeof Chart>(Chart)

export { RadarChart }
export default RadarChart
