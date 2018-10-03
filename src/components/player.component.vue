<template>
    <div class="content">
        <p><img :src="track.album.images[0].url"></p>
        <p>
            <strong>{{track.name}}</strong>
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
