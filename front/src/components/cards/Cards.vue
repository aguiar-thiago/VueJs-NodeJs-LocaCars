<template>
  <div id="row-cards" class="col-md-9 row">
  {{getrows}}
    <div id="cards" class="col-md-3" v-for="item in itens" v-bind:key="item.id">
      <div id="card-config" class="card">
        <img src="../../icones/iconeCarro.png" alt="..." class="img-thumbnail">
        <div class="card-body">
          <h5 class="card-title">Luxuoso</h5>
          <p class="card-text">Carro excelente estabilidade e muito conforte. Recomendado para familia grande.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li id="lista-card" class="list-group-item">4 Portas (Trava eletrica)</li>
          <li id="lista-card" class="list-group-item">SUV</li>
          <li id="lista-card" class="list-group-item">Cambio Automatico</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Cards',
  props: {
    msg: String,
  },

    data(){
    return {
      itens: []
    }
  },
   methods: {
   },
   computed: {
     getrows(){
       for(let a = 0; a < 4; a++ ){
         this.itens.push({id: a, title: `a ${a}`})
       }
     }
   }
}

</script>


<style>
#cards-container {
  border-radius: 57px;
}

#card-config {
  color: white;
  background-image: linear-gradient(#525252, #000000);
  cursor:pointer;
}

#cards :hover {
  transform: scale(1.01);
}

#row-cards {
  max-width: 71%;
  height: 100%;
  padding: 25px 154px 0px 51px;
}

#lista-card {
    background-image: linear-gradient(#e9e9e9, #ffffff);
    color: #000000;
  width: 100%;
  height: 100%;
}

</style>