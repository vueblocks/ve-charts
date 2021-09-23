import Chart from './chart'
import Variants from './variants'
import { withInstall } from '../utils'

const RadarChart = withInstall<typeof Chart>(Chart)
const VeRadarChart = withInstall<typeof Variants>(Variants)

export { RadarChart, VeRadarChart }
export default RadarChart
