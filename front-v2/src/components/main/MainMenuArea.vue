<template>
  <div class="container menu-area">
    <div class="row">
      <ul class="list-group list-group-horizontal lista-menu">
        <li class="list-group-item">
           <router-link to="/Home">Página Home</router-link>
        </li>
        <li class="list-group-item">
           <router-link to="/Cadastrar">Cadastrar Veiculo</router-link>
        </li>
        <li class="list-group-item">
           <router-link to="/Atualizar">Atualizar Veiculo</router-link>
        </li>
        <li class="list-group-item">
           <router-link to="/listaCarros">Consultar Veículos</router-link>
        </li>
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
  .menu-area {
    font-size: 22px;
    margin: 81px auto 40px auto;
  }

  .list-group-item {
      position: relative;
      display: block;
      padding: .75rem 1.25rem;
      background-color: rgb(221, 221, 221);
      border: none;
  }

  .lista-menu {
    border: 0;
    justify-content: center;
    width: 100%;
  }
</style>