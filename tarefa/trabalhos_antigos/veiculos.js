const prompt = require("prompt-sync")();

console.log("\n\n" + "Sistema de gestão de Veículos".padStart(60));
console.log("==".repeat(15).padStart(60));
const veiculos = [];
let estoque = 0;
let contador = 0;

while (true) {
  console.log(
    "-".repeat(100) +
      "\n" +
      "    1. Incluir Veículo | 2. Listar Veículo | 3. Total em Estoque | 4. Remover Veículo | 5. Sair\n" +
      "-".repeat(100)
  );

  console.log();
  const menu = +prompt("Opção : ");
  if (menu === 5) {
    console.clear();
    console.log("\n\nTenha um bom dia!\n");
    break;
  }

  switch (menu) {
    case 1: {
      console.clear();
      console.log("\n        Inclusão de Veículos");
      console.log("=".repeat(40) + "\n");
      const modelo = prompt("Digite o modelo do veículo: ");
      const valor = +prompt("Digite o valor R$: ");
      //
      console.log(
        "\n" +
          "=".repeat(40) +
          "\n\n" +
          "  \nInclusão concluída com sucesso\n" +
          "+".repeat(30)
      );
      contador++;
      const carro = {
        codigo: contador.toString(),
        modelo: modelo,
        valor: valor,
      };
      veiculos.push(carro);
      console.log();
      break;
    }
    case 2: {
      console.clear();
      console.log("\n            Lista de Veículos");
      console.log("=".repeat(40));
      console.log(
        "Código".padEnd(11) + "Modelo".padEnd(15) + "Valor".padStart(5) + "\n"
      );
      if (veiculos.length === 0) {
        console.log("     e veículos para Listar!");
      } else {
        listarVeiculos();
      }
      console.log("\n" + "=".repeat(40) + "\n");
      break;
    }
    case 3: {
      console.clear();
      console.log("\n            Total em Estoque");
      console.log("=".repeat(40) + "\n");
      estoque = veiculos.reduce((a, carro) => (a += carro.valor), 0);

      console.log(`  Valor total em estoque ${real(estoque)}`);
      console.log("\n" + "=".repeat(40) + "\n");
      break;
    }
    case 4: {
      console.clear();
      console.log("\n          Exclusão de Veículos");
      console.log("=".repeat(40) + "\n");
      console.log(
        "Código".padEnd(11) + "Modelo".padEnd(15) + "Valor".padStart(5) + "\n"
      );
      listarVeiculos();
      console.log("\n" + "=".repeat(40) + "\n");
      const exclusao = prompt("Digite o código para exclusão: ");
      const Objexcluido = veiculos.find(
        (elemento) => elemento.codigo === exclusao
      );
      console.log(
        "\nVocê tem certeza que deseja excluir o veículo " +
          Objexcluido.modelo +
          "?" +
          "\n"
      );
      const confirmacao = prompt("S ou N: ");
      if (confirmacao.toUpperCase().trim() === "S") {
        const posicao = veiculos.indexOf(Objexcluido);
        veiculos.splice(posicao, 1);
      }
      console.log(
        "\n  Exclusão do veículo " +
          Objexcluido.modelo +
          " realizada!\n" +
          "  " +
          "-".repeat(37) +
          "\n"
      );
      break;
    }
    default: {
      console.clear();
      console.log("Erro na digitação, repita a operação");
      break;
    }
  }
}
function real(value) {
  return value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}

function listarVeiculos() {
  veiculos.forEach((carro) =>
    console.log(
      carro.codigo.toLocaleString().padEnd(10),
      carro.modelo.padEnd(15),
      real(carro.valor).padStart(5)
    )
  );
}
