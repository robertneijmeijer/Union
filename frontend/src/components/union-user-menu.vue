<template>
    <div class="menu">
        <div class="item line">
            <a href="">Account</a>
        </div>
        <div class="item line">
            <a href="">Settings</a>
        </div>
        <div class="item line">
            <LocaleSwitcher class="switcher"/>
        </div>
    </div>
</template>

<script>
  import LocaleSwitcher from "./localeSwitcher";

  export default {
    name: "union-user-menu",
    components: {LocaleSwitcher}
  };
</script>

<style lang="scss" scoped>
    @import "../assets/theme";

    .menu {
        background-color: $darkerGreyColor;
        max-width: 20vw;
    }

    .item {
        padding: 10px 5px 10px 5px;
    }

    a {
        text-decoration: none;
        margin: 0 10px 0 10px;
        color: white;
    }

    .line {
        border-bottom: 1px solid rgb(238, 235, 227);
        opacity: 60%;

        &:hover {
            background-color: black;
            color: white;
        }
    }
</style>
