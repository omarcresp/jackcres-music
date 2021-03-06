import Vue from 'vue'
import VueRouter from 'vue-router'

import App from '@/App.vue'
import router from '@/router'
import EventBus from '@/plugins/event-bus'
import TimeFilter from '@/filters/time.filter'
import Blur from '@/directives/blur'

import '@/scss/main.scss'

Vue.use(VueRouter)
Vue.use(EventBus)
Vue.use(TimeFilter)
Vue.use(Blur)

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App),
  router
})
