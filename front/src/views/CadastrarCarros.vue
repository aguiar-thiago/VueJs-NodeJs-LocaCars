<template>
  <div>
    <Header/>
    <MainMenuArea/>
    <Title msg="Cadastre Seu Veículo"/>
    <CadastroCarros/>
  </div>
</template>

<script>
  import CadastroCarros from '../components/cadastro/CadastroCarros.vue'
  import Header from '../components/header/Header.vue'
  import MainMenuArea from '../components/main/MainMenuArea.vue'
  import Title from '../components/title/Title.vue'

  export default {
    name: 'Home',
    props: {
      msg: String
    },
    components: {CadastroCarros, Header, MainMenuArea, Title},
  }
</script>

<style>

</style>