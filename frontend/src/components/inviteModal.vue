<template>
  <div class="modal-backdrop">
    <div class="modal border-for-div">
      <header class="modal-header">
        <h3 class="text-white">
          {{ $t("invite.invite_new_member") }}
        </h3>
        <button type="button" class="btn-close" @click="close">X</button>
      </header>

      <section class="modal-body">
        <div class="link-copy-container">
          <div v-if="invites && invites.invites.length > 0">
            <a>{{ setupLink(invites.invites[0].token) }}</a>
            <button class="btn btn-primary union-button-medium" @click="copyLink">
              {{ $t("invite.copy_link") }}
            </button>
          </div>
          <p v-else-if="stateErrors">{{ stateErrors }}</p>
          <spinner v-else size="medium"></spinner>
        </div>
      </section>

      <div v-if="invites && invites.invites_left != null" class="modal-footer">
        <p>{{ inviteText() }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ActionTypes } from "@/actions/union";
import Spinner from "@/components/spinner";
import { i18n } from "@/main";

export default {
  name: "inviteModal",
  components: { Spinner },
  computed: {
    stateErrors() {
      return this.$store.state.union.errors;
    },
    invites() {
      return this.$store.state.union.invites;
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
    setupLink: function (token) {
      return window.location.origin + `/union/invite/accept/${token}`;
    },
    inviteText() {
      return i18n.global
          .t("invite.invites_left")
          .replace("%s", this.invites.invites_left)
          .replace("%ss", this.invites.invites_left > 1 ? "s" : "");
    },
    copyLink() {
      // https://stackoverflow.com/questions/33855641/copy-output-of-a-javascript-variable-to-the-clipboard
      const dummy = document.createElement("textarea");
      document.body.appendChild(dummy);
      dummy.value = this.setupLink(this.invites.invites[0].token)
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
    }
  },
  created() {
    this.$store.dispatch(
      ActionTypes.UNION_INVITES_FETCH,
      this.$route.params.unionName
    );
  },
};
</script>

<style lang="scss">
@import "../assets/theme";

.modal-backdrop {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
}

.modal {
  max-width: 50%;
  height: auto;
  background: $primary-black;
  box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  color: #4aae9b;
  justify-content: center;
  border: unset !important;
}

.modal-footer {
  flex-direction: column;
  justify-content: flex-end;
  border: unset !important;
  color: $inputTextfielColor;

  p {
    margin: unset;
  }
}

.modal-body {
  position: relative;
  padding: 15px 10px;
}

.btn-close {
  position: absolute;
  top: 0;
  right: $paddingSmall;
  border: none;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.link-copy-container {
  text-align: center;

  a {
    max-width: 400px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 $paddingMedium;
    color: $unionGreen !important;
  }
}
</style>
