<template>
    <div class="create-container create-center">
      <div class="create-card border-for-div">
        <p class="create-title create-center">{{ $t("create_post.title") }}</p>
        <div>
          <p class="create-text">{{ $t("create_post.post_title") }}</p>
          <div
              v-if="!validTitle.isValid"
              class="error-message overpass create-error-text"
              role="alert"
          >
            {{ validTitle.errorMessage }}
          </div>
          <div class="create-input-container">
            <input
                type="text"
                name="title"
                class="create-input input"
                v-model="title"
                v-on:focusout="onTitleFocusout"/>
          </div>
        </div>
          <div>
            <p class="create-text">{{ $t("create_post.post_content") }}</p>
            <div
                v-if="!validDescription.isValid"
                class="error-message overpass create-error-text"
                role="alert"
            >
              {{ validDescription.errorMessage }}
            </div>
            <div class="create-input-container">
              <textarea
                  type="text"
                  name="content"
                  class="create-input create-content-input input"
                  v-model="content"
                  v-on:focusout="onContentFocusout"/>
            </div>
          </div>
        <div class="create-buttons">
          <button class="btn btn-primary create-button" :disabled="!validForm" v-on:click="post()">
            {{ $t("create_post.post") }}
          </button>
          <button
              class="btn btn-primary create-button create-button-cancel"
              v-on:click="discard()"
          >
            {{ $t("create_post.discard") }}
          </button>
        </div>
      </div>
    </div>
  <div class="create-background"  />
</template>

<script>
import PostApi from "../api/posts"
import { ActionTypes } from "../actions/union";
import { isValidPostTitle, isValidPostDescription } from "../util/validation"

export default {
  name: "createPostComponent",
  mounted() {
    document.documentElement.style.overflow = null;
  },
  props: {
    name: { type: String, required: true },
  },
  data() {
    return{
      title : "",
      content: "",
      currentUnion: null,
      validTitle: { isValid: true, errorMessage: "" },
      validDescription: { isValid: true, errorMessage: "" },
      validForm: false,
    }
  },
  methods: {
    onTitleFocusout: function () {
      this.validTitle = isValidPostTitle(this.title);
      this.validForm = this.validTitle.isValid;
    },
    onContentFocusout: function () {
      this.validDescription = isValidPostDescription(this.content);
      this.validForm = this.validDescription.isValid
    },
    post: function () {
      PostApi.postPost({
        title: this.title,
        message: this.content,
        union: this.name,
        user: this.user
      }).then(() => {
        this.$store.dispatch(ActionTypes.UNION_POSTS_ACTION_SUBMIT, {
          unionName: this.name,
          page: 1,
        });
      })
      this.toggleCreatePost();
    },
    discard: function () {
      this.toggleCreatePost();
    },
    toggleCreatePost() {
      this.$emit("callbackToggleCreatePost");
    }
  },
  computed: {
    user() {
      return this.$store.state.user.user;
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/theme";

.create-container {
  z-index: 10;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  position: fixed;
  top: 0;
  height: 100vh;
}

.create-error-text {
  padding-left: $paddingHuge;
}

.create-card {
  align-content: center;
  background-color: $primary-black;
  border-radius: $borderRadius;
  max-height: 1400px;
  max-width: 600px;
  width: 100%;
}

.create-title {
  font-size: 36px;
  color: white;
  padding-top: $paddingMedium;
}

.create-text {
  font-size: 24px;
  color: white;
  padding-top: $paddingMedium;
  padding-left: $paddingHuge;
  padding-right: $buttonwidth * 2.5;
}

.create-input-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: $paddingHuge;
  padding-left: $paddingHuge;
}

.create-input {
  width: 100%;
  background-color: #232323;
  border-radius: $borderRadius;
  border: 3px solid $inputTextFieldBorderColor;
  color: #c8c8c8;
}

.create-content-input {
  max-height: 300px;
  min-height: 100px;
}

.create-center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.create-button {
  max-width: 150px;
  border-radius: $borderRadius;
  border: $buttonBorder $unionBlue;
  color: white;
  background: transparent;
  font-size: 24px;
  margin-left: $paddingHuge;
  margin-right: $paddingHuge;
  margin-bottom: $paddingHuge;
}

.create-button-cancel {
  border: $buttonBorder $errorColor;
}

.create-buttons {
  padding-top: $paddingHuge;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
}

.create-row {
  display: flex;
  flex-direction: row;
  width: 100%;
}

.create-column {
  display: flex;
  flex-direction: column;
}

.create-circle {
  max-width: 100px;
  max-height: 100px;
  width: 100%;
  height: 100%;
  background-color: $secondary-gray;
  border-radius: $borderRadius * 3;
  display: grid;
  place-items: center;
  margin-left: $paddingHuge;
}

.create-background {
  position: fixed;
  background-color: $primary-black;
  left: 0;
  height: 100vh;
  opacity: 60%;
  width: 100%;
  z-index: 1;
}

</style>
