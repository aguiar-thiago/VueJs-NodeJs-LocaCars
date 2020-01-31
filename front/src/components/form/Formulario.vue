<template>
  <form id="app" @submit="f" action="/cadastrar" method="post">
    <div>
      <label for="placa">Placa: </label>
      <input type="text" id="placaVeiculo">
    </div>

    <div>
      <label for="nome">Nome: </label>
      <input type="text" id="nomeVeiculo">
    </div>

    <div>
      <label for="marca">Marca: </label>
      <input type="text" id="marcaVeiculo">
    </div>

    <div>
      <label for="cor">Cor: </label>
      <input type="text" id="corVeiculo">
    </div>

    <div>
      <label for="ano">Ano de Fabricacao: </label>
      <input type="text" id="anoVeiculo">
    </div>
    <button type="submit" class="btn btn-success">Salvar</button>
  </form>

</template>



<script>
export default {
  name: 'Formulario',
  props: {
    msg: String
  }
}</script>

<style>

</style>