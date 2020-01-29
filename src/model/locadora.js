import conexaoCallCenter from '../lib/ConexaoCallCenter'

class Produto {

  insert (dados, tabela) {
    conexaoCallCenter.insert(dados, tabela)
    .then((resolve)=>{
      console.log(resolve)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  delete (where, tabela) {
    conexaoCallCenter.delete(where, tabela)
    .then((resolve)=>{
      console.log(resolve)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  update (campos, tabela, where) {
    conexaoCallCenter.update(campos, tabela, where)
    .then((resolve)=>{
      console.log(resolve)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  Filter (campos, tabela, where) {
    conexaoCallCenter.select(campos, tabela, where)
    .then((resolve)=>{
      console.log(resolve)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

}


export default new Produto