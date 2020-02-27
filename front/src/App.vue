<template>
  <div id="app">
      <Header/>
      <Main/>
  </div>
</template>

<script>
// import Formulario from './components/form/Formulario.vue'
// import FormularioUpDel from './components/form/FormularioUpDel.vue'
import Header from './components/form/Header.vue'
import Main from './components/form/Main.vue'


export default {
  name: 'app',
  components: {Header, Main},

  methods: {
    teste (){
      console.log("teste")
    }
}

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


</style>

