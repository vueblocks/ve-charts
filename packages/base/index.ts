import _VeChart from './chart'
import { withInstall } from '../utils'

const VeChart = withInstall<typeof _VeChart>(_VeChart)

export { VeChart }
export default VeChart
