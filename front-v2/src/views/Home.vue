<template>
  <div>
    <Header/>
    <MainMenuArea/>
    <AreaStatusTotais/>
    <EstatisticasGraficos/>
    <Cards/>
  </div>
</template>

<script>
  import Header from '../components/header/Header.vue'
  import MainMenuArea from '../components/main/MainMenuArea.vue'
  import AreaStatusTotais from '../components/main/AreaStatusTotais.vue'
  import EstatisticasGraficos from '../components/main/EstatisticasGraficos.vue'
  import Cards from '../components/main/Cards.vue'

  export default {
    name: 'Home',
    props: {
      msg: String
    },
    components: {Header, MainMenuArea, AreaStatusTotais, EstatisticasGraficos, Cards},
  }
</script>

<style>
</style>