<template>
  <div id="app">
    <landing-page></landing-page>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
@import "./assets/theme";

#app {
  width: 100vw;
  height: 100vh;
  margin: 0;
}

@font-face {
  font-family: "Overpass-Regular";
  src: local("Overpass-Regular"),
    url("./assets/fonts/Overpass-Regular.ttf") format("truetype");
  font-family: "Overpass-Bold";
  src: local("Overpass-Bold"),
    url("./assets/fonts/Overpass-Bold.ttf") format("truetype");
  font-family: "Overpass-SemiBold";
  src: local("Overpass-SemiBold"),
    url("./assets/fonts/Overpass-Bold.ttf") format("truetype");
}

html,
body {
  background-color: black;
  background-size: cover;
  background-repeat: no-repeat;
  font-family: "Numans", sans-serif;
}
</style>
