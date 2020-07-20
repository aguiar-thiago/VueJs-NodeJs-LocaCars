<template>

  <div class="container estatisticas-graficos">
    <div class="row">
      <div class="carros-grafico col-sm-9">
        <div class="titulo-carros-grafico">
        </div>
        <div class="conteudo">
          <Chart/>
        </div>
      </div>
      <div class="teste-carros-conteudo col-sm-3">
      </div>
    </div>
  </div>

</template>

<script>
  import Chart from '../chart/Chart.vue'

  export default {
    name: 'EstatisticasGraficos',
    props: {
      msg: String
    },
    components: {Chart},
  }
</script>

<style>
  .estatisticas-graficos {
    width: 100%;
    height: 650px;
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
    background-color: rgb(255, 244, 244);
  }

  .teste-carros-conteudo {
    background-color: rgb(168, 247, 247);
  }

</style>