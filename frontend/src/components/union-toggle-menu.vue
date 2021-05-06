<template>
    <div class="menu">
    <div class="row">
        <div class="item search">
            <searchbar-component></searchbar-component>
        </div>
    </div>
      <div class="row">
          <div class="item user">
              <user-dropdown-component></user-dropdown-component>
          </div>
      </div>
    </div>
</template>

<script>
  import SearchbarComponent from "@/components/searchbarComponent";

  export default {
    name: "union-toggle-menu",
    components: {SearchbarComponent },
  };
</script>

<style lang="scss" scoped>
    @import "../assets/theme";

    .menu {
        background-color: $darkerGreyColor;
    }

    .row {
        max-width: 100%;
        display: flex;
    }

    .item {
        padding: 10px 0 10px 5px;
        margin: 0 15px 0 15px;
    }

    .search {
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
        margin: 0 auto;
    }

    .user {
        display: flex;
        flex-direction: column;
        padding: 0.5rem;
        margin: 0 auto;
    }

</style>
