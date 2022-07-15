const prompt = require("prompt-sync")();

const n = Number(prompt("Número: "));
let resposta = "";

for (let i = 1; i < n; i++) {
  resposta += i + ", ";
}
for (let j = n; j > 1; j--) {
  resposta += j + ", ";
}

resposta += 1;
console.log(`Contagem: ${resposta}`);
