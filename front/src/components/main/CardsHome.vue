<template>
  <div class="container">
    <div class="row">
      <div class="col veiculo cadastrar-veiculo">
        <router-link to="/Cadastrar">
          <h2>Cadastrar Veículo</h2>
        </router-link>
      </div>

      <div class="col veiculo atualizar-veiculo">
        <router-link to="/Atualizar">
          <h2>Atualizar Veículo</h2>
        </router-link>
      </div>

      <div class="col veiculo consultar-veiculo">
        <router-link to="/listaCarros">
          <h2>Consultar Veículo</h2>
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'CardsHome',
    components: {},
}
</script>

<style scoped>
  .veiculo {
    background-color: rgb(37, 37, 37);
    width: 20px;
    height: 50px;
    z-index: 10;
    border-radius: 10px;
  }

  .col {
    margin: 20px;
  }

  .mensagem {
    margin: 80px 39px 39px 507px;
    background-color: #ffffff;
    z-index: 10;
    width: 600px;
    height: 100px;
    border-radius: 20px;
  }

  h2 {
    font-size: 23px;
    margin: 10px;
    color: rgb(255, 255, 255);
  }

  .container :hover {
    background-color: blueviolet;
    text-decoration:none; 
  }

</style>