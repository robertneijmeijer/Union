<template>
    <div class="flex">
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="#">
                <img class="img-fluid" src="../assets/union_logo.png" height="60" width="170"/>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle dropdownButton" type="button"
                                    id="dropdownMenu2"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img class="dropdown-logo" src="../assets/bitcoin-icon.png">
                                TheCryptoUnion
                            </button>
                        </div>
                        <form class="form-inline">
                            <input class="form-control search" type="search" placeholder="Search" aria-label="Search">
                        </form>
                        <img class="user" height="35" width="35"
                             src="../assets/user-icon-png-person-user-profile-icon-20.png" alt="">
                        <div class="dropdown-user">
                            <button class="btn btn-secondary dropdown-toggle user-dropdown" type="button"
                                    id="dropdownMenu1"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Joel verhagen
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
  export default {
    name: "testcomp",
  };
</script>

<style lang="scss" scoped>
    @import "../assets/theme";

    .navbar {
        background-color: #1A1A1B;
    }

    .navbar-brand {
        width: 15%;
    }

    .dropdown {
        display: inline;
        width: 20%;
    }

    .dropdownButton {
        background-color: transparent;
        margin-top: 10px;
        display: inline;
        text-align: left;;
        max-width: 20%;
        vertical-align: bottom;
    }

    .dropdown-logo {
        width: 10%;
        height: 10%;
    }

    .search {
        display: inline;
        width: 60%;
        background-color: #1A1A1B;
        color: white;
    }

    .form-inline {
        display: inline;
        margin-left: 25px;
    }

    .user-dropdown {
        border: none;
        background-color: transparent;
    }

    .user {
        margin-left: 30px;
    }

    .dropdown-user {
        display: inline;
        width: 10%;
    }
</style>
