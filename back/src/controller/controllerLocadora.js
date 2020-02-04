import locadora from '../model/locadora'

module.exports = {

  async insert (req, res) {
    await locadora.Insert(req.body, function (err, result){
      if (err) res.json(err)
      res.json(result)
    })
  },

  async delete (req, res) {
    await locadora.Delete(req.body, function (err, result){
      if (err) res.json(err)
      res.json(result)
    })
  },

  async update (req, res) {
    await locadora.Update(req.body, function (err, result){
      if (err) res.json(err)
      res.json(result)
    })
  },

  async filter (req, res) {
    await locadora.Filter(req.body, function (err, result){
      if (err) res.json(err)
      res.json(result)
    })
  }

}
