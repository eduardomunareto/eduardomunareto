const prompt = require("prompt-sync")();

// declara os vetores

const titulos = [];

const generos = [];

const duracoes = [];

function incluir() {
  console.log("\nInclusão de Filmes");

  console.log("-".repeat(40));

  const x = prompt("Título do Filme: ");

  const y = prompt("Gênero do Filme: ");

  const z = Number(prompt("Duração (min.).: "));

  // adiciona as variáveis aos vetores

  titulos.push(x);

  generos.push(y);

  duracoes.push(z);

  console.log("Ok! Filme cadastrado com sucesso!");
}

function listar() {
  console.log("\nListagem dos Filmes Cadastrados");

  console.log("-".repeat(40));

  console.log(
    "\nNº Título do Filme............... Gênero.............. Duração"
  );

  console.log("--------------------------------------------------------------");

  for (let i = 0; i < titulos.length; i++) {
    console.log(
      ` ${i + 1} ${titulos[i].padEnd(30)} ${generos[i].padEnd(20)} ${
        duracoes[i]
      } min`
    );
  }
}

function pesq_genero() {
  console.log("\nPesquisa de Filmes por Gênero");

  console.log("-".repeat(40));

  // .toUpperCase() converte para letras maiúsculas

  const pesqGenero = prompt("Qual gênero você prefere? ").toUpperCase();

  console.log(
    "\nNº Título do Filme............... Gênero.............. Duração"
  );

  console.log("--------------------------------------------------------------");

  let contador = 0;

  for (let i = 0; i < titulos.length; i++) {
    if (generos[i].toUpperCase() == pesqGenero) {
      console.log(
        ` ${i + 1} ${titulos[i].padEnd(30)} ${generos[i].padEnd(20)} ${
          duracoes[i]
        } min`
      );

      contador = contador + 1;
    }
  }

  if (contador == 0) {
    console.log(`Obs.: * Não há filmes do gênero "${pesqGenero}"`);
  }
}

function pesq_duracao() {
  console.log("\nPesquisa de Filmes por Duração");

  console.log("-".repeat(40));

  const pesqMaximo = Number(prompt("Qual a duração máxima dos filmes? "));

  console.log(
    "\nNº Título do Filme............... Gênero.............. Duração"
  );

  console.log("--------------------------------------------------------------");

  let contador = 0;

  for (let i = 0; i < titulos.length; i++) {
    if (duracoes[i] <= pesqMaximo) {
      console.log(
        ` ${i + 1} ${titulos[i].padEnd(30)} ${generos[i].padEnd(20)} ${
          duracoes[i]
        } min`
      );

      contador = contador + 1;
    }
  }

  if (contador == 0) {
    console.log(
      `Obs.: * Não há filmes com duração inferior a "${pesqMaximo}" min`
    );
  }
}

function excluir() {
  listar();

  console.log("\nExclusão de Filmes");

  console.log("-".repeat(40));

  const numExcluir = Number(
    prompt("Qual o número do filme para excluir (0 para sair)? ")
  );

  if (numExcluir == 0) {
    return;
  }

  if (numExcluir > titulos.length) {
    console.log("Erro... número não existe no cadastro");

    return;
  }

  // exclui um elemento do vetor

  const excluido = titulos.splice(numExcluir - 1, 1);

  generos.splice(numExcluir - 1, 1);

  duracoes.splice(numExcluir - 1, 1);

  console.log(`Ok! O filme "${excluido}" foi excluído com sucesso`);
}

function estatistica() {
  console.log("\nEstatística do Cadastro de Filmes");

  console.log("-".repeat(40));

  const num = titulos.length; // .length retorna a quantidade de elementos do vetor

  let total = 0;

  for (const duracao of duracoes) {
    total = total + duracao;
  }

  const media = total / num;

  console.log(`Nº de Filmes Cadastrados: ${num}`);

  console.log(`Duração total dos Filmes: ${total}`);

  console.log(`Duração média dos Filmes: ${media.toFixed(1)}`);
}

// ------------------------------------------------ Programa Principal

do {
  console.log("\nControle Pessoal de Filmes");

  console.log("=".repeat(40));

  console.log("1. Incluir Filmes");

  console.log("2. Listar Filmes");

  console.log("3. Pesquisar por Gênero");

  console.log("4. Pesquisar por Duração");

  console.log("5. Excluir Filmes");

  console.log("6. Estatística do Cadastro de Filmes");

  console.log("7. Finalizar");

  const opcao = Number(prompt("Opção: "));

  if (opcao == 1) {
    incluir();
  } else if (opcao == 2) {
    listar();
  } else if (opcao == 3) {
    pesq_genero();
  } else if (opcao == 4) {
    pesq_duracao();
  } else if (opcao == 5) {
    excluir();
  } else if (opcao == 6) {
    estatistica();
  } else if (opcao == 7) {
    break;
  } else {
    console.log("Opção Inválida...");
  }
} while (true);
