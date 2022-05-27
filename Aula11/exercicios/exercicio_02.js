const prompt = require("prompt-sync")();

const clube = [];
let contador = 1;

do {
const x = prompt(contador+'º Clube: ')
clube.push(x);

contador++;
if(contador > 10) break;

}while(true);

jogos(clube, 'Jogos')


function jogos(matriz, nome) {
    if(matriz.length > 0) {
    console.log('\n' + nome);
    console.log("-".repeat(40));
        
    for(let i = 0; i < matriz.length -1 ; i++)
    {
        console.log(matriz[i].padEnd(3) + " X " + matriz[i + 1].padStart(3))
    }
    console.log("-".repeat(40))
    }
   return;
}