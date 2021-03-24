<template>
    <div class="container">
        <div class="d-flex justify-content-center h-100">
            <div class="card passwordCard">
                <div class="card-header">
                    <h5 class="title">Forgot password</h5>
                </div>
                <div class="card-body">
                    <form action="" method="post">
                        <div class="input-group form-group">
                            <div id="input" class="input-group-prepend emailInput">
                                <div class="input-group form-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text white"><i class="fa fa-envelope fa-lg unique"></i></span>
                                    </div>
                                    <input type="text" name="mail" class="form-control input" placeholder="Enter Email" />
                                </div>
                                <div>
                                    <div class="text-center align">
                                        <button class="btn btn-primary send">
                                            Send
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer footer">
                                <div class="footerText">
                                    <div class="d-flex justify-content-center center links">Don't have an account?<a class="linkText" v-on:click="toSignUp" href="">Sign Up</a></div>
                                    <div class="d-flex justify-content-center center links">Back to<a class="linkText" v-on:click="toLogin" href="">Login</a></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import router from "@/router";

  export default {
    name: "forgotPasswordComponent",
    methods: {
      toSignUp: function () {
        router.push("register");
      },
      toLogin: function () {
        router.push("login");
      },
    },
  };
</script>

<style lang="scss">
    @import "../assets/theme";

    .container {
        height: $fullWidth;
        align-content: center;
    }

    .title {
        color: white;
        text-align: center;
        margin-top: 10px;
        user-select: none;
    }

    .unique {
        margin-left: 2px;
        color: black;
    }

    .passwordCard {
        height: 210px;
        margin-top: auto;
        margin-bottom: auto;
        width: 600px;
        background-color: $buttonHoverColor;
    }

    .emailInput {
        width: $fullWidth;
    }

    .card-body {
        padding: 0;
        margin: 10px 15px 0 15px;
    }

    .align {
        margin-left: 20px;
    }

    .send {
        width: $buttonwidth;
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

    .form-control {
        background-color: #232323;
        border: none;
    }

    .footerText {
        width: $fullWidth;
    }

    .footer {
        width: $fullWidth;
    }

    .linkText {
        color: white;
    }
</style>
