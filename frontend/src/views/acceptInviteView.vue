<template>
  <top-bar-logo />
  <AcceptInvite
    v-bind:invites="{
      user: 'Koen Lippe',
      union: 'TheCryptoUnion',
      banner: 'bravenewcoin-Fungibility-in-Crypto-banner.jpeg',
      icon: 'bitcoin-icon.png',
    }"
  />
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
