<template>
  <div class="flex">
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" href="#">
        <img
          id="union-logo"
          class="img-fluid"
          src="../assets/img/union_logo.png"
          max-height="60"
          max-width="70"
          alt=""
        />
      </a>
      <div class="collapse navbar-collapse" id="navbar-content">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li>
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle dropdownButton"
                type="button"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img
                  class="dropdown-logo"
                  src="../assets/img/bitcoin-icon.png"
                />
                TheCryptoUnion
              </button>
            </div>
            <form class="form-inline">
              <input
                class="form-control search"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
            <img
              id="user-img"
              class="user"
              height="35"
              width="35"
              src="../assets/user-icon-png-person-user-profile-icon-20.png"
              alt=""
            />
            <div id="user" class="dropdown-user">
              <button
                class="btn btn-secondary dropdown-toggle user-dropdown"
                type="button"
                id="dropdownMenu1"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
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
  name: "union-overview-navigator",
};
</script>

<style lang="scss" scoped>
@import "../assets/theme";

@media only screen and (max-width: 1376px) {
  #user {
    display: none;
  }
  #user-img {
    display: none;
  }
}

@media only screen and (max-width: 1026px) {
  #navbar-content {
    display: none;
  }
  #union-logo {
    max-width: 100px;
    max-height: 110px;
  }
}

.img-fluid {
  margin-bottom: 10px;
}

.flex {
  max-width: 100vw;
}

.navbar {
  background-color: #1a1a1b;
  max-height: 60px;
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
  text-align: left;
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
  background-color: #1a1a1b;
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
