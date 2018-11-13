<template functional>
    <div class="card" v-blur="track.preview_url">
        <div class="card-image">
            <figure class="image is-1by1"><img :src="track.album.images[0].url" alt=""></figure>
        </div>
        <div class="card-content">
            <div class="media">
                <div class="media left">
                    <figure class="image is-48x48">
                        <img :src="track.album.images[0].url">
                    </figure>
                </div>
                <div class="media-content">
                    <p class="title is-6"><strong>{{track.name}}</strong></p>
                    <p class="subtitle is-6">{{track.artists[0].name}}</p>
                </div>
            </div>
            <div class="content">
                <small>{{ track.duration_ms | time }}</small>
                <nav class="level">
                    <div class="level-left">
                        <a href="" class="level-item button is-primary" @click.prevent="selectTrack" v-show="track.preview_url">
                            <span class="icon is-small">▶</span>
                        </a>
                        <a href="" class="level-item button is-blue" @click.prevent="goToTrack(track.id)" v-show="track.preview_url">
                            <span class="icon">🌎</span>
                        </a>
                        <p v-show="!track.preview_url">No disponible</p>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import trackMixin from '@/mixins/track'

export default {
    mixins: [ trackMixin ],
    props: {
        track: { type: Object, required: true }
    },
    methods: {
        goToTrack (id) {
            this.$router.push({
                name: 'track',
                params: { id }
            })
        }
    }
}
</script>
