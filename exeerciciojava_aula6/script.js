// Seleciona o campo de entrada de texto pelo ID
const inputNome = document.getElementById('nome');
// Seleciona o botão de saudação pelo ID
const botaoSaudacao = document.getElementById('botaoSaudacao');

// Adiciona um evento de clique ao botão de saudação
botaoSaudacao.addEventListener('click', function() {
  // Obtém o valor do nome digitado pelo usuário
  const nome = inputNome.value;
  
  // Verifica se o campo de nome não está vazio
  if (nome.trim() !== '') {
    // Exibe uma saudação personalizada com base no nome digitado
    alert("Olá, " + nome + "!");
  } else {
    // Se o campo de nome estiver vazio, exibe uma mensagem de alerta pedindo para digitar o nome
    alert("Por favor, digite seu nome.");
  }
});
