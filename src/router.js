import SearchPage from '@/pages/search.page.vue'
import AboutPage from '@/pages/about.page.vue'
import TrackDetailPage from '@/pages/track-detail.page.vue'
import VueRouter from 'vue-router'

const routes = [
  { path: '/', component: SearchPage, name: 'search' },
  { path: '/about', component: AboutPage, name: 'about' },
  { path: '/track/:id', component: TrackDetailPage, name: 'track' }
]

export default new VueRouter({
  routes,
  mode: 'history',
  base: 'jackcres-music'
})
