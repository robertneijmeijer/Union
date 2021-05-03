<template>
  <div class="create-union">
    <!-- <top-bar-logo></top-bar-logo> -->

    <union-create-component></union-create-component>
  </div>
</template>

<script>
import UnionCreateComponent from "../components/unionCreateComponent";
// import TopBarLogo from "../components/topBarLogoComponent";

export default {
  name: "unionCreateView",
  components: {
    // TopBarLogo,
    UnionCreateComponent,
  },
};
</script>

<style lang="scss" scoped>
.create-union {
  min-height: 100%;
}
</style>
