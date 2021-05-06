<template>
    <div class="menu">
        <div class="item search">
        <searchbar-component></searchbar-component>
        </div>
        <div class="item line">
            <a href="">Account</a>
        </div>
        <div class="item line">
            <a href="">Unions</a>
        </div>
        <div class="item line">
            <a href="">Settings</a>
        </div>
    </div>
</template>

<script>
  import SearchbarComponent from "@/components/searchbarComponent";

  export default {
    name: "union-toggle-menu",
    components: { SearchbarComponent },
  };
</script>

<style lang="scss" scoped>
    @import "../assets/theme";

    .menu {
        background-color: $darkerGreyColor;
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
        border-bottom: 1px solid rgb(238,235,227);
        opacity: 60%;

        &:hover {
            background-color: black;
            color: white;
        }
    }

</style>
