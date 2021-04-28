<template>
  <div id="landings-page">
    <navigator></navigator>
    <div class="center-text">
      <pre class="text">
Create. 
Discover. 
<span class="text-blue">Unite.</span>
      </pre>
    </div>
  </div>
</template>

<script>
import Navigator from "@/components/navigatorComponent";

export default {
  name: "landingPage",
  components: { Navigator },
};
</script>

<style lang="scss" scoped>
@import "../assets/theme";

#landings-page {
  height: 100%;
  box-sizing: border-box;
}

.center-text {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url("../assets/landingspage.jpg");
  background-repeat: no-repeat;
  background-position: left center;
}

.text {
  color: white;
  user-select: none;
  font-size: 2rem;
  font-family: "Numans", sans-serif;
  font-weight: 500;
  text-align: center;
}

.text-blue {
  color: $unionBlue;
}
</style>
