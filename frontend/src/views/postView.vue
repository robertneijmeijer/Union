<template>
  <Navigator :loggedIn="true" :landingsPage="false" />
  <div class="post-container">
    <post-component/>
  </div>
</template>

<script>
import PostComponent from "@/components/postComponent";
import Navigator from "../components/navigator.vue";
import { ActionTypes } from "@/actions/post";

export default {
  name: "postView",
  components: {
    Navigator,
    PostComponent,
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
};
</script>

<style lang="scss">
@import "../assets/theme";

.post-container {
  margin-top: $paddingHuge * 2;
  display: flex;
  justify-content: center;
}
</style>
