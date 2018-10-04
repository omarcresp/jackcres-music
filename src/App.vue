<template>
  <div id="app">
    <header-component/>
    <router-view></router-view>
    <footer-component/>
  </div>
</template>

<script>
import FooterComponent from '@/components/layout/footer.component.vue'
import HeaderComponent from '@/components/layout/header.component.vue'

export default {
  name: 'app',
  components: {
    FooterComponent,
    HeaderComponent
  }
}
</script>