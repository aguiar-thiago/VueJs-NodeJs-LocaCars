<template>
  <div class="container-header">
    <div class="row">
      <h2 class="nome-empresa">Teste locadora Veículos</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  },
  components: {},

}
</script>


<style>
.container-header {
  background-color: rgb(33, 220, 158);
  height: 50px;
  width: 100vw;
  top: 0;
  position: fixed;
  z-index: 999;
}
.nome-empresa {
  padding-left: 55px;
  color: white;
}
</style>