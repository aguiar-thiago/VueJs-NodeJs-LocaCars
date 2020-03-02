<template>
  <div id="row-cards" class="col-md-9 row">
  {{getrows}}
      <div id="teste" class="col-md-3" v-for="item in items" v-bind:key="item.id">
        <div class="card mb-2" id ="card-config">
          <div class="card-body">
            <img src="../../icones/iconeCarro.png" alt="..." class="img-thumbnail">
            <h2 class="card-title">Carro Simples</h2>
            <table id="tabela" class="table">
              <tbody>
                <td>
                  <tr>portas</tr>
                  <tr>preco</tr>
                  <tr>flex</tr>
                </td>

                <td>
                  <p>Carro economico, com otimo preco</p>
                </td>

              </tbody>
            </table>
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
  cursor:pointer;
}

#teste :hover {
  transform: scale(1.01);
  border-radius: 20px;
}

#row-cards {
  max-width: 71%;
  height: 100%;
}

#tabela {
  color: white;
}


</style>