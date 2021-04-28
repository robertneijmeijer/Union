<template>
  <div class="row">
    <div class="image-box">
      <img
        class="img-fluid"
        alt="Responsive image"
        src="../assets/bravenewcoin-Fungibility-in-Crypto-banner.jpeg"
      />
    </div>
  </div>
  <div class="row title">
    <div class="col-3"></div>
    <div class="col-9 logo">
      <img
        id="logo-image"
        class="logo-image"
        src="../assets/bitcoin-icon.png"
      />
      <h3 class="union-name">TheCryptoUnion</h3>
      <button id="tag" class="member-tag">
        {{ $t("union_overview.joined") }}
      </button>
      <div style="float: right"><LocaleSwitcher class="switcher" /></div>
    </div>
  </div>
</template>

<script>
import LocaleSwitcher from "@/components/localeSwitcher";

export default {
  name: "union-overview-header",
  components: { LocaleSwitcher },
};
</script>

<style lang="scss" scoped>
@import "../assets/theme";

@media only screen and (max-width: 626px) {
  #tag {
    display: none;
  }
}

.row {
  max-width: 100vw;
  margin-left: 0;
}

.member-tag {
  border-radius: $borderRadius;
  width: $buttonwidth;
  background-color: transparent;
  border: $buttonBorder white;
  color: white;
  margin-left: 30px;
}

.title {
  background-color: $darkerGreyColor;
  height: 80px;
}

.img-fluid {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.image-box {
  width: 100%;
  max-height: 267px;
}

.logo {
  top: -12px;
}

.union-name {
  display: inline;
  margin-left: 15px;
  color: white;
  font-size: 22px;
}

.logo-image {
  height: $unionlogo;
  width: $unionlogo;
}
</style>
