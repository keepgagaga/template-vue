<template>
  <div class="search-page">
      <SearchBar></SearchBar>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
export default {
    name: 'SearchBox',
    components: {
        SearchBar,
    }
}
</script>

<style>
.search-page {
    width: 100vw;
    /* height: 100vh; */
    background-color: #E5E5E5;
}
</style>