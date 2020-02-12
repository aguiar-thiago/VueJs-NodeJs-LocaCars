<template>
  <div id="app">
    <FormularioUpdate/>
  </div>
</template>

<script>
//import Formulario from './components/form/Formulario.vue'
import FormularioUpdate from './components/form/FormularioUpdate.vue'

export default {
  name: 'app',
  components: {FormularioUpdate}

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

