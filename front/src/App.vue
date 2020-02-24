<template>
  <div id="app">

    <div id="header-app">
      <Header/>
    </div>

     <div id="container-app">
      <Main/>
    </div>

  </div>
</template>

<script>
// import Formulario from './components/form/Formulario.vue'
// import FormularioUpDel from './components/form/FormularioUpDel.vue'
import Header from './components/form/Header.vue'
import Main from './components/form/Main.vue'


export default {
  name: 'app',
  components: {Header, Main}

}
</script>

<style>
html, body{
  margin: 0;
}
#app {
  height: 100vh;
  width: 100vw;
  font-family: '', Helvetica, Arial, sans-serif;
  height: 100vh;
  margin: 0;
}
#container-app {
  background-color: red;
  width: 100vw;
  height: calc(100vh - 10vh);
}

</style>

