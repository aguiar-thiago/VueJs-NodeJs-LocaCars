<template>
  <div>
    <Header/>
    <MainMenuArea/>
    <Title msg="Atualize / Remova um dos seus veículos"/>
    <FormAtualizaDeletaCarros/>
  </div>

</template>

<script>
import FormAtualizaDeletaCarros from '../components/forms/FormAtualizaDeletaCarros.vue'
import Header from '../components/header/Header.vue'
import MainMenuArea from '../components/main/MainMenuArea.vue'
import Title from '../components/title/Title.vue'

export default {
  name: 'AtualizaDeletaCarros',
  props: {
    msg: String
  },
  components: {FormAtualizaDeletaCarros, Header, MainMenuArea, Title},

}

</script>

<style>

</style>