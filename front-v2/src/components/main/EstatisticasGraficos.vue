<template>

  <div class="container estatisticas-graficos">
    <div class="row">
      <div class="carros-grafico col-lg-9">
        <div class="titulo-carros-grafico">
        </div>

        <div class="">
        </div>

      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: 'EstatisticasGraficos',
  props: {
    msg: String
  },
  components: {},

}
</script>


<style>
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
  height: 100px;
  margin: 7px;
  background-color: blanchedalmond;
}
</style>