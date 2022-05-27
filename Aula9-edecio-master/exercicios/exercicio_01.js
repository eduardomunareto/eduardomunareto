const prompt = require('prompt-sync')();

console.log('Digite o nome do funcionário ou "Fim" para sair');
console.log('-'.repeat(50));

while (true) {
  const funcionario = prompt('Funcionário: ');
  if (funcionario.toUpperCase() == 'FIM') break;
  const salario = Number(prompt('Salário R$: '));

  console.log(`Novo Salário R$: ${(salario * 1.2).toFixed(2)}`)

}
