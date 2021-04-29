<template>
  <div class="header">
    <img
      class="header-img"
      alt="Responsive image"
      src="../assets/bravenewcoin-Fungibility-in-Crypto-banner.jpeg"
    />
  </div>
  <div class="header-title">
    <div class="header-title-content">
      <img class="header-title-logo" src="../assets/bitcoin-icon.png" />
      <h3 class="header-title-text">TheCryptoUnion</h3>
      <button class="header-title-btn">
        {{ $t("union_overview.joined") }}
      </button>
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

.header {
  display: flex;
}

.header-img {
  max-height: 17em;
  width: 100%;
  object-fit: cover;
}

.header-title {
  display: grid;
  grid-template-columns: 25fr 50fr 25fr;
  padding: 0 1em;
  background-color: $darkerGreyColor;
  height: 5em;
}

.header-title-content {
  grid-column-start: 2;
  grid-column-end: 2;
}

.header-title-logo {
  height: $unionlogo;
  width: $unionlogo;
  margin-top: -1em;
}

.header-title-text {
  display: inline;
  margin-left: 15px;
  color: white;
  font-size: 22px;
}

.header-title-btn {
  border: 2px solid white;
  color: white;
  border-radius: $borderRadius;
  width: $buttonwidth;
  padding: 0.1em 0.4em;
  background-color: transparent;

  margin-left: 30px;
}

@media only screen and (max-width: 80rem) {
  .header-title {
    grid-template-columns: 20fr 60fr 20fr;
    column-gap: 0;
  }
}

@media only screen and (max-width: 65rem) {
  .uheader-title {
    grid-template-columns: 10fr 80fr 10fr;
  }
}

@media only screen and (max-width: 45rem) {
  .header-title {
    grid-template-columns: 0 1fr 0;
  }
}
</style>
