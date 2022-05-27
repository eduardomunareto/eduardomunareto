const prompt = require('prompt-sync')()

const produtos = [];
const casa = 'eduardo';
do {
    const x = prompt('Produto: ');
    const y = Number(prompt('Preço R$: '))

    produtos.push({Produto: x, Valor: y});

    const continua = prompt('Continuar(S/N): ');
    if(continua.toUpperCase() == 'N') break;

}while(true)

console.log("-".repeat(40))
produtos.forEach(m => Object.entries(m).forEach(([chave, valor]) => console.log(`${chave.padEnd(10)}: ${padraoMoeda(valor).padEnd(10)}`)))
console.log("-".repeat(40))
console.log(`Valor Total devido => ${padraoMoeda(produtos.reduce((soma, valor) => soma + valor.Valor, 0))}`);

function padraoMoeda(m) {
    return m.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
}