<template>
  <union-overview-navigator></union-overview-navigator>
  <union-dashboard :unions="unionState"></union-dashboard>
</template>

<script>
import UnionOverviewNavigator from "../components/unionOverviewNavigator.vue";

// eslint-disable-next-line
import { defineComponent } from "vue";
// eslint-disable-next-line
import { ActionTypes } from "@/actions/union";
import UnionDashboard from "../components/unionDashboard.vue";

export default defineComponent({
  name: "unionOverview",
  components: { UnionDashboard, UnionOverviewNavigator },
  created() {
    this.$store.dispatch(ActionTypes.UNION_ACTION_FETCH_OVERVIEW);
  },
  computed: {
    unionState() {
      return this.$store.state.union.unions;
    },
  },
});
</script>

<style lang="scss" scoped></style>
