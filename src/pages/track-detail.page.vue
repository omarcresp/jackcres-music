<template>
  <div class="container">
    <div class="colums">
      <div class="column is-5 is-offset-4">
        <track-component :track="track" v-if="track.album"/>
      </div>
    </div>
  </div>
</template>

<script>
import trackService from '@/services/track'
import TrackComponent from '@/components/track.component.vue'

export default {
  components: { TrackComponent },

  async created() {
    const id = this.$route.params.id

    this.track = await trackService.getByID(id)
  },

  data () {
    return {
      track: {}
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 20px;
}
</style>
