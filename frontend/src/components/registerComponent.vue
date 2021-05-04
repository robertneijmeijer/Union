<template>
  <div class="container">
    <div class="d-flex justify-content-center h-100">
      <div class="card">
        <div class="card-header">
          <h5 class="registerTitle">{{ $t("register.sign_up") }}</h5>
        </div>
        <div class="card-body">
          <form>
            <div v-if="formErrors.username" class="error-message overpass" role="alert">
              {{ formErrors.username }}
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"
                      v-bind:class="{ 'error-input': formErrors.username }">
                  <i class="fa fa-user fa-lg center black"></i>
                </span>
              </div>
              <input
                  type="text"
                  name="username"
                  class="form-control input"
                  v-bind:placeholder="$t('register.username')"
                  v-model="username"
                  v-on:focusout="onUsernameFocusout"
              />
            </div>
            <div v-if="formErrors.email" class="error-message overpass" role="alert">
              {{ formErrors.email }}
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text white"
                      v-bind:class="{ 'error-input': formErrors.email }"
                ><i class="fa fa-envelope fa-lg unique"></i
                ></span>
              </div>
              <input
                  type="text"
                  name="mail"
                  class="form-control input"
                  v-bind:placeholder="$t('register.email')"
                  v-model="email"
                  v-on:focusout="onEmailFocusout"
              />
            </div>
            <div v-if="formErrors.password" class="error-message overpass" role="alert">
              {{ formErrors.password }}
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text black"
                      v-bind:class="{ 'error-input': formErrors.password }"
                ><i class="fa fa-lock fa-lg center"></i
                ></span>
              </div>
              <input
                  type="password"
                  name="pwd"
                  class="form-control input"
                  v-bind:placeholder="$t('register.password')"
                  v-model="password"
              />
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text black"
                      v-bind:class="{ 'error-input': formErrors.password }"
                ><i class="fa fa-lock fa-lg center"></i
                ></span>
              </div>
              <input
                  type="password"
                  name="pwd_repeat"
                  class="form-control input"
                  v-bind:placeholder="$t('register.password_confirm')"
                  v-model="pwd_repeat"
              />
            </div>
            <div class="form-group">
              <div class="centerButton">
                <button
                    class="btn btn-primary register_btn"
                    type="submit"
                    name="login-button"
                    v-on:click="submit"
                >
                  {{ $t("register.register") }}
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-center links">
            {{
              $t("register.already_member")
            }}<a class="link-text" v-on:click="toLogin" href="">{{
              $t("register.sign_in")
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import router from "@/router";
import {ActionTypes} from "@/actions/user";
import {MutationTypes as FormMutations} from "@/mutations/form";
import {sha256} from "js-sha256";
import {FORM_ID} from "@/store/modules/form";
import { i18n } from "@/main";

const {mapFields} = require("vuex-map-fields");

const formFields = ['username', 'email', 'password', 'password_confirm']

export default {
  name: "registerComponent",
  computed: {
    // Map get() and set(value) for form
    ...mapFields(formFields.map(field => `fields.${field}`)),
    formErrors() {
      return this.$store.state.form.errors;
    },
  },
  // Init Form
  created() {
    this.$store.commit(FormMutations.FORM_INIT, {
      formId: FORM_ID.REGISTER,
      fields: formFields
    })
  },
  data() {
    return {
      prevUsername: "",
      prevEmail: ""
    }
  },
  // Unmount Form
  unmounted() {
    this.$store.commit(FormMutations.FORM_DESTROY)
  },
  methods: {
    toLogin: function () {
      router.push("login");
    },
    onUsernameFocusout: function () {
      if (!this.username || this.username === "" || this.username === this.prevUsername) return
      this.$store.commit(FormMutations.FORM_UNSET_ERROR, "username");
      this.$store.dispatch(ActionTypes.REGISTER_ACTION_VALIDATE, {username: this.username, email: this.email});
      this.prevUsername = this.username
    },
    onEmailFocusout: function () {
      if (!this.email || this.email === "" || this.email === this.prevEmail) return
      this.$store.commit(FormMutations.FORM_UNSET_ERROR, "email");
      this.$store.dispatch(ActionTypes.REGISTER_ACTION_VALIDATE, {username: this.username, email: this.email});
      this.prevEmail = this.email
    },
    submit: function (event) {
      event.preventDefault()

      if (this.password !== this.pwd_repeat) {
        this.$store.commit(
            FormMutations.FORM_SET_ERROR,
            {key: "password", value: i18n.global.t("register.errors.passwords_do_not_match")});
        return;
      }

      const hashed = sha256(this.password);
      const formValues = {
        username: this.username,
        email: this.email,
        password: hashed,
      };

      this.$store.dispatch(ActionTypes.REGISTER_ACTION_SUBMIT, formValues);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/theme";

.error-input {
  background-color: $errorColor !important;
}

.error-message {
  margin-bottom: $paddingSmall / 3;
}

.container {
  height: 100%;
  align-content: center;
}

.black {
  color: black;
}

.white {
  color: white;
}

.unique {
  margin-left: 3px;
  color: black;
}

.card {
  height: 410px;
  margin-top: auto;
  margin-bottom: auto;
  width: 400px;
  background-color: $primary-black;
}

.registerTitle {
  color: white;
  text-align: center;
  margin-top: 10px;
  user-select: none;
}

.card-header h3 {
  color: white;
}

.social_icon {
  position: absolute;
  right: 20px;
  top: -45px;
}

.input-group-prepend span {
  width: 50px;
  background-color: $unionBlue;
  color: black;
  border: 0 !important;
}

input:focus {
  outline: 0 0 0 0 !important;
  box-shadow: 0 0 0 0 !important;
}

.remember {
  color: white;
}

.remember input {
  width: 20px;
  height: 20px;
  margin-left: 15px;
  margin-right: 5px;
}

.centerButton {
  width: 100%;
  text-align: center;
}

.register_btn {
  color: white;
  width: $buttonwidth;
  border-radius: $borderRadius;
  border: $buttonBorder $unionBlue;
  background: transparent;
  margin-top: 10px;

  &:hover {
    background-color: $primary-black;
    border: $buttonBorder $primary-black;
  }
}

.links a {
  margin-left: 4px;
}

.link-text {
  color: white;
}

.center {
  margin-left: 6px;
}
</style>
