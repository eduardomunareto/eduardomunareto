const prompt = require("prompt-sync")();

console.log('Informe os competidores ou "Fim" para sair');
console.log("-".repeat(50));
const competidores = [];
let ordem = 1;
do {
  const nome = prompt(`${ordem} Competidor: `);
  if (nome.toUpperCase() == "FIM") break;
  competidores.push(nome);
  ordem++;
} while (true);
console.log();
console.log("Lista dos Competidores");
console.log("-".repeat(30));
for (let i = competidores.length - 1; i >= 0; i--) {
  console.log(competidores[i]);
}