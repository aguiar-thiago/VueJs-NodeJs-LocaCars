import Conexao from './Conexao'

const dadosConexao = {
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'bd_locadora_carros',
  port: '3306',
  insecureAuth: 'true'
}


const conexaoLocadora = new Conexao(dadosConexao)

module.exports = conexaoLocadora