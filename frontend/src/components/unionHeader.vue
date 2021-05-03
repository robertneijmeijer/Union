<template>
  <div class="header-background">
    <div class="header">
      <img
        class="header-img"
        alt="Responsive image"
        src="../assets/img/bravenewcoin-Fungibility-in-Crypto-banner.jpeg"
      />
    </div>
    <div class="header-title">
      <div class="header-title-content">
        <img class="header-title-logo" src="../assets/img/bitcoin-icon.png" />
        <h3 class="header-title-text">TheCryptoUnion</h3>
        <button class="header-title-btn">
          {{ $t("union_overview.joined") }}
        </button>
      </div>
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

.header-background {
  background-color: $primary-gray;
}

.header {
  display: flex;
  flex: 1;
}

.header-img {
  max-height: 17em;
  width: 100%;
  object-fit: cover;
}

.header-title {
  display: grid;
  grid-template-columns: 22.5fr 55fr 22.5fr;
  height: 5em;
  max-width: 120em;
  margin: 0 auto;
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
    grid-template-columns: 0fr 1fr 0fr;
    padding: 0 1em;
    column-gap: 0;
  }
}

@media only screen and (max-width: 45rem) {
  .header-title {
    grid-template-columns: 0 1fr 0;
  }
}
</style>
