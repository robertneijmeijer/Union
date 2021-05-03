<template>
  <nav class="primary">
    <section class="">
      <div class="row">
        <div @click="onClickImage">
          <img src="../assets/union.png" height="60" width="170" />
        </div>
        <LocaleSwitcher class="switcher" />
      </div>
    </section>
  </nav>
</template>

<script>
import router from "@/router";
import LocaleSwitcher from "./localeSwitcher";

export default {
  name: "topBarLogo",
  methods: {
    onClickImage: function() {
      router.push("/");
    },
  },
  components: { LocaleSwitcher },
};
</script>

<style lang="scss" scoped>
@import "../assets/theme";

.row {
  flex: 1;
}

.switcher {
  padding-left: $paddingSmall;
  padding-top: $paddingSmall;
  align-items: baseline;
}

.primary {
  background-color: white;
}

nav.primary {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  padding: 10px;
  background-color: #000000;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.06);
  z-index: 2;
}
</style>
