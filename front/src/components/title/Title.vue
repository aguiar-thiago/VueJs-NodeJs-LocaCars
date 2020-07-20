<template>
  <div class="container title">
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
  export default {
    name: 'Title',
    props: {
      msg: String
    },
    components: {},
  }
</script>

<style>
  .title {
    background-color:  rgb(192, 252, 186);
    padding: 10px;
    color: rgb(5, 5, 5);
    height: 80px;
    text-align: left;
  }

</style>