<template>
  <div class="create-card">
    <p>Create post</p>
    <div>
      <p>Title</p>
      <input
          type="text"
          name="title"
          class="form-control input"
          v-bind:placeholder="$t('register.email')"
          v-model="title"/>
    </div>
    <div>
      <p>Content</p>
      <input
          type="text"
          name="content"
          class="form-control input"
          v-bind:placeholder="$t('register.email')"
          v-model="content"/>
    </div>
  </div>
</template>

<script>
export default {
  name: "createPostComponent",
}
</script>

<style lang="scss" scoped>
@import "../assets/theme";

.create-card {

}

</style>
