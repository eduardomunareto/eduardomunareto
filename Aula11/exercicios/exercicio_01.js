const prompt = require("prompt-sync")();

const alunos = [];
const notas = [];
const aprovado = [];
const reprovado = [];
let contador = 1;

do {
const x = prompt(contador+'º Aluno: ')
if(x.toUpperCase() == 'FIM') break;
const y = Number(prompt('Nota: '))
alunos.push(x)
notas.push(y)

if(y >=7 ) {aprovado.push([x,y])} else {
    reprovado.push([x,y])
}


contador++;
}while(true);

resultado(aprovado, 'Aprovados')
resultado(reprovado, 'Reprovados')

function resultado(matriz, aprovado) {
    if(matriz.length > 0) {
    console.log('\n' + aprovado);
    console.log("-".repeat(40))
    matriz.map(m => console.log(`${m[0].padEnd(3)} - Nota: ${m[1].toFixed(1).padStart(3)}`));
    console.log()
    }
   return;
}