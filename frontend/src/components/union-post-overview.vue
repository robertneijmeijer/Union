<template>
    <div class="flex-container">
        <div class="left-container"></div>
        <div class="center-container">
            <union-create-post></union-create-post>
        </div>
        <div class="right-container">
            <union-about-community></union-about-community>
        </div>
    </div>
</template>

<script>
  import UnionAboutCommunity from "@/components/union-about-community";
  import UnionCreatePost from "@/components/union-create-post";
  export default {
    name: "union-post-overview",
    components: { UnionCreatePost, UnionAboutCommunity },
  };
</script>

<style lang="scss" scoped>
    @import "../assets/theme";

    .flex-container {
        display: flex;
        max-width: 100vw;
    }

    .center-container{
        width: 50%;
        margin-top: 20px;
    }

    .right-container{
        width: 25%;
        margin-top: 20px;
    }

    .left-container{
        width: 25%;
        margin-top: 20px;
    }

</style>
