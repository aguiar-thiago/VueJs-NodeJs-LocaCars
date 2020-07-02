<template>
  <div>
    <ImagemFundo class="cards"/>
    <Header/>
    <MensagemEmpresa/>
    <CardsHome/>
    <RodapeHome/>
  </div>
</template>

<script>
  import Header from '../components/header/Header.vue'
  import CardsHome from '../components/main/CardsHome.vue'
  import RodapeHome from '../components/main/RodapeHome.vue'
  import MensagemEmpresa from '../components/main/MensagemEmpresa.vue'
  import ImagemFundo from '../components/main/ImagemFundo.vue'

  export default {
    name: 'Home',
    props: {
      msg: String
    },
    components: {Header, CardsHome, ImagemFundo, MensagemEmpresa, RodapeHome},
  }
</script>

<style scoped>
  .cards {
    position: fixed;
    width: 100%;
    height: 100%;
  }
  * {
    overflow:hidden;
  }
</style>