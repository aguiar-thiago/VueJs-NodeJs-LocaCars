const Conexao = require('./Conexao')

const dadosConexao = {
  host: '192.168.1.60',
  user: 'root',
  password: 'advantech',
  database: 'bd_sistema',
  port: '3306',
  insecureAuth: 'true'
}

const conexaoSistema = new Conexao(dadosConexao)

module.exports = conexaoSistema