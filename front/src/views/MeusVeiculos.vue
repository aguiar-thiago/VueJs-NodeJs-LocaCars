<template>
  <div id="container">
    <Header msg="Frota de Veiculos"/>
    <MainMeusCarros/>
  </div>
</template>

<script>
import Header from './../components/header/Header.vue'
import MainMeusCarros from './../components/main/MainMeusCarros.vue'

export default {
  name: 'Cadastrar',
  components: {Header, MainMeusCarros},
}
</script>

<style>

</style>

