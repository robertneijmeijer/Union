<template>
  <div>
    <union-overview-navigator />
    <UnionHeader
      v-if="union"
      :name="union.name"
      :banner="union.banner"
      :icon="union.icon"
    />
    <UnionContent v-if="posts" :posts="posts" />
  </div>
</template>

<script>
import UnionHeader from "../components/unionHeader.vue";
import UnionContent from "../components/unionContent.vue";
import UnionOverviewNavigator from "../components/unionOverviewNavigator.vue";
import { ActionTypes } from "../actions/union";

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
  computed: {
    union() {
      return this.$store.state.union;
    },
  },
  created() {
    this.$store.dispatch(
      ActionTypes.UNION_ACTION_SUBMIT,
      Array.isArray(this.$route.params.unionName)
        ? this.$route.params.unionName[0]
        : this.$route.params.unionName
    );
  },
};
</script>
