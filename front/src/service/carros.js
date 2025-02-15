import {http} from './config'

export default {
  salvar:(carro) => {
     return http.post('Cadastrar', carro)
  },

  pesquisar: (filtro) => {
    return http.post('Pesquisar', filtro)
  },

  pesquisarwhereFixo: (filtro) => {
    return http.post('PesquisarWhereFixo', filtro)
  },

  atualizar: (carro) => {
    return http.put('Atualizar', carro)
  },

  deletar: (carro) => {
    return http.put('Deletar', carro)
  }

}