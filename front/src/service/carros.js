import {http} from './config'

export default {
  salvar:(carro) => {
     return http.post('Cadastrar', carro)
  },

  pesquisar: (placaCarro) => {
    return http.post('Pesquisar', placaCarro)
  },

  atualizar: (carro) => {
    return http.put('Atualizar', carro)
  },

  deletar: (carro) => {
    return http.put('Deletar', carro)
  }

}