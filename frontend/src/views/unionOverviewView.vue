<template>
  <div id="union">
    <union-overview-navigator></union-overview-navigator>
    <union-overview-header></union-overview-header>
    <union-post-overview></union-post-overview>
  </div>
</template>

<script>
import UnionOverviewHeader from "@/components/union-overview-header";
import UnionPostOverview from "@/components/union-content-section";
import UnionOverviewNavigator from "@/components/union-overview-navigator";

export default {
  name: "unionOverviewView",
  components: {
    UnionOverviewNavigator,
    UnionPostOverview,
    UnionOverviewHeader,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/theme";
</style>
