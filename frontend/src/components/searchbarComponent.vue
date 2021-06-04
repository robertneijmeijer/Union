<template>
  <form>
    <svg class="search-icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.59,13.91l2.78,2.69a1.25,1.25,0,1,1-1.74,1.8l-2.82-2.73a8,8,0,1,1,1.78-1.76ZM14.64,9.2A5.45,5.45,0,1,0,9.2,14.64,5.45,5.45,0,0,0,14.64,9.2Z" fill="#818384"></path>
    </svg>
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

.search {
  background-color: $primary-black;
  color: white;
  max-width: 100%;
  display: inline;
  padding-left: 30px;
  padding-bottom: 3px;
}

.search-icon {
  width: 18px;
  height: 18px;
  position: absolute;
  top: 19px;
  margin-left: 10px;
  pointer-events: none;
}
</style>
