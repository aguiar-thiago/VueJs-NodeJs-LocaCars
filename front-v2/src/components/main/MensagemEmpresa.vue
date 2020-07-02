<template>
  <div class="container">

    <div class="row cla">
      <div class="col mensagem">
        <h2>Encontre o melhor carro na LocaCars</h2>
      </div>
    </div>

    <div class="row">
      <div class="col sub-mensagem">
        <h5>Serviços de aluguel de carros de primeira classe com melhor preço</h5>
      </div>
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

  .mensagem {
    margin: 80px 39px 39px 70px;
    z-index: 10;
    width: 600px;
    height: 100px;
    border-radius: 20px;
  }

  h2 {
    top: 50px;
    font-weight: bold;
    font-size: 76px;
    margin: 10px;
    color: rgb(0, 0, 0);
  }

  h5 {
    font-weight: bold;
    font-size: 30px;
    color: rgb(0, 0, 0);    
  }

  .cla {
    margin-top: 90px;
  }

</style>