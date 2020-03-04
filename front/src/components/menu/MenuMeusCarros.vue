<template>
  <div id="opcoes-categoria">
    <nav id="btn-menu-opcoes" class="nav nav-pills nav-justified navbar-dark bg-dark">
      <a id="btn-menu-opcoes" class="nav-item nav-link active">SUV</a>
      <a id="btn-menu-opcoes" class="nav-item nav-link">Luxo</a>
      <a id="btn-menu-opcoes" class="nav-item nav-link">Simples</a>
      <a id="btn-menu-opcoes" class="nav-item nav-link">Caminhonete</a>
  </nav>
</div>


</template>

<script>

export default {
  name: 'MainMeusCarros',
  components: {},
}
</script>

<style>

#btn-menu-opcoes{
  color: white;
}

#opcoes-categoria {
  padding: 10px;
  margin: 70px auto;
}

</style>

