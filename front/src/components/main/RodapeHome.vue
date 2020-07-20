<template>
  <div class="rodape">
    <div class="mensagem">
      <h2>Carros de toda categoria com diversas opções sempre com o melhor preço</h2>
      <h5>Sistema desenvoldido em alta performance com finalidade de facilitar a empresa com o controle da sua frota de carros</h5>
      <h5>Avenida Paulista - 2234 - Próxima ao Masp</h5>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MensagemEmpresa',
    components: {},
}
</script>

<style scoped>
  .rodape {
    bottom: 0px;
    z-index: 10;
    position: absolute;
    width: 100%;
    height: 200px;
    background-color: rgb(22, 22, 22)
  }

  h2 {
    color: white;
    font-size: 40px;
    padding-top: 50px;
  }

  h5 {
    color: gray;
  }
</style>