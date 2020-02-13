<template>


  <form id="app" method="put" class="container">
    <div class="row justify-content-center">
      <div class="form-group col-7">
        <label for="placa">Placa </label>
        <input type="text" class="form-control " id="placaVeiculo" v-model="carro.filtro.placa">
      </div>
      {{teste}}
       <div class="form-group col-7">
         <button class="btn btn-primary" type="button" v-on:click="pesquisar(carro.filtro)">Pesquisar</button>
      </div>
    </div>
    <div class="row justify-content-center" v-if="(resultado.data != '') && (resultado.data != undefined)">
      <div class="form-group col-7">
        <input type="text" class="form-control " id="placaVeiculoAtu"    v-model="carro.dados.placa">
      </div>

      <div class="form-group col-7">
        <input type="text" class="form-control " id="marcaVeiculoAtu"    v-model="carro.dados.marca">
      </div>

      <div class="form-group col-7">
        <input type="text" class="form-control " id="corVeiculoAtu"      v-model="carro.dados.cor">
      </div>

      <div class="form-group col-7">
        <input type="text" class="form-control " id="nomeVeiculoAtu"     v-model="carro.dados.nome">
      </div>

      <div class="form-group col-7">
        <input type="text" class="form-control " id="anoVeiculoAtu"      v-model="carro.dados.ano">
      </div>

      <div class="form-group col-7">
        <input type="text" class="form-control " id="situacaoVeiculoAtu" v-model="carro.dados.situacao">
      </div>

       <div class="form-group col-7">
         <button class="btn btn-primary" v-on:click="atualizar(carro)" type="button">Editar</button>
         <button class="btn btn-danger"  v-on:click="deletar(carro.filtro)" type="button">Excluir</button>
      </div>
    </div>
    <div v-else>
      <p>NAO ACHOU</p>
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
      carro : {
        filtro: {
          placa: ''
        },
        dados :{
          placa: '',
          marca : '',
          cor: '',
          nome: '',
          ano: '',
          situacao: '',
        },
      },
      resultado : '',
      teste : '',
    }
  },

  methods: {
    async pesquisar (filtro){
      if (this.carro.filtro.placa === '') {
        alert("A placa nao pode ser vazia")
        return
      }

      this.resultado = await Carros.pesquisar(filtro)
      this.carro.dados = this.resultado.data[0]
    },

    async atualizar (carro) {
      this.resultado = await Carros.atualizar(carro)

      if (this.resultado.status === 200) {
        alert("Dados atualizado com sucesso!")
      } else {
        alert("Ocorreu um problema ao atualizar o carro!")
      }
      this.resultado = {}
      this.carro.dados  = {}
      this.carro.filtro = {}
    },

    async deletar (carro) {
      this.resultado = await Carros.deletar(carro)

      if (this.resultado.status === 200) {
        alert("Dados excluido com sucesso!")
      } else {
        alert("Ocorreu um problema ao excluir o carro!")
      }

      this.resultado = {}
      this.carro.dados  = {}
      this.carro.filtro = {}

    },

    mensagem (placa){
      alert("Desculpa, mas nao conseguimos localizar o carro com a placa " +placa)
    }
  }
}

</script>

<style>

</style>