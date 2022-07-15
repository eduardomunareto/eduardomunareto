const prompt = require("prompt-sync")();

const animes = [];

function titulo(texto) {
  // Recebe um texto //
  console.log();
  console.log(texto);
  console.log("=".repeat(35));
}

const listar = (array) => {
  titulo("   ===<Lista de Animes>===");
  console.log(
    "Código".padEnd(11) +
      "Nome".padEnd(15) +
      "Estilo".padEnd(15) +
      "Duracao".padStart(5) +
      "\n"
  );
  for (lista of array) {
    console.log(
      lista.codigo.toLocaleString().padEnd(10),
      lista.nanime.padEnd(15),
      lista.estilo.padEnd(15),
      lista.duracao.toLocaleString().padEnd(15)
    );
  }
  console.log("=".repeat(50));
};
let contador = 1;
// Programa Principal //
do {
  titulo("   ===<Menu de Opções>===");
  console.log("1 - Incluir Anime");
  console.log("2 - Listar Anime");
  console.log("3 - Excluir Animes");
  console.log("4 - Filtrar Animes");
  console.log("5 - Finalizar");
  const opcao = Number(prompt("Opção: "));

  if (opcao == 1) {
    incluir(contador);
    contador++;
  } else if (opcao == 2) {
    listar(animes);
  } else if (opcao == 3) {
    excluir();
  } else if (opcao == 4) {
    filtrar();
  } else if (opcao == 5) {
    console.log("Até Mais, companheiro(a)!");
    break;
  } else {
    break;
  }
} while (true);
// Opções Do menu //
// titulo("====<Lista de Animes Cadastrados>====") //
function incluir(contador) {
  titulo("===Cadastro de animes===");
  const codigo = contador;
  const nanime = prompt("Nome do Anime: ");
  const estilo = prompt("Estilo do Anime: ");
  const duracao = Number(prompt("Duração do Anime: "));

  animes.push({ codigo, nanime, estilo, duracao });
  console.log("Anime Cadastrado com sucesso!");
}

function excluir() {
  titulo("===Excluir Animes===");
  listar(animes);
  const exclusao = Number(
    prompt("Digite o código do anime que deseja excluir: ")
  );
  const confirmacao = prompt(
    `Você tem certeza que deseja excluir o anime ${animes[exclusao - 1]}.codigo`
  ).toUpperCase();
  animes.splice(exclusao - 1, 1);
  console.log("\n===Exclusão Realizada===\n ");
}

function filtrar() {
  const filtragem = prompt("Digite um nome de anime ou um estilo:  ");
  const filtrado = animes.filter(function (m) {
    return (
      m.nanime.toUpperCase().trim().includes(filtragem.toUpperCase().trim()) ||
      m.estilo.toUpperCase().trim().includes(filtragem.toUpperCase().trim())
    );
  });
  listar(filtrado);
}
