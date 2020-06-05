<template>
  <form method="post" class="container cadastro-carro">
    <FormCliente v-bind:dadosCarro="carro" ambiente="cadastrar"></FormCliente>
    <div class="form-group col">
      <button class="btn btn-dark btn-lg" type="button" @click="salvar(carro)">Salvar</button>
      <button class="btn btn-primary btn-lg" type="button" @click="carro = {}">Limpar Campos</button>
    </div>
  </form>
</template>

<script>
  import Carros    from '../../service/carros'
  import funcs     from '../../functions/Functions.js'
  import FormCliente from '../forms/FormCliente.vue'

  export default {
    name: 'CadastroClientes',
    props: {
      msg: String
    },
    components: {FormCliente},

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
    background-color: #c2efc6;
  }

  .btn {
    margin-top: 47px;
    margin-left: 60px;
  }
</style>