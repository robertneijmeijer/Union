<template>
  <div :class="orientation === 'horizontal' ? 'votes-horizontal' : 'votes'">
    <button @click="upvoteFunction">
      <svg
          class="vote-svg upvote"
          xmlns="http://www.w3.org/2000/svg"
          :name="'upvote'+index"
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
    <p class="votes-amount" :name="'counter'+index">{{ votes }}</p>
    <button @click="downvoteFunction">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          :name="'downvote'+index"
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
</template>

<script>

import {VoteENUM} from "@/api/posts";

export default {
  name: "votingComponent",
  props: {
    votes: String,
    user_vote: String, // VoteEnum
    index: String,
    neutralColor: String,
    orientation: {
      type: String, // 'horizontal' | 'vertical'
      default: "vertical"
    },
    handleVote: Function,
  },
  mounted() {
    console.log("Mounted")
    console.log(this.user_vote)
    this.vote(this.user_vote, true);
  },
  methods: {
    upvoteFunction() {
      this.vote(VoteENUM.UPVOTE, false);
    },
    downvoteFunction() {
      this.vote(VoteENUM.DOWNVOTE, false);
    },
    async vote(vote, initial) {

      // Get elements
      const up = document.getElementsByName(`upvote${this.index}`)[0]
      const down = document.getElementsByName(`downvote${this.index}`)[0]
      const counter = document.getElementsByName(`counter${this.index}`)[0]

      // Disable clicking
      up.style.pointerEvents = "none";
      down.style.pointerEvents = "none";

      // Check if vote is neutral
      let checkedVote = vote;
      // If not initial set database and check if vote is neutral
      if (!initial) {
        if (vote === this.user_vote) checkedVote = VoteENUM.NEUTRAL;
        // TODO: Check neutral
        this.handleVote(checkedVote);
      }

      // Set element color
      switch (checkedVote) {
        case VoteENUM.DOWNVOTE:
          up.style.fill = this.neutralColor;
          down.style.fill = "#ff00ff";
          counter.style.color = "#ff00ff";
          break;
        case VoteENUM.UPVOTE:
          up.style.fill = "#00ffff";
          down.style.fill = this.neutralColor;
          counter.style.color = "#00ffff";
          break;
        default:
          up.style.fill = this.neutralColor;
          down.style.fill = this.neutralColor;
          counter.style.color = this.neutralColor;
          break;
      }

      // Enable clicking
      up.style.pointerEvents = "auto";
      down.style.pointerEvents = "auto";
    },
  }
}
</script>

<style lang="scss">
@import "../assets/theme";

.votes-horizontal {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.votes, .votes-horizontal {
  button {
    background-color: transparent;
    border: none;
    outline: none;
  }
}

.votes {
  vertical-align: top;
  text-align: center;
  padding: $paddingSmall;
  max-width: 80px;
}

.votes-amount {
  text-align: center;
  font-weight: bold;
  color: $primary-light-gray;
  margin: 0;
}

.vote-svg {
  background-color: transparent;
  width: 1.4em;
  padding: 0.5em;
  box-sizing: content-box;
  fill: $secondary-gray;
  outline: none;
}

.upvote:hover,
.upvote:active,
.upvote:focus {
  fill: $unionBlue !important;
}
.downvote:hover,
.downvote:active,
.downvote:focus {
  fill: $errorColor !important;
}

</style>
