<template>

  <div class="container" v-if="testeAmbiente">
    <fieldset class="scheduler-border">
      <legend class="scheduler-border">Informações Principais</legend>
      <div class="form-row" style="justify-content: center;">
        <div class="form-group col-md-5">
          <label class="control-label" for="placa">Placa </label>
          <input type="text" class="form-control " v-model="dadosCarro.placa">
        </div>

        <div class="form-group col-md-5">
          <label class="control-label1" for="nome">Nome </label>
          <input type="text" class="form-control" v-model="dadosCarro.nome">
        </div>
      </div>
      
      <div class="form-row" style="justify-content: center;">
        <div class="form-group col-md-5">
          <label class="control-label" for="marca">Marca</label>
          <select class="custom-select" v-model="dadosCarro.marca">
            <option 
              v-for="mostraMarcaCarro in getAtributosCarros('marca')"
              v-bind:key="mostraMarcaCarro"
              :value="mostraMarcaCarro"
              style="text-transform: capitalize;">
              {{mostraMarcaCarro}}
            </option>
          </select>
        </div>

        <div class="form-group col-md-5">
          <label class="control-label" for="ano">Fabricacao </label>
          <input type="text" class="form-control " v-model="dadosCarro.ano">
        </div>
      </div>
    </fieldset>

    <fieldset class="scheduler-border">
      <legend class="scheduler-border">Propriedades</legend>
      <div class="form-row" style="justify-content: center;">
        <div class="form-group col-md-3">
          <label class="control-label" for="cor">Cor do Veículo</label>
          <select class="custom-select" v-model="dadosCarro.cor">
            <option 
              v-for="mostraDados in getAtributosCarros('cor')"
              v-bind:key="mostraDados"
              :value="mostraDados"
              style="text-transform: capitalize;">
              {{mostraDados}}
            </option>
          </select>
        </div>

        <div class="form-group col-5">
          <label class="control-label">Valor da Reserva</label>
          <div class="form-group">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                <span class="input-group-text">$</span>
              </div>
              <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" v-model="dadosCarro.valor_reserva">
              <div class="input-group-append">
                <span class="input-group-text">.00</span>
              </div>
            </div>
          </div>
        </div>

        <div class="form-group col-2">
          <label class="control-label" for="lugares">Lugares</label>
          <select class="custom-select" v-model="dadosCarro.qtd_lugares">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
      </div>

      <div class="form-row" style="justify-content: center;">
        <div class="form-group col-2">
          <label class="control-label" for="quilometragem">Quilometragem</label>
          <input type="number" class="form-control " v-model="dadosCarro.km">
        </div>

        <div class="form-group col-3">
          <div class="form-group col">
            <label class="control-label" for="cambio">Câmbio</label>
            <select class="custom-select" v-model="dadosCarro.cambio">
              <option value="automatico">Automatico</option>
              <option value="manual">Manual</option>
            </select>
          </div>
        </div>

        <div class="form-group col-3">
          <label class="control-label" for="exampleTextarea">Categoria</label>
          <select class="custom-select" v-model="dadosCarro.categoria">
            <option value="simples">Simples</option>
            <option value="caminhonete">Caminhonete</option>
            <option value="suv">SUV</option>
            <option value="luxuoso">Luxuoso</option>
          </select>
        </div>

        <div class="form-group col-3">
          <label class="control-label" for="lugares">Situação</label>
          <select class="custom-select" v-model="dadosCarro.situacao">
            <option value="L">L</option>
            <option value="A">A</option>
          </select>
        </div>
      </div>

      <div class="form-row" style="justify-content: center;">
        <div class="form-group col-10">
          <label class="control-label" for="exampleTextarea">Descricao</label>
          <textarea class="form-control" id="exampleTextarea" rows="3" v-model="dadosCarro.descricao"></textarea>
        </div>
      </div>
    </fieldset>
  </div>

</template>

<script scoped>
import Carros from '../../service/carros.js'
import funcs  from '../../functions/Functions.js'

export default {
  name: 'FormAtualizaDeletaCarros',
  props: {
    dadosCarro: Object,
    ambiente: String
  },

  methods: {
    getAtributosCarros: function (propriedade) {
      if(propriedade == 'marca')     return funcs.getCarrosMarcas();
      if(propriedade == 'cor')       return funcs.getCarrosCor();
      if(propriedade == 'categoria') return funcs.getCarrosCategorias();
    },

  },

  computed: {
    retornoDados: function() {
      this.$emit('retorno-dados-carro', dadosCarro)
    },

    testeAmbiente: function() {
      if (this.ambiente == 'atualizar') {
        if (this.dadosCarro != '' && this.dadosCarro != undefined && this.dadosCarro.placa != '' && this.dadosCarro.placa != undefined) {
          return true
        } else {
          return false
        }
      } else {
        return true
      }
    }
  },
}
</script>

<style scoped>

  .container {
    max-width: 1603px;
    margin: 0;
    background-color: #3e3e3e;
    border-radius: 10px;
    color: white;
    height: 811px;
  }

  fieldset.scheduler-border {
    border: 1px groove #a7a7a7 !important;
    padding: 0 1.4em 1.4em 1.4em !important;
    margin: 0 0 1.5em 0 !important;
    -webkit-box-shadow: 0px 0px 0px 0px #000;
    box-shadow: 0px 0px 0px 0px #000;
  }

  legend.scheduler-border {
    font-size: 1.2em !important;
    font-weight: bold !important;
    text-align: left !important;
    width:200px;
    color: #5f5f5f;
  }

</style>