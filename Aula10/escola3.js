const prompt = require('prompt-sync')();

let soma = 0;
let aprovados = 0
const alunosAprovados = [];
const alunosReprovados = [];


let reprovados = 0;
let contador = 0;

console.log('Informe o nome do Aluno ou FIM para sair');
do{
    const nome = prompt('Nome: ');
    if(nome.toUpperCase() == 'FIM') break;

    const nota = prompt('Nota: ');
    if(nota.toLocaleUpperCase() == 'D') {
        reprovados++;
        alunosReprovados.push(nome);
    };
    if(nota.toLocaleUpperCase() <= 'C') {
        aprovados++;
        alunosAprovados.push(nome);
    }
} while(true)


console.log(`${aprovados} Alunos Aprovados`);
alunosAprovados.forEach(m => console.log(m))
console.log('-'.repeat(40)); 
console.log(`${reprovados} Alunos Reprovado`);

alunosReprovados.forEach(m => console.log(m));
console.log('-'.repeat(40))