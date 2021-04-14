<template>
  <div id="unionCreateView">
    <top-bar-logo></top-bar-logo>
    <div id="unionCreateCard">
      <union-create-component></union-create-component>
    </div>
  </div>
</template>

<script>
import UnionCreateComponent from "../components/unionCreateComponent";
import TopBarLogo from "../components/topBarLogoComponent";

export default {
  name: "unionCreateView",
  components: { TopBarLogo, UnionCreateComponent },
};
</script>

<style lang="scss" scoped>
#unionCreateView {
  max-height: 100%;
}

#unionCreateCard {
  margin-top: 20px;
}
</style>
