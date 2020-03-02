<template>
<div id="">
  <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-dark">
    <h2>LocadoraCars</h2>
    <div class="collapse navbar-collapse" id="navbarText">

      <ul v-if="msg ==null" id="lista" class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">SUV </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Sedan</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Caminhonete</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Hatch</a>
        </li>
      </ul>

      <ul v-else id="lista" class="navbar-nav mr-auto">
        <li class="nav-item">
          <a>{{msg}}</a>
        </li>
      </ul>

        <button id ="btn-menu" class="btn btn-outline-light" v-on:click="abreMenu()">Menu</button>
    </div>
  </nav>

  <div id="evento-menu" v-show="menu">
    <div id="opcoes">
      <h2>Guia Menu</h2>
      <div id="cadastrar-veiculo">
        <button type="button" class="btn btn-warning">Meus Carros</button>
      </div>
      <div id="atualizar-veiculo">
        <button type="button" class="btn btn-danger">
          <router-link to="/editar">Editar veiculo</router-link>
          </button>
      </div>
      <div id="consultar-veiculos">
        <button type="button" class="btn btn-warning">
          <router-link to="/cadastro">cadastrar veiculo</router-link>
        </button>
      </div>
    </div>
  </div>
</div>
</template>



<script>
import funcs from './../../funcs/Funcs.js'

export default {
  name: 'Header',
  props: {
    msg: String
  },

    data(){
    return {
      menu : false,
    }
  },

  methods: {
    abreMenu() {
      this.menu = !this.menu

      funcs.formatMenu(this.menu)
    },
  },
}


</script>


<style>

h2 {
  color: white;
}
nav{
  z-index: 1;
}

#evento-menu {
  background-image: linear-gradient(111deg, #000000, #424d69);
  position: absolute;
  position: fixed;
  right: 0px;
  top: 0px;
  width: 29vw;
  height: 85vh;
  margin-top: 0px;
  color: white;
  text-align: center;
  z-index: 999;
  border-radius: 15px;
  margin-top: 75px;
  animation: mymove 0.5s;
  animation-timing-function: linear;
}

@keyframes mymove {
  from {right: -200px;}
  to {right: 0px;}
}

#navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

#lista {
  margin: auto;
}

#lista li a  {
  color: white;
}

#btn-menu {
  float: right;
  right: 7px;
  position: fixed;
}

</style>