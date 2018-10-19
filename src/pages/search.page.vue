<template>
  <main>
    <section class="section">
        <nav class="nav">
            <div class="container search-bar">
              <input class="input is-large" type="text" placeholder="Buscar canciones"
                v-model="searchQuery" @keyup.enter="search" />
              <a class="button is-info is-large" @click="search">Buscar</a>
              <a class="button is-danger is-large">&times;</a>
            </div>
        </nav>

        <div class="container">
          <p class="search-message"><small>{{ searchMessage }}</small></p>
        </div>

        <div class="container results">
          <div class="columns is-multiline">
            <div class="column is-one-quarter"
                v-for="(t, i) in tracks" :key="i">
              <track-component :track="t" @select="setSelectedTrack"
                :class="{ 'is-active' : t.id === selectedTrack }" />
            </div>
            <notification-component v-show="showNotFoundNotification">
              <p slot="body">No se encontraron resultados</p>
            </notification-component>
          </div>
          <loader-component v-show="isLoading"/>
        </div>
    </section>
  </main>
</template>

<script>
import trackService from '@/services/track'

import LoaderComponent from '@/components/shared/loader.component.vue'
import TrackComponent from '@/components/track.component.vue'
import NotificationComponent from '@/components/shared/notification.component.vue'

export default {
  name: 'app',

  components: {
    TrackComponent,
    LoaderComponent,
    NotificationComponent
  },

  data () {
    return {
      searchQuery: '',
      lastQuery: '',
      tracks: [],
      isLoading: false,
      selectedTrack: '',
      showNotFoundNotification: false
    }
  },

  computed: {
    searchMessage () {
      return `Encontrados: ${this.tracks.length}`
    }
  },

  watch: {
    showNotFoundNotification () {
      if (this.showNotFoundNotification) setTimeout(() => {
        this.showNotFoundNotification = false
      }, 5000)
    }
  },

  methods: {
    search () {
      if (this.searchQuery | this.lastQuery === this.searchQuery) return
      this.lastQuery = this.searchQuery
      this.tracks = []
      this.isLoading = true
      this.showNotFoundNotification = false

      trackService.search(this.searchQuery).then(res => {
        this.isLoading = false

        this.tracks = res.tracks.items
        this.showNotFoundNotification = res.tracks.total === 0
      })
    },

    setSelectedTrack (id) {
      this.selectedTrack = id
    }
  }
}
</script>