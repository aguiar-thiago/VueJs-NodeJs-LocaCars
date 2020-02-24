<template>
  <div id="app">

    <div id="header">
      <Header/>
    </div>

     <div id="container">
      <Main/>
    </div>


    <div id="menu">
      <Menu/>
    </div>

  </div>


</template>

<script>
// import Formulario from './components/form/Formulario.vue'
// import FormularioUpDel from './components/form/FormularioUpDel.vue'
import Header from './components/form/Header.vue'
import Main from './components/form/Main.vue'
import Menu from './components/form/Menu.vue'

export default {
  name: 'app',
  components: {Header, Main, Menu}

}
</script>

<style>
#app {
  font-family: '', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}

#menu {
    width: 200px;
    background-color: rgb(0, 0, 0);
    margin: 0px 0px 0px 1159px;
}
</style>

