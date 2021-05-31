<template>
  <div>
    <TopBarLogo />
    <UnionCreateComponent />
  </div>
</template>

<script>
import UnionCreateComponent from "../components/unionCreateComponent";
import TopBarLogo from "../components/topBarLogoComponent";

export default {
  name: "unionCreateView",
  components: { TopBarLogo, UnionCreateComponent },
};
</script>