<template>
  <div class="header-background">
    <div class="header">
      <img class="header-img" alt="Responsive image" :src="getBanner()" />
    </div>
    <div class="header-title">
      <div class="header-title-content">
        <img class="header-title-logo" :src="getLogo()" />
        <h3 class="header-title-text">
          {{ union && union.name ? union.name : "" }}
        </h3>
        <button class="header-title-btn">
          {{ $t("union_overview.joined") }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import DefaultBanner from "../assets/img/landingspage.jpg";
import DefaultLogo from "../assets/svg/unionCircle.svg";

export default {
  name: "union-overview-header",
  computed: {
    union() {
      return this.$store.state.union.data;
    },
  },
  methods: {
    getBanner() {
      return this.union && this.union.banner
        ? this.union.banner
        : DefaultBanner;
    },
    getLogo() {
      return this.union && this.union.logo ? this.union.logo : DefaultLogo;
    },
  },
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
  object-position: center;
}

.header-title {
  display: grid;
  grid-template-columns: 22.5fr 55fr 22.5fr;
  height: 5em;
  max-width: 120em;
  margin: 0 auto;
  border-bottom: 2px solid $borderColor;
}

.header-title-content {
  grid-column-start: 2;
  grid-column-end: 2;
}

.header-title-logo {
  height: $unionlogo;
  width: $unionlogo;
  margin-top: -1em;
  object-fit: cover;
  object-position: center;
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
