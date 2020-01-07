const defaultColor = [
  '#5282E4', '#40B17E', '#FFD600', '#F88D48', '#2EBCE2',
  '#F35352', '#CE62D6', '#8954D4', '#5257B8', '#D42D6B'
]

const morandi = [
  '#FE7171', '#F5D3B3', '#9DBAD8', '#FFB2A1', '#F4E2AA',
  '#7A8AA2', '#9F9BBC', '#CE93AB', '#ECB5C5', '#D8D8D8'
]

const skyBlue = [
  '#5178EB', '#70B7FF', '#7AE3FE', '#15CEC0', '#FFA900',
  '#FFDA3E', '#83DD89', '#BEDF65', '#965BFD', '#F67BB2'
]

const summerWind = [
  '#FF664D', '#6FDACD', '#4D52A2', '#FFCF02', '#7D80B7',
  '#549FF6', '#FF937D', '#46BDA1', '#9AEAE1', '#FFEC9A'
]

const summerStyle = [
  '#207722', '#68b133', '#a9de83', '#f63629', '#f66258',
  '#ffc0af'
]

const fallStyle = [
  '#0da6b7', '#6ed3de', '#afdce3', '#ea6f2b', '#ffc151',
  '#ebe287'
]

const starryNight = [
  '#FFD829', '#3F45A5', '#A1ABEE', '#4266A9', '#EDEB54',
  '#C0E09C', '#9DD5F1', '#407CD6', '#3063B0', '#5A6FA6'
]

const jarvisStyle = [
  '#6bcbca', '#4d67ed', '#f1763e', '#87b927', '#1eacd2',
  '#ffde33', '#815acd', '#408680', '#c88a05', '#d1473e'
]

const newStyle1 = [
  '#722ED1', '#EC40AB', '#FF8942', '#00A9CE', '#007EFF',
  '#0ACC64'
]

const newStyle2 = [
  '#4483FF', '#5257B8', '#FF027B', '#2EBCE2', '#203972',
  '#FFD600', '#40B17E'
]

const colors = [
  defaultColor, morandi, skyBlue, summerStyle, fallStyle,
  starryNight, jarvisStyle, newStyle1, newStyle2, summerWind
]

export default colors[Math.floor(Math.random() * colors.length)]
