<template>
  <div class="votes">
    <button>
      <img src="../assets/up-arrow.png" />
    </button>
    <p class="votes-amount">603</p>
    <button>
      <img class="votes-downvote-img" src="../assets/up-arrow.png" />
    </button>
  </div>

  <div class="table-post-content">
    <p class="table-post-info">{{ post.info }}</p>
    <h4>{{ post.title }}</h4>
    <p class="table-post-text">{{ post.content }}</p>
    <div class="table-comments-amount">
      <a href="" v-on:click="toComments">{{ post.comments }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "union-post-component",
  props: {
    post: {
      info: String,
      title: String,
      content: String,
      comments: String,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/theme";

p,
h4,
a {
  color: white;
}

td:first-child,
td:last-child {
  border-spacing: 0;
  border-radius: 6px 0 0 6px;
  border: none;
}

.votes {
  width: 10%;
  height: 250px;
  vertical-align: top;
  text-align: center;

  button {
    background-color: transparent;
    border: none;
  }

  img {
    background-color: transparent;
    height: 20px;
  }
}

.votes-amount {
  margin: 0.5em;
  text-align: center;
  font-weight: bold;
  color: $unionBlue;
}

.votes-downvote-img {
  transform: rotate(180deg);
}

.table-post-content {
  width: 90%;
  text-align: left;
  vertical-align: top;
  background-color: $darkerGreyColor;
  padding: 8px;
  position: relative;
}

.table-post-info {
  font-weight: bold;
  margin-top: 5px;
  opacity: 60%;
}

.table-post-text {
  width: 100%;
  overflow: hidden;
  height: auto;
  max-height: 150px;
}

.table-comments-amount {
  width: 100%;
  bottom: 0;
  margin-bottom: 5px;

  a {
    opacity: 60%;
  }
}
</style>
