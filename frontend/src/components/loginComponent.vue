<template>
  <div class="container">
    <div class="d-flex justify-content-center h-100">
      <div class="card">
        <div class="card-header overpass-semi-bold">
          <h5 class="loginTitle">{{ $t("login.sign_in_union") }}</h5>
        </div>
        <div class="card-body">
          <div class="input-group form-group">
            <div class="input-group-prepend">
              <span
                class="input-group-text"
                v-bind:class="{ 'error-input': errorValue }"
              >
                <i style="color: #2c2c2c" class="fa fa-user fa-lg center"></i>
              </span>
            </div>
            <input
              type="text"
              name="usernameId"
              class="form-control input overpass-semi-bold"
              v-bind:placeholder="$t('login.username')"
              v-model="username"
            />
          </div>

          <div class="error-message overpass" role="alert">
            {{ errorValue }}
          </div>

          <div class="input-group form-group">
            <div class="input-group-prepend">
              <span
                class="input-group-text"
                v-bind:class="{ 'error-input': errorValue }"
                ><i style="color: #2c2c2c" class="fa fa-lock fa-lg center"></i
              ></span>
            </div>
            <input
              type="password"
              name="passwordId"
              class="form-control input overpass-semi-bold"
              v-bind:placeholder="$t('login.password')"
              v-model="password"
            />
          </div>

          <div class="form-group">
            <div class="text-center loginbtn">
              <button
                class="btn btn-primary login"
                type="submit"
                name="login-button"
                v-on:click="signIn"
              >
                {{ $t("login.sign_in") }}
              </button>
            </div>
            <div class="row align-items-center remember overpass gray">
              <input type="checkbox" class="checkbox" />{{
                $t("login.remember_me")
              }}
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-center links overpass">
            {{ $t("login.dont_have_account") }}

            <a class="link-text overpass" href="" v-on:click="toSignUp">
              {{ $t("login.sign_up") }}</a
            >
          </div>
          <div class="d-flex justify-content-center">
            <a class="link-text overpass" href="#">{{
              $t("login.forgot_password")
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { sha256 } from "js-sha256";
import { ActionTypes } from "@/actions/user";

export default {
  computed: {
    errorValue() {
      return this.$store.state.user.errors["general"];
    },
  },
  methods: {
    toSignUp: function() {
      router.push("register");
    },
    signIn: function(e) {
      e.preventDefault();
      const hashed = sha256(this.password);
      const user = {
        user: {
          username: this.username,
          password: hashed,
        },
      };
      this.$store.dispatch(ActionTypes.LOGIN_ACTION_SUBMIT, user);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/theme";

.container {
  height: 100%;
  align-content: center;
}

.loginTitle {
  color: white;
  text-align: center;
  margin-top: 10px;
  user-select: none;
  font-size: 24px;
}

.card {
  height: 440px;
  margin-top: auto;
  margin-bottom: auto;
  max-width: 450px;
  width: 100%;
  background-color: $primary-black;
  border-radius: 20px;
}

.card-body {
  padding: 0;
  margin: 10px 30px 0 30px;
}

.card-header {
  border: none;
}

.checkbox {
  position: relative;
  width: 1.5em;
  height: 1.5em;
  color: black;
  border: 1px solid gray;
  border-radius: 4px;
  appearance: none;
  outline: 0;
  cursor: pointer;
  transition: background 175ms cubic-bezier(0.1, 0.1, 0.25, 1);
  &::before {
    position: absolute;
    content: "";
    display: block;
    top: 2px;
    left: 7px;
    width: 8px;
    height: 14px;
    border-style: solid;
    border-color: $primary-black;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    opacity: 0;
  }
  &:checked {
    color: $primary-black;
    border-color: $unionBlue;
    background: $unionBlue;
    &::before {
      opacity: 1;
    }
    ~ label::before {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }
}

.card-footer {
  border: none;
}

.loginbtn {
  margin-top: 30px;
  margin-bottom: 0;
}

.login {
  max-width: 150px;
  width: 100%;
  border-radius: $borderRadius;
  border: $buttonBorder $unionBlue;
  color: white;
  background: transparent;
  margin-top: 10%;

  &:hover {
    background-color: $primary-black;
    border: $buttonBorder $primary-black;
  }
}

.card-header h3 {
  color: white;
}

.input-group-prepend span {
  width: 50px;
  background-color: $unionBlue;
  color: black;
  border: 0 !important;
}

.center {
  margin-left: 6px;
}

input:focus {
  outline: 0 0 0 0 !important;
  box-shadow: 0 0 0 0 !important;
}

.form-control {
  background-color: #232323;
  border: none;
}

.remember {
  color: white;
  user-select: none;
  justify-content: center;
  margin-top: 5%;
}

.remember input {
  margin-left: 15px;
  margin-right: 10px;
}

.links {
  color: $inputTextfielColor;
  user-select: none;
}

.links a {
  margin-left: 4px;
}

.link-text {
  color: white;
  user-select: none;
}

.error-message {
  color: $errorColor;
}

.error-input {
  background-color: $errorColor !important;
}

.overpass {
  font-family: Overpass, serif;
}

.overpass-semi-bold {
  font-family: Overpass-SemiBold, serif;
}

.form-control {
  background-color: #232323;
  border-radius: $borderRadiusInput;
  border: 3px solid $inputTextFieldBorderColor;
  color: #c8c8c8;
}
</style>
