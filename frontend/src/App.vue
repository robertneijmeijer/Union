<template>
    <div id="app">
        <login></login>
    </div>
</template>

<script lang="ts">
    import {Options, Vue} from "vue-class-component";
    import login from './components/login.vue'

    @Options({
        components: {login},
    })
    export default class App extends Vue {
    }
</script>

<style lang="css">
    #app {
        width: 100%;
        height: 100%;
    }
</style>
