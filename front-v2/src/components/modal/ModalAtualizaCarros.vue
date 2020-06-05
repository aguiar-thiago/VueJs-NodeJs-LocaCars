<template>
  <div>
    <button class="btn btn-primary" v-on:click="abreModal()" type="button">Editar</button>
    <div class="modal fade show" v-bind:style="'display:' + (modal ? 'block' : 'none')">
      <div class="modal-dialog" role="document">
        <div class="modal-content show modal-dados-carro">
          <div class="modal-header">
            <h5 class="modal-title">Locadora de Veículos</h5>
            <button type="button" class="close" v-on:click="abreModal()">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <h2>Atualize os dados do veículo agora</h2>
            <form method="put" class="container form-atualiza-dados">
              <FormCarro v-bind:dadosCarro="carro.dados" ambiente="cadastrar"></FormCarro>
              <button class="btn btn-primary" @click.stop.prevent="atualizar(carro)" type="button" style="margin: 10px;">Editar</button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="abreModal()">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import FormCarro from '../forms/FormCarro'

import Carros from '../../service/carros.js'
import funcs  from '../../functions/Functions.js'

  export default {
    name: 'AtualizaDadosCarros',
    props: {
      dadosCarro: Object,
      index: 0
    },
    components: {FormCarro},

    data: function(){
      return {
        modal : false,
        resultado: {},
        carro : {
          filtro: {
            placa: this.dadosCarro.placa
          },
          dados : Object.assign({}, this.dadosCarro),
          index: this.index
        },
      }
    },

    methods: {
      abreModal() {
        this.modal = !this.modal;
      },

      async atualizar (carro) {
        var retornoCampos = await funcs.validaCampos(carro.dados)
        if (!retornoCampos) return

        this.resultado = await Carros.atualizar(carro)
        if (this.resultado.status === 200) {
          this.$emit('envia-carro-atualizado', carro)
          alert("Dados atualizado com sucesso!")
        } else {
          alert("Ocorreu um problema ao atualizar o carro!")
        }
        this.modal = false
      },

      async deletar (carro) {
        this.resultado = await Carros.deletar(carro)
        if (this.resultado.status === 200) {
          alert("Dados excluido com sucesso!")
        } else {
          alert("Ocorreu um problema ao excluir o carro!")
        }
      },
    },
  }

</script>

<style>
  .modal-dados-carro {
    width: 1200px;
    height: 880px;
    right: 210px;
    top: 37px;
  }

  .modal-header, .modal-footer {
    background-color: #21dc9e;
  }
  .modal-body{
    background-color: #ccc8c8;
  }

</style>