const prompt = require("prompt-sync")();

const alunos = [];
const notas = [];
const aprovado = [];
do {
const x = prompt('Nome do Aluno: ')
const y = Number(prompt('Nota: '))

alunos.push(x)
notas.push(y)
if(y >=6 ) {aprovado.push('Aprovado')} else {
    aprovado.push('Reprovado')
}


const continua = prompt('Deseja continuar (S/N): ');
if(continua.toUpperCase() == 'N') break;


}while(true);

console.log('\nLista de Alunos');

console.log("-".repeat(40))



for (let i = 0; i < alunos.length; i++) {

    console.log(`${alunos[i]} - ${notas[i].toFixed(1)} = ${aprovado[i]}`)

}



