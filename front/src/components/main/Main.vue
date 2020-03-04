<template>
<div>
  <div id="container-home" class="container">
    <div id="row" class="row">
      <Cards/>
      <Maps/>
      <div id="graficos">
      </div>
    </div>
  </div>
</div>

</template>

<script>
import Cards from './../cards/Cards.vue'
import Maps from './../form/Maps.vue'

export default {
  name: 'Main',
  props: {
    msg: String
  },
  components: {Cards, Maps},
}

</script>


<style>
#container-home {
  background-color: #ffffff;
  padding: 10px;
  max-width: 100vw;
  z-index: -1;
  height: 92vh;
  margin: 70px 0px 0px 0px;
}


#info {
  background-color:  #444444;
}

h3 {
  text-align: center; 
}

#graficos {
  width: 69%;
  height: 441px;
  background-image: linear-gradient(#ffffff, #c3c3c3);
}

</style>