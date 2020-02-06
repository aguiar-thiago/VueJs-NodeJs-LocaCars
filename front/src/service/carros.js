import {http} from './config'

export default {
  Post:(data) => {
     return http.post('Cadastrar', data)
  }
}