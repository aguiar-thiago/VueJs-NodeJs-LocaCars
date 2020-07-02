<template>
  <div class="fundo-externo">
    <div class="fundo">
      <img class="img" src="../../icones/carroFundo.jpg">
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
  .fundo {
    width: 100%;
    height: 100%;
    filter: blur(10px);
    z-index: -50;
    margin-top: -300px;
  }

  .img {
    width: 100%;
    height: 130%;
    z-index: -50;
  }
</style>