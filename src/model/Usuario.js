import conexaoCallCenter from '../lib/ConexaoCallCenter'

class Produto {

  insereUsuario (dados, tabela) {
    conexaoCallCenter.insert(dados, tabela)
    .then((resolve)=>{
      console.log(resolve)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  deletaUsuario (where, tabela) {
    conexaoCallCenter.delete(where, tabela)
    .then((resolve)=>{
      console.log(resolve)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  atualizaProduto () {
    conexaoCallCenter.update(where, tabela)
    .then((resolve)=>{
      console.log(resolve)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

}


export default new Produto