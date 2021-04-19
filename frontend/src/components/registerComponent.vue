<template>
  <div class="container">
    <div class="d-flex justify-content-center h-100">
      <div class="card">
        <div class="card-header">
          <h5 class="registerTitle">{{ $t("register.sign_up") }}</h5>
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
                  placeholder="$t('register.username')"
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
                  placeholder="$t('register.email')"
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
                  placeholder="$t('register.password')"
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
                  placeholder="$t('register.password_confirm')"
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
                  {{ $t("register.register") }}
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-center links">
            {{ $t("register.already_member") }}<a class="linkText" v-on:click="toLogin" href=""
          >{{ $t("register.sign_in") }}</a
          >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import router from "@/router";
import {ActionTypes} from "@/actions/user";
import {sha256} from "js-sha256";
import {useI18n} from "vue-i18n";

export default {
  name: "registerComponent",
  methods: {
    setup() {
      const {t} = useI18n({
        inheritLocale: true,
        useScope: "local",
      });

      return {t};
    },
    toLogin: function () {
      router.push("login");
    },

    submit: function (event) {
      event.preventDefault();

      // TODO Implement form handling in later ticket after dicussion
      if (this.password !== this.password_confirm) {
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
