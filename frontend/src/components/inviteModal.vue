<template>
  <div class="modal-backdrop">
    <div class="modal border-for-div ">
      <header class="modal-header">
        <h3 class="text-white">
          <!--          TODO: Translation-->
          Invite new member
          <!--          <div class="text-white"> {{ errorState.errors }}</div>-->

        </h3>
        <button
            type="button"
            class="btn-close"
            @click="close"
        >
          X
        </button>
      </header>

      <section class="modal-body">
        <div class="link-copy-container">
          <div v-if="invites && invites.invites.length > 0">
            <a>{{ setupLink(invites.invites[0].token) }}</a>
            <button class="btn btn-primary union-button-medium">
              <!--            TODO: Logic-->
              Copy Link
            </button>
          </div>
          <spinner v-else size="medium"></spinner>
        </div>
      </section>

      <div class="text-white">
        {{stateErrors}}
      </div>


      <div v-if="invites" class="modal-footer">
        <p>
          You have {{ invites.invites_left }} invites left
        </p>
      </div>
    </div>

    <div class="text-white"> {{ invites }}</div>
  </div>
</template>

<script>
import {ActionTypes} from "@/actions/union";
import Spinner from "@/components/spinner";
import {mapState} from "vuex"

export default {
  name: "inviteModal",
  components: {Spinner},
  computed: {
    stateErrors () {
      console.log("Computed")
      console.log(this.$store.getters.unionErrorState)
      return this.$store.getters.unionErrorState
    },
    ...mapState({
      invites: state => state.union.invites,
      stateErrors2: state => state.union.errors
    })
  },
  methods: {
    close() {
      this.$emit('close');
    },
    setupLink: function (token) {
      return window.location.origin + `/union/invite/accept/${token}`;
    }
  },
  created() {
    this.unionName = this.$route.params.unionName;
    this.$store.dispatch(ActionTypes.UNION_GET_CURRENT_INVITES, this.unionName);
  }
}
</script>

<style lang="scss">
@import "../assets/theme";

.link-copy-container {
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    max-width: 400px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0 $paddingMedium;
    color: $unionGreen !important;
  }
}

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
  box-shadow: 2px 2px 20px 1px rgba(0,0,0,.1);
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
  color: #4AAE9B;
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
  color: #4AAE9B;
  background: transparent;
}
</style>
