<template>
    <div id="app">
        <login></login>
    </div>
</template>

<script lang="ts">
    import {Options, Vue} from "vue-class-component";
    import login from './components/login.vue';

    @Options({
        components: {login},
    })
    export default class App extends Vue {
    }
</script>

<style lang="scss">
    #app {
        width: 100%;
        height: 100%;
    }

    html, body {
        background-image: url('https://marmotamaps.com/de/fx/wallpaper/download/alpenberge/Marmotamaps_Wallpaper_MonteViso_Desktop_1920x1080.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        height: 100%;
        font-family: 'Numans', sans-serif;
    }
</style>
