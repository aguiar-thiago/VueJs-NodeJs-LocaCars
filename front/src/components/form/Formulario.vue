<template>
  <form id="app" method="post" class="container">
    <div class="row justify-content-center">
      <div class="form-group col-7">
        <label for="placa">Placa: </label>
        <input type="text" class="form-control " id="placaVeiculo" v-model="carro.placa">
      </div>

      <div class="form-group col-7">
        <label for="nome">Nome: </label>
        <input type="text" class="form-control " id="nomeVeiculo" v-model="carro.nome">
      </div>

      <div class="form-group col-7">
        <label for="marca">Marca: </label>
        <input type="text" class="form-control " id="marcaVeiculo" v-model="carro.marca">
      </div>

      <div class="form-group col-7">
        <label for="cor">Cor: </label>
        <input type="text" class="form-control " id="corVeiculo" v-model="carro.cor">
      </div>

      <div class="form-group col-7">
        <label for="ano">Ano de Fabricacao: </label>
        <input type="text" class="form-control " id="anoVeiculo" v-model="carro.ano">
      </div>

       <div class="form-group col-7">
         <button class="btn btn-primary" type="button" v-on:click="salvar">Salvar</button>
      </div>

    </div>
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