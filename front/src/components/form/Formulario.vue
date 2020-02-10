<template>
  <form id="app" method="post">
    <fieldset>
      <div>
        <label for="placa">Placa: </label>
        <input type="text" id="placaVeiculo" v-model="carro.placa">
      </div>

      <div>
        <label for="nome">Nome: </label>
        <input type="text" id="nomeVeiculo" v-model="carro.nome">
      </div>

      <div>
        <label for="marca">Marca: </label>
        <input type="text" id="marcaVeiculo" v-model="carro.marca">
      </div>

      <div>
        <label for="cor">Cor: </label>
        <input type="text" id="corVeiculo" v-model="carro.cor">
      </div>

      <div>
        <label for="ano">Ano de Fabricacao: </label>
        <input type="text" id="anoVeiculo" v-model="carro.ano">
      </div>

      <button type="button" v-on:click="salvar" class="salvar">Salvar</button>
    </fieldset>
  </form>
</template>



<script>
import Carros from '../../service/carros'

export default {
  name: 'Formulario',
  props: {
    msg: String
  },

  data(){
    return {
      carro :{
        placa: '',
        nome : '',
        marca : '',
        cor: '',
        ano : ''
      }
    }
  },

  methods: {
      async salvar(){
        await Carros.salvar(this.carro)
        this.carro = {}
        alert("Inserido com sucesso")
      }
  }
}

</script>

<style>

</style>