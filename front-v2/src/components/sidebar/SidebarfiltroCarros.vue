<template>
  <div>
    <div class="pesquisa-carro">
      <form id="form" method="post" style="margin-top: 40px;margin-left: 45px" v-on:submit="pesquisar()">
        <button type="submit" class="btn btn-primary btn-lg btn-filtra-carros">Filtrar</button>
      </form>
    </div>

    <div class="filtro-sidebar" id="style-scroll">
      <div class="container filtros">

        <div class="container opcao-filtro marca">
          <h3 class="titulo-filtro">Marca</h3>
          <div class="col-md-12 row">
            <div class="col-md-6" v-for="(mostraMarcaCarro, index) in getAtributosCarros('marca')" v-bind:key="mostraMarcaCarro">
              <div class="col">
                <div class="custom-control custom-switch">
                  <input type="checkbox" class="custom-control-input" v-bind:id="'customSwitch' + index" v-bind:value="mostraMarcaCarro" v-model="filtro_carros.marca">
                  <label class="custom-control-label" v-bind:for="'customSwitch' + index">{{mostraMarcaCarro}}</label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="container opcao-filtro categoria">
          <h3 class="titulo-filtro">Categoria</h3>
          <div class="col-md-12 row">
            <div class="col-md-6" v-for="(mostraCategoriaCarro, index) in getAtributosCarros('categoria')" v-bind:key="mostraCategoriaCarro">
              <div class="custom-control custom-switch">
                <input type="checkbox" class="custom-control-input" v-bind:id="'customSwitch22'+ index" v-bind:value="mostraCategoriaCarro" v-model="filtro_carros.categoria">
                <label class="custom-control-label" v-bind:for="'customSwitch22' + index">{{mostraCategoriaCarro}}</label>
              </div>
            </div>
          </div>
        </div>

        <div class="container opcao-filtro ano">
          <h3 class="titulo-filtro">Intervalo De Valores</h3>
          <div class="row">
            <div class="col">
              <input class="form-control form-control-sm" type="number" placeholder="Inicio" v-model="intervaloValores.inicial">
            </div>
            <div class="col">
              <input class="form-control form-control-sm" type="number" placeholder="Final" v-model="intervaloValores.final">
            </div>
          </div>
        </div>

        <div class="container opcao-filtro cor">
          <h3 class="titulo-filtro">Cor do Veículo</h3>
          <select class="custom-select" v-model="filtro_carros.cor">
            <option 
              v-for="mostraDados in getAtributosCarros('cor')"
              v-bind:key="mostraDados"
              :value="mostraDados"
              style="text-transform: capitalize;">
              {{mostraDados}}
            </option>
          </select>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
  import Carros from "../../service/carros.js"
  import { bus } from "../../main.js"
  import funcs from "../../functions/Functions.js"

  export default {
    name: 'SidebarfiltroCarros',
    props: {
      msg: String
    },
    data(){
      return {
        filtro_carros: {
          marca: [],
          categoria: [],
          cor: ''
        },
        mostraCategoriaCarros: [
          "Hatch", "Luxuoso", "Simples", "SUV"
        ],
        resultado: [],
        whereControle: '',
        where: "",
        arrDadosEnvio: [],
        intervaloValores : {
          inicial : 0,
          final : 0
        }
      }
    },

    methods: {
      async pesquisar (){
        event.preventDefault()

        if (this.filtro_carros.marca.length > 0) {
          this.whereControle = "marca IN('" + this.filtro_carros.marca.join("','") + "')"
          this.arrDadosEnvio.push(this.whereControle)
        }

        if (this.filtro_carros.categoria.length > 0) {
          this.whereControle = "categoria IN('" + this.filtro_carros.categoria.join("','") + "')"
          this.arrDadosEnvio.push(this.whereControle)
        }

        this.whereControle = ''
        if ((this.intervaloValores.inicial > 0) && (this.intervaloValores.final > 0)) {
          this.whereControle = "valor_reserva BETWEEN '" + this.intervaloValores.inicial + "' AND '" +this.intervaloValores.final+ "'"
        } else if (this.intervaloValores.inicial > 0) {
          this.whereControle = "valor_reserva >= " + this.intervaloValores.inicial
        } else if (this.intervaloValores.final > 0) {
          this.whereControle = "valor_reserva <= " + this.intervaloValores.final
        }
        this.whereControle == ''? '': this.arrDadosEnvio.push(this.whereControle)

         if ((this.filtro_carros.cor != "Todas") && (this.filtro_carros.cor != "")) {
          this.whereControle = "cor = '" + this.filtro_carros.cor + "'"
          this.arrDadosEnvio.push(this.whereControle)
        }

        this.arrDadosEnvio.forEach ((element, index) =>  {
          index == 0 ? this.where = element : this.where = this.where + " AND " + element
        })

        if (this.where == '') {
          alert("Favor, preencha o filtro para realizar a busca")
          this.enviarCarros("")
          return
        }

         this.arrDadosEnvio = []
         this.arrDadosEnvio.push(this.where)
         this.resultado = await Carros.pesquisarwhereFixo(this.arrDadosEnvio)

         this.arrDadosEnvio = []
         this.where = ""

         this.enviarCarros(this.resultado)
      },

      enviarCarros (carros) {
        bus.$emit("transfereCarros", carros)
      },

      getAtributosCarros: function (propriedade) {
        if(propriedade == 'marca')     return funcs.getCarrosMarcas();
        if(propriedade == 'cor')       return funcs.getCarrosCor();
        if(propriedade == 'categoria') return funcs.getCarrosCategorias();
      }
    }
}

</script>

<style>

.filtro-sidebar {
  float: left;
  position: fixed;
  top: 170px;
  height: 95%;
  width: 22%;
  background: rgb(255, 255, 255);
  overflow-y: scroll;
  overflow-x: hidden;
  white-space: nowrap;
}

.custom-control-label {
  font-size: 22px;
  margin: 7px;
}

.filtros {
  background-color: rgb(255, 255, 255);
  height: 2000px;
}

.opcao-filtro {
  background-color: rgb(51, 51, 51);
  color: white;
  text-transform: capitalize;
  padding: 15px;
  border-radius: 15px;
  text-align: left;
}

.custom-select {
  font-size: 20px;
}

.titulo-filtro {  
  text-align: center;
  font-size: 25px;
  padding-top: 10px;
  padding-bottom: 20px;
}

.form-control-sm {
  width: 140px;
}

.btn-filtra-carros {
  width: 180px;
}


#style-scroll::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #F5F5F5;
}

#style-scroll::-webkit-scrollbar {
  width: 12px;
  background-color: #F5F5F5;
}

#style-scroll::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: rgb(134, 134, 134);
}

.pesquisa-carro {
  width: 20%;
  background-color: rgb(255, 255, 255);
  position: fixed;

}

</style>