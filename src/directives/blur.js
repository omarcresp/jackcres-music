const blur = {}

function setBlur (el, binding) {
  !binding.value && (() => {
    el.style['filter'] = 'blur(1px)'
    el.style['cursor'] = 'not-allowed'

    el.querySelectorAll('a').forEach(a => a.setAttribute('disable', true))
  })()
}

blur.install = Vue => Vue.directive('blur', { bind: setBlur })

export default blur
