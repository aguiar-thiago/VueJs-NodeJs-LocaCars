<template>
  <div id="container">
    <Header msg="Cadastrar Veiculo"/>

    <div id="formulario">
    <formulario/>
    </div>


  </div>
</template>

<script>
import Header from './../components/header/Header.vue'
import Formulario from './../components/form/Formulario.vue'

export default {
  name: 'Cadastrar',
  components: {Header, Formulario},
}
</script>

<style>

html, body{
  margin: 0;
}
#formulario {
  margin: 20px auto;
}

</style>

