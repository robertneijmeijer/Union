<template>
  <div id="app">
  <landing-page></landing-page>
  <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: { },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
@import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css";
@import "./assets/theme";

#app {
  width: 100%;
  height: 100%;
}

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

html,
body {
  background-color: black;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  font-family: "Numans", sans-serif;
}
textarea:hover,
input:hover,
textarea:active,
input:active,
textarea:focus,
input:focus,
button:focus,
button:active,
button:hover,
label:focus,
.btn:active,
.btn.active
{
  outline:0px !important;
  -webkit-appearance:none;
  box-shadow: none !important;
}
</style>
