const prompt = require("prompt-sync")();

const carros = [];
let contador = 1;

do {
const carro = prompt(contador+'º Veículo: ')
if(carro.toUpperCase() == 'FIM') break;

const preco = +prompt('Preço R$: ')
carros.push([carro, preco + 500])

contador++;
if(contador > 10) break;

}while(true);

precoCarro(carros, 'Tabela de Preços (com frete)')


function precoCarro(matriz, nome) {
    if(matriz.length > 0) {
        console.log('\n' + nome);
        console.log("-".repeat(40))
        matriz.forEach(m => console.log(`${m[0].padEnd(5)} - ${padraoMoeda(m[1]).padStart(5)}`))

        console.log("-".repeat(40))
    }
   return;
}

function padraoMoeda(m) {
    return m.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
}