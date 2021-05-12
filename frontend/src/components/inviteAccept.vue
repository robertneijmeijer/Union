<template>
  <div class="invite-container invite-center">
    <div class="invite-card">
      <div class="invite-center">
        <img
          v-bind:src="getImage(invite.banner)"
          alt="Responsive banner"
          class="invite-banner"
        />
        <div class="invite-overlay">
          <img
            v-bind:src="getImage(invite.icon)"
            alt="Responsive icon"
            class="invite-icon"
          />
          <p class="invite-union-name">{{ invite.union }}</p>
        </div>
      </div>
      <div class="invite-center">
        <div class="invite-row">
          <p class="invite-text">{{ invite.user }}</p>
          <p class="invite-text">{{ $t("invite.invited") }}</p>
          <p class="invite-text">{{ invite.union }}</p>
        </div>
        <div class="invite-buttons">
          <button class="btn btn-primary invite-button" v-on:click="accept()">
            {{ $t("invite.accept") }}
          </button>
          <button
            class="btn btn-primary invite-button invite-button-decline"
            v-on:click="decline()"
          >
            {{ $t("invite.decline") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
function getImage(path) {
  return require(`../assets/img/${path}`);
}

function accept() {}

function decline() {}

export default {
  name: "inviteAccept",
  props: {
    invite: {
      user: String,
      union: String,
      banner: String,
      icon: String,
    },
  },
  methods: {
    accept,
    decline,
    getImage,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/theme";

.invite-container {
  height: 80%;
  width: 100%;
}

.invite-center {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.invite-card {
  max-height: 500px;
  height: 100%;
  max-width: 1000px;
  width: 100%;
  background-color: $secondary-gray;
  border-radius: $borderRadiusSmall;
}

.invite-banner {
  max-width: 900px;
  width: 100%;
  max-height: 200px;
  height: 100%;
  border-radius: $borderRadiusSmall;
  margin-top: $paddingHuge;
}

.invite-text {
  font-size: 36px;
  font-family: "Overpass-SemiBold";
  color: white;
  padding-top: $paddingMedium;
  margin-top: $paddingLarge;
  margin-bottom: $paddingSmall;
  margin-left: $paddingSmall;
}

.invite-icon {
  max-width: 76px;
  max-height: 76px;
  width: 100%;
  height: 100%;
  left: 10%;
  top: 50%;
  transform: translate(-400%, -50%);
  margin-top: $paddingMedium;
}

.invite-union-name {
  color: white;
  font-size: 24px;
  margin-top: $paddingMedium * 1.5;
  left: 10%;
  top: 50%;
  transform: translate(-170%, -40%);
  user-select: none;
}

.invite-overlay {
  display: flex;
  position: absolute;
}

.invite-buttons {
  display: flex;
  flex-direction: row;
  padding-top: $paddingHuge;
}

.invite-button {
  max-width: 150px;
  border-radius: $borderRadius;
  border: $buttonBorder $unionBlue;
  color: white;
  background: transparent;
  font-size: 24px;
  border-radius: $borderRadius;
  margin-left: $paddingHuge;
  margin-right: $paddingHuge;
}

.invite-button-decline {
  border: $buttonBorder $errorColor;
}

.invite-row {
  display: flex;
  flex-direction: row;
}
</style>
