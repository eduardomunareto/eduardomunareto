const prompt = require("prompt-sync")();

const numero = Number(prompt("Número: "));

let divisores = "";
let soma_divisores = 0;

for (let i = 1; i < numero; i++) {
  if (numero % i == 0) {
    divisores += i + ", ";
    soma_divisores += i;
  }
}
console.log(`Divisores do ${numero}: ${divisores.slice(0, -2)}`);
console.log(`Soma dos divisores: ${soma_divisores}`);
if (soma_divisores == numero)
  console.log(`Portanto, ${numero} é um número PERFEITO `);
