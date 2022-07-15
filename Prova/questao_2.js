const prompt = require("prompt-sync")();

let partidas = 0;
let totalSets = 0;

console.log(`Campeonato de Tênis de Mesa`);
console.log("-".repeat(40));

do {
  const j1 = prompt("Jogador #1: ");
  const s1 = Number(prompt("Sets Vencidos: "));
  const j2 = prompt("Jogador #2: ");
  const s2 = Number(prompt("Sets Vencidos: "));

  if (s1 === s2) {
    console.log("Nesse tipo de jogo não pode ter empate MEU IRMÃO!");
    break;
  }
  if (s1 > s2) {
    console.log(`${j1} venceu o jogo por ${s1} X ${s2}`);
  } else {
    console.log(`${j2} venceu o jogo por ${s2} X ${s1}`);
  }
  partidas++;
  totalSets += s1 + s2;

  const continuar = prompt("Continuar (S/N): ");
  if (continuar.toUpperCase() === "N") {
    console.log("-".repeat(40));
    console.log(`Foram disputadas ${partidas} partidas`);
    console.log(`Total de Sets: ${totalSets}`);
    break;
  }
} while (true);
