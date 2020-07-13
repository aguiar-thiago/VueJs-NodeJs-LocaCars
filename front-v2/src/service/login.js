export default {
  pesquisaLogin(dados){    
    if ((dados.email == 'adm') && (dados.senha == 'adm')) {
      return true
    } else {
      return false
    } 
  },

}