<template>
  <union-overview-header />
  <union-post-overview />
</template>

<script>
import UnionOverviewHeader from "@/components/union-overview-header";
import UnionPostOverview from "@/components/union-content-section";

export default {
  name: "unionOverviewView",
  components: {
    UnionPostOverview,
    UnionOverviewHeader,
  },
};
</script>
