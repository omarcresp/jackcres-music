const trackMixin = {
  methods: {
    selectTrack () {
      this.$emit('select', this.track.id)
      this.$bus.$emit('set-track', this.track)

      window.scrollTo(0, 0)
    }
  }
}

export default trackMixin
