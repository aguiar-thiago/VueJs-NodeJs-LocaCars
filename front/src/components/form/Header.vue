<template>
<div id="header">
  <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-dark">
    <h2>LocadoraCars</h2>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul id="lista" class="navbar-nav mr-auto">
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
        <button class="btn btn-outline-light" v-on:click="abreMenu()">Menu</button>
    </div>
  </nav>

  <div id="evento-menu" v-if="menu">
    <div id="opcoes">
      <h2>Guia Menu</h2>
      <div id="cadastrar-veiculo">
        <button type="button" class="btn btn-warning">Warning</button>
      </div>
      <div id="atualizar-veiculo">
        <button type="button" class="btn btn-warning">Warning</button>
      </div>
      <div id="consultar-veiculos">
        <button type="button" class="btn btn-warning">Warning</button>
      </div>
    </div>
  </div>
</div>
</template>



<script>
// import funcs from './../../funcs/Funcs.js'

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
  background-image: linear-gradient(#2f2f2f, black);
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
}

#header {
  background-color: aliceblue;
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

</style>