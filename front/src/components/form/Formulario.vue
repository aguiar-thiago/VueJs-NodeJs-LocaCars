<template>
  <form id="app" action="/Cadastrar" method="post">
    <div>
      <label for="placa">Placa: </label>
      <input type="text" id="placaVeiculo" v-model="placa">
    </div>

    <div>
      <label for="nome">Nome: </label>
      <input type="text" id="nomeVeiculo" v-model="nome">
    </div>

    <div>
      <label for="marca">Marca: </label>
      <input type="text" id="marcaVeiculo" v-model="marca">
    </div>

    <div>
      <label for="cor">Cor: </label>
      <input type="text" id="corVeiculo" v-model="cor">
    </div>

    <div>
      <label for="ano">Ano de Fabricacao: </label>
      <input type="text" id="anoVeiculo" v-model="ano">
    </div>
    <button type="buttom" class="salvar">Salvar</button>
  </form>

</template>



<script>
export default {
  name: 'Formulario',
  props: {
    msg: String
  },
  data: function() {
    return{
      placa : '',
      nome : '',
      marca : '',
      cor: '',
      ano : ''
    }
  },
  methodos:{
    submit () {
      this.$router.push("/Cadastrar"+this.data)
    }
  }
}</script>

<style>

</style>