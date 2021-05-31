<template>
    <UnionOverviewNavigator></UnionOverviewNavigator>
    <UnionDashboard></UnionDashboard>
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
