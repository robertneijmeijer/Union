<template>
  <div class="menu">
    <div class="item search">
      <SearchbarComponent />
    </div>
    <div class="item line">
      <p class="animation" v-on:click="toUnions()">{{ $t("union-overview.home") }}</p>
    </div>
    <div class="item line">
      <p v-on:click="toCreate()">{{
        $t("union-overview.my_unions")
      }}</p>
    </div>
    <div class="item line">
      <div class="switcher animation">
        <LocaleSwitcher class="switcher" />
      </div>
    </div>
    <div class="item line">
      <p v-on:click="logout()">{{ $t("login.logout") }}</p>
    </div>
  </div>
</template>

<script>
import SearchbarComponent from "@/components/searchbarComponent";
import LocaleSwitcher from "@/components/localeSwitcher";
import { toOverview, logout, toCreateUnion } from "@/router";

export default {
  name: "userMenuHamburger",
  components: { SearchbarComponent, LocaleSwitcher },
  methods: {
    logout: function () {
      logout();
    },
    toUnions: function () {
      toOverview();
    },
    toCreate() {
      toCreateUnion();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/theme";

.menu {
  background-color: $primary-gray;
  cursor: pointer;
}

p {
  color: white;
  text-decoration: none;
  margin: 0 10px 0 10px;
  transition: $transition;
  &:hover {
    transform: $transformSmall
  }
}

.item {
  padding: 10px 5px 10px 5px;
}

.search {
  margin: 0 10px 0 10px;
}

.animation {
  transition: $transition;
  &:hover {
    transform: $transformSmall;
  }
}

a {
  color: white;
  text-decoration: none;
  margin: 0 10px 0 10px;
}

.line {
  border-bottom: 1px solid rgb(238, 235, 227);
  opacity: 60%;

  &:hover {
    background-color: black;
    color: white;
    opacity: 100%;
  }
}

.switcher {
  color: white;
  text-decoration: none;
  margin: 0 10px 0 5px;
}
</style>
