import { VNodeDirective, VueConstructor } from "vue";

function setBlur (el: HTMLElement, binding: VNodeDirective) {
    !binding.value && (() => {
        el.style['filter'] = 'blur(3px)'
        el.style['cursor'] = 'not-allowed'

        el.querySelectorAll('a').forEach(a => a.setAttribute('disable', 'true'))
    })()
}

const blur = {
    install (Vue: VueConstructor) {
        Vue.directive('blur', {
            bind: setBlur
        })
    }
}

export default blur
