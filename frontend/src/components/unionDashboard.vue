<template>
  <div class="union-grid border-for-div">
    <h2>{{ $t("union-overview.home") }}</h2>
    <div v-if="isFetching">
      <spinner size="large"></spinner>
    </div>
    <div v-else-if="!isFetching">
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
  </div>
</template>

<script>
import UnionListItem from "../components/unionListItem.vue";
import spinner from "@/components/spinner";

export default {
  name: "unionDashboard",
  components: { UnionListItem, spinner },
  props: {
    unions: Array,
    isFetching: Boolean,
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
  padding-top: $paddingMedium;
  text-align: center;
}

.union-grid {
  background-color: $primary-gray;
  margin: 40px 40px 0 40px;
}

.union-section {
  display: grid;
  grid-template-columns: 33fr 33fr 33fr;
  gap: 1em;
  padding: 2em;
}

.union-section-post-comment {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1em;
  background-color: $primary-gray;
  transition: $transition;

  &:hover {
    transform: $transform;
  }
}
</style>
