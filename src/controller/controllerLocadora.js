import locadora from '../model/locadora'

module.exports = {

  Insert (req, res) {
    let dados = req.body
    locadora.insert(dados, 'TesteRangel')
    res.json('Cadastrado')
  },

  Delete (req, res) {
    let where = req.body.id
    locadora.delete(where, 'TesteRangel')
    res.json('Deletado')
  },

  Update (req, res) {
    let where = req.body.id
    let campos = req.body.campos
    var teste =  locadora.update(campos, 'TesteRangel', where)

    res.json('Atualizado')
  },

  Filter (req, res) {
    let where = req.body.id
    let campos = req.body.campos
    locadora.select(campos, 'TesteRangel', where)
    res.json('retorno do select')
  }

}
