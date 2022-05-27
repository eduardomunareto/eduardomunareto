const prompt = require("prompt-sync")();

let saldoNegativo = 0
console.log(`Informe FIM para sair`);
console.log("-".repeat(40));
do {
    const nome = prompt("Nome: ");
    if(nome.toUpperCase() == "FIM") break;
    const saldo = Number(prompt("Saldo: "));
    if(saldo < 0) saldoNegativo++;

} while(true)

if(saldoNegativo > 0) {
    console.log(`${saldoNegativo} clientes com saldo Negativo`);
} else {
    console.log(`Não há clientes com saldo negativo`)
}


