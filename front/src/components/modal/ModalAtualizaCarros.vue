<template>
  <div>
    <button class="btn btn-primary" v-on:click="abreModal()" type="button">Editar</button>
    <div class="modal fade show desfocar-fundo" v-bind:style="'display:' + (modal ? 'block' : 'none')">
      <div class="modal-dialog">
        <div class="modal-content modal-dados-carro">
          <div class="modal-header">
            <h5 class="modal-title">LocaCars</h5>
            <button type="button" class="close" v-on:click="abreModal()">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <FormCarro v-bind:dadosCarro="carro.dados" ambiente="cadastrar"></FormCarro>
          </div>
          <div class="modal-footer">
            <form method="put">
              <button class="btn btn-info" style="margin-right: 10px;" @click.stop.prevent="atualizar(carro)" type="button">Editar</button>
              <button type="button" class="btn btn-secondary" @click="abreModal()">Fechar</button>
            </form>
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
    top: 20px;
  }

  .modal-header, .modal-footer {
    background-color: #1f1f1f;
    color: white;
  }
  .modal-body{
    background-color: #333333;
  }

  .modal.show .modal-dialog {
    top: -53px;
    right: 66px;
  }

  .desfocar-fundo{
    display: none;
    backdrop-filter: blur(4px);
  }

  .modal-footer{
    justify-content: center;
  }
</style>