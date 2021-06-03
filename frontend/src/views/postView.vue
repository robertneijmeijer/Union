<template>
  <union-overview-navigator/>
  <div class="post-container">
    <post-component></post-component>
  </div>
</template>

<script>
import postComponent from "@/components/postComponent";
import UnionOverviewNavigator from "../components/unionOverviewNavigator.vue";
import { ActionTypes } from "@/actions/post";

export default {
  name: "postView",
  components: {
    UnionOverviewNavigator,
    postComponent,
  },
  data() {
    return {
      id: null,
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.$store.dispatch(ActionTypes.POST_ACTION_FETCH, this.id);
  },
}
</script>

<style lang="scss">
@import "../assets/theme";

.post-container {
  margin-top: $paddingHuge * 2;
  display: flex;
  justify-content: center;
}

</style>
