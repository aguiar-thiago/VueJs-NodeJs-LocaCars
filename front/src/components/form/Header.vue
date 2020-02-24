<template>
<div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">LocadoraCars</a>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
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
        <button class="btn btn-outline-success my-2 my-sm-0" v-on:click="abreMenu()">Menu</button>
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
  <funcs/>
</div>
</template>



<script>
import funcs from './../../funcs/Funcs.js'

export default {
  name: 'Header',
  components: {funcs},
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
      funcs.formatMenu()
    },
  },
}


</script>


<style>

h2 {
  margin: -10px 0px 0px 0px;
  color: white;
  padding: 36px;
}
nav{
  z-index: 1;
}
.fundo {
  background-color: #000;
  /* position: absolute; */
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  /* filter: blur(5px); */
  /* opacity: .7; */
}
#evento-menu {
  width: 20%;
  background-image: -webkit-gradient(linear, left top, left bottom, from(#2f2f2f), to(black));
  background-image: linear-gradient(#2f2f2f, black);
  display: block;
  float: right;
  top: 0px;
  height: 85vh;
  margin-top: 0px;
  color: white;
  text-align: center;
  z-index: 999;
}

#navbarText{
  margin-left: 36%;
}
</style>