<template>
  <div class="comment-container">
    <div class="comment-header">
      <!--      //require('../assets/img/default-user-icon.png')-->
      <img :src="userAvatar()" alt="Icon"/>
      <p><span>{{ comment.user.username }}</span>{{ createdAt() }}</p>
    </div>
    <p class="m-0">{{ comment.text }}</p>
    <!--    <div class="comment-voting">-->
    <!--      <voting-component :votes="10" orientation="horizontal"></voting-component>-->
    <!--    </div>-->
  </div>
</template>

<script>

// eslint-disable-next-line
import VotingComponent from "@/components/votingComponent"
// eslint-disable-next-line
import {PostType} from "@/api/posts";
// eslint-disable-next-line
import {UserType} from "@/api/user";
import moment from "moment";
import DefaultUserIcon from "../assets/img/default-user-icon.png";

// export type CommentType = {
//   comment_id: string;
//   text: string;
//   upvotes: number;
//   downvotes: number;
//   post: PostType;
//   user: UserType;
//   parent?: CommentType;
//   created_at: string
//   children: CommentType[];
// }

export default {
  name: "commentComponent",
  // eslint-disable-next-line
  components: {VotingComponent},
  props: {
    // eslint-disable-next-line
    comment: {type: Object, required: true} // type: CommentType
  },
  methods: {
    createdAt() {
      return moment(this.comment.created_at).fromNow()
    },
    userAvatar() {
      return this.comment.user.avatar ? this.comment.user.avatar : DefaultUserIcon
    }
  }
}
</script>

<style lang="scss">
@import "../assets/theme";

.comment-voting {
  margin-top: $paddingSmall;

  .vote-svg {
    fill: $primary-light-gray; // TODO: Fix hover
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


