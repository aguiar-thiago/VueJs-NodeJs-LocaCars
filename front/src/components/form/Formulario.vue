<template>
  <form id="app" method="post">
    <pre>
      {{result}}
    </pre>
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
    <button type="button" v-on:click="submitForm" class="salvar">Salvar</button>
  </form>

</template>



<script>
import Carros from '../../service/carros'

export default {
  name: 'Formulario',
  props: {
    msg: String
  },
  methods: {
      async submitForm () {
        const form = {
          placa: this.placa,
          nome: this.nome,
          marca: this.marca,
          cor: this.cor,
          ano : this.ano
        }
         Carros.Post(form)
      }
  }
}</script>

<style>

</style>