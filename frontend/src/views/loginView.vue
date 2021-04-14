<template>
  <div id="loginview">
    <top-bar-logo></top-bar-logo>
    <div id="loginCard">
      <login-component></login-component>
    </div>
  </div>
</template>

<script>
import LoginComponent from "../components/loginComponent";
import TopBarLogo from "@/components/topBarLogoComponent";
export default {
  name: "loginView",
  components: { TopBarLogo, LoginComponent },
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
