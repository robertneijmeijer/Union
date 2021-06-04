<template>
  <div id="registerView">
    <Navigator :loggedIn="false" :landingsPage="false" />
    <div id="registerCard">
      <RegisterComponent />
    </div>
  </div>
</template>

<script>
import RegisterComponent from "../components/registerComponent";
import Navigator from "@/components/navigator";

export default {
  name: "registerView",
  components: { RegisterComponent, Navigator },
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
