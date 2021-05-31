<template>
  <div class="union-section">
    <div class="union-section-post">
      <div
          class="union-section-post-comment border-for-div"
          v-for="(post, index) in posts"
          v-bind:key="post.id"
      >
        <UnionPost :post="post" :index="index"/>
      </div>
    </div>
    <div class="union-section-community">
      <UnionAbout @callbackToggleCreatePost="toggleCreatePost"/>
    </div>
  </div>
</template>

<script lang="ts">
import UnionAbout from "./unionCommunity.vue";
import UnionPost from "./unionPost.vue";
// eslint-disable-next-line no-unused-vars
import { defineComponent, PropType } from "vue";
// eslint-disable-next-line no-unused-vars
export interface PostInterface {
  id: Number;
  info: String;
  title: String;
  content: String;
}



export default defineComponent({
  name: "union-post-overview",
  components: {UnionPost, UnionAbout},
  methods: {
    toggleCreatePost() {
      this.$emit("callbackToggleCreatePost");
    },
    props: {
    posts: { type: Object as PropType<PostInterface[]>, required: true },
  },
  components: { UnionPost, UnionAbout },
  }
 
});
</script>

<style lang="scss" scoped>
@import "../assets/theme";

.union-section {
  display: grid;
  grid-template-columns: 25fr 50fr 25fr;
  padding: 2em;
  column-gap: 2em;
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
