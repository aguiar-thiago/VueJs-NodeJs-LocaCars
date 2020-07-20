<template>
  <div class="fundo-externo">
    <div class="fundo">
      <img class="img" :src="require(`../../icones/${img}.jpg`)">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ImagemFundo',
    props: {
      nomeImagem: String
    },

    components: {},

    data() {
      return {
        img : ""
      }
    },

    created() {
      this.img = this.nomeImagem
    }
    
}
</script>

<style scoped>
  .fundo {
    width: 100%;
    height: 100vh;
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