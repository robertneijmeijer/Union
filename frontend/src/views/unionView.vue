<template>
  <div>
    <union-overview-navigator />
    <UnionHeader :name="union.name" :banner="union.banner" :icon="union.icon" />
    <UnionContent :posts="posts" />
  </div>
</template>

<script lang="ts">
import UnionHeader from "../components/unionHeader.vue";
import UnionContent from "../components/unionContent.vue";
import UnionOverviewNavigator from "../components/unionOverviewNavigator.vue";
import { ActionTypes } from "../actions/union";
// eslint-disable-next-line no-unused-vars
import { UnionType } from "../api/union";

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
    union: function(): any {
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