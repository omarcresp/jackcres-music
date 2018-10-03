<template>
    <section class="hero is-info">
        <div class="hero-head">
            <header class="nav">
                <div class="container">
                    <div class="nav-left">
                        <div class="nav-item"><strong>
                            <span class="text-24-px">📻</span> JackCres Music
                        </strong></div>
                    </div>
                    <div class="nav-right nav-menu">
                    </div>
                </div>
            </header>
        </div>
        <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="title">JackCres Music</h1>
                <h2 class="subtitle">Canciones que estan <strong>Vue</strong>nisimas</h2>
                <player-component></player-component>
            </div>
        </div>
    </section>
</template>

<script>
import PlayerComponent from '@/components/player.component.vue'

export default {
    components: { PlayerComponent }
}
</script>


<style>
.text-24-px {
    font-size: 24px;
}
</style>
