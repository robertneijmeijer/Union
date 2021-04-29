<template>
  <div class="union-section">
    <div class="union-section-post">
      <div v-for="post of posts" v-bind:key="post.id">
        <union-post-component :post="post"></union-post-component>
      </div>
    </div>
    <div class="union-section-community"><union-about-community /></div>
  </div>
</template>

<script>
import UnionAboutCommunity from "@/components/union-about-community";
import UnionPostComponent from "@/components/union-post-component";

export default {
  name: "union-post-overview",
  components: { UnionPostComponent, UnionAboutCommunity },
  data() {
    return {
      posts: [
        {
          id: 1,
          info: "created by Koen Lippe 22-04-2021",
          title: "Koen ze post",
          content:
            '"Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
          comments: "57 comments",
        },
        {
          id: 2,
          info: "date",
          title: "title",
          content: "content",
          comments: "comments",
        },
        {
          id: 3,
          info: "date",
          title: "title",
          content: "content",
          comments: "comments",
        },
        {
          id: 4,
          info: "date",
          title: "title",
          content: "content",
          comments: "comments",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/theme";

.union-section {
  display: grid;
  grid-template-columns: 25fr 50fr 25fr;
  padding: 1em;
  column-gap: 1em;
}

.union-section-post {
  grid-column-start: 2;
  grid-column-end: 2;
}

.union-section-community {
  grid-column-start: 3;
  grid-column-end: 3;
}

@media only screen and (max-width: 80rem) {
  .union-section {
    grid-template-columns: 20fr 60fr 20fr;
    column-gap: 0;
  }
  .union-section-community {
    display: none;
  }
}

@media only screen and (max-width: 65rem) {
  .union-section {
    grid-template-columns: 10fr 80fr 10fr;
  }
}

@media only screen and (max-width: 45rem) {
  .union-section {
    grid-template-columns: 0 1fr 0;
  }
}
</style>
