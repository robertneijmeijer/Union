<template>
  <form class="searchbar">
    <div class="searchbar-icon-wrapper">
      <svg
        class="search-icon"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z"
          fill="#818384"
        ></path>
      </svg>
    </div>

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
  name: "searchbar",
};
</script>

<style lang="scss" scoped>
@import "../assets/theme";
.searchbar {
  background-color: $primary-black;
  display: flex;
  flex-direction: row;
}

.searchbar-icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  &:hover {
    cursor: pointer;
  }
}

.search-icon {
  width: 18px;
  height: 18px;
  pointer-events: none;
}
.search {
  color: white;
  max-width: 100%;
}
</style>
