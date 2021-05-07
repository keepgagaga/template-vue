<template>
  <div id="app">
   <!-- <h3>image upload show edit download</h3> -->
   <!-- <UploadImage></UploadImage> -->
   <SearchBox></SearchBox>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import UploadImage from "./components/UploadImage.vue";
import SearchBox from "./pages/SearchBox.vue";

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // UploadImage,
    SearchBox,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
