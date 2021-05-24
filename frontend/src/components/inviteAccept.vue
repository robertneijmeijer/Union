<template>
  <div class="invite-container invite-center">
    <div class="invite-card">
      <div v-if="!invite.fetching">
        <div v-if="invite.status_code === 404 || invite.status === 'accepted'">
          <div class="invite-center">
            <div class="invite-error-text">{{ $t("invite.invalid") }}</div>
          </div>
        </div>
        <div v-else-if="invite.status_code === 200">
          <div class="invite-center">
            <img
              v-bind:src="invite.union.banner || 'test'"
              alt="Responsive banner"
              class="invite-banner"
            />
            <div class="invite-overlay">
              <!--            TODO: Check if banner / icon is available and do if check-->
              <img
                v-bind:src="invite.union.icon"
                alt="Responsive icon"
                class="invite-icon"
              />
              <p class="invite-union-name">{{ invite.union.name }}</p>
            </div>
          </div>
          <div class="invite-center">
            <div class="invite-row">
              <p class="invite-text">{{ invite.invite_creator.username }}</p>
              <p class="invite-text">{{ $t("invite.invited") }}</p>
              <p class="invite-text">{{ invite.union.name }}</p>
            </div>
            <div class="invite-buttons">
              <button
                class="btn btn-primary invite-button"
                v-on:click="accept()"
              >
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
        <div v-else>
          <div class="invite-center">
            <div class="invite-error-text">
              {{ $t("global.generalized_error_message") }}
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <spinner size="large"></spinner>
      </div>
    </div>
  </div>
</template>

<script>
import { ActionTypes } from "@/actions/invite";
import router from "@/router";
import Spinner from "@/components/spinner";

export default {
  name: "inviteAccept",
  components: { Spinner },
  computed: {
    invite() {
      return this.$store.state.invite;
    },
  },
  data() {
    return {
      id: null,
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.$store.dispatch(ActionTypes.INVITE_GET_INFO, {
      invite_token: this.id,
    });
  },
  methods: {
    accept: function() {
      this.$store.dispatch(ActionTypes.INVITE_ACCEPT, {
        invite_token: this.id,
      });
    },
    decline: function() {
      router.push(`/`);
    },
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
  max-width: 1100px;
  min-width: 700px;
  background-color: $secondary-gray;
  border-radius: $borderRadiusSmall;
  padding: ($paddingMedium * 2) ($paddingMedium * 3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.invite-banner {
  max-width: 900px;
  width: 100%;
  max-height: 200px;
  height: 100%;
  border-radius: $borderRadiusSmall;
}

.invite-text {
  font-size: 36px;
  font-family: "Overpass-SemiBold", serif;
  color: white;
  padding-top: $paddingMedium;
  margin-top: $paddingLarge;
  margin-bottom: $paddingSmall;
  margin-left: $paddingSmall;
}

.invite-error-text {
  @extend .invite-text;
  margin: $paddingMedium;
  padding: 0;
  text-align: center;
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
