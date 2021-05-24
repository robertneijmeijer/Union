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
import { defineComponent, PropType } from "vue";
import UnionApi, { UnionType } from "../api/union";
import { AxiosResponse } from "axios";

export interface PostInterface {
  id: Number;
  info: String;
  title: String;
  content: String;
}

export default defineComponent({
  name: "unionView",
  props: {
    unionName: String,
  },
  components: {
    UnionOverviewNavigator,
    UnionHeader,
    UnionContent,
  },
  data() {
    return {
      posts: [] as PostInterface[],
      union: Object as PropType<UnionType>,
    };
  },
  created: function () {
    const union = Array.isArray(this.$route.params.unionName)
      ? this.$route.params.unionName[0]
      : this.$route.params.unionName;
    UnionApi.getUnion(union).then((res: AxiosResponse<UnionType>) => {
      if (res.status === 200 && res.data.name) {
        this.union = res.data as unknown as PropType<UnionType>;
      }
    });
  },
});
</script>
