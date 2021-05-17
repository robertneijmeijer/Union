<template>
  <top-bar-logo show-locale="true" />
  <AcceptInvite />
</template>

<script>
import AcceptInvite from "../components/inviteAccept";
import TopBarLogo from "../components/topBarLogoComponent";

export default {
  name: "acceptInviteView",
  components: { AcceptInvite, TopBarLogo },
};
</script>

<style lang="scss" scoped></style>
