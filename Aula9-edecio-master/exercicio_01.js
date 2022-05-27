const prompt = require('prompt-sync')();

while (true) {
  const produto = prompt('Qual é o produto: ');
  const preco = +prompt('Qual é o preço: ');
  console.log(`Preço do produto ${produto} com desconto ${(preco * 0.90).toFixed(2)}`)
  const confirma = prompt('Deseja continuar(S/N): ').toUpperCase();

  if (confirma == 'N') break;

}