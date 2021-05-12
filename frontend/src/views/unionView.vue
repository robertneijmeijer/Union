<template>
  <union-overview-navigator></union-overview-navigator>
  <UnionHeader />
  <UnionContent />
</template>

<script>
import UnionHeader from "@/components/unionHeader";
import UnionContent from "@/components/unionContent";
import UnionOverviewNavigator from "@/components/unionOverviewNavigator";

export default {
  name: "unionOverviewView",
  components: {
    UnionOverviewNavigator,
    UnionHeader,
    UnionContent,
  },
};
</script>
