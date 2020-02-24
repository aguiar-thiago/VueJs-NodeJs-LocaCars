<template>
<div>

  <div id="evento-menu"  v-bind:style="'display:' + (menu ? 'block' : 'none')">
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
        <li><a href="#"><i class="btn"> SUV</i></a></li>
        <li><a href="#"><i class="btn"> Caminhonete</i></a></li>
        <li><a href="#"><i class="btn"> Simples</i></a></li>
        <li><a href="#"><i class="btn"> Sedan</i></a></li>
        <li><a href="#"><i class="btn"> Duas portas</i></a></li>
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
  position: fixed;
  background-color: rgb(0, 0, 0);
  max-width: 202px;
  height: 657px;
  margin: -641px 0px 0px 0px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  text-align: center;
}

#sidebar {
    max-width: 202px;
    padding-top: 80px;
}

ul {
  width: 200px;
}

ul li {
  border-bottom: 1px solid rgba(0 ,0, 0, 0.05);
  border-top: 1px solid rgba(225, 225, 225, 0.05);
  list-style-type: none;
  margin: 31px 0px -9px -41px;
  width: 202px;
}

a {
  text-decoration: none;
}

#btn {
  width: 200px;
}

ul li:hover{
  background: rgb(255, 124, 84);
}

#btn-menu {
  height: 50px;
}

#navbar {
  position: absolute;
  margin: 10px 0px 0px 54px;
}

#evento-menu {
  width: 311px;
  height: 518px;
  background-color: green;
  position: absolute;
  z-index: 9;
  margin: 81px 0px 0px -112px;
  border-radius: 10px;
}

</style>