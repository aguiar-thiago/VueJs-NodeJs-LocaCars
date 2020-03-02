<template>
  <div id="pagina-cadastro">
    <Header msg="Editar Veiculo"/>

    <div id="container">
    <FormularioUpDel/>
    </div>


  </div>
</template>

<script>
import Header from './../components/header/Header.vue'
import FormularioUpDel from './../components/form/FormularioUpDel.vue'

export default {
  name: 'Editar',
  components: {Header, FormularioUpDel},
}
</script>

<style>

html, body{
  margin: 0;
}
#formulario {
  margin: 102px auto;
}

</style>

