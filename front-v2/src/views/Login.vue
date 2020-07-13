<template>
  <div class="container-fundo">  
    <div class="row login">
      <div style="width: 465px;" class="img-logo-empresa">
        <img class="img" src="../icones/logo-empresa.png">
        <h3 class="msg-principal">LocaCars, encontre seu melhor <br> carro no menor preço.</h3>
        <h6 class="msg-rodape">Este sistema tem todos os requisitos <br> de segurança desejado</h6>
      </div>

      <form>
        <div class="infos">
          <h2>Acesso ao Sistema</h2>
        </div>

        <li class="lista-logo-redes-sociais" v-for="nomeRedeSocial in RetornaRedeSocial" :key="nomeRedeSocial">
            <img class="img" :src="require(`../icones/${nomeRedeSocial}.png`)">            
        </li>           

        <div class="form-group">
          <label style="margin-top: 100px;" class="label-principal" for="exampleInputEmail1">Email de Acesso</label>
          <input type="email" class="form-control" id="exampleInputEmail1" v-model="dados.email"  placeholder="Email">

        </div>
        <div class="form-group">
          <label class="label-principal" for="exampleInputPassword1">Senha</label>
          <input type="password" class="form-control" v-model="dados.senha" id="exampleInputPassword1" placeholder="Senha">
        </div>
        <button type="submit" @click="validaDados()" class="btn btn-primary">Entrar</button>
      </form>      
    </div>
    </div>
</template>

<script>
import funcs from '../functions/Functions.js'
import login from '../service/login.js'
export default {
    name: 'Login',
    components: {},

    data() {
      return {
        arrRedesSociais: ["home-whatsapp", "home-instagram", "home-facebook"],
        dados : {
          email: "",
          senha: ""
        }
      }
    },

    computed: {
      RetornaRedeSocial() {
        return this.arrRedesSociais
      }
    },

    methods: {
      async validaDados() {

        var retornoFunc = await funcs.validaCamposLogin(this.dados)
        if (!retornoFunc) {
          return false
        }

        if (!login.pesquisaLogin(this.dados)) {
          alert("Email ou senha incorretos. Favor, tente novamente.")
          return
        }

        window.location.pathname="/Home"
      }
    }
    
}
</script>

<style scoped>
  .container-fundo {
    background-image: linear-gradient(to right, #1b1b1b , #353533);
    width: 100%;
    height: 100vh;
  }

  .login {
    position: fixed;
    background-color: rgb(0, 121, 80);
    margin: 130px 401px auto;
    height: 72%;
    width: 61%;
    border-radius: 30px;
    z-index: 99;
  }

  form {
    width: 784px;
    margin: 1px 0px 0px 0px;
    background-color: #efefef;
    border-radius: 30px;
  }

  .label-principal {
    font-size: 24px;
    color: rgb(0, 0, 0);
  }

  .form-control {
    width: 600px;
    margin: auto;
    border-radius: 15px;
  }

  .lista-logo-redes-sociais {
    display: inline-block;
    margin: 0px 21px 10px 10px;
  }

  .infos {
    margin: 50px;
  }

  .msg-principal {
    color: rgb(53, 53, 53);
    margin-top: 70px;
  }

  .msg-rodape {
    margin-top: 300px;
  }

</style>