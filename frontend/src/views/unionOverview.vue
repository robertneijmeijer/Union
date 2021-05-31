<template>
    <union-overview-navigator></union-overview-navigator>
    <union-dashboard></union-dashboard>
</template>

<script>
  import UnionOverviewNavigator from "@/components/unionOverviewNavigator";
  import UnionDashboard from "@/components/unionDashboard";
  export default {
    name: "unionOverview",
    components: { UnionDashboard, UnionOverviewNavigator },
  };
</script>

<style lang="scss" scoped>

</style>
