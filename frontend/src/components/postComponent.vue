<template>
  <div class="post-card border-for-div">
    <voting-component class=""/>
    <div class="post-content text-white">
      <div><img class="union-icon" src="../assets/img/bitcoin-icon.png" alt="Union icon"/>
        {{ "TheCryptoUnion" }} <span>• {{ $t("post.posted_by") }} {{ "MrCypher" }} {{ "20h ago" }}</span>
      </div>
      <h1>{{ "How does proof of stake work?" }}</h1>
      <p>{{
          `Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Proin eget tortor risus.\n\n        Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.\n\n        Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. `
        }}
      </p>
      <p>
        <img src="../assets/img/comment.png" alt="Comment Icon" class="comment-icon"/>
          <span>{{"57"}} {{ $t("post.comments") }}</span>
      </p>

      <div class="post-comment">
        <p>{{ $t("post.comment_as") }} <span class="user">{{ "yan_alex" }}</span></p>
        <!--        TODO: New div under the textarea to create view like design-->
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
</template>

<script>

import votingComponent from "@/components/votingComponent"

export default {
  name: "postComponent",
  components: {votingComponent}
}
</script>

<style lang="scss">
@import "../assets/theme";

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
