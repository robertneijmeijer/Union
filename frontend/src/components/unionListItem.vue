<template>
    <a href="" class="table-union-content">
        <div class="banner">
            <img class="image" :src="require(`../assets/img/${unionfields.union.banner}`)" alt="responsive image"/>
        </div>
        <div class="union">
            <h2 class="name">{{ unionfields.union.name }}</h2>
        </div>
        <div id="icon" class="icon-content">
            <img class="image-logo" :src="require(`../assets/img/${unionfields.union.icon}`)"/>
        </div>
    </a>
</template>

<script lang="ts">
  // eslint-disable-next-line
  import { PropType, defineComponent } from "vue";
  // eslint-disable-next-line
  import { UnionInterface } from "./unionDashboard.vue";

  export default defineComponent({
    name: "unionListItem",
    props: {
      unionfields: Object as PropType<UnionInterface>,
    },
  });
</script>

<style lang="scss" scoped>
    @import "../assets/theme";

    @media only screen and (max-width: 1400px) {
        #icon {
            left: 30px;
        }
    }

    @media only screen and (max-width: 1000px) {
        #icon {
            left: 40px;
            top: 110px;
            max-height: 70px;
            max-width: 70px;
        }
    }

    .table-union-content {
        height: 250px;
        position: relative;
        padding: 6px;
        border-radius: $borderRadius;
        opacity: 80%;

        &:focus,
        &:active,
        &:hover {
            background-color: $primary-gray;
            opacity: 100%;
            text-decoration: none;
        }
    }

    .banner {
        height: 60%;
    }

    .union {
        padding-top: 25px;
        height: 40%;
        background-color: $primary-black;
        border-radius: 0 0 33px 33px;
    }

    .image {
        width: 100%;
        height: 100%;
        border-radius: 33px 33px 0 0;
    }

    .name {
        font-size: 22px;
        color: white;
        text-align: center;
        padding: 8px;
    }

    .image-logo {
        width: 100%;
        height: 100%;
    }

    .icon-content {
        max-height: 75px;
        max-width: 75px;
        position: absolute;
        top: 100px;
        left: 45px;
    }
</style>
