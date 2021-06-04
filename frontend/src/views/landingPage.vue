<template>
  <div class="landings-page">
    <nav class="primary">
      <section class="">
        <img src="../assets/img/union.png" height="60" width="170" />
      </section>
      <section class="buttons">
        <button v-on:click="toLogin" class="primary">Sign in</button>
      </section>
    </nav>
    <div class="landings-page-content">
      <Navigator />
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
import router from "@/router";

export default {
  name: "landingPage",
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

nav.primary {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 10px;
  background-color: #000000;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.06);
  z-index: 2;
}

section.buttons {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  flex-direction: row;

  button {
    position: relative;
    padding: 5px 15px;
    border-radius: 3px;
    border: none;
    background-color: transparent;
    margin-right: 10px;
    transition: all 0.12s;
    font-size: 0.9rem;
    transform: rotate(0.001deg); // Font hack
    will-change: transform; // Font hack
    width: 120px;
    height: 40px;

    &:hover {
      cursor: pointer;
    }

    &:active {
      transform: scale(0.97);
      opacity: 0.8;
      cursor: pointer;
      transition: all 0.12s;
    }

    &.primary {
      color: #fff;
      border: $buttonBorder $unionBlue;
      border-radius: $borderRadius;
      background: transparent;
      transition: all 0.3s ease 0s;
      outline: none;

      &:hover {
        background-color: darken(#000000, 5%);
        border-color: darken(#000000, 5%);
      }
    }
  }
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
