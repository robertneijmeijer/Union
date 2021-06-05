<template>
  <select class="locale-switcher" v-model="$i18n.locale">
    <option :value="locale.code" v-for="locale in locales" :key="locale.code">
      {{ locale.name }}
    </option>
  </select>
</template>

<script>
import { getSupportedLocales } from "../i18n/supported-locales";

export default {
  name: "localeSwitcher",
  data() {
    return {
      locales: getSupportedLocales(),
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/theme";

.locale-switcher {
  margin: 0 !important;
  border: 0;
  background-color: transparent;
  cursor: pointer;

  option {
    background-color: $primary-black;
  }
}
</style>
