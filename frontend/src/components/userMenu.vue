<template>
  <div class="menu">

    <div class="item line" v-on:click="toUnions()">
      <p>{{ $t("union-overview.home") }}</p>
    </div>

    <div class="item line" v-on:click="toCreate()">
      <p>
        {{ $t("union-overview.my_unions") }}
      </p>
    </div>

    <div class="item line">
      <div class="switcher">
        <LocaleSwitcher class="switcher" />
      </div>
    </div>

    <div class="item line" v-on:click="logout()">
      <p>{{ $t("login.logout") }}</p>
    </div>

  </div>
</template>

<script>
import LocaleSwitcher from "./localeSwitcher";
import { logout, toCreateUnion, toOverview } from "@/router";

export default {
  name: "userMenu",
  components: { LocaleSwitcher },
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

p {
  color: white;
  text-decoration: none;
  margin: 0 10px 0 10px;
}

.line {
  border-bottom: 1px solid rgb(238, 235, 227);
  opacity: 60%;

  &:hover {
    cursor: pointer;
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
