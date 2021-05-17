<template>
    <div class="content">
        <p class="union-name">{{ union.name}}</p>
        <div class="banner">
            <img class="banner-image" src="../assets/img/bravenewcoin-Fungibility-in-Crypto-banner.jpeg" >
        </div>
        <div class="union-description">
            <p>{{union.creator }}</p>
        </div>
    </div>
</template>

<script>
  export default {
    name: "unionListItem",
    props: {
      union: {
        name: String,
        banner: URL,
        creator: String,
      },
      index: Number,
    },
  };
</script>

<style lang="scss" scoped>
    @import "../assets/theme";

    p,
    h4,
    a {
        color: white;
    }

    .content {
        max-height: 300px;
        text-align: left;
        vertical-align: top;
        padding: 8px;
        position: relative;
    }

    .union-name {
        font-weight: bold;
        margin-top: 5px;
        opacity: 60%;
        text-align: center;
    }

    .union-description {
        width: 100%;
        bottom: 0;
        margin-top: 50px;
        padding: 8px;
        user-select: none;
        overflow: hidden;
    }

    .banner-image {
        border-radius: $borderRadius;
        width: 100%;
        object-fit: cover;
        margin: 0 auto;
    }

    .banner {
        max-height: 30%;
        padding: $paddingSmall;
    }


</style>
