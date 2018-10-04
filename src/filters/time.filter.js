const timeFilter = {}

function convertMstoMm (ms) {
  const min = Math.floor(ms / 60000)
  let sec = (ms % 60000 / 1000).toFixed(0)
  sec < 10 && (sec = '0' + sec)

  return `${min}:${sec}`
}

timeFilter.install = function (Vue) {
  Vue.filter('time', val => convertMstoMm(val))
}

export default timeFilter
