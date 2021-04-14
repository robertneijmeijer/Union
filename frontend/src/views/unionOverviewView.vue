<template>
    <union-overview-navigator></union-overview-navigator>
    <union-overview-header></union-overview-header>
</template>

<script>
  import UnionOverviewNavigator from "@/components/union-overview-navigator";
  import UnionOverviewHeader from "@/components/union-overview-header";
  export default {
    name: "unionOverviewView",
    components: { UnionOverviewHeader, UnionOverviewNavigator },
  };
</script>

<style lang="scss" scoped>
    @import "../assets/theme";

</style>
