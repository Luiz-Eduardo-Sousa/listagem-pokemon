// Selecionar o botão que faz a troca do tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
// Selecionar o elemento no body
const body = document.querySelector("body");
// Identificar o clique do usuário
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

// Ao clicar no botão para fazer a troca de tema, antes é preciso verificar se o body já possui classe modo-escuro, caso sim aletrar para o tema para sol
botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

  body.classList.toggle("modo-escuro");

  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
  } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
  }
});
