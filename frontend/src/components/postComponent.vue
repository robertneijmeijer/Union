<template>
  <!--  If fetching show spinner-->
  <div v-if="postState.isFetching">
    <spinner size="large"></spinner>
  </div>

  <!--  Not fetching-->
  <div v-else-if="postState.post" class="post-card border-for-div">
    <!--    If success show post-->

    <voting-component :votes="postState.post.votes"/>
    <div class="post-content text-white">
      <!--        TODO: Icon from s3-->
      <div><img class="union-icon" src="../assets/img/bitcoin-icon.png" alt="Union icon"/>
        {{ postState.post.union.name }} <span>• {{ $t("post.posted_by") }} {{
            postState.post.user.username
          }} {{ moment(postState.post.created_at) }}</span>
      </div>
      <h1>{{ postState.post.title }}</h1>
      <p>{{ postState.post.message }}
      </p>
      <p>
        <img src="../assets/img/comment.png" alt="Comment Icon" class="comment-icon"/>
        <span>{{ postState.post.number_of_comments }} {{ $t("post.comments") }}</span>
      </p>

      <div class="post-comment">
        <!--          TODO: Fetch current user and show user here-->
        <p>{{ $t("post.comment_as") }} <span class="user">{{ "yan_alex" }}</span></p>
        <textarea
            type="text"
            class="form-control input"
            :placeholder="$t('post.comment_hint')"
        />
        <button class="btn btn-primary union-button-medium">
          {{ $t('post.submit') }}
        </button>
      </div>
    </div>
  </div>
  <!--    If error show error-->
  <div v-else class="post-card border-for-div text-white center-center">
    <h1 v-if="JSON.stringify(postState.errors).includes('Not found')">{{ $t("post.post_not_found") }}</h1>
    <h1 v-else>{{ $t("global.generalized_error_message") }}</h1>
  </div>
</template>
<script>

import votingComponent from "@/components/votingComponent"
import Spinner from "@/components/spinner";
import moment from "moment/moment";

export default {
  name: "postComponent",
  components: {votingComponent, Spinner},
  computed: {
    postState() {
      return this.$store.state.posts;
    },
  },
  methods: {
    moment: function (value) {
      return moment(value).fromNow();
    }
  },
}
</script>

<style lang="scss">
@import "../assets/theme";

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
  font-family: "Overpass-SemiBold", serif;
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
      float: right
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