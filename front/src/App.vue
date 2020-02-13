<template>
  <div id="app">
    <FormularioUpDel/>
  </div>
</template>

<script>
//import Formulario from './components/form/Formulario.vue'
import FormularioUpDel from './components/form/FormularioUpDel.vue'

export default {
  name: 'app',
  components: {FormularioUpDel}

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

