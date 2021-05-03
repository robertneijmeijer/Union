<template>
  <union-overview-header />
  <union-post-overview />
</template>

<script>
import UnionOverviewHeader from "@/components/unionHeader";
import UnionPostOverview from "@/components/unionContent";

export default {
  name: "unionOverviewView",
  components: {
    UnionPostOverview,
    UnionOverviewHeader,
  },
};
</script>

<style lang="scss" scoped>
</style>