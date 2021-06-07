<template>
  <!--  If fetching show spinner-->
  <div v-if="postState.isFetching">
    <spinner size="large"></spinner>
  </div>

  <!--  Not fetching-->
  <div v-else-if="postState.post" class="post-card border-for-div">
    <!--    If success show post-->

    <voting-component
      :votes="postState.post.votes"
      :user_vote="postState.post.user_vote"
      :index="postState.post.post_id"
      :neutral-color="'#424242'"
      :handle-vote="setVoteDatabase"
    />

    <div class="post-content text-white">
      <div>
        <img class="union-icon" :src="unionAvatar()" alt="Union icon" />
        {{ postState.post.union.name }}
        <span
          >• {{ $t("post.posted_by") }} {{ postState.post.user.username }}
          {{ moment(postState.post.created_at) }}</span
        >
      </div>
      <h1>{{ postState.post.title }}</h1>
      <p>{{ postState.post.message }}</p>
      <p>
        <img
          src="../assets/img/comment.png"
          alt="Comment Icon"
          class="comment-icon"
        />
        <span
          >{{ postState.post.number_of_comments }}
          {{ $t("post.comments") }}</span
        >
      </p>

      <div class="post-comment">
        <p>
          {{ $t("post.comment_as") }}
          <span class="user">{{ userState.user.username }}</span>
        </p>
        <textarea
          type="text"
          class="form-control input"
          :placeholder="$t('post.comment_hint')"
          v-model="commentText"
        />
        <button
          class="btn btn-primary union-button-medium"
          v-on:click="postComment()"
        >
          {{ $t("post.submit") }}
        </button>
      </div>
      <hr />
      <div v-for="comment in comments" v-bind:key="comment.comment_id">
        <comment-component :comment="comment" />
        <!--        Ordering is done in the backend. No ordering needed.-->
      </div>
    </div>
  </div>
  <!--    If error show error-->
  <div v-else class="post-card border-for-div text-white center-center">
    <h1 v-if="JSON.stringify(postState.errors).includes('Not found')">
      {{ $t("post.post_not_found") }}
    </h1>
    <h1 v-else>{{ $t("global.generalized_error_message") }}</h1>
  </div>
</template>

<script>
import VotingComponent from "@/components/votingComponent";
import Spinner from "@/components/spinner";
import moment from "moment/moment";
import CommentComponent from "@/components/commentComponent";
import DefaultUnionIcon from "../assets/img/bitcoin-icon.png";
import PostApi from "@/api/posts";
import { ActionTypes } from "@/actions/post";
// eslint-disable-next-line no-unused-vars
import CommentApi, { CommentType } from "@/api/comment";
// eslint-disable-next-line no-unused-vars
import { AxiosResponse } from "axios";

export default {
  name: "postComponent",
  components: { VotingComponent, Spinner, CommentComponent },
  data() {
    return {
      comments: [],
    };
  },
  computed: {
    postState() {
      return this.$store.state.posts;
    },
    userState() {
      return this.$store.state.user;
    },
  },
  methods: {
    moment: function(value) {
      return moment(value).fromNow();
    },
    unionAvatar() {
      return this.postState.post.union.icon
        ? this.postState.post.union.icon
        : DefaultUnionIcon;
    },
    async setVoteDatabase(vote) {
      // Set vote in database
      await PostApi.postVote({
        post: this.postState.post.post_id,
        vote,
      }).then(() => {
        // Refetch post
        const id = this.$route.params.id;
        this.$store.dispatch(ActionTypes.POST_ACTION_FETCH, id);
      });
    },
    postComment() {
      CommentApi.postCommentOnPost({
        text: this.commentText,
        post: this.$route.params.id,
      }).then(() => {
        this.getAllComments();
      });
    },
    getAllComments() {
      const id = this.$route.params.id;
      CommentApi.getAllCommentsForPost(id).then(res => {
        if (res && res.data) {
          this.comments = res.data.results;
        }
      });
    },
  },
  created() {
    this.getAllComments();
  },
};
</script>

<style lang="scss">
@import "../assets/theme";

.comment-container {
  width: 100%;
}

hr {
  color: white;
  border-top: 1px $secondary-gray solid;
  margin: $paddingMedium 0;
}

.center-center {
  display: flex !important;
  justify-content: center !important;
  align-content: center !important;
  grid-template-columns: unset !important;
}

.post-card {
  width: 80%;
  max-width: 1000px;
  background-color: $primary-black;
  font-weight: 500;
  display: grid;
  grid-template-columns: auto 22.5fr 1rem;

  .post-content {
    padding: $paddingMedium;
  }

  .union-icon {
    max-width: 30px;
    max-height: 30px;
    margin-right: $paddingSmall;
  }

  .post-comment {
    display: flex;
    flex-direction: column;

    textarea {
      min-height: 150px;
      resize: none;
    }

    // For some reason nesting this with above does not work
    textarea::placeholder {
      padding: $paddingSmall * 0.75;
    }

    button {
      margin-top: $paddingMedium;
      margin-right: $paddingSmall * 1.75;
      float: right;
    }
  }

  h1 {
    margin: $paddingMedium 0;
    font-size: $textMedium;
  }

  p {
    font-size: $textSmall * 0.95;
  }

  span {
    color: $secondary-light-gray;
  }

  span.user {
    color: $unionBlue !important;
  }

  .comment-icon {
    margin-right: $paddingSmall;
  }
}
</style>
