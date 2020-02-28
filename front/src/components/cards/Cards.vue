<template>
  <div id="row-cards" class="col-md-9 row">
  {{getrows}}
      <div class="col-md-3" v-for="item in items"  v-key="item.id">
        <div class="card mb-2" id ="card-config">
          <div class="card-body">
            <img src="../../icones/iconeCarro.png" alt="..." class="img-thumbnail">
            <h2 class="card-title">Card title</h2>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <!-- <!-- <button type="button" class="btn btn-primary btn-sm">Vizualizar</button> -->
            <!-- <button type="button" class="btn btn-success btn-sm">Reservar</button> -->
          </div>
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
      items: []
    }
  },
   methods: {
   },
   computed: {
     getrows(){
       for(let a = 0; a < 4; a++ ){
         this.items.push({id: a, title: `asdads ${a}`})
       }
     }
   }
}

</script>


<style>
#cards-container {
  border-radius: 57px;
}

#col-md-9 row {
  max-width: 71%;
}


#card-config {
  border-radius: 20px;
  color: white;
  background-image: linear-gradient(#525252, #000000);
  /* width: 96%;
  height: 96%; */
}

#row-cards {
  max-width: 71%;
}


</style>