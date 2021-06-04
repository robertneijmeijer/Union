<template>
  <Navigator :loggedIn="true" :landingsPage="false" />
  <UnionDashboard :unions="unionState" />
</template>

<script>
import Navigator from "../components/navigator.vue";
import { ActionTypes } from "@/actions/union";
import UnionDashboard from "../components/unionDashboard.vue";

export default {
  name: "unionOverview",
  components: { UnionDashboard, Navigator },
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
