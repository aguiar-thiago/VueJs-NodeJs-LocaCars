import {http} from './config'

export default {
  salvar:(carro) => {
     return http.post('Cadastrar', carro)
  },

  atualizar: (carro) => {
    return http.put('Atualizar', carro)
  }

}