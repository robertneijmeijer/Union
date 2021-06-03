<template>
    <union-overview-navigator></union-overview-navigator>
    <union-dashboard :unions="unionState"></union-dashboard>
</template>

<script>
  import UnionOverviewNavigator from "../components/unionOverviewNavigator.vue";
  import { ActionTypes } from "@/actions/union";
  import UnionDashboard from "../components/unionDashboard.vue";

  export default {
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
  };
</script>

<style lang="scss" scoped></style>
