<template>
  <div class="container lista-carros">
    <div id="row-cards" class="col-md-12 row">
      <div class="col-md-4" v-for="(carro, index) in retornaCarros" v-bind:key="carro.placa">
        <div class="card">
          <img class="card-img-top img-carro" src="../../icones/iconeCarro.png" alt="Card image cap">
          <div class="card-body" style="margin-top: 30px">
            <h3 class="card-title" style="text-transform: capitalize; color: white; text-align: left">{{carro.marca}} {{carro.nome}}</h3>

            <div class="row">
              <div class="col">
                <h5 style="text-transform: capitalize; color: #a0a0a0;">
                  {{carro.nome}} {{carro.cor}} {{carro.qtd_lugares}} Lugares {{carro.categoria}}
                </h5>
              </div>
            </div>

            <h2 style="text-transform: capitalize; color: rgb(204, 204, 204);">R$
              <span class="badge badge-secondary label_valor_reserva">{{carro.valor_reserva}}</span>
            </h2>

            <div class="row">
              <div class="col coluna desc-km">
                <div class="col">
                  <img class="card-img-top img-velocimeto" src="../../icones/velocimetro2.png" alt="Card image cap" style="width: 35px;">
                </div>
                <div class="col">
                  <h6 class="label-km">{{carro.km}} Km</h6>
                </div>
              </div>

              <div class="col coluna desc-cambio">
                <div class="col">
                  <img class="card-img-top img-velocimeto" src="../../icones/ano-carro.png" alt="Card image cap" style="width: 35px;">
                </div>
                <div class="col">
                  <h6 class="label-km">{{carro.ano}}</h6>
                </div>
              </div>

              <div class="col coluna desc-ano">
                <div class="col">
                  <img class="card-img-top img-ano-carro" src="../../icones/cambio.png" alt="Card image cap" style="width: 35px;">
                </div>
                <div class="col">
                  <h6 class="label-km" style="text-transform: capitalize;">{{carro.cambio}}</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="atualiza-carros">
            <ModalAtualizaCarros v-bind:dadosCarro="carro" :index="index" @envia-carro-atualizado="pegaDados"></ModalAtualizaCarros>
          </div>
        </div>
      </div>

    </div>

    <div v-if="!carros.data" class="sem-carros-localizados">
      <h1>Faça seu filtro e veja resultados</h1>
    </div>

    <div v-if="carros.data == ''" class="sem-carros-localizados">
      <h1>Nenhum carro localizado</h1>
    </div>

  </div>

</template>

<script>
  import { bus } from "../../main.js"
  import ModalAtualizaCarros from "../modal/ModalAtualizaCarros.vue"

  export default {
    name: 'ListaMeusCarros',
    props: {
      msg: String
    },
    components: {ModalAtualizaCarros},

    data: function() {
      return {
        carros: {}
      }
    },

    methods: {
      pegaDados(dados) {
        console.log(dados)
        console.log(this.carros.data[dados.index])
        this.carros.data[dados.index] = dados.dados
      }
    },

    created() {
      bus.$on("transfereCarros", (todosCarros) => {
        this.carros = todosCarros
      })
    },

    computed: {
      retornaCarros() {
        return this.carros.data
      },
    }
}
</script>

<style>
  .lista-carros{
    background-color: rgb(223, 221, 221);
    /* height: 500px; */
    width: 76%;
    float: right;
    margin-right: 20px;
  }

  .card {
    width: 430px;
    height: 570px;
    font-size: 20px;
    margin: 20px;
    background-color: rgb(31, 29, 29);
    border-radius: 10px;
  }

  .img-carro {
    background-color: transparent;
    padding: 20px;
  }

  .detalhe-carro {
    background-color:transparent;
    padding: 5px;
    text-align: center;
    color: white;
    text-transform: capitalize;
  }

  .label_valor_reserva {
    width: 130px;
    background-color: #631686;
    height: 55px;
    font-size: 38px;
  }

  .coluna {
    margin-top: 10px;
    height: 70px;
    padding: 5px;
    border-radius: 10px;
  }

  .label-km {
    padding: 3px;
    color: rgb(255, 255, 255);
  }

</style>