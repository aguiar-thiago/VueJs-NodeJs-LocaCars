import mySql from 'mysql'
import 'dotenv/config'

class Conexao {
  constructor() {
    this.conexao = mySql.createConnection({
      host : process.env.DB_HOST,
      user :  process.env.DB_USER,
      password : process.env.DB_PASS,
      database : process.env.DB_DATABASE,
      port : process.env.DB_PORT,
      insecureAuth : process.env.DB_INSECUREAUTH
    })
    this.conexao.connect((err) => {
      if (err) {
        console.log('Erro ao conectar o BD...', err)
        return
      }
      console.log('Conectado!')
    })
  }

  async end (callback) {
    await this.conexao.end(callback)
  }

  async insert (dados, tabela, callback) {
    const format = await this.conexao.format(`INSERT INTO ${tabela} SET ?`, dados)
    await this.conexao.query(format, callback)
  }

  async delete (where, tabela, callback) {
    const format = await this.conexao.format(`DELETE FROM ${tabela} WHERE ?`, where)
    await this.conexao.query(format, callback)
  }

  async update (campos, where, tabela, callback) {
    const format = await this.conexao.format(`UPDATE ${tabela} SET ? WHERE ?`, [campos, where])
    console.log(format)
    await this.conexao.query(format, callback)
  }

  async select (where, tabela, callback) {
    const format = await this.conexao.format(`SELECT placa, marca, cor, nome, ano, situacao FROM ${tabela} WHERE ?`, where)
    await this.conexao.query(format, callback)
  }

}

module.exports = Conexao