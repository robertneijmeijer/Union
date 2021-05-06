<template>
    <div class="container">
        <div class="item logo">
            <a href="#">
                <img
                        id="union-logo"
                        class="union-logo"
                        src="../assets/union_logo.png"></a>
        </div>
        <div id="search" class="item search">
            <searchbar-component></searchbar-component>
        </div>
        <div id="user" class="item user">
            <button class="dropdown_btn">
                <img class="user-image" src="../assets/user-icon-png-person-user-profile-icon-20.png">
            </button>
        </div>
        <div id="burger" class="item burger user">
            <button v-on:click="isHidden = !isHidden" class="burger-button">
                <div></div>
                <div></div>
                <div></div>
            </button>
        </div>
    </div>
    <div id="menu" v-if="!isHidden" class="toggle-menu">
        <union-toggle-menu></union-toggle-menu>
    </div>
</template>

<script>
  import SearchbarComponent from "@/components/searchbarComponent";

  import UnionToggleMenu from "@/components/union-toggle-menu";

  export default {
    name: "union-overview-navigator",
    components: { UnionToggleMenu, SearchbarComponent },
    data() {
      return {
        isHidden: true,
      };
    },
  };
</script>

<style lang="scss" scoped>
    @import "../assets/theme";

    @media only screen and (max-width: 1026px) {
        #search {
            display: none;
        }
        #burger {
            display: block;
        }
        #user {
            display: none;
        }
    }

    @media only screen and (min-width: 1026px) {
        #menu {
            display: none;
        }
    }

    .burger {
        display: none;
        float: right;
        margin-top: 10px;

        div {
            width: 30px;
            height: 2px;
            background-color: white;
            margin: 6px 0;
        }
    }

    .burger-button {
        border: none;
        background-color: transparent;
        float: right;
    }

    .container {
        max-width: 100%;
        display: flex;
        flex-direction: row;
        align-items: start;
        background-color: $darkerGreyColor;
    }

    .item {
        padding: 10px 0 10px 5px;
    }

    .union-logo {
        max-width: 140px;
        max-height: 37px;
    }

    .logo {
        flex: 1;
    }

    .search {
        flex: 3;
    }

    .user {
        flex: 1;
    }

    .user-image {
        width: 27px;
        height: 27px;
        margin-top: 7px;
    }

    .dropdown_btn {
        float: right;
        border: none;
        background-color: transparent;
    }


</style>
