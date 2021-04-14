<template>
    <div class="row">
        <div class="col-xl-12">
            <img class="img-fluid" alt="Responsive image"
                 src="../assets/bravenewcoin-Fungibility-in-Crypto-banner.jpeg"/>
        </div>
    </div>
    <div class="row title">
        <div class="col-3"></div>
        <div class="col-6 logo">
            <img id="logo-image" class="logo-image" src="../assets/bitcoin-icon.png">
            <h3 class="unionName">TheCryptoUnion</h3>
        </div>
    </div>
</template>

<script>
  export default {
    name: "union-overview-header",
  };
</script>

<style lang="scss" scoped>
    @import "../assets/theme";

    .title {
        background-color: #1A1A1B;
        height: 80px;
    }

    .img-fluid {
        height: 267px;
        width: 100%;
    }

    .logo {
        top: -12px;
    }

    .unionName {
        display: inline;
        margin-left: 15px;
        color: white;
    }

    .logo-image{
        height: 76px;
        width: 76px;
    }



</style>
