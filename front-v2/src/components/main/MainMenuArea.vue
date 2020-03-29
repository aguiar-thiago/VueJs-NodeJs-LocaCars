<template>

  <div class="container menu-area">
    <div class="row">
      <ul class="list-group list-group-horizontal lista-menu">
        <li class="list-group-item">
           <router-link to="/">Home</router-link>
        </li>
        <li class="list-group-item">
           <router-link to="/Cadastrar">Cadastrar Veiculo</router-link>
        </li>
        <li class="list-group-item">
           <router-link to="/Atualizar">Atualizar</router-link>
        </li>
        <li class="list-group-item">
           <router-link to="/listaCarros">Listar Carros</router-link>
        </li>
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

  .container {
    max-width: 1603px;
    margin: 40px auto;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
  }
  .menu-area {
    font-size: 22px;
    margin: 81px auto 40px auto;
  }

  .list-group-item {
      position: relative;
      display: block;
      padding: .75rem 1.25rem;
      background-color: rgb(255, 255, 255);
      border: none;
  }

  .lista-menu {
    border: 0;
    justify-content: center;
    width: 100%;
  }


</style>