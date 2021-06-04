<template>
  <div class="community border-for-div">
    <p class="community-title">{{ $t("union_overview.community-info") }}</p>
    <p class="community-about">{{ about }}</p>
    <div class="community-info">
      <p class="community-members">
        152k <span>{{ $t("union_overview.members") }}</span>
      </p>
      <p class="community-online">
        195
        <span>{{ $t("union_overview.online-members") }}</span>
      </p>
    </div>
    <p>{{ $t("union_overview.created") }} 18 dec. 2008</p>
    <button class="community-btn-create-post" v-on:click="toggleCreatePost">
      {{ $t("union_overview.create-post") }}
    </button>
    <button class="community-btn-invite" @click="showModal = true">
      {{ $t("union_overview.invite-members") }}
    </button>
    <invite-modal v-if="showModal" @close="showModal = false" />
  </div>
</template>

<script>

import InviteModal from "@/components/inviteModal";

export default {
  name: "union-about-community",
  components: { InviteModal },
  methods: {
    toggleCreatePost() {
      this.$emit("callbackToggleCreatePost");
    },
  },
  data() {
    return {
      showModal: false,
    }
  },
  props: {
    about: { type: String, required: true },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/theme";

$whiteWithOpacity: rgba(
  $color: #ffffff,
  $alpha: 0.6,
);

// Ergens is de margin gezet voor alles, wat bad practice is.
// Kan ook bootstrap zijn met z'n rare dingen: .
// Kan niet uitvinden waar dit zou zijn.
* {
  margin: 0;
}

.community {
  display: flex;
  flex-direction: column;
  background-color: #1a1a1b;
  padding: 1rem;

  p {
    color: white;
  }
}

.community-title {
  color: $whiteWithOpacity !important;
  margin-bottom: 2em;
}

.community-about {
  margin-bottom: 1em;
}

.community-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 1px solid $whiteWithOpacity;
  padding-bottom: 0.5em;
  margin-bottom: 1em;

  span {
    display: block;
  }
}

.community-members {
  grid-column-start: 1;
  grid-column-end: 1;
}

.ommunity-online {
  grid-column-start: 2;
  grid-column-end: 2;
}

.community button {
  padding: 0.5rem;
  margin-top: 1rem;
}

.community-btn-create-post {
  background-color: $primary-btn;
  border-radius: $borderRadius;
  font-weight: bold;

  &:hover,
  &:active,
  &:focus {
    background-color: $primary-btn-hover;
    outline: none;
  }
}

.community-btn-invite {
  background-color: transparent;
  border: 1px solid $primary-btn;
  color: $primary-btn;
  font-weight: bold;
  border-radius: $borderRadius;

  &:hover,
  &:active,
  &:focus {
    border-color: $primary-btn-hover;
    color: $primary-btn-hover;
    outline: none;
  }
}
</style>
