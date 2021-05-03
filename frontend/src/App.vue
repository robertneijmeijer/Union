<template>
  <router-view />
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

@font-face {
  font-family: "Overpass";
  src: url("./assets/fonts/Overpass-Regular.ttf") format("truetype");
}
@font-face {
  font-family: "Overpass-SemiBold";
  src: url("./assets/fonts/Overpass-SemiBold.ttf") format("truetype");
}
@font-face {
  font-family: "Overpass-Bold";
  src: url("./assets/fonts/Overpass-Bold.ttf") format("truetype");
}

#app {
  width: 100vw;
  height: 100vh;
  margin: 0;
}

* {
  margin: 0;
  padding: 0;
}

html,
body {
  background-color: black;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  font-family: "Overpass", sans-serif;
}
</style>
