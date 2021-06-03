<template>
  <div>
    <div class="votes">
      <button @click="upvote">
        <svg
          version="1.1"
          class="vote-svg upvote"
          name="upvote"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 492.002 492.002"
          xml:space="preserve"
        >
          <path
            d="M484.136,328.473L264.988,109.329c-5.064-5.064-11.816-7.844-19.172-7.844c-7.208,0-13.964,2.78-19.02,7.844
			L7.852,328.265C2.788,333.333,0,340.089,0,347.297c0,7.208,2.784,13.968,7.852,19.032l16.124,16.124
			c5.064,5.064,11.824,7.86,19.032,7.86s13.964-2.796,19.032-7.86l183.852-183.852l184.056,184.064
			c5.064,5.06,11.82,7.852,19.032,7.852c7.208,0,13.96-2.792,19.028-7.852l16.128-16.132
			C494.624,356.041,494.624,338.965,484.136,328.473z"
          />
        </svg>
      </button>
      <p class="votes-amount" name="counter">603</p>
      <button @click="downvote">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          name="downvote"
          class="vote-svg downvote"
          viewBox="0 0 491.996 491.996"
          xml:space="preserve"
        >
          <path
            d="M484.132,124.986l-16.116-16.228c-5.072-5.068-11.82-7.86-19.032-7.86c-7.208,0-13.964,2.792-19.036,7.86l-183.84,183.848
			L62.056,108.554c-5.064-5.068-11.82-7.856-19.028-7.856s-13.968,2.788-19.036,7.856l-16.12,16.128
			c-10.496,10.488-10.496,27.572,0,38.06l219.136,219.924c5.064,5.064,11.812,8.632,19.084,8.632h0.084
			c7.212,0,13.96-3.572,19.024-8.632l218.932-219.328c5.072-5.064,7.856-12.016,7.864-19.224
			C491.996,136.902,489.204,130.046,484.132,124.986z"
          />
        </svg>
      </button>
    </div>

    <div class="table-post-content">
      <p class="table-post-info">{{ post.info }}</p>
      <h4>{{ post.title }}</h4>
      <p class="table-post-text">{{ post.content }}</p>
      <div class="table-comments-amount">
        <a href="" v-on:click="toComments">TODO: get comments</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "union-post-component",
  props: {
    post: { type: Object, required: true },
    index: { type: Number },
  },
  beforeCreate: function () {
    // TODO: Get ammount of comments
  },
  methods: {
    upvote() {
      this.vote("up");
    },
    downvote() {
      this.vote("down");
    },
    vote(vote: string) {
      console.log(vote);
      // if (!this.index) return;
      // const up = document.getElementsByName("upvote")[this.index];
      // const down = document.getElementsByName("downvote")[this.index];
      // const counter = document.getElementsByName("counter")[this.index];
      // switch (vote) {
      //   case "down":
      //     up.style.fill = "#424242";
      //     down.style.fill = "#ff00ff";
      //     counter.style.color = "#ff00ff";
      //     break;
      //   case "up":
      //     up.style.fill = "#00ffff";
      //     down.style.fill = "#424242";
      //     counter.style.color = "#00ffff";
      //     break;
      //   default:
      //     up.style.fill = "#424242";
      //     down.style.fill = "#424242";
      //     counter.style.color = "#424242";
      //     break;
      // }
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
  vertical-align: top;
  text-align: center;
  padding: 1em;

  button {
    background-color: transparent;
    border: none;
    outline: none;
  }
}

.vote-svg {
  background-color: transparent;
  width: 1.4em;
  padding: 0.5em;
  box-sizing: content-box;
  fill: $secondary-gray;
  outline: none;
}

.votes-amount {
  text-align: center;
  font-weight: bold;
  color: $primary-light-gray;
  margin: 0;
}

.table-post-content {
  width: 90%;
  text-align: left;
  vertical-align: top;
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

.upvote:hover,
.upvote:active,
.upvote:focus {
  fill: $unionBlue;
}
.downvote:hover,
.downvote:active,
.downvote:focus {
  fill: $errorColor;
}
</style>
