<template>
  <div class="col-md-2 row">
  {{getrows}}
      <div class="col-md-6" v-for="item in items"  v-key="item.id">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Cras justo odio</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Vestibulum at eros</li>
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
      items: []
    }
  },
   methods: {
   },
   computed: {
     getrows(){
       for(let a = 0; a < 2; a++ ){
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

#cards {
  width: 100%;
  height: 100%;
  margin: 0;
}


#card-config {
  border-radius: 20px;
  color: white;
  background-image: linear-gradient(#525252, #000000);
  width: 96%;
  height: 96%;
}


</style>