<template>
  <div id="app">
    <register-view></register-view>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import loginView from "./views/loginView.vue";
import registerView from "./views/registerView.vue";

@Options({
  components: { loginView: loginView, registerView: registerView },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";

#app {
  width: 100%;
  height: 100%;
}

html,
body {
  background-image: url("https://marmotamaps.com/de/fx/wallpaper/download/alpenberge/Marmotamaps_Wallpaper_MonteViso_Desktop_1920x1080.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  font-family: "Numans", sans-serif;
}
</style>
