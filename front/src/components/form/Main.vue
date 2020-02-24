<template>

<div class="container" >
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
    background-color: #ffffff;
    max-width: 1095px;
    height: 601px;
    margin: 0px 0px 0px 0px;
}
</style>