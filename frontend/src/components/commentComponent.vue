<template>
  <div class="comment-container">
    <div class="comment-header">
      <img :src="userAvatar()" alt="Icon"/>
      <p><span>{{ comment.user && comment.user.username || "unknown" }}</span>{{ createdAt() }}</p>
    </div>
    <p class="m-0">{{ comment.text }}</p>
        <div class="comment-voting">
          <voting-component
              :votes="comment.votes"
              :user_vote="comment.user_vote"
              :index="comment.comment_id"
              :neutral-color="'#c8c8c8'"
              orientation="horizontal"
              :handle-vote="setVoteDatabase" />
        </div>
  </div>
</template>

<script>

import VotingComponent from "@/components/votingComponent"
import moment from "moment";
import DefaultUserIcon from "../assets/img/default-user-icon.png";
import PostApi from "@/api/posts";

// export type CommentType = {
//   comment_id: string;
//   text: string;
//   votes: number;
//   post: PostType;
//   user: UserType;
//   parent?: CommentType;
//   created_at: string
//   children: CommentType[];
//   user_vote: VoteENUM
// }

export default {
  name: "commentComponent",
  components: {VotingComponent},
  props: {
    comment: {type: Object, required: true} // type: CommentType
  },
  methods: {
    createdAt() {
      return moment(this.comment.created_at).fromNow()
    },
    userAvatar() {
      return this.comment &&
              this.comment.user &&
              this.comment.user.avatar ? this.comment.user.avatar : DefaultUserIcon
    },
    async setVoteDatabase(vote) {
      // Set vote in database
      await PostApi.postVote({
        post: this.comment.post,
        comment: this.comment.comment_id,
        vote,
      }).then(() => {
        // TODO: Yan refetch comments here
      });
    },

  }
}
</script>

<style lang="scss">
@import "../assets/theme";

.comment-voting {
  margin-top: $paddingSmall;

  .vote-svg {
    fill: $primary-light-gray;
  }
}

.comment-container {
  width: 100%;
  background-color: $comment-light-gray;
  border-radius: $borderRadius * 2;
  padding: $paddingSmall * 1.5;
  margin: $paddingMedium 0;
}

.comment-header {
  display: flex;
  flex-direction: row;
  align-content: center;
  margin-bottom: $paddingSmall;

  span {
    color: $unionBlue !important;
    margin-right: 6px;
  }

  p {
    margin: 0 $paddingSmall;
    display: flex;
    align-items: center;
  }

  img {
    width: 35px;
    height: 35px;
  }
}
</style>


