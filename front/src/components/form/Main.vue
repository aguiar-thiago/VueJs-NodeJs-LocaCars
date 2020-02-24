<template>

<div id="container">
  <Cards/>
</div>


</template>

<script>
import Cards from './../cards/Cards.vue'

export default {
  name: 'Main',
  props: {
    msg: String
  },
  components: {Cards},
}

</script>


<style>
#container {
  background-color: skyblue;
  width: 100vw;
  height: calc(100vh - 10vh);
  padding: 30px;
  margin:0;
}

</style>