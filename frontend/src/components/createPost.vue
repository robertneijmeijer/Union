<template>
    <div class="create-container create-center">
      <div class="create-card">
        <p class="create-title create-center">{{ $t("create_post.title") }}</p>
        <div>
          <p class="create-text">{{ $t("create_post.post_title") }}</p>
          <input
              type="text"
              name="title"
              class="create-input input create-title-input"
              v-model="title"/>
        </div>
        <div class="create-row">
          <div>
            <p class="create-text">{{ $t("create_post.post_content") }}</p>
            <textarea
                type="text"
                name="content"
                class="create-input create-content-input input"
                v-model="content"/>
          </div>
          <div class="create-column">
            <p class="create-text">{{ $t("create_post.image") }}</p>
            <div class="create-circle">
              <img src="../assets/svg/imageIcon.svg"
                   v-on:click="uploadImage()"
                   alt="image Icon">
            </div>
          </div>
        </div>
        <div class="create-buttons">
          <button class="btn btn-primary create-button" v-on:click="post()">
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
export default {
  name: "createPostComponent",
  mounted() {
    document.documentElement.style.overflow = null
  },
  methods: {
    post: function () {
      this.toggleCreatePost();
    },
    uploadImage: function () {
    },
    discard: function () {
      this.toggleCreatePost();
    },
    toggleCreatePost() {
      this.$emit("callbackToggleCreatePost");
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/theme";

.create-container {
  position: absolute;
  z-index: 2;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
}

.create-card {
  align-content: center;
  background-color: $primary-black;
  border-radius: $borderRadius;
  max-height: 1400px;
  max-width: 800px;
  width: 100%;
}

.create-title {
  font-size: 36px;
  color: white;
  padding-top: $paddingMedium;
}

.create-title-input {
  max-width: 350px;
  width: 100%;
}

.create-text {
  font-size: 24px;
  color: white;
  padding-top: $paddingHuge;
  padding-left: $paddingHuge;
  padding-right: $buttonwidth * 2.5;
}

.create-input {
  margin-left: $paddingHuge;
  max-width: 700px;
  width: 45%;
  background-color: #232323;
  border-radius: $borderRadiusInput;
  border: 3px solid $inputTextFieldBorderColor;
  color: #c8c8c8;
}

.create-content-input {
  max-height: 300px;
  min-height: 100px;
  max-width: 350px;
  width: 100%;
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
  position: absolute;
  background-color: $primary-black;
  opacity: 60%;
  width: 100%;
  z-index: 1;
  height: 100%;
}

</style>
