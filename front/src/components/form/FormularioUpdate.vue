<template>
  <form id="app" method="put" class="container">
    <div class="row justify-content-center">
      <div class="form-group col-7">
        <label for="placa">Placa </label>
        <input type="text" class="form-control " id="placaVeiculo" v-model="filtro.placa">
      </div>
       <div class="form-group col-7">
         <button class="btn btn-primary" type="button" v-on:click="pesquisar(filtro)">Pesquisar</button>
      </div>
    </div>
    <div class="row justify-content-center" v-if="resultado.data != ''">
      <div class="form-group col-7">
        <input type="text" class="form-control " id="placaVeiculoAtu"    v-model="carro.placa">
      </div>

      <div class="form-group col-7">
        <input type="text" class="form-control " id="marcaVeiculoAtu"    v-model="carro.marca">
      </div>

      <div class="form-group col-7">
        <input type="text" class="form-control " id="corVeiculoAtu"      v-model="carro.cor">
      </div>

      <div class="form-group col-7">
        <input type="text" class="form-control " id="nomeVeiculoAtu"     v-model="carro.nome">
      </div>

      <div class="form-group col-7">
        <input type="text" class="form-control " id="anoVeiculoAtu"      v-model="carro.ano">
      </div>

      <div class="form-group col-7">
        <input type="text" class="form-control " id="situacaoVeiculoAtu" v-model="carro.situacao">
      </div>

       <div class="form-group col-7">
         <button class="btn btn-primary" v-on:click="atualizar(carro)" type="button">Editar</button>
      </div>

    </div>
    <div v-else>
      <p>nao foi </p>
    </div>


  </form>
</template>

<script>
import Carros from '../../service/carros'

export default {
  name: 'FormularioUpdate',
  props: {
    msg: String
  },

  data(){
    return {
      filtro: {
        placa: ''
      },
      carro :{
        placa: '',
      },
      resultado : '',
      teste : '',
    }
  },

  methods: {
    async pesquisar (placa){
      if (this.filtro.placa === '') {
        alert("A placa nao pode ser vazia")
        return
      }
      this.resultado = await Carros.pesquisar(placa)
      this.carro = this.resultado.data[0]
    },

    async atualizar (carro) {
      this.resultado = await Carros.atualizar(carro)
    }
  }
}

</script>

<style>

</style>