const prompt = require('prompt-sync')();

console.log('Informe o número 0 para sair');

while (true) {
  const numero = +prompt('Digite um número: ')
  if (numero == 0) {
    const confirma = prompt('Deseja sair? ').toUpperCase();
    if (confirma == 'S') break;
    continue
  }
  if (numero % 2 == 0) console.log(`Dobro ${numero * 2}`)
  if (numero % 2 == 1) console.log(`Triplo ${numero * 3}`)
}
console.log('Tchau!')