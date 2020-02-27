<template>

 <div id="container" class="container">
    <div id="row" class="row">
      <Cards/>
        <InfosCards/>
    </div>
 </div>

</template>

<script>
import Cards from './../cards/Cards.vue'
import InfosCards from './../cards/InfosCards.vue'

export default {
  name: 'Main',
  props: {
    msg: String
  },
  components: {Cards, InfosCards},
}

</script>


<style>
#container {
background-color: #ffffff;
  padding: 10px;
  margin: 0;
  max-width: 100vw;
  position: absolute;
  z-index: -1;
  height: 92vh;
  margin: 70px 0px 0px 0px;
}

/* #row {
  width: 99%;
  height: 99% ;
} */

#info {
  background-color:  #444444;
}
</style>