import numeral from 'numeral'

numeral.register('format', 'zh-number', {
  regexps: {
    format: /(zh)/,
    unformat: /(zh)/
  },
  format: function (value, format, roundingFunction) {
    // 判断是否有空格
    const space = numeral._.includes(format, ' zh') ? ' ' : ''
    // match 数据格式
    const precision = format.match(/\d.\d+/)
    let digits
    if (precision) {
      // 确定小数点后几位小数
      digits = precision[0].split('.')[1].length
    }
    // check for space before zh
    format = format.replace(/\s?\zh/, '');

    const cnNumberFormat = (val, digits = 0) => {
      if (isNaN(+val)) return val

      let symbolMap = [
        { value: 1E8, symbol: '亿' },
        { value: 1E4, symbol: '万' },
        { value: 1E3, symbol: '千' }
      ]

      for (let i = 0; i < symbolMap.length; i++) {
        if (Math.abs(val) >= symbolMap[i].value) {
          return (val / symbolMap[i].value).toFixed(digits) + space + symbolMap[i].symbol
        }
      }

      return val.toString()
    }

    return cnNumberFormat(value, digits);
  },
  unformat: function (string) {
    return numeral._.stringToNumber(string) * 0.01;
  }
});