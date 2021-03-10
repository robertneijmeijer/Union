<template>
    <navigator></navigator>

        <div class="centeredText">
            <h3 style="margin-top: 200px; color: white; user-select: none;">Create.</h3>
            <h3 style="color: white; margin-top: 10px; user-select: none;">Discover.</h3>
            <h3 style="color: #00FFFF; margin-top: 10px; user-select: none;">Unite.</h3>
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

    .centeredText{
        text-align: center;
    }

</style>
