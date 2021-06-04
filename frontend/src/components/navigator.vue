<template>
  <div class="container-nav" v-bind:class="{ notLoggedIn: !loggedIn }">
    <div class="item logo">
      <a href="#" @click="onClickImage">
        <img id="union-logo" class="union-logo" src="../assets/svg/union.svg"
      /></a>
    </div>

    <div id="search" class="item search" v-if="loggedIn">
      <SearchbarComponent />
    </div>

    <div id="user" class="item user" v-if="loggedIn">
      <button v-on:click="menuIsHidden = !menuIsHidden" class="user_btn">
        <div class="user-dropdown">
          <div
            v-if="userState.isFetching"
            class="d-flex justify-content-end align-items-center"
          >
            <spinner size="small"></spinner>
          </div>
          <div v-else class="user-dropdown">
            <h5 v-if="userState.user" class="text-white">
              {{ userState.user.username }}
            </h5>
            <img
              class="user-image"
              src="../assets/img/user-icon-png-person-user-profile-icon-20.png"
            />
          </div>
        </div>
      </button>
    </div>

    <div id="user-menu" v-if="!menuIsHidden && loggedIn" class="user-menu">
      <UserMenu />
    </div>

    <button
      v-on:click="isHidden = !isHidden"
      class="hamburger-icon"
      v-if="loggedIn"
    >
      <img src="../assets/svg/menu.svg" alt="" />
    </button>

    <div class="buttons" v-if="!loggedIn && landingsPage">
      <button v-on:click="toLogin" class="primary">Sign in</button>
    </div>
  </div>

  <div id="menu" v-if="!isHidden && loggedIn" class="toggle-menu">
    <UserMenuHamburger />
  </div>
</template>

<script>
import SearchbarComponent from "@/components/searchbarComponent";
import UserMenuHamburger from "@/components/userMenuHamburger";
import UserMenu from "@/components/userMenu";
import { ActionTypes } from "@/actions/user";
import Spinner from "@/components/spinner";
import router from "@/router";

export default {
  name: "navigator",
  components: {
    UserMenuHamburger,
    UserMenu,
    SearchbarComponent,
    Spinner,
  },
  props: {
    loggedIn: Boolean,
    landingsPage: Boolean,
  },
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
    onClickImage: function () {
      console.log("onclick");
      router.push("/");
    },

    toLogin: function () {
      router.push("login");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/theme";

.container-nav {
  max-width: 100%;
  display: flex;
  flex-direction: row;
  align-items: start;
  background-color: $primary-gray;
}

.notLoggedIn {
  background: black;
  pointer-events: none;
  justify-content: space-between;
  align-items: center;
}

.user-dropdown {
  display: flex;
  justify-content: flex-end;
  align-content: center;
  margin-top: 7px;

  button,
  h5 {
    padding: 0 $paddingSmall;
    margin: 0;
  }
}

.hamburger-icon {
  display: none;
  margin: auto 1rem;
  border: none;
  background-color: transparent;
  float: right;

  img {
    height: 2rem;
    width: 2rem;
  }
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

.buttons {
  pointer-events: all;
  flex-shrink: 0;
  align-items: center;
  flex-direction: row;

  button {
    position: relative;
    padding: 5px 15px;
    border-radius: $borderRadius;
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

@media only screen and (max-width: 1026px) {
  #search {
    display: none;
  }
  .hamburger-icon {
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
</style>
