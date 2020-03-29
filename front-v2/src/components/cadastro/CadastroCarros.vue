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

    <div class="form-row">
      <div class="form-group col-7">
        <label class="control-label" for="exampleTextarea">Descricao</label>
        <textarea class="form-control" rows="3" v-model="carro.descricao"></textarea>
      </div>

      <div class="form-group col-4">
        <label class="control-label" for="exampleTextarea">Categoria</label>
        <select class="custom-select" v-model="carro.categoria" >
          <option value="simples">Simples</option>
          <option value="hatch">Hatch</option>
          <option value="suv">SUV</option>
          <option value="luxuoso">Luxuoso</option>
        </select>
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
        descricao: ''
      }
    }
  },

  methods: {
      async salvar(dadosCarro){
        await Carros.salvar(dadosCarro)
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