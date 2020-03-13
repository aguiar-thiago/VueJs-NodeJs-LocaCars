<template>

  <div id="container" class="container">
    <div class="row">
      <ul class="list-group list-group-horizontal lista-menu">
        <li class="list-group-item">Home</li>
        <li class="list-group-item">Cadastrar Veiculo</li>
        <li class="list-group-item">Listar Carros</li>
        <li class="list-group-item">Extra</li>
        <li class="list-group-item">Extra</li>
        <li class="list-group-item">Extra</li>
        <li class="list-group-item">Extra</li>
      </ul>
    </div>

    <div class="row">
      <ul class="list-group list-group-horizontal lista-menu">
        <li class="list-group-item">Home</li>
        <li class="list-group-item">Cadastrar Veiculo</li>
        <li class="list-group-item">Listar Carros</li>
        <li class="list-group-item">Atualizacao Rapida</li>
        <li class="list-group-item">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
      </ul>
    </div>
  </div>

</template>

<script>
export default {
  name: 'MainMenuArea',
  props: {
    msg: String
  },
  components: {},

}
</script>


<style>
#container {
  background-color: rgb(255, 255, 255);
  height: 100px;
  margin-top: 40px;
  margin-bottom: 40px;
}

.lista-menu {
  border: 0;
  justify-content: center;
  width: 100%;
}


</style>