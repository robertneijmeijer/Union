<template>
  <Navigator :loggedIn="true" :landingsPage="false" />
  <CreateUnionComponent />
</template>

<script>
import CreateUnionComponent from "../components/createUnionComponent";
import Navigator from "@/components/navigator";
export default {
  name: "unionCreateView",
  components: { CreateUnionComponent, Navigator },
};
</script>
