import Chart from './chart'
import { withInstall } from '../utils'

const VeChart = withInstall<typeof Chart>(Chart)

export { VeChart }
export default VeChart
