const prompt = require("prompt-sync")();

let poltronas = Number(prompt("Nº de Poltronas: "));
let lugares = [];
let resposta = "";

console.log();
console.log(`Filas dos assentos`);
console.log("-".repeat(20));

for (let i = 1; i <= poltronas; i++) {
  lugares.push(i);
}
for (let j = 0; j <= poltronas; j++) {
  if (lugares.length == 0) break;
  for (let i = 0; i < 4; i++) {
    resposta += (lugares.shift() + " ").padEnd(5);
    if (lugares.length == 0) break;
  }
  console.log(resposta);
  resposta = "";
}
