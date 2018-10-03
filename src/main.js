import Vue from 'vue'
import App from '@/App.vue'
import EventBus from '@/plugins/event-bus'
import '@/scss/main.scss'

Vue.use(EventBus)

new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(App)
})
