import Chart from './chart'
import { withInstall } from '../utils'

const ScatterChart = withInstall<typeof Chart>(Chart)

export { ScatterChart }
export default ScatterChart
