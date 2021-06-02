<template>
  <div class="menu">
    <div class="item line">
      <a href="">Account</a>
    </div>
    <div class="item line">
      <div class="switcher">
        <LocaleSwitcher class="switcher" />
      </div>
    </div>
    <div class="item line">
      <a href="" v-on:click="logout()">Logout</a>
    </div>
  </div>
</template>

<script>
import LocaleSwitcher from "./localeSwitcher";
import { logout } from "@/router";

export default {
  name: "unionUserToggleMenu",
  components: { LocaleSwitcher },
  methods: {
    logout: function() {
      logout();
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
