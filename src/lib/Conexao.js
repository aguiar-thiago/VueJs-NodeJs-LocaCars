import mySql from 'mysql'

class Conexao {
  constructor(dadosConexao) {
    this.conexao = mySql.createConnection(dadosConexao)
    this.conexao.connect((err) => {
      if (err) {
        console.log('Erro ao conectar o BD...', err)
        return
      }
      console.log('Conectado!')
    })
  }

  query (query) {
   return new Promise((resolve, reject) => {
      this.conexao.query(query, (error, campos) => {
      if (error) {
        reject(console.log('Erro  ===  ' + error))
        return
      }
      console.log('Query executada com sucesso!')
      resolve(campos)
      })
    })
  }

  end () {
   return new Promise((resolve, reject) => {
      this.conexao.end((err, sucesso) => {
        if (err) {
          console.log('Erro ao Finalizar a conexao...', err)
          reject(err)
          return
        }
        console.log('Conexao Finalizada...')
        resolve(sucesso)
      })
    })
  }

  insert (campos , tabela) {
    return new Promise((resolve, reject) => {
      this.conexao.query(`INSERT INTO ${tabela} SET ?`, campos, (err, sucess) => {
        if (err){
          console.log('Erro  === '+err)
          reject(err)
          return
        }
        resolve(sucess)
      })
    })
  }

  delete (where, tabela) {
    return new Promise((resolve, reject) => {
      this.conexao.query(`DELETE FROM ${tabela} WHERE ?`, where, (err, sucess) => {
        if (err){
          console.log('Erro  === '+err)
          reject(err)
          return
        }
        resolve(sucess)
      })
    })
  }

  update (campos, tabela, where) {
    return new Promise((resolve, reject) => {
      this.conexao.query(`UPDATE ${tabela} SET ? WHERE ${where}`, campos, (err, sucess) => {
        if (err){
          console.log('Erro  === '+err)
          reject(err)
          return
        }
        resolve(sucess)
      })
    })
  }

  select (campos, tabela, where) {
    return new Promise((resolve, reject) => {
      this.conexao.query(`SELECT ${campos} FROM ${tabela} WHERE ?`, where, (err, sucess) => {
        if (err){
          console.log('Erro  === '+err)
          reject(err)
          return
        }
        resolve(sucess)
      })
    })
  }

}

module.exports = Conexao