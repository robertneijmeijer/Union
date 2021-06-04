<template>
  <div class="union-section">
    <div
      class="union-section-post"
      v-if="union && union.posts && union.posts.results"
    >
      <div
        class="union-section-post-comment border-for-div"
        v-for="(post, index) in union.posts.results"
        v-bind:key="post.post_id"
      >
        <UnionPost :post="post" :index="index" />
      </div>
    </div>
    <div class="union-section-community">
      <UnionCommunity
        :about="union.description"
        @callbackToggleCreatePost="toggleCreatePost"
      />
    </div>
  </div>
</template>

<script>
import UnionCommunity from "./unionCommunity.vue";
import UnionPost from "./unionPost.vue";
import { ActionTypes } from "../actions/union";

export default {
  name: "union-post-overview",
  components: { UnionPost, UnionCommunity },
  methods: {
    toggleCreatePost() {
      this.$emit("callbackToggleCreatePost");
    },
  },
  computed: {
    union() {
      const u = this.$store.state.union.data;

      // Get initial data
      if (u && u.name && !u.posts) {
        this.$store.dispatch(ActionTypes.UNION_POSTS_ACTION_SUBMIT, {
          unionName: u.name,
          page: 1,
        });
      }

      return u;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/theme";

.union-section {
  display: grid;
  grid-template-columns: 25fr 50fr 25fr;
  padding: 2em;
  column-gap: 1em;
  max-width: 120em;
  margin: 0 auto;
}

.union-section-post {
  grid-column-start: 2;
  grid-column-end: 2;
}

.union-section-community {
  grid-column-start: 3;
  grid-column-end: 3;
  max-width: 22rem;
}

.union-section-post-comment {
  display: flex;
  flex: 1;
  flex-direction: row;
  margin-bottom: 1em;
  background-color: $primary-gray;
}

@media only screen and (max-width: 80rem) {
  .union-section {
    grid-template-columns: 5fr 90fr 5fr;
    column-gap: 0;
  }
  .union-section-community {
    display: none;
  }
}

@media only screen and (max-width: 45rem) {
  .union-section {
    grid-template-columns: 0 1fr 0;
  }
}
</style>
