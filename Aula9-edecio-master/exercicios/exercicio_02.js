const prompt = require('prompt-sync')();

console.log('Digite a descrição da conta ou "Fim" para sair ');
console.log('-'.repeat(50));
let saldo = 0;

while (true) {
  const conta = prompt('Conta: ');
  if (conta.toUpperCase() == 'FIM') {
    console.log('-'.repeat(50));
    console.log(`Total das Contas ${saldo.toFixed(2)}`);
    break;
  }
  const valor = Number(prompt('Valor R$: '));
  saldo += valor;

}
