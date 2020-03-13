<template>
  <div id="main">

    <div id="opcoes-categoria">
      <nav id="btn-menu-opcoes" class="nav nav-pills nav-justified navbar-dark bg-dark">
        <a id="btn-menu-opcoes" class="nav-item nav-link" v-on:click="pesquisar('simples')">Simples</a>
        <a id="btn-menu-opcoes" class="nav-item nav-link" v-on:click="pesquisar('suv')">SUV</a>
        <a id="btn-menu-opcoes" class="nav-item nav-link" v-on:click="pesquisar('luxo')">Luxo</a>
        <a id="btn-menu-opcoes" class="nav-item nav-link" v-on:click="pesquisar('caminhonete')">Caminhonetes</a>

      </nav>
    </div>

<!-- 
    <div id="sidebar" class="col-12 col-md-3 col-xl-2 bd-sidebar">
      <ul id="lista-sidebar">
        <p>Filtro</p>
        <li><li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div> -->

    <div id="lista-carros" class="col-md-10 row">

      <div class="card mb-2" style="max-width: 540px;" v-for="(item, index) in resultado.data" v-bind:key="resultado.data[index].placa">
        <div id="config-card" class="row no-gutters">
          <div class="col-md-4">
            <img id="img-teste" src="../../icones/iconeCarro.png" alt="..." class="img-fluid">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{{carro.dados[index].nome}}</h5>
              <p class="card-text">{{carro.dados[index].descricao}}</p>
              <li class="card-text">R$ {{carro.dados[index].valor_reserva}}</li>
              <li class="card-text">{{carro.dados[index].marca}}</li>
              <li class="card-text">{{carro.dados[index].ano}}</li>
              <p class="card-text"><small class="text-muted">{{carro.dados[index].placa}}</small></p>
            </div>
          </div>
        </div>
      </div>

    </div>
</div>

</template>

<script>
import Carros from '../../service/carros.js'

export default {
  name: 'MainMeusCarros',
  components: {},

  data(){
    return {
      itens: [],
      carro : {
        filtro: {
          categoria: ''
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
    }
  },

  computed: {

    testaritem() {
      return this.resultado.data != '' && this.resultado.data != undefined;
    }
  },

  methods: {
    async pesquisar (category){
      this.resultado = await Carros.pesquisar({categoria: category})
      this.carro.dados = this.resultado.data
    },
  },

  
}
</script>

<style>
#lista-carros {
  background-color: rgb(255, 255, 255);
  width: auto;
  height: 825px;
  margin: 0;
}

#lista-carros {
  width: auto;
  height: auto;
}

#img-teste {
  margin-top: 45px;
  margin-left: 8px;
}

#opcoes-categoria {
  color: white;
  padding: 10px;
  margin: 70px 0px 0px 0px;
}

#sidebar {
  background-color:rgb(241, 241, 241);
  width: 15%;
  height: 100%;
  position: fixed;
}

#lista-sidebar {
  margin-top: 90px;
}
</style>

