<template>
  <a v-on:click="onClickUnion()" class="table-union-content">
    <div class="banner">
      <img
        class="image"
        :src="unionsArray.union.banner"
        alt="responsive image"
      />
    </div>
    <div class="union">
      <h2 class="name">{{ unionsArray.union.name }}</h2>
    </div>
    <div id="icon" class="icon-content">
      <img class="image-logo" :src="unionsArray.union.icon" />
    </div>
  </a>
</template>

<script>
import router, { toOverview } from "@/router";

export default {
  name: "unionListItem",
  props: {
    unionsArray: Object,
  },
  methods: {
    onClickUnion() {
      let name;
      if (this.unionsArray.union && this.unionsArray.union.name) {
        name = this.unionsArray.union.name;
        router.push("/union/" + name);
      } else {
        toOverview();
      }
    },
  },
};
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
  max-width: 400px;
  width: 100%;
  position: relative;
  opacity: 90%;
  border: $border;
  border-radius: $borderRadius * 5;
  overflow: hidden;

  &:focus,
  &:active,
  &:hover {
    background-color: $primary-gray;
    opacity: 100%;
    cursor: pointer;
  }
}

.banner {
  height: 65%;
}

.union {
  padding-top: 25px;
  height: 35%;
  background-color: $primary-black;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
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
