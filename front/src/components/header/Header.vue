<template>
  <div class="container-header">
    <div class="row">
      <h6 class="nome-empresa">(11) 99293-9493</h6>
      <h6 class="nome-empresa">(11) 5293-9493</h6>
      <h6 class="nome-empresa">Das 08:30 as 18:00</h6>

      <div class="col imagem-logos">
        <img class="logos-rede-sociais" src="../../icones/icone-facebook.png">
        <img class="logos-rede-sociais" src="../../icones/icone-instagram.png">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    props: {
      msg: String
    },
    components: {},
  }
</script>

<style>
  .container-header {
    background-color: rgb(43, 42, 42);
    height: 40px;
    width: 100vw;
    top: 0;
    position: fixed;
    z-index: 999;
  }
  .nome-empresa {    
    padding-top: 9px;
    padding-left: 145px;
    color: rgb(235, 235, 235);
  }

  .imagem-logos {
    margin-left: 856px;
  }

  .logos-rede-sociais {
    padding-top: 5px;
    padding-left: 25px;
  }


</style>