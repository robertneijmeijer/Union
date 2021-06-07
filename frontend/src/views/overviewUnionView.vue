<template>
  <Navigator :loggedIn="true" :landingsPage="false" />
  <UnionDashboard
    :unions="unionState.unions"
    :is-fetching="unionState.isFetching"
  />
</template>

<script>
import Navigator from "../components/navigator.vue";
import { ActionTypes } from "@/actions/unions";
import UnionDashboard from "../components/unionDashboard.vue";

export default {
  name: "unionOverview",
  components: { UnionDashboard, Navigator },
  created() {
    this.$store.dispatch(ActionTypes.UNION_ACTION_FETCH_OVERVIEW);
  },
  computed: {
    unionState() {
      return this.$store.state.unions;
    },
  },
};
</script>
