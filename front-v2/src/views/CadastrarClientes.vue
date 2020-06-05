<template>
  <div>
    <Header/>
    <MainMenuArea/>
    <Title msg="Cadastro de Cliente"/>
    <CadastroClientes/>
  </div>
</template>

<script>
  import Header from '../components/header/Header.vue'
  import MainMenuArea from '../components/main/MainMenuArea.vue'
  import Title from '../components/title/Title.vue'
  import CadastroClientes from '../components/cadastro/CadastroClientes.vue'

  export default {
    name: 'CadastrarClientes',
    props: {
      msg: String
    },
    components: {Header, MainMenuArea, Title, CadastroClientes},
  }
</script>

<style>
</style>