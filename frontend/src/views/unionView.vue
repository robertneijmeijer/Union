<template>
  <div>
    <Navigator :loggedIn="true" :landingsPage="false" />
    <CreatePostComponent
        v-if="showCreatePost"
        @callbackToggleCreatePost="toggleCreatePost"
        :name="union.name"
    />
    <UnionHeader />
    <UnionContent v-if="union" @callbackToggleCreatePost="toggleCreatePost" />
  </div>
</template>

<script>
import UnionHeader from "../components/unionHeader.vue";
import UnionContent from "../components/unionContent.vue";
import Navigator from "../components/navigator.vue";
import { ActionTypes } from "../actions/union";
import CreatePostComponent from "../components/createPost";

export default {
  name: "unionView",
  props: {
    unionName: String,
  },
  components: {
    Navigator,
    UnionHeader,
    UnionContent,
    CreatePostComponent,
  },
  data() {
    return {
        showCreatePost: false
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
    },
  },
  computed: {
    union() {
      return this.$store.state.union.data;
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

<style lang="scss" scoped>
@import "../assets/theme";

.modal-open {
  overflow: hidden;
}
</style>
