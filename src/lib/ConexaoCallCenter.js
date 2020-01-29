const Conexao = require('./Conexao')

const dadosConexao = {
  host: '192.168.1.60',
  user: 'root',
  password: 'advantech',
  database: 'bd_call_center',
  port: '3306',
  insecureAuth: 'true'
}


const conexaoCallCenter = new Conexao(dadosConexao)

module.exports = conexaoCallCenter;