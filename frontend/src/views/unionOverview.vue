<template>
    <union-overview-navigator></union-overview-navigator>
    <union-dashboard :unions="union"></union-dashboard>
</template>

<script lang="ts">
  import UnionOverviewNavigator from "../components/unionOverviewNavigator.vue";
  import UnionDashboard from "../components/unionDashboard.vue";
  // eslint-disable-next-line
  import { defineComponent, PropType } from "vue";
  // eslint-disable-next-line
  import UnionApi, { UnionType } from "../api/union";
  // eslint-disable-next-line
  import { AxiosResponse } from "axios";

  export default defineComponent({
    name: "unionOverview",
    components: { UnionDashboard, UnionOverviewNavigator },
    data() {
      return {
        union: Object as PropType<UnionType>,
      };
    },
    created: function() {
      const union = Array.isArray(this.$route.params.unionName)
        ? this.$route.params.unionName[0]
        : this.$route.params.unionName;
      UnionApi.getJoinedUnions(union).then((res: AxiosResponse<UnionType>) => {
        if (res.status === 200 && res.data.name) {
          this.union = res.data as unknown as PropType<UnionType>;
        }
      });
    },
  });
</script>

<style lang="scss" scoped>

</style>
