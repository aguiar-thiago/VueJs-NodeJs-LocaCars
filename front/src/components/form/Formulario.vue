<template>
  <form id="formulario" method="post" class="container">

    <div class="form-row">
      <div class="form-group col-md-3">
        <label for="placa">Placa: </label>
        <input type="text" class="form-control " id="placaVeiculo" v-model="carro.placa">
      </div>

      <div class="form-group col-md-4">
        <label for="nome">Nome: </label>
        <input type="text" class="form-control " id="nomeVeiculo" v-model="carro.nome">
      </div>

      <div class="form-group col-md-4">
        <label for="marca">Marca: </label>
        <input type="text" class="form-control " id="marcaVeiculo" v-model="carro.marca">
      </div>
    </div>

    <div class="form-row">

      <div class="form-group col-md-4">
        <label for="cor">Cor: </label>
        <input type="text" class="form-control " id="corVeiculo" v-model="carro.cor">
      </div>

      <div class="form-group col-md-2">
        <label for="ano">Fabricacao: </label>
        <input type="text" class="form-control " id="anoVeiculo" v-model="carro.ano">
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

      <div class="form-group col-8">
        <select class="custom-select" v-model="carro.categoria" >
          <option selected="">Categoria</option>
          <option value="simples">Simples</option>
          <option value="hatch">Hatch</option>
          <option value="suv">SUV</option>
          <option value="luxuoso">Luxuoso</option>
        </select>
      </div>

      <div class="form-group col-9">
        <label for="exampleTextarea">Descricao</label>
        <textarea class="form-control" id="exampleTextarea" rows="3" v-model="carro.descricao"></textarea>
      </div>
    </div>

    <div class="form-group col-7">
      <button class="btn btn-primary" type="button" v-on:click="salvar(carro)">Salvar</button>
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
        this.carro = {}
        alert("Inserido com sucesso")
      }
  }
}

</script>

<style>

</style>