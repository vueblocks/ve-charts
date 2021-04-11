import Chart from './chart'
import { withInstall } from '../utils'

const TreemapChart = withInstall<typeof Chart>(Chart)

export { TreemapChart }
export default TreemapChart
