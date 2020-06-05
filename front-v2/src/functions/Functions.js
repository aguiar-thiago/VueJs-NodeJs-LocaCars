
module.exports = {
  validaCampos: async function(carro) {

    if (!carro.placa) {
      alert("O campo `Placa` não pode ser vazio");
      return false
    }

    if (!carro.nome) {
      alert("O campo `Nome` não pode ser vazio");
      return false
    }

    if (!carro.marca) {
      alert("O campo `Marca` não pode ser vazio");
      return false
    }

    if (!carro.cor) {
      alert("O campo `Cor` não pode ser vazio");
      return false
    }

    if (!carro.ano) {
      alert("O campo `Fabricação` não pode ser vazio");
      return false
    }

    if (!carro.valor_reserva) {
      alert("O campo `Valor da Reserva` não pode ser vazio");
      return false
    }

    if (!carro.valor_reserva) {
      alert("O campo `Valor da Reserva` não pode ser vazio");
      return false
    }

    if (!carro.categoria) {
      alert("O campo `Categoria` não pode ser vazio");
      return false
    }

    if (!carro.km) {
      alert("O campo `Quilometragem` não pode ser vazio");
      return false
    }

    if (!carro.qtd_lugares) {
      alert("O campo `Quantidade de Lugares` não pode ser vazio");
      return false
    }

    if (!carro.cambio) {
      alert("O campo `Cambio` não pode ser vazio");
      return false
    }
    return true
  },

  getCarrosMarcas: function() {
    const marcas = Array(
      "agrale", "aston martin","audi","bmw","byd","caoa chery","changan","chevrolet",
      "chrysler","citroen","dodge","effa","ferrari","fiat","ford","foton","geely","hafei",
      "honda","hyundai","iveco","jac","jaguar","jeep","jinbei","kia","land rover","lexus",
      "lifan","maserati","mclaren","mini","mitsubishi","nissan","peugeot",
      "porsche","ram","rely","renault","rolls-royce","shineray","smart","subaru","suzuki","tac","tesla",
      "toyota","troller","volkswagen","volvo"
    )
    return marcas
   },

   getCarrosCor: function() {
    const  cores = Array("branco", "preto", "cinza", "chumbo", "vermelho")
    return cores
   },

   getCarrosCategorias: function() {
     const  categoria = Array("simples", "caminhonete", "suv", "luxuoso")
     return categoria
   }

}