<template>
  <div class="union-grid border-for-div">
    <h2>{{ $t("union-overview.home") }}</h2>
    <div id="union" class="union-section">
      <div
        class="union-section-post-comment"
        v-for="union in unions"
        v-bind:key="union.id"
      >
        <UnionListItem :unions-array="union" />
      </div>
    </div>
  </div>
</template>

<script>
import UnionListItem from "../components/unionListItem.vue";

export default {
  name: "unionDashboard",
  components: { UnionListItem },
  props: {
    unions: Array,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/theme";

@media only screen and (max-width: 1000px) {
  #union {
    grid-template-columns: 100fr;
  }
}

h2 {
  color: white;
  padding-top: 8px;
  text-align: center;
}

.union-grid {
  background-color: $primary-gray;
  margin: 40px 40px 0 40px;
}

.union-section {
  display: grid;
  grid-template-columns: 33fr 33fr 33fr;
  gap: 1rem;
  padding: 2em;
  column-gap: 1em;
  max-width: 100em;
}

.union-section-post-comment {
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-bottom: 1em;
  background-color: $primary-gray;
}
</style>
