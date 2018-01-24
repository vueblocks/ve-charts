const defaultColor = [
  '#5282e4',
  '#40b17e',
  '#ffd600',
  '#f88d48',
  '#2ebce2',
  '#f35352',
  '#ce62d6',
  '#8954d4',
  '#5257b8',
  '#d42d6b'
]

const coldStyle = [
  '#4c67ca',
  '#67b4d1',
  '#888fcc',
  '#afdce3',
  '#74638f',
  '#575a75'
]

const retroStyle = [
  '#ba4a4b',
  '#297389',
  '#c99129',
  '#7b4f71',
  '#333d80',
  '#c3684a',
  '#88c4dd',
  '#d6aa85',
  '#2a3537',
  '#79641a'
]

const summerStyle = [
  '#207722',
  '#68b133',
  '#a9de83',
  '#f63629',
  '#f66258',
  '#ffc0af'
]

const fallStyle = [
  '#0da6b7',
  '#6ed3de',
  '#afdce3',
  '#ea6f2b',
  '#ffc151',
  '#ebe287'
]

const purpleStyle = [
  '#81298e',
  '#589878',
  '#5a3272',
  '#344a43',
  '#9b5ab8',
  '#a9bab2'
]

const jarvisStyle = [
  '#6bcbca',
  '#4d67ed',
  '#f1763e',
  '#87b927',
  '#1eacd2',
  '#ffde33',
  '#815acd',
  '#408680',
  '#c88a05',
  '#d1473e'
]

const colors = [defaultColor, coldStyle, retroStyle, summerStyle, fallStyle, purpleStyle, jarvisStyle]

export default colors[Math.floor(Math.random() * colors.length)]
