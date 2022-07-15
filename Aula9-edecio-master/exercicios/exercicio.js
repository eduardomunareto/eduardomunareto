const prompt = require("prompt-sync")();

const jogos = [];

function titulo(conteudo) {
  // Recebe um texto //
  console.log();
  console.log(conteudo);
  console.log("-".repeat(35));
}

const listar = (jogos) => {
  titulo("   ===<Lista de jogos>===");
  console.log(
    "Código".padEnd(11) +
      "Nome".padEnd(15) +
      "Estilo".padEnd(15) +
      "Duracao".padStart(5) +
      "\n"
  );
  for (lista of jogos) {
    console.log(
      lista.codigo.toString().padEnd(10),
      lista.jogo.padEnd(15),
      lista.tipo.padEnd(15),
      lista.tempo.toString().padEnd(15)
    );
  }
  console.log("-".repeat(50));
};
let contador = 1;
// Programa Principal //
do {
  titulo("   ===<Página inicial>===");
  console.log("1 - Adicionar jogo");
  console.log("2 - Listar jogo");
  console.log("3 - Excluir jogo");
  console.log("4 - Filtrar jogo");
  console.log("5 - Finalizar");
  const opcao = Number(prompt("Opção: "));

  if (opcao == 1) {
    incluir(contador);
    contador++;
  } else if (opcao == 2) {
    listar(jogos);
  } else if (opcao == 3) {
    excluir();
  } else if (opcao == 4) {
    filtrar();
  } else if (opcao == 5) {
    console.log("Obrigado, amigo(a)!!!");
    break;
  } else {
    break;
  }
} while (true);
function incluir(contador) {
  titulo("===Cadastro de jogos===");
  const codigo = contador;
  const jogo = prompt("Nome do Jogo: ");
  const tipo = prompt("Tipo do Jogo: ");
  const tempo = Number(prompt("Tempo do Jogo: "));

  jogos.push({ codigo, jogo, tipo, tempo });
  console.log("Jogos cadastrados com exito!");
}

function excluir() {
  titulo("===Deletar lista de jogos===");
  listar(jogos);
  const exclusao = Number(
    prompt("Escreva o nome do jogo que deseja deletar: ")
  );
  const confirmacao = prompt(
    `Você tem certeza que deseja deletar o jogo? ${jogos[exclusao - 1].codigo} `
  ).toUpperCase();
  jogos.splice(exclusao - 1, 1);
  console.log("===Deletado com sucesso!=== ");
}

function filtrar() {
  const filtragem = prompt("Digite o nome do jogo, tipo ou tempo: ");
  const filtrado = jogos.filter(function (m) {
    return (
      m.nanime.toUpperCase().trim().includes(filtragem.toUpperCase().trim()) ||
      m.estilo.toUpperCase().trim().includes(filtragem.toUpperCase().trim())
    );
  });
  listar(filtrado);
}
