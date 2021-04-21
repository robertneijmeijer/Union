<template>
    <div class="card">
    </div>
    <union-post-component></union-post-component>
</template>

<script>
  import UnionPostComponent from "@/components/union-post-component";
  export default {
    name: "union-create-post",
    components: { UnionPostComponent },
  };
</script>

<style lang="scss" scoped>
    @import "../assets/theme";

    .card{
        width: 100%;
        background-color: #1A1A1B;
        height: 10vh;
    }


</style>
