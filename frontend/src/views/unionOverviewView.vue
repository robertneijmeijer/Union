<template>
  <div id="union">
    <union-overview-navigator></union-overview-navigator>
    <union-overview-header></union-overview-header>
    <union-post-overview></union-post-overview>
  </div>
</template>

<script>
import unionOverviewNavigator from "@/components/union-overview-navigator";
import UnionOverviewHeader from "@/components/union-overview-header";
import UnionPostOverview from "@/components/union-content-section";

export default {
  name: "unionOverviewView",
  components: {
    UnionPostOverview,
    UnionOverviewHeader,
    unionOverviewNavigator,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/theme";
</style>
