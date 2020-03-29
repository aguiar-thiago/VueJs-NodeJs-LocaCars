<template>

  <div class="container lista-carros">

    <div id="row-cards" class="col-md-12 row">

      <div class="col-md-4" v-for="carro in carros" v-bind:key="carro.placa">

        <div class="card">
          <img class="card-img-top img-carro" src="../../icones/iconeCarro.png" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
          <div class="card-footer">
            <small class="text-muted">Last updated 3 mins ago</small>
          </div>
        </div>
      </div>

    </div>

  </div>



</template>

<script>

export default {
  name: 'ListaMeusCarros',
  props: {
    msg: String
  },

  data() {
    return {
      carros: ["teste", 'testde', "tesdddte", 'testded', "tesdddte", 'testded', "teste", 'testde', "tesdddte", 'testded', "tesdddte", 'testded']
    }
  }
}

</script>

<style>

  .lista-carros{
    background-color: blanchedalmond;
    /* height: 500px; */
    width: 76%;
    float: right;
    margin-right: 20px;
  }

  .card {
    width: 300px;
    font-size: 20px;
    background-color: rgb(31, 29, 29);
  }

  .img-carro {
    background-color: transparent;
    padding: 20px;
  }

</style>