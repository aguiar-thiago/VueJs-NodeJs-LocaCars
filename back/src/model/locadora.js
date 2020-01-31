import conexaoCallCenter from '../lib/ConexaoCallCenter'

class Carros {

  insert (dados, tabela) {
    return new Promise((resolve, reject) => {
      var status = conexaoCallCenter.insert(dados, tabela)

      status
      .then((data) => {
        resolve(data)
      })
      .catch((err) => {
        reject(err)
      })
    })
  }

  delete (where, tabela) {
    return new Promise ((resolve, reject) => {
      var status = conexaoCallCenter.delete(where, tabela)

      status
      .then((data)=>{
        resolve(data)
      })
      .catch((err)=>{
        reject(err)
      })
    })
  }

  update (campos, tabela, where) {
    return new Promise ((resolve, reject) => {
      var status = conexaoCallCenter.update(campos, tabela, where)

      status
      .then((data)=>{
         resolve(data)
      })
      .catch((err)=>{
        reject(err)
      })
    })
  }

  Filter (campos, tabela, where) {
    return new Promise ((resolve, reject) => {
      var status = conexaoCallCenter.select(campos, tabela, where)

      status
      .then((data)=>{
        resolve(data)
      })
      .catch((err)=>{
        reject(err)
      })
    })
  }

}


export default new Carros