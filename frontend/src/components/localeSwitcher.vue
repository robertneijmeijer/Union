<template>
  <div>
    <select class="locale-switcher" v-model="$i18n.locale">
      <option value="en">English</option>
      <option value="nl">Nederlands</option>
    </select>
  </div>
</template>

<script>

export default {
  name: "localeSwitcher",
};
</script>

<style lang="scss" scoped>
@import "../assets/theme";

.locale-switcher{
  background-color: $buttonHoverColor;
  color: white;
}
</style>