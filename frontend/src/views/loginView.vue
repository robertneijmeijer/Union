<template>
  <div id="loginview">
    <Navigator :loggedIn="false" :landingsPage="false" />
    <div id="loginCard">
      <LoginComponent />
    </div>
  </div>
</template>

<script>
import LoginComponent from "../components/loginComponent";
import Navigator from "@/components/navigator";

export default {
  name: "loginView",
  components: { LoginComponent, Navigator },
};
</script>

<style lang="scss" scoped>
#loginview {
  max-height: 100%;
}

#loginCard {
  margin-top: 100px;
}
</style>
