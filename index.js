module.exports = function (itens) {
  let foundSpecialProduct = false;
  //if (!itens.length) return 0;
  //if (itens.length === 1) {
  //const { precoUnitario, quantidadeVendida } = itens[0];
  //return precoUnitario * quantidadeVendida * .05;
  //}
  //if (itens.length > 1) {
  //const prices = itens.map(item => {
  const totalPrice = itens
    .map((item) => {
      const { id, precoUnitario, quantidadeVendida } = item;
      if (id === 'XP-0101') foundSpecialProduct = true
      return multiply(precoUnitario, quantidadeVendida)
      //return precoUnitario * quantidadeVendida;
    })
    .reduce((a, b) => a + b, 0);

  //const totalPrice = prices.reduce((a, b) => a + b)

  //return totalPrice * 0.05;

  if (foundSpecialProduct) return multiply(totalPrice, .2)
  if (totalPrice < 1999.99) return multiply(totalPrice, .05)
  if (totalPrice > 1999.99 && totalPrice < 4999.99) return multiply(totalPrice, .1)
  if (totalPrice > 4999.99) return multiply(totalPrice, .15)
}

function multiply(val1, val2) {
  return val1 * val2
}
