<template>
  <div class="container-nav">
    <div class="item logo">
      <a href="#" @click="onClickImage">
        <img id="union-logo" class="union-logo" src="../assets/svg/union.svg"
        /></a>
    </div>
    <div id="search" class="item search">
      <searchbar-component></searchbar-component>
    </div>
    <div id="user" class="item user">
      <button v-on:click="menuIsHidden = !menuIsHidden" class="user_btn">
        <div class="user-dropdown">
          <div v-if="userState.isFetching" class="d-flex justify-content-end align-items-center">
            <spinner size="small"></spinner>
          </div>
          <div v-else class="user-dropdown">
            <h5 v-if="userState.user" class="text-white">{{ userState.user.username }}</h5>
            <img
                class="user-image"
                src="../assets/img/user-icon-png-person-user-profile-icon-20.png"
            />
          </div>
        </div>
      </button>
    </div>
    <div id="user-menu" v-if="!menuIsHidden" class="user-menu">
      <union-user-toggle-menu></union-user-toggle-menu>
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
import UnionToggleMenu from "@/components/unionNavigatorToggleMenu";
import UnionUserToggleMenu from "@/components/unionUserToggleMenu";
import {ActionTypes} from "@/actions/user";
import Spinner from "@/components/spinner";
import router from "@/router";

export default {
  name: "union-overview-navigator",
  components: {UnionUserToggleMenu, UnionToggleMenu, SearchbarComponent, Spinner},
  data() {
    return {
      isHidden: true,
      menuIsHidden: true,
    };
  },
  computed: {
    userState() {
      return this.$store.state.user;
    },
  },
  created() {
    this.$store.dispatch(ActionTypes.USER_FETCH);
  },
  methods: {
    onClickImage: function() {
      console.log("onclick")
      router.push("/");
    },
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
  #user-menu {
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
  opacity: 60%;

  div {
    width: 30px;
    height: 2px;
    background-color: white;
    margin: 6px 0;
  }
}

.user-dropdown {
  display: flex;
  justify-content: flex-end;
  align-content: center;
  margin-top: 7px;

  button, h5 {
    padding: 0 $paddingSmall;
    margin: 0;
  }
}

.burger-button {
  margin-top: 10px;
  border: none;
  background-color: transparent;
  float: right;
}

.container-nav {
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: start;
  background-color: $primary-gray;
}

.item {
  padding: 10px 0 10px 5px;
  margin: 0 10px 0 10px;
}

.union-logo {
  margin-top: 3px;
  max-width: 120px;
  max-height: 30px;
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
}

.user_btn {
  float: right;
  border: none;
  background-color: transparent;
  margin-right: $paddingSmall * 2;
}

.user-menu {
  position: absolute;
  right: 0;
  top: 55px;
}
</style>
