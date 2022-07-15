//constantes e query

const form = document.querySelector(".formulario");
const valor = document.querySelector(".valor");
const incluir_pesquisar = document.querySelector(".incluir_pesquisar");
const resposta = document.querySelector(".local");
const confirmacao = document.querySelector(".confirmacao");
const btnListar = document.querySelector(".btn_listar_livro");
const btn_incluir_livro = document.querySelector(".btn_incluir_livro");
const listar = document.querySelector(".listar");
const ordemItens = document.querySelectorAll(".ordem");
const estatistica = document.querySelector(".estatistica");
const respEstatistica = estatistica.querySelectorAll("span");
const menor_livro = document.querySelector(".menor_livro");
const maior_livro = document.querySelector(".maior_livro");
const pesquisarAlvo = document.querySelector(".pesquisar");
const cab_pesquisar = document.querySelector(".cab_pesquisar");
const btn_incluir = document.querySelector(".btn_incluir");

//arrays
let livros = [];
let contador = 1;

//load com localStorage get
window.addEventListener("load", (e) => {
  if (localStorage.getItem("livros")) {
    livros = JSON.parse(localStorage.getItem("livros"));
    estatInfo();
    contador = livros.reduce((a, b) => (a = Number(b.codigo)), 0) + 1;

    incluirResposta(livros, resposta);
  }

  //Cadastro de livros
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    livros.push({
      codigo: contador,
      nome: form.nome_livro.value,
      autor: form.autor.value,
      genero: form.genero.value,
      preco: Number(form.preco.value),
    });
    contador++;
    localStorage.setItem("livros", JSON.stringify(livros));
    incluirResposta(livros, resposta);
    alert(`O livro ${form.nome_livro.value} foi incluído`);
    estatInfo();
    form.reset();
    form.nome_livro.focus();
  });
  localStorage.setItem("livros", JSON.stringify(livros));
});

//Design
btnListar.addEventListener("click", (e) => {
  e.preventDefault();
  listar.className = "row g-5 d-none";
});
btn_incluir_livro.addEventListener("click", (e) => {
  e.preventDefault();
  listar.className = "row g-5";
  location.reload();
});

//Array com resposta
function incluirResposta(obj, local) {
  let lista = "";
  localStorage.removeItem("livros", JSON.stringify(livros));
  obj.map(({ codigo, nome, autor, genero, preco }, i) => {
    lista += `<tr><td onclick="if(confirm('Deseja remover o livro ' + livros[${i}].nome +' do autor ' + livros[${i}].autor) ) {livros.splice(${i},1); incluirResposta(livros,resposta)};" id="${codigo}"><i class="bi bi-eraser apagar"></i></td><td>${codigo}</td><td>${nome}</td><td>${autor}</td><td>${genero}</td><td>R$ ${preco.toFixed(
      2
    )}</td></tr>`;
  });
  localStorage.setItem("livros", JSON.stringify(livros));

  local.innerHTML = lista;
}

//ordenar
for (ordem of ordemItens) {
  ordem.addEventListener("click", (e) => {
    const elemento = e.target.attributes.name.value;
    ordenarItens(livros, elemento);
  });

  function padraoMoeda(valor) {
    return valor.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  }
}

function ordenarItens(obj, elemento) {
  const livrosCopia = [...obj];
  if (elemento == "codigo") livrosCopia.sort((a, b) => a.codigo - b.codigo);
  if (elemento == "preco") livrosCopia.sort((a, b) => a.preco - b.preco);
  if (elemento == "nome")
    livrosCopia.sort((a, b) => a.nome.localeCompare(b.nome));
  if (elemento == "autor")
    livrosCopia.sort((a, b) => a.autor.localeCompare(b.autor));
  if (elemento == "genero")
    livrosCopia.sort((a, b) => a.genero.localeCompare(b.genero));

  incluirResposta(livrosCopia, resposta);
}

cab_pesquisar.addEventListener("click", (e) => {
  listar.className = "row g-5";
  valor.innerText = "menor que";
  incluir_pesquisar.innerText = " Pesquisar Livro";
  incluir_pesquisar.classList =
    "mb-3 bi-search incluir_livro text-primary incluir_pesquisar";
  btn_incluir.classList = "d-none";
  pesquisarAlvo.classList =
    "btn btn-primary btn-small fw-bolder shadow-lg rounded-pill p-2 pesquisar";
});

pesquisarAlvo.addEventListener("click", (e) => {
  pesquisar();
});

//Pesquisar
function pesquisar() {
  const infoNome = form.nome_livro.value;
  const infoAutor = form.autor.value;
  const infoGenero = form.genero.value;
  const infoPreco = form.preco.value;
  console.log(infoPreco);

  let livrosPesq = livros.filter(function (item) {
    return (
      item.nome.toUpperCase().trim().includes(infoNome.toUpperCase().trim()) &&
      item.autor
        .toUpperCase()
        .trim()
        .includes(infoAutor.toUpperCase().trim()) &&
      item.genero.toUpperCase().trim().includes(infoGenero.toUpperCase().trim())
    );
  });

  if (infoPreco > 0) livrosPesq = livrosPesq.filter((v) => v.preco < infoPreco);

  console.log(livrosPesq);
  incluirResposta(livrosPesq, resposta);
}

//Estatisticas
function estatInfo() {
  if (livros.length == 0) return;
  const total = livros.reduce((a, v) => (a += v.preco), 0);
  respEstatistica[1].innerText = livros.length;
  respEstatistica[2].innerText = "R$ " + total.toFixed(2);
  const maiorPreco = livros.reduce((a, b) => (a = Math.max(a, b.preco)), 0);
  respEstatistica[3].innerText = "R$ " + maiorPreco.toFixed(2);
  const menorPreco = livros.reduce((a, b) => (a = Math.min(a, b.preco)), 10000);
  respEstatistica[4].innerText = "R$ " + menorPreco.toFixed(2);

  maior_livro.innerText = livros.filter((v) =>
    v.preco == maiorPreco ? v : ""
  )[0].nome;
  menor_livro.innerText = livros.filter((v) =>
    v.preco == menorPreco ? v : ""
  )[0].nome;
}
