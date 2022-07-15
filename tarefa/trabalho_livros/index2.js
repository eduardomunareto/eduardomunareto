const prompt = require("prompt-sync")();

let titulos = [];
let autor = [];
let genero = [];

function incluir() {
  console.log("\nInclusão de Livros");
  console.log("-".repeat(40));

  const x = prompt("Título do Livro: ");
  const y = prompt("Autor do Livro: ");
  const z = prompt("Gênero do Livro: ");

  titulos.push(x);
  autor.push(y);
  genero.push(z);

  console.log("Livros cadastrados com sucesso!");
}

function listar() {
  console.log("\nListagem dos Livros Cadastrados");
  console.log("-".repeat(40));

  console.log("Nº Título do Livro..............Autor...............Gênero");
  console.log("----------------------------------------------------------");

  for (let i = 0; i < titulos.length; i++) {
    console.log(
      `${i + 1} ${titulos[i].padEnd(30)} ${autor[i].padEnd(20)} ${genero[i]}`
    );
  }
}

function pesq_autores() {
  const pesquisa = prompt("Qual é o nome de busca : ");
  const pAutor = autor.filter((m) => m.includes(pesquisa));

  console.log("\nListagem dos Livros Cadastrados");
  console.log("Autor");
  console.log("----------------------");
  for (let i = 0; i < pAutor.length; i++) {
    console.log(`${pAutor[i].padEnd(20)}`);
  }
}
function pesq_titulos() {
  const pesquisa = prompt("Qual é o nome de busca : ");
  const pTitulos = titulos.filter((m) => m.includes(pesquisa));

  console.log("\nListagem dos Livros Cadastrados");
  console.log("Autor");
  console.log("----------------------");
  for (let i = 0; i < pTitulos.length; i++) {
    console.log(`${pTitulos[i].padEnd(20)}`);
  }
}
function excluir() {
  listar();
  const pesquisa = prompt("Qual título quer excluir : ");
  const pTitulos = titulos.indexOf(pesquisa);

  titulos.splice(pTitulos, 1);
  autor.splice(pTitulos, 1);
  genero.splice(pTitulos, 1);

  console.log("Titulo excluído");
}

function estatistica() {
  console.log("\nListagem dos Livros Cadastrados");
  console.log("Autor");
  console.log("Total de livros: " + titulos.length);
}

do {
  console.log("\nCadastro de Livros");
  console.log("=".repeat(40));
  console.log("1. Incluir Livros");
  console.log("2. Listar Livros");
  console.log("3. Pesquisar por autores");
  console.log("4. Pesquisar por Títulos");
  console.log("5. Excluir livros");
  console.log("6. Estatística de cadastro de livros");
  console.log("7. Finalizar");
  const opcao = Number(prompt("Opção: "));
  if (opcao == 1) {
    incluir();
  } else if (opcao == 2) {
    listar();
  } else if (opcao == 3) {
    pesq_autores();
  } else if (opcao == 4) {
    pesq_titulos();
  } else if (opcao == 5) {
    excluir();
  } else if (opcao == 6) {
    estatistica();
  } else if (opcao == 7) {
    break;
  } else {
    console.log("Opção Inválida");
  }
} while (true);
