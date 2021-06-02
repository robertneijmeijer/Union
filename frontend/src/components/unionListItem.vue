<template>
    <a href="" class="table-union-content">
        <div class="banner">
            <img
                    class="image"
                    v-bind:src="getImage(union.banner)"
                    alt="Responsive banner"
            />
        </div>
        <div class="union">
            <h2 class="name">{{ union.name }}</h2>
        </div>
        <div id="icon" class="icon-content">
            <img class="image-logo" v-bind:src="getImage(union.icon)"/>
        </div>
    </a>
</template>

<script lang="ts">
  // eslint-disable-next-line
  import { PropType, defineComponent } from "vue";
  // eslint-disable-next-line
  import { UnionType } from "@/api/union";

  function getImage(path: String) {
    return require(`../assets/img/${path}`);
  }

  export default defineComponent({
    name: "unionListItem",
    props: {
      union: { type: Object as PropType<UnionType>, required: true },
      index: { type: Number },
    },
    methods: {
      getImage,
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
