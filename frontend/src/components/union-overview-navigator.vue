<template>
    <nav class="primary">
        <section class="">
            <img src="../assets/union.png" height="60" width="170"/>
        </section>
    </nav>
</template>

<script>
  export default {
    name: "union-overview-navigator",
  };
</script>

<style lang="scss" scoped>
    @import "../assets/theme";

    nav.primary {
        position: relative;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        width: 100%;
        padding: 10px;
        background-color: #000000;
        box-shadow: 0px 3px 5px rgba(0, 0, 0, .06);
        z-index: 2;
    }


</style>
