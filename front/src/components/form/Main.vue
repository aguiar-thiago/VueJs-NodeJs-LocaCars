<template>
<div>
  <div id="container" class="container">
    <div id="row" class="row">
      <Cards/>
      <div id="localizacao">
        <iframe id="maps" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14630.203371005677!2d-46.6445461206543!3d-23.54865200373196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1582888044281!5m2!1spt-BR!2sbr" allowfullscreen=""></iframe>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import Cards from './../cards/Cards.vue'
// import InfosCards from './../cards/InfosCards.vue'

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
  padding: 10px;
  margin: 0;
  max-width: 100vw;
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

#maps {
  height: 842px;
  width: 98%;
  border: 0;
}

#localizacao {
  right: auto;
  right: auto;
  width: 29%;
  right: 0px;
  float: right;
}

h3 {
  text-align: center; 
}
</style>