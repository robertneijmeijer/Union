<template>
  <div class="menu">
    <div class="item search">
      <SearchbarComponent />
    </div>
    <div class="item line">
      <a href="" v-on:click="toUnions()">{{ $t("union-overview.home") }}</a>
    </div>
    <div class="item line">
      <a href="" v-on:click="toCreate()">{{
        $t("union-overview.my_unions")
      }}</a>
    </div>
    <div class="item line">
      <div class="switcher">
        <LocaleSwitcher class="switcher" />
      </div>
    </div>
    <div class="item line">
      <a href="" v-on:click="logout()">{{ $t("login.logout") }}</a>
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
}

.item {
  padding: 10px 5px 10px 5px;
}

.search {
  margin: 0 10px 0 10px;
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
  }
}

.switcher {
  color: white;
  text-decoration: none;
  margin: 0 10px 0 5px;
}
</style>
