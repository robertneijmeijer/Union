<template>
  <div class="container">
    <div class="d-flex justify-content-center h-100">
      <div class="card">
        <div class="card-header">
          <h5 class="loginTitle">{{ $t("login.sign_in_union") }}</h5>
        </div>
        <div class="card-body">
          <form action="" method="post">
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i style="color: black" class="fa fa-user fa-lg center"></i>
                </span>
              </div>
              <input
                type="text"
                name="usernameId"
                class="form-control input"
                v-bind:placeholder="$t('login.username')"
              />
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text"
                  ><i style="color: black" class="fa fa-lock fa-lg center"></i
                ></span>
              </div>
              <input
                type="password"
                name="passwordId"
                class="form-control input"
                v-bind:placeholder="$t('login.password')"
              />
            </div>
            <div class="row align-items-center remember">
              <input type="checkbox" />{{ $t("login.remember_me") }}
            </div>
            <div class="form-group">
              <div class="text-center loginbtn">
                <button
                  class="btn btn-primary login "
                  type="submit"
                  name="login-button"
                >
                  {{ $t("login.sign_in") }}
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-center links">
            {{ $t("login.dont_have_account") }}
            <a class="linkText" href="" v-on:click="toSignUp">
              {{ $t("login.sign_up") }}</a
            >
          </div>
          <div class="d-flex justify-content-center">
            <a class="linkText" href="#">{{ $t("login.forgot_password") }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";

export default {
  name: "login",
  methods: {
    toSignUp: function() {
      router.push("register");
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
}

.card {
  height: 370px;
  margin-top: auto;
  margin-bottom: auto;
  width: 400px;
  background-color: $buttonHoverColor;
}

.card-body {
  padding: 0;
  margin: 10px 15px 0 15px;
}

.loginbtn {
  margin-top: 30px;
  margin-bottom: 0;
}

.login {
  width: 120px;
  border-radius: $borderRadius;
  border: $buttonBorder $unionBlue;
  color: white;
  background: transparent;

  &:hover {
    background-color: $buttonHoverColor;
    border: $buttonBorder $buttonHoverColor;
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
}

.remember input {
  width: 20px;
  height: 20px;
  margin-left: 15px;
  margin-right: 5px;
}

.links {
  color: $inputTextfielColor;
  user-select: none;
}

.links a {
  margin-left: 4px;
}

.linkText {
  color: white;
  user-select: none;
}
</style>
