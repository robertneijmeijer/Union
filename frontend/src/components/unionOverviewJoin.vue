<template>
    <div class="box">
        <div class="welcome">
            <div class="title-items">
                <h2 class="font"> {{ $t("union_join.welcome") }}</h2>
                <img id="logo" class="logo" src="../assets/img/union.png"/>
            </div>
            <div class="join">
                <h2 class="font">{{ $t("union_join.to_join") }}</h2>
                <h2 class="font">{{ $t("union_join.must") }}</h2>
                <div class="join-sub">
                    <div class="line"></div>
                    <h2 class="centered-text"> {{ $t("union_join.or") }}</h2>
                    <div class="line"></div>
                </div>
                <div class="create-community">
                    <button v-on:click="createUnion" class="button">
                        {{ $t("union_create.create_community") }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import router from "@/router";

  export default {
    name: "unionOverviewJoin",
    methods: {
      createUnion: function() {
        router.push("createunion");
      },
    },
  };
</script>


<style lang="scss" scoped>
    @import "../assets/theme";

    @media only screen and (max-width: 626px) {
        .font {
            font-size: 36px;
        }
        #logo {
            max-height: 45px;
            max-width: 150px;
        }
    }

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
        max-height: 55px;
        max-width: 170px;
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
