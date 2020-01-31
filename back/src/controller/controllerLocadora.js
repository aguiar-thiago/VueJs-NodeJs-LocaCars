import locadora from '../model/locadora'

module.exports = {

  Insert (req, res) {
    let dados = req.body
    let result = locadora.insert(dados, 'tb_carros')

    result
    .then((data) => {
      console.log(data)
      res.json(data)
    })
    .catch((reject) => {
      console.log(reject)
      res.json(reject)
    })
  },

  Delete (req, res) {
    let where = req.body.id
    var result = locadora.delete(where, 'tb_carros')

    result
    .then((data) => {
      console.log(data)
      res.json(data)
    })
    .catch((reject) => {
      console.log(reject)
      res.json(reject)
    })
  },

  Update (req, res) {
    let where = req.body.id
    let campos = req.body.campos
    var result = locadora.update(campos, 'tb_carros', where)

    result
    .then((data) => {
      console.log(data)
      res.json(data)
    })
    .catch((reject) => {
      console.log(reject)
      res.json(reject)
    })
  },

  Filter (req, res) {
    let where = req.body.placa
    let campos = "placa, marca, cor, nome, ano"
    var result = locadora.Filter(campos, 'tb_carros', where)

    result
    .then((data) => {
      console.log(data)
      res.json(data)
    })
    .catch((err) => {
      console.log(err)
      res.json(err)
    })
  },

  Home (req, res) {


  }

}
