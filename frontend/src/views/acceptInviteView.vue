<template>
  <Navigator :loggedIn="true" :landingsPage="false" />
  <AcceptInvite />
</template>

<script>
import AcceptInvite from "../components/inviteAccept";
import Navigator from "@/components/navigator";

export default {
  name: "acceptInviteView",
  components: { AcceptInvite, Navigator },
};
</script>

