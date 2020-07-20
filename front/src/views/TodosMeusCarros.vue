<template>
  <div>
    <Header/>
    <SidebarfiltroCarros/>
    <MainMenuArea class="meusCarrosMenu"></MainMenuArea>
    <ListaMeusCarros/>
  </div>
</template>

<script>
  import SidebarfiltroCarros from '../components/sidebar/SidebarfiltroCarros.vue'
  import Header from '../components/header/Header.vue'
  import MainMenuArea from '../components/main/MainMenuArea.vue'
  import Title from '../components/title/Title.vue'
  import ListaMeusCarros from '../components/main/ListaMeusCarros.vue'

  export default {
    name: 'TodosMeusCarros',
    props: {
      msg: String
    },
    components: {Header, MainMenuArea, SidebarfiltroCarros, ListaMeusCarros},
  }

</script>

<style scoped>
  .meusCarrosMenu {
    margin: 50px 0px 40px auto;
    width: 77%;
  }

  
</style>