<template>
  <Navigator :loggedIn="true" :landingsPage="false" />
  <UnionOverviewJoin />
</template>

<script>
import Navigator from "@/components/navigator";
import UnionOverviewJoin from "@/components/unionOverviewJoin";

export default {
  name: "noUnionOverview",
  components: { UnionOverviewJoin, Navigator },
};
</script>
