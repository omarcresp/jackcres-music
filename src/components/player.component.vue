<template>
    <div class="content" v-if="track.album">
        <p><img :src="track.album.images[0].url"></p>
        <p>
            <strong>{{track.name}}</strong>
            <br>
            <small>{{track.artists[0].name}}</small>
        </p>
        <p>
            <audio controls :src="track.preview_url"></audio>
        </p>
    </div>
</template>

<script>
export default {
    created() {
        this.$bus.$on('set-track', track => {
            this.track = track
        })
    },
    data () {
        return {
            track: {}
        }
    }
}
</script>

<style scoped>
img {
    width: 128px;
    border-radius: 50%;
}
</style>
