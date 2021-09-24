import Chart from './chart'
import Variants from './variants'
import { withInstall } from '../utils'

const FunnelChart = withInstall<typeof Chart>(Chart)
const VeFunnelChart = withInstall<typeof Variants>(Variants)

export { FunnelChart, VeFunnelChart }
export default FunnelChart
