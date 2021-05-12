<template>
    <form>
        <input
                class="form-control search"
                type="search"
                placeholder="Search unions"
                aria-label="Search"
        />
    </form>
</template>

<script>
  export default {
    name: "searchbarComponent",
  };
</script>

<style lang="scss" scoped>
    @import "../assets/theme";

    .search {
        background-color: $primary-black;
        color: white;
        max-width: 100%;
        display: inline;
    }
</style>
