import Conexao from '../lib/Conexao'

class Carros extends Conexao {
  constructor () {
    super()
    this.idtable = "tb_carros"
  }

  async Insert (data, callback) {
    await super.insert(data, this.idtable, callback)
  }

  async Delete (data, callback) {
    await super.delete(data.where, this.idtable, callback)
  }

  async Update (data, callback) {
    await super.update(data, data, this.idtable, callback)
  }

  async Filter (data, callback) {
    await super.select(data, this.idtable, callback)
  }
}

export default new Carros()