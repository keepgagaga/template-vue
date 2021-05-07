<template>
  <div>
      <div class="label-item">{{ label }}</div>
  </div>
</template>

<script>
export default {
    name: 'Label',
    props: ['label']
}
</script>

<style>
.label-item {
    margin: 10px;
}
</style>