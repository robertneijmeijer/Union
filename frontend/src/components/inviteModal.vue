<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <h3 class="text-white">
<!--          TODO: Translation-->
          Invite new member
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
          <a>https://union-project.atlassian.net/secure/RapidBoard.jspa?rapidView=2&projectKey=UN&selectedIssue=UN-114</a>
          <button class="btn btn-primary union-button-medium">
            Copy Link
          </button>
        </div>
      </section>

      <div class="modal-footer">
        <p>
         You have X invites left
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "inviteModal",
  methods: {
    close() {
      this.$emit('close');
    },
  },

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
