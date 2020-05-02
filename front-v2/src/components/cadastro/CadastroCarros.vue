<template>

  <form method="post" class="container cadastro-carro">

    <div class="form-row">
      <div class="form-group col-md-3">
        <label class="control-label" for="placa">Placa </label>
        <input type="text" class="form-control " v-model="carro.placa">
      </div>

      <div class="form-group col-md-5">
        <label class="control-label" for="nome">Nome </label>
        <input type="text" class="form-control " v-model="carro.nome">
      </div>

      <div class="form-group col-md-4">
        <label class="control-label" for="marca">Marca</label>
        <select class="custom-select" v-model="carro.marca">
          <option 
            v-for="mostraMarcaCarro in getAtributosCarros('marca')"
            v-bind:key="mostraMarcaCarro"
            :value="mostraMarcaCarro"
            style="text-transform: capitalize;">
            {{mostraMarcaCarro}}
          </option>
        </select>
      </div>
    </div>

    <div class="form-row" style="justify-content: center;">

      <div class="form-group col-md-3">
        <label class="control-label" for="cor">Cor do Veículo</label>
        <select class="custom-select" v-model="carro.cor">
          <option 
            v-for="mostraDados in getAtributosCarros('cor')"
            v-bind:key="mostraDados"
            :value="mostraDados"
            style="text-transform: capitalize;">
            {{mostraDados}}
          </option>
        </select>
      </div>

      <div class="form-group col-md-2">
        <label class="control-label" for="ano">Fabricacao </label>
        <input type="text" class="form-control" v-model="carro.ano">
      </div>

      <div class="form-group col-5">
        <label class="control-label">Valor da Reserva</label>
        <div class="form-group">
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text">$</span>
            </div>
            <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)" v-model="carro.valor_reserva">
            <div class="input-group-append">
              <span class="input-group-text">.00</span>
            </div>
          </div>
        </div>
      </div> 
    </div>

    <div class="form-row" style="justify-content: center;">
       <div class="form-group mx-sm-7 mb-2">
          <label class="control-label" for="lugares">Lugares</label>
          <select class="custom-select" v-model="carro.qtd_lugares">
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

      <div class="form-group mx-sm-5 mb-2">
        <label class="control-label" for="quilometragem">Quilometragem</label>
        <input type="number" class="form-control " v-model="carro.km">
      </div>

      <div class="form-row">
        <div class="form-group col">
          <label class="control-label" for="cambio">Câmbio</label>
          <select class="custom-select" v-model="carro.cambio">
            <option value="automatico">Automatico</option>
            <option value="manual">Manual</option>
          </select>
        </div>
      </div>

      <div class="form-group mx-sm-5 mb-">
        <label class="control-label" for="categoria">Categoria</label>
        <select class="custom-select" v-model="carro.categoria">
          <option 
            v-for="mostraDados in getAtributosCarros('categoria')"
            v-bind:key="mostraDados"
            :value="mostraDados"
            style="text-transform: capitalize;">
            {{mostraDados}}
          </option>
        </select>
      </div>

    </div>

    <div class="form-row" style="justify-content: center;">
      <div class="form-group col-9">
        <label class="control-label" for="descricao">Descriçâo</label>
        <textarea class="form-control" rows="3" v-model="carro.descricao"></textarea>
      </div>

    </div>
    <div class="form-group col">
      <button class="btn btn-dark btn-lg" type="button" v-on:click="salvar(carro)">Salvar</button>
      <button class="btn btn-primary btn-lg" type="button" v-on:click="carro = {}">Limpar Campos</button>
    </div>

  </form>
</template>


<script>
  import Carros from '../../service/carros'
  import funcs from '../../functions/Functions.js'

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
          ano : '',
          valor_reserva: '',
          categoria: '',
          descricao: '',
          km: '',
          qtd_lugares: '',
          cambio: ''
        }
      }
    },

    methods: {
      async salvar(dadosCarro){

        var retornoCampos = await funcs.validaCampos(this.carro)
        if (!retornoCampos) return

        var retorno = await Carros.salvar(dadosCarro)
        if(retorno.status != 200 ) {
          alert("Erro ao inserir carro.")
          console.log(retorno)
          return
        }
        alert("Carro inserido com sucesso.")
        this.carro = {}
      },

      getAtributosCarros: function (propriedade) {
        if(propriedade == 'marca')     return funcs.getCarrosMarcas();
        if(propriedade == 'cor')       return funcs.getCarrosCor();
        if(propriedade == 'categoria') return funcs.getCarrosCategorias();
      }
    },


  }

</script>

<style scoped>
  .control-label {
    font-size: 22px;
  }

  .cadastro-carro {
    padding: 30px;
  }

  .container {
    background-color: #c2efc6;
  }

  .btn {
    margin-top: 47px;
    margin-left: 60px;
  }
</style>