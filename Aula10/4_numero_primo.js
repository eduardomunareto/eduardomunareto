const prompt = require("prompt-sync")();

    const n = +prompt("Digite um número: ");
    let divisores = 1;
    let resposta = '';
    while(n > divisores){
        if(n % divisores == 0) resposta++
        divisores++;

    }

    if(resposta == 1 ) {
        console.log(`${n} é primo`)
    } else {
        console.log(`${n} não é primo`);
    }


 