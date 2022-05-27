const prompt = require("prompt-sync")();

console.log("Digite 0 para sair");
let numerosDigitados = 0;
let soma = 0;
let maiorNumero = 0;
do {
    const n = +prompt("Digite um número: ");
    if(n == 0) break
    numerosDigitados++;
    soma += n;
    if(n > maiorNumero) maiorNumero = n;
}while(true);
console.log("-".repeat(40));
console.log(`Números Digitados: ${numerosDigitados}`)
console.log(`Soma dos Números:  ${soma}`);
console.log(`Maior Número digitado: ${maiorNumero}`);