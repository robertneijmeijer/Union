<template>
  <div class="union-section">
    <div
      class="union-section-post"
      v-if="
        union &&
        union.posts &&
        union.posts.results &&
        union.posts.results.length > 0
      "
    >
      <div
        class="union-section-post-comment border-for-div"
        v-for="(post, index) in union.posts.results"
        v-bind:key="post.post_id"
      >
        <UnionPost :post="post" :index="index" />
      </div>
    </div>
    <div v-else class="text-white union-section-post">
      <p>{{ $t("union_overview.no_posts_yet") }}</p>
      <p>{{ $t("union_overview.create_post_hint") }}</p>
    </div>
    <div class="union-section-community">
      <UnionCommunity
        :union="union"
        @callbackToggleCreatePost="toggleCreatePost"
      />
    </div>
  </div>
</template>

<script>
import UnionCommunity from "./unionCommunity.vue";
import UnionPost from "./unionPost.vue";
import { ActionTypes } from "../actions/union";
import { debounce } from "../util/debounce";

export default {
  name: "union-post-overview",
  components: { UnionPost, UnionCommunity },
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
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggleCreatePost() {
      this.$emit("callbackToggleCreatePost");
    },
    handleScroll() {
      if (this.union.posts && this.union.posts.next) {
        debounce(this.getNextPage(), 500);
      } else {
        window.removeEventListener("scroll", this.handleScroll);
      }
    },

    getNextPage() {
      if (
        document.documentElement.scrollHeight - window.innerHeight >
          document.documentElement.scrollTop ||
        !this.union.posts.next ||
        this.union.isFetching
      )
        return;

      this.$store.dispatch(ActionTypes.UNION_POSTS_ACTION_SUBMIT, {
        unionName: this.union.name,
        page: this.union.posts.next,
      });
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
