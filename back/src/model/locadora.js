import conexaoCallCenter from '../lib/Conexao'

class Carros extends conexaoCallCenter {
  constructor () {
    super()
    this.idtable = "tb_carros"
  }

  async Insert (data, callback) {
    await conexaoCallCenter.insert(data, this.idtable, callback)
  }

  async Delete (data, callback) {
    await conexaoCallCenter.delete(data.where, this.idtable, callback)
  }

  async Update (data, callback) {
    await conexaoCallCenter.update(data.campos, data.where, this.idtable, callback)
  }

  async Filter (data, callback) {
    await conexaoCallCenter.select(data.where, this.idtable, callback)
  }
}

export default new Carros()