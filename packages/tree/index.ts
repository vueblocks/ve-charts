import Chart from './chart'
import { withInstall } from '../utils'

const TreeChart = withInstall<typeof Chart>(Chart)

export { TreeChart }
export default TreeChart
