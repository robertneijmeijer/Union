<template>
  <div>
    <Navigator :loggedIn="true" :landingsPage="false" />
    <CreateUnionComponent />
  </div>
</template>

<script>
import CreateUnionComponent from "../components/createUnionComponent";
import Navigator from "@/components/navigator";
export default {
  name: "unionCreateView",
  components: { CreateUnionComponent, Navigator },
};
</script>