<template>
  <form id="form" method="put" class="container" v-on:submit="pesquisar(carro.filtro)">
    <div class="row justify-content-center">
      <div class="form-group col-7">
        <h3>Placa do Véiculo</h3>
        <input type="text" class="form-control " id="placaVeiculo" v-model="carro.filtro.placa">
      </div>

       <div class="form-group col-7">
         <button class="btn btn-primary" type="submit" >Pesquisar</button>
      </div>
    </div>
    <div class="container" v-if="testaritem">

      <div class="form-row">
        <div class="form-group col-md-3">
          <label class="control-label" for="placa">Placa </label>
          <input type="text" class="form-control " v-model="carro.dados.placa">
        </div>

        <div class="form-group col-md-5">
          <label class="control-label" for="nome">Nome </label>
          <input type="text" class="form-control" v-model="carro.dados.nome">
        </div>

        <div class="form-group col-md-4">
          <label class="control-label" for="marca">Marca </label>
          <input type="text" class="form-control " v-model="carro.dados.marca">
        </div>
      </div>

      <div class="form-row">

        <div class="form-group col-md-4">
          <label class="control-label" for="cor">Cor do Veículo </label>
          <input type="text" class="form-control " v-model="carro.dados.cor">
        </div>

        <div class="form-group col-md-2">
          <label class="control-label" for="ano">Fabricacao </label>
          <input type="text" class="form-control " v-model="carro.dados.ano">
        </div>

        <div class="form-group col-5">
          <label class="control-label">Valor da Reserva</label>
          <div class="form-group">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">$</span>
              </div>
              <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" v-model="carro.dados.valor_reserva">
              <div class="input-group-append">
                <span class="input-group-text">.00</span>
              </div>
            </div>
          </div>
        </div> 
      </div>

      <div class="form-row">

        <div class="form-group col-6">
          <label class="control-label" for="exampleTextarea">Descricao</label>
          <textarea class="form-control" id="exampleTextarea" rows="3" v-model="carro.dados.descricao"></textarea>
        </div>

        <div class="form-group col-3">
          <label class="control-label" for="exampleTextarea">Situação</label>
          <input type="text" class="form-control " id="situacaoVeiculoAtu" v-model="carro.dados.situacao">
        </div>

        <div class="form-group col-3">
          <label class="control-label" for="exampleTextarea">Categoria</label>
          <select class="custom-select" v-model="carro.dados.categoria">
            <option value="simples">Simples</option>
            <option value="hatch">Hatch</option>
            <option value="suv">SUV</option>
            <option value="luxuoso">Luxuoso</option>
          </select>
        </div>

      </div>

       <div class="form-group col">
         <button class="btn btn-primary" v-on:click="atualizar(carro)" type="button">Editar</button>
         <button class="btn btn-danger"  v-on:click="deletar(carro.filtro)" type="button">Excluir</button>
      </div>
    </div>

 <!-- <button type="button" v-on:click="abreModal()">
  abre modal
</button> -->

<!-- Modal -->
<!-- <div class="modal fade show" tabindex="-1" role="dialog" v-bind:style="'display:' + (modal ? 'block' : 'none')">
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
</div> -->
  </form>
</template>

<script>
import Carros from '../../service/carros.js'

export default {
  name: 'FormAtualizaDeletaCarros',
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
          valor_reserva: '',
          categoria: '',
          descricao: ''
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
#form {
  margin-top: 80px;

}

</style>