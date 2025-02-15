import locadora from '../model/ModelCarros'

module.exports = {

  insert (req, res) {
    locadora.Insert(req.body, function (err, result){
      if (err) res.json(err)
      res.json(result)
    })
  },

  delete (req, res) {
    locadora.Delete(req.body, function (err, result){
      if (err) res.json(err)
      res.json(result)
    })
  },

  update (req, res) {
    locadora.Update(req.body, function (err, result){
      if (err) res.json(err)
      res.json(result)
    })
  },

  filter (req, res) {
    locadora.Filter(req.body, function (err, result){
      if (err) res.json(err)
      res.json(result)
    })
  },

  filterWhereFixo (req, res) {
    locadora.FilterWhereFixo(req.body, function (err, result){
      if (err) res.json(err)
      res.json(result)
    })
  },

}
