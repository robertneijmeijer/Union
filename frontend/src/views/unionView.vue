<template>
  <div>
    <union-overview-navigator />
    <CreatePostComponent v-if="showCreatePost" @callbackToggleCreatePost="toggleCreatePost"/>
    <UnionHeader :name="union.name" :banner="union.banner" :icon="union.icon" />
    <UnionContent :posts="posts" @callbackToggleCreatePost="toggleCreatePost"/>
  </div>
</template>

<script lang="ts">
import UnionHeader from "../components/unionHeader.vue";
import UnionContent from "../components/unionContent.vue";
import UnionOverviewNavigator from "../components/unionOverviewNavigator.vue";
import CreatePostComponent from "../components/createPost"
// eslint-disable-next-line
import { defineComponent, PropType } from "vue";
// eslint-disable-next-line
import UnionApi, { UnionType } from "../api/union";
// eslint-disable-next-line
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
    CreatePostComponent,
  },
  data() {
    return {
      showCreatePost: false,
      posts: [] as PostInterface[],
      union: Object as PropType<UnionType>,
    }
  },
  methods: {
    toggleCreatePost() {
      this.showCreatePost = !this.showCreatePost;
      this.showCreatePost ? this.showModal() : this.hideModal();
    },
    showModal() {
      document.body.classList.add("modal-open");
    },
    hideModal() {
      document.body.classList.remove("modal-open");
    }
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

<style lang="scss" scoped>
@import "../assets/theme";

.modal-open {
  overflow: hidden;
}
</style>