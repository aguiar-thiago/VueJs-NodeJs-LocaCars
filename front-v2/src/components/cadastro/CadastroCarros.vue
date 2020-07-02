<template>
  <form method="post" class="container cadastro-carro">
    <FormCarro v-bind:dadosCarro="carro" ambiente="cadastrar"></FormCarro>
    <div class="form-group col">
      <button class="btn btn-info btn-lg" type="button" @click="salvar(carro)">Salvar</button>
      <button class="btn btn-warning btn-lg" type="button" @click="carro = {}">Limpar Campos</button>
    </div>
  </form>
</template>

<script>
  import Carros    from '../../service/carros'
  import funcs     from '../../functions/Functions.js'
  import FormCarro from '../forms/FormCarro.vue'

  export default {
    name: 'Formulario',
    props: {
      msg: String
    },
    components: {FormCarro},

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
          descricao: '',
          km: '',
          situacao: '',
          qtd_lugares: '',
          cambio: ''
        }
      }
    },

    methods: {
      async salvar(dadosCarro){

        var retornoCampos = await funcs.validaCampos(this.carro)
        if (!retornoCampos) return

        var retorno = await Carros.salvar(dadosCarro)
        if(retorno.status != 200 ) {
          alert("Erro ao inserir carro.")
          console.log(retorno)
          return
        }
        alert("Carro inserido com sucesso.")
        this.carro = {}
      },

      getAtributosCarros: function (propriedade) {
        if(propriedade == 'marca')     return funcs.getCarrosMarcas();
        if(propriedade == 'cor')       return funcs.getCarrosCor();
        if(propriedade == 'categoria') return funcs.getCarrosCategorias();
      },
    },
  }

</script>

<style scoped>
  .control-label {
    font-size: 22px;
  }

  .cadastro-carro {
    padding: 30px;
  }

  .container {
    background-color: rgb(51, 51, 51);
    color: white;
    font-size: 20px;
  }

  .btn {
    /* margin-top: 47px; */
    margin-left: 60px;
  }
</style>