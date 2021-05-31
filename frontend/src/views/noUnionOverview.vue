<template>
    <union-overview-navigator></union-overview-navigator>
    <union-overview-join></union-overview-join>
</template>

<script>
  import UnionOverviewNavigator from "@/components/unionOverviewNavigator";
  import UnionOverviewJoin from "@/components/unionOverviewJoin";

  export default {
    name: "noUnionOverview",
    components: { UnionOverviewJoin, UnionOverviewNavigator }
  };
</script>

