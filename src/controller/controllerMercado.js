import usuario from '../model/Usuario'

module.exports = {

  async InsertUser (req, res) {
    let dados = req.body
    usuario.insereUsuario(dados, 'TesteRangel')
    res.json('Cadastrado')
  },

  async DeleteUser (req, res) {
    let where = req.body.id
    console.log(where)
    usuario.deletaUsuario(where, 'TesteRangel')
    res.json('Deletado')
  },

  async UpdateUser (req, res) {
    let where = req.body.id
    console.log(where)
    usuario.deletaUsuario(where, 'TesteRangel')
    res.json('Deletado')
  }

}
