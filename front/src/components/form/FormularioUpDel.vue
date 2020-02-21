<template>
  <form id="app" method="put" class="container" v-on:submit="pesquisar(carro.filtro)">
    <div class="row justify-content-center">
      <div class="form-group col-7">
        <label for="placa">Placa </label>
        <input type="text" class="form-control " id="placaVeiculo" v-model="carro.filtro.placa">
      </div>
   
       <div class="form-group col-7">
         <button class="btn btn-primary" type="submit" >Pesquisar</button>
      </div>
    </div>
    <div class="row justify-content-center" v-if="testaritem">
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
    <div v-else >
    </div>
 <button type="button" v-on:click="abreModal()">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade show" tabindex="-1" role="dialog" v-bind:style="'display:' + (modal ? 'block' : 'none')">
  <div class="modal-dialog show" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="close" v-on:click="abreModal()">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" v-on:click="abreModal()">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
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
       resultado:{},
      modal : false,
    }
  },
  computed: {
     testaritem() {
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

      if(!this.testaritem) {
        this.carro.filtro = {}
        alert('Placa nao localiza. Favor verificar!');
      }
    },

    abreModal() {
      this.modal = !this.modal;
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

  },
  
}

</script>

<style>

</style>