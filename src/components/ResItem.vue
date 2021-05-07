<template>
  <div>
       <div class="res-item">
              <img class="image" v-bind:src="res.image">
              <div class="des-container">
                  <div >{{ res.title }}</div>
                  <div class="des">{{ res.description }}</div>
              </div>
              <div>分享</div>
          </div>
  </div>
</template>

<script>
export default {
    name: 'ResItem',
    props: ['res']
}
</script>

<style>
.res-item {
    display: flex;
    align-items: center;
    width: 642px;
    height: 100px;
}
.image {
    width: 58px;
    height: 58px;
    border-radius: 10px;
}
.des-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-left: 20px;
}
.des {
    width: 482px;
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>