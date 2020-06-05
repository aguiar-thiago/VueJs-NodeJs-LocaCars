<template>
  <form method="put" class="container form-atualiza-dados" v-on:submit="pesquisar(carro.filtro)">
    <div class="row justify-content-center buscar-carro">
      <div class="form-group col-7">
        <h3>Placa do Véiculo</h3>
        <input type="text" class="form-control " id="placaVeiculo" v-model="carro.filtro.placa">
      </div>

       <div class="form-group col-7">
         <button class="btn btn-primary" type="submit" >Pesquisar</button>
      </div>
    </div>

    <FormCarro v-bind:dadosCarro="carro.dados" ambiente="atualizar"></FormCarro>

    <div class="form-group col" style="padding: 20px;" v-if="verificaResultado">
      <button class="btn btn-primary" v-on:click="atualizar(carro)" type="button" style="margin: 10px;">Editar</button>
      <button class="btn btn-danger"  v-on:click="deletar(carro.filtro)" type="button">Excluir</button>
    </div>

  </form>
</template>

<script scoped>
import Carros from '../../service/carros.js'
import funcs  from '../../functions/Functions.js'
import FormCarro from '../forms/FormCarro.vue'

export default {
  name: 'FormAtualizaDeletaCarros',
  props: {
    msg: String
  },
  components: {FormCarro},

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
          valor_reserva: '',
          categoria: '',
          descricao: '',
          km: '',
          qtd_lugares: '',
          cambio: ''
        },
      },
       resultado:{},
    }
  },
  computed: {
     verificaResultado() {
       return this.resultado.data != '' && this.resultado.data != undefined;
     }
  },
  methods: {
    async pesquisar (filtro){
      event.preventDefault();

      if (this.carro.filtro.placa === '') {
        alert("A placa nao pode ser vazia")
        return
      }

      this.resultado = await Carros.pesquisar(filtro)
      this.carro.dados = this.resultado.data[0];

      if(!this.verificaResultado) {
        this.carro.filtro = {}
        alert('Placa nao localiza. Favor verificar!');
      }
    },

    async atualizar (carro) {

      var retornoCampos = await funcs.validaCampos(carro.dados)
      if (!retornoCampos) return

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
      this.carro.dados  = false
      this.carro.filtro = {}
    },

  },
}

</script>

<style scoped>
  .form-atualiza-dados {
    margin-top: 80px;
  }

  .container {
    background-color: #c2efc6;
  }

  .control-label {
    font-size: 22px;
  }

  .buscar-carro {
    padding-top: 30px;
  }

</style>