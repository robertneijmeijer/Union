<template>
  <div>
    <Navigator :loggedIn="true" :landingsPage="false" />
    <UnionCreateComponent />
  </div>
</template>

<script>
import UnionCreateComponent from "../components/unionCreateComponent";
import Navigator from "@/components/navigator";
export default {
  name: "unionCreateView",
  components: { UnionCreateComponent, Navigator },
};
</script>