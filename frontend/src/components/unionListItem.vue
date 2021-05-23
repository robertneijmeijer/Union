<template>

    <a href="" class="table-post-content">
        <div class="banner">
            <img class="banner-image" src="../assets/img/bravenewcoin-Fungibility-in-Crypto-banner.jpeg">
            <div class="col-9 logo"><img
                    id="logo-image"
                    class="logo-image"
                    src="../assets/img/bitcoin-icon.png"
            /></div>
        </div>
        <div class="union">
            <h2>The Crypto World</h2>
        </div>
    </a>
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
        width: 100%;
        height: 100%;
        object-fit: cover;
        margin: 0 auto;
        border-radius: 33px 33px 0 0;
    }

    h2 {
        text-align: center;
        font-size: 22px;
        color: white;
    }

    .banner {
        height: 60%;
        position: relative;
    }

    .union {
        height: 40%;
        background-color: $primary-black;
        border-radius: 0 0 33px 33px;
        padding-top: 10px;
    }


    .table-post-content {
        width: 100%;
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

    .logo-image {
        height: 56px;
        width: 56px;
    }

    .logo {
        position: absolute;
        left: 35px;
        top: 65px;
    }


</style>
