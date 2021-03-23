<template>
  <div class="container">
    <div class="d-flex justify-content-center h-100">
      <div class="card">
        <div class="card-header">
          <h3 style="color: #ffffff;">Sign Up</h3>
        </div>
        <div class="card-body">
          <form ref="form">
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span style="color: white" class="input-group-text"
                ><i class="fa fa-user fa-lg center"></i
                ></span>
              </div>
              <input
                  type="text"
                  v-model="username"
                  class="form-control input"
                  placeholder="Enter Username"
              />
            </div>

            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span style="color: white" class="input-group-text"
                ><i
                    style="margin-left: 3px"
                    class="fa fa-envelope fa-lg center"
                ></i
                ></span>
              </div>
              <input
                  type="text"
                  v-model="email"
                  class="form-control input"
                  placeholder="Enter Email"
              />
            </div>

            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span style="color: white" class="input-group-text"
                ><i class="fa fa-lock fa-lg center"></i
                ></span>
              </div>
              <input
                  type="password"
                  v-model="password"
                  class="form-control input"
                  placeholder="Enter Password"
              />
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span style="color: white" class="input-group-text"
                ><i class="fa fa-lock fa-lg center"></i
                ></span>
              </div>
              <input
                  type="password"
                  v-model="password_confirm"
                  class="form-control input"
                  placeholder="Repeat Password"
              />
            </div>

            <div class="form-group">
              <button
                  class="btn btn-primary float-right"
                  type="submit"
                  name="login-button"
                  v-on:click="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
        <div class="card-footer">
          <div class="d-flex justify-content-center links">
            Already a member?<a href="">Sign In</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {actionTypes} from "@/actions/auth";

export default {
  name: "registerComponent",
  methods: {
    submit: function (event) {
      event.preventDefault()
      console.log({
        username: this.username,
        email: this.email,
        password: this.password,
        password_confirm: this.password_confirm

      })

      // TODO Validate values
      // TODO Hash values

      this.$store.dispatch(actionTypes.SUBMIT_REGISTER_ACTION, {email: this.email, password: this.password})

      //


    },

  }
};
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  align-content: center;
}

.card {
  height: 400px;
  margin-top: auto;
  margin-bottom: auto;
  width: 400px;
  background-color: rgba(0, 0, 0, 0.5) !important;
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
  background-color: #017bff;
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

.login_btn {
  color: white;
  background-color: #017bff;
  width: 100px;
  border: 2px solid #017bff;
}

.links a {
  margin-left: 4px;
}
</style>
