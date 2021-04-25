<template>
  <div id="landingsPage">
    <navigator></navigator>
    <div class="landingsimage">
      <img src="../assets/landingspage.jpg" height="483" width="824" />
      <div class="centeredText">
        <h3 class="first">Create.</h3>
        <h3 class="second">Discover.</h3>
        <h3 class="third">Unite.</h3>
      </div>
    </div>
  </div>
</template>

<script>
import Navigator from "../components/navigatorComponent";

export default {
  name: "landingPage",
  components: { Navigator },
};
</script>

<style lang="scss" scoped>
@import "../assets/theme";

.centeredText {
  text-align: center;
  position: absolute;
  top: 40px;
  left: 45%;
}

.first {
  margin-top: 200px;
  color: white;
  user-select: none;
}

.second {
  color: white;
  margin-top: 10px;
  user-select: none;
}

.third {
  color: $unionBlue;
  margin-top: 10px;
  user-select: none;
}

.landingsimage {
  position: relative;
  width: 100%;
}

img {
  margin-top: 50px;
}

#landingsPage {
  max-height: 100%;
}
</style>
