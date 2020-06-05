<template>

  <div class="container cards">
    <div class="row">
      <div class="card col">
      </div>
      <div class="card col">
      </div>
      <div class="card col">
      </div>

    </div>
  </div>

</template>

<script>
  export default {
    name: 'Cards',
    props: {
      msg: String
    },
    components: {},
}
</script>

<style scoped>
  .estatisticas-graficos {
    width: 100%;
    /* height: 500px; */
    background-color: rgb(255, 255, 255);
    margin-top: 55px;
    margin-bottom: 55px;
  }

  .carros-grafico {
    background-color: rgb(239, 240, 240);
    /* height: 498px; */
  }

  .titulo-carros-grafico {
    width: 100%;
    height: 50px;
    background-color: rgb(205, 255, 212);
  }

  .conteudo {
    background-color: rgb(164, 248, 175);
    height: 425px;
  }

  .card {
    background-color: rgb(118, 162, 255);
    width: 90px;
    height: 400px;
    margin: 10px;
  }

</style>