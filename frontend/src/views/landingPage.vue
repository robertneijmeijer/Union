<template>
    <navigator></navigator>
    <div class="centeredText">
        <h3 class="first">Create.</h3>
        <h3 class="second">Discover.</h3>
        <h3 class="third">Unite.</h3>
    </div>
</template>

<script>
  import Navigator from "@/components/navigator";

  export default {
    name: "landingPage",
    components: { Navigator },
  };
</script>

<style lang="scss" scoped>

    .centeredText {
        text-align: center;
    }

    .first {
        margin-top: 200px;
        color: white;
        user-select: none;
    }

    .second {
        color: white;
        margin-top: 10px;
        user-select: none;
    }

    .third {
        color: $unionBlue;
        margin-top: 10px;
        user-select: none;
    }

</style>
