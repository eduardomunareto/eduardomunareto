const prompt = require("prompt-sync")();

    const n = +prompt("Digite um número: ");
    let divisores = 1;
    let resposta = '';
    while(n > divisores){
        if(n % divisores == 0) resposta += divisores + ', ';
        divisores++;
    }
    console.log(`Divisores do ${n}: ${resposta}${n}`)

 