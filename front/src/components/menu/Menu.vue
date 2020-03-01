<template>
<div>

  <div id="evento-menu"  v-bind:style="'display:' + (menu ? 'block' : 'none')">

    <!-- <div id="opcoes">
      <h2>Guia Menu</h2>
      <div>
      </div>

      <div id="cadastrar-veiculo">
        <button type="button" class="btn btn-warning">Warning</button>
      </div>

      <div id="atualizar-veiculo">
        <button type="button" class="btn btn-info">Info</button>
      </div>

      <div id="consultar-veiculos">
        <button type="button" class="btn btn-danger">Danger</button>
      </div> -->


    <!-- </div> -->

  </div>

  <div id="wrapper">
    <div class="pos-f-t" id ="btn-menu">
      <nav class="navbar navbar-dark" id="navbar">
        <button id ="btn-menu" class="navbar-toggler" type="button" v-on:click="abreMenu()" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </nav>
    </div>

    <div id="sidebar">
      <ul>
        <li><a href="#"><i id="btn"> SUV</i></a></li>
        <li><a href="#"><i id="btn"> Caminhonete</i></a></li>
        <li><a href="#"><i id="btn"> Simples</i></a></li>
        <li><a href="#"><i id="btn"> Sedan</i></a></li>
        <li><a href="#"><i id="btn"> Duas portas</i></a></li>
      </ul>
    </div>
  </div>

</div>

</template>

<script>

export default {
  name: 'Menu',
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
#wrapper {
  
  background-color: rgb(0, 0, 0);
  max-width: 202px;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  text-align: center;
  margin-right: 1%;
  float: right;
  top: 0;
}

#sidebar {
  max-width: 202px;
  padding-top: 135px;
}

#btn {
  color: rgb(238, 238, 238);
}

#navbar {
  position: absolute;
  margin: 10px 0px 0px 54px;
}

#evento-menu {
    width: 311px;
    height: 80%;
    position: absolute;
    background-image: linear-gradient(#2f2f2f, black);
    z-index: 9;
    margin: 81px 0px 0px -112px;
    border-radius: 10px;
    display: block;
    top: 0;
}

#opcoes {
  display: flex;
  width: 100%;
  height: 100%;
  padding: 10px;
  flex-direction: column;
}

ul {
  width: 200px;
  padding-inline-start: 0px;
}

ul li {
  border-bottom: 1px solid rgba(0 ,0, 0, 0.05);
  border-top: 1px solid rgba(225, 225, 225, 0.05);
  list-style-type: none;
  width: 100%;
  padding: 21px;
}

ul li:hover{
  background: rgb(44, 44, 44);
}

@media screen and (max-width: 768px) and ( min-width: 460px){
  
}

</style>