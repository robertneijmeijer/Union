<template>
    <div class="card">
    </div>
    <div class="content">
        <div v-for="post of posts" v-bind:key="post.id">
            <union-post-component :post="post"></union-post-component>
        </div>
    </div>
</template>

<script>
  import UnionPostComponent from "@/components/union-post-component";

  export default {
    name: "union-create-post",
    components: { UnionPostComponent },
    data() {
      return {
        posts: [{
          id: 1,
          info: "created by Koen Lippe 22-04-2021",
          title: "Koen ze post",
          content: "\"Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\"",
          vote: "57 comments"
        },
          {
            id: 2,
            info: "date",
            title: "title",
            content: "content",
            vote: "vote"
          },
          {
            id: 3,
            info: "date",
            title: "title",
            content: "content",
            vote: "vote"
          },
          {
            id: 4,
            info: "date",
            title: "title",
            content: "content",
            vote: "vote"
          },
          {
            id: 4,
            info: "date",
            title: "title",
            content: "content",
            vote: "vote"
          }]
      }
    }
  };
</script>

<style lang="scss" scoped>
    @import "../assets/theme";

    .card {
        width: 100%;
        background-color: #1A1A1B;
        height: 10vh;
    }

    .content{
        height: 100vh;
    }


</style>
