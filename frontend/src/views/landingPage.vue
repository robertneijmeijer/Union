<template>
  <div class="landings-page">
    <Navigator :loggedIn="false" :landingsPage="true" />
    <div class="landings-page-content">
      <div class="center-text">
        <pre class="text">
Create. 
Discover. 
<span class="text-blue">Unite.</span>
      </pre>
      </div>
    </div>
  </div>
</template>

<script>
import Navigator from "@/components/navigator";
import router from "@/router";

export default {
  name: "landingPage",
  components: { Navigator },
  methods: {
    toLogin: function () {
      router.push("login");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/theme";

.landings-page {
  height: 100%;
}
.landings-page-content {
  height: 100%;
  box-sizing: border-box;
}

.center-text {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-image: url("../assets/img/landingspage.jpg");
  background-repeat: no-repeat;
  background-position: 10% center;
  background-size: 40rem auto;
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

@media screen and (max-width: 75em) {
  .center-text {
    background-position: 5% center;
  }
}

@media screen and (max-width: 60em) {
  .center-text {
    background-size: 30rem auto;
    background-position: 0% center;
  }
}

@media screen and (max-width: 45em) {
  .center-text {
    background-size: 30rem auto;
    background-position: -8rem center;
  }
}

@media screen and (max-width: 32em) {
  .center-text {
    background-size: 25rem auto;
    background-position: -8rem center;
  }
}
</style>
