const prompt = require('prompt-sync')();

do {
  const nome = prompt('Nome do aluno: ');
  const nota = Number(prompt('Nota: '));
  aprovado(nome, nota);

} while (continuar());

console.log('Bye, bye...')

function continuar() {
  if (prompt('Continuar [S][N]: ').toUpperCase() == 'N') return false;
  return true
}

function aprovado(nome, nota) {
  if (nota > 7) return console.log(`${nome}, você foi aprovado!`)
  return console.log(`${nome}, você foi reprovado!`,)
}
