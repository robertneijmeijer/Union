<template>
  <div>
    <union-overview-navigator />
    <UnionHeader />
    <UnionContent />
  </div>
</template>

<script>
import UnionHeader from "@/components/unionHeader";
import UnionContent from "@/components/unionContent";
import UnionOverviewNavigator from "@/components/unionOverviewNavigator";
import UnionApi from "../api/union";

export default {
  name: "unionView",
  props: {
    unionName: String,
  },
  components: {
    UnionOverviewNavigator,
    UnionHeader,
    UnionContent,
  },
  beforeCreate: function() {
    UnionApi.getUnion(this.$route.params.unionName);
  },
};
</script>
