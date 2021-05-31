<template>
  <union-overview-navigator/>
  <div class="post-container">
    <post-component></post-component>
  </div>
</template>

<script>

import postComponent from "@/components/postComponent";
import UnionOverviewNavigator from "../components/unionOverviewNavigator.vue";

export default {
  name: "postView",
  components: {
    UnionOverviewNavigator,
    postComponent
  }
}
</script>

<style lang="scss">
@import "../assets/theme";

.post-container {
  margin-top: $paddingHuge * 2;
  display: flex;
  justify-content: center;
}

</style>
