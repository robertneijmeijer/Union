<template>
  <div class="container">
    <div class="d-flex justify-content-center h-100">
      <div class="card">
        <div class="card-header">
          <h5 class="registerTitle">Sign up to Union</h5>
        </div>
        <div class="card-body">
          <form>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fa fa-user fa-lg center black"></i>
                </span>
              </div>
              <input
                type="text"
                name="uid"
                class="form-control input"
                placeholder="Enter Username"
                v-model="username"
              />
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text white"
                  ><i class="fa fa-envelope fa-lg unique"></i
                ></span>
              </div>
              <input
                type="text"
                name="mail"
                class="form-control input"
                placeholder="Enter Email"
                v-model="email"
              />
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text black"
                  ><i class="fa fa-lock fa-lg center"></i
                ></span>
              </div>
              <input
                type="password"
                name="pwd"
                class="form-control input"
                placeholder="Enter Password"
                v-model="password"
              />
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text black"
                  ><i class="fa fa-lock fa-lg center"></i
                ></span>
              </div>
              <input
                type="password"
                name="pwd-repeat"
                class="form-control input"
                placeholder="Repeat Password"
                v-model="password_confirm"
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
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-center links">
            Already a member?<a class="linkText" v-on:click="toLogin" href=""
              >Sign In</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import router from "@/router";
// import { ActionTypes } from "@/actions/user";
import {MutationTypes as FormMutations} from "@/mutations/form";
// import { sha256 } from "js-sha256";
// import {mapFormFields} from "@/helpers/form";
import {FORM_ID} from "@/store/modules/form";

const {mapFields} = require("vuex-map-fields");

const formFields = ["username", "email", "password", "password_confirm"]

// https://github.com/maoberlehner/vuex-map-fields

export default {
  name: "registerComponent",
  computed: {
    // Map get() and set(value) for form
    ...mapFields(formFields.map(field => `fields.${field}`)),
  },
  // Init Form
  created() {
    this.$store.commit(FormMutations.FORM_INIT, {
      formId: FORM_ID.REGISTER,
      fields: formFields
    })
  },
  // Unmount Form
  unmounted() {
    this.$store.commit(FormMutations.FORM_DESTROY)
  },
  methods: {
    toLogin: function () {
      router.push("login");
    },

    submit: function (event) {
      event.preventDefault()

      console.log(this.$store.state.form)
      // console.log(FORM_ID.REGISTER)

      // // TODO Implement form handling in later ticket after discussion
      // if (this.password !== this.password_confirm) {
      //   return;
      // }
      //
      // const hashed = sha256(this.password);
      // const formValues = {
      //   username: this.username,
      //   email: this.email,
      //   password: hashed,
      // };
      //
      //
      // this.$store.dispatch(ActionTypes.REGISTER_ACTION_SUBMIT, formValues);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/theme";

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
  background-color: $buttonHoverColor;
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
    background-color: $buttonHoverColor;
    border: $buttonBorder $buttonHoverColor;
  }
}

.links a {
  margin-left: 4px;
}

.linkText {
  color: white;
}

.center {
  margin-left: 6px;
}
</style>
