<template>
  <div id="registerView">
    <top-bar-logo></top-bar-logo>
    <div id="registerCard">
      <register-component></register-component>
    </div>
  </div>
</template>

<script>
import RegisterComponent from "../components/registerComponent";
import TopBarLogo from "@/components/topBarLogoComponent";

export default {
  name: "registerView",
  components: { TopBarLogo, RegisterComponent },
};
</script>

<style lang="scss" scoped>
#registerview {
  max-height: 100%;
}

#registerCard {
  margin-top: 100px;
}
</style>
