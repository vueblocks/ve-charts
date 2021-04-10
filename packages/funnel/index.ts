import Chart from './chart'
import { withInstall } from '../utils'

const FunnelChart = withInstall<typeof Chart>(Chart)

export { FunnelChart }
export default FunnelChart
