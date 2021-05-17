<template>
    <union-overview-navigator></union-overview-navigator>
    <div class="box">
        <div class="welcome">
            <div class="title-items">
                <h2>Welcome to</h2>
                <img class="logo" src="../assets/img/union.png"/>
            </div>
            <div class="join">
                <h2>To Join a Union you</h2>
                <h2>must have an invite</h2>
                <div class="join-sub">
                    <div class="line"></div>
                    <h2 class="centered-text">or</h2>
                    <div class="line"></div>
                </div>
                <div class="create-community">
                    <button v-on:click="createUnion" class="button">
                        Create a community
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import UnionOverviewNavigator from "@/components/unionOverviewNavigator";
  import router from "@/router";

  export default {
    name: "unionOverView",
    components: { UnionOverviewNavigator },
    methods: {
      createUnion: function() {
        router.push("createunion");
      },
    },
  };
</script>

<style lang="scss" scoped>
    @import "../assets/theme";

    .box {
        display: flex;
    }

    .welcome {
        color: white;
        width: 100%;
        text-align: center;
        margin-top: 10vh;
        display: inline;
    }

    .logo {
        height: 55px;
        width: 170px;
    }

    .title-items {
        display: inline-flex;
        user-select: none;
    }

    h2 {
        color: white;
        font-size: 48px;
        font-family: "Overpass-SemiBold", serif;
        user-select: none;
    }

    .join {
        margin-top: 10vh;
    }

    .centered-text {
        text-align: center;
        margin: 0 15px 0 15px;
    }

    .line {
        border: 2px solid $primary-black;
        width: 20vw;
        height: 1px;
        margin-top: 5vh;
    }

    .join-sub {
        display: inline-flex;
    }

    .create-community {
        margin-top: 5vh;
    }

    .button {
        border: 0.5px solid $unionBlue;
        padding: $paddingSmall;
        background-color: transparent;
        color: white;
        opacity: 80%;
        border-radius: $borderRadius;
        font-size: 26px;
        outline: none;
        user-select: none;

        &:hover,
        &:active,
        &:focus {
            opacity: 100%;
        }
    }
</style>
