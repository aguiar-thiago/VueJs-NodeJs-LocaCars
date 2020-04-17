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
        <label class="control-label" for="marca">Marca </label>
        <input type="text" class="form-control " v-model="carro.marca">
      </div>
    </div>

    <div class="form-row">

      <div class="form-group col-md-4">
        <label class="control-label" for="cor">Cor do Veículo </label>
        <input type="text" class="form-control " v-model="carro.cor">
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
          <option value="simples">Simples</option>
          <option value="caminhonete">Caminhonete</option>
          <option value="suv">SUV</option>
          <option value="luxuoso">Luxuoso</option>
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
      <button class="btn btn-primary btn-lg" type="button" v-on:click="limpaCampos()">Limpar Campos</button>
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
        var retorno = await Carros.salvar(dadosCarro)
        console.log(retorno)
        this.limpaCampos()
        alert("Inserido com sucesso")
      },

      limpaCampos() {
        this.carro = {}
      }
  }
}

</script>

<style>
.control-label {
  font-size: 22px;
}

.cadastro-carro {
  padding: 30px;
}

.form-control {
  font-size: 22px;
}
</style>