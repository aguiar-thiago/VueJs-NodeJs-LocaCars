import locadora from '../model/locadora'

module.exports = {

  async Insert (req, res) {
    let dados = req.body

    if (dados["placa"] == "") {
      res.json("Placa nao pode se vazia ")
    }
    res.json("Placa nao pode se vazia ")
    locadora.insert(dados, 'tb_carros')
  },

  Delete (req, res) {
    let where = req.body.id
    locadora.delete(where, 'tb_carros')
    res.json('Deletado')
  },

  Update (req, res) {
    let where = req.body.id
    let campos = req.body.campos
    var teste =  locadora.update(campos, 'tb_carros', where)

    res.json('Atualizado')
  },

  Filter (req, res) {
    let where = req.body.id
    let campos = req.body.campos
    locadora.select(campos, 'tb_carros', where)
    res.json('retorno do select')
  }

}
