<template>
    <div class="container">
        <div class="d-flex justify-content-center h-100">
            <div class="card">
                <div class="card-header">
                    <h3 style="color: white; ">Sign In</h3>
                </div>
                <div class="card-body">
                    <form action="" method="post">
                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                 <span class="input-group-text"><i style="color: white" class="fa fa-user fa-lg center"></i></span>
                            </div>
                            <input type="text" name="usernameId" class="form-control input" placeholder="username">
                        </div>
                        <div class="input-group form-group">
                            <div class="input-group-prepend">
                                 <span class="input-group-text"><i style="color: white"  class="fa fa-lock fa-lg center"></i></span>
                            </div>
                            <input type="password" name="passwordId" class="form-control input" placeholder="password">
                        </div>
                        <div class="row align-items-center remember">
                            <input type="checkbox">Remember Me
                        </div>
                        <div class="form-group">
                            <button class="btn btn-primary float-right" type="submit" name="login-button">Login</button>
                        </div>
                    </form>
                </div>
                <div class="card-footer">
                    <div class="d-flex justify-content-center links">
                        Don't have an account?<a href="">Sign Up</a>
                    </div>
                    <div class="d-flex justify-content-center">
                        <a href="#">Forgot your password?</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'login'
    }
</script>

<style lang="scss">
    @import 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
    @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';

    .container {
        height: 100%;
        align-content: center;
    }

    .card {
        height: 370px;
        margin-top: auto;
        margin-bottom: auto;
        width: 400px;
        background-color: rgba(0, 0, 0, 0.5) !important;
    }

    .card-header h3 {
        color: white;
    }

    .input-group-prepend span {
        width: 50px;
        background-color: #017BFF;
        color: black;
        border: 0 !important;
    }

    .center{
        margin-left: 6px;
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

    .links {
        color: white;
    }

    .links a {
        margin-left: 4px;
    }
</style>
