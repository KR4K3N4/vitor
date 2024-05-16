// Função para exibir contagem regressiva de 10 a 1
function contagemRegressiva() {
    var contadorElemento = document.getElementById("contador");
    contadorElemento.innerHTML = ""; // Limpa qualquer conteúdo anterior

    for (var i = 10; i >= 1; i--) {
        contadorElemento.innerHTML += i + "<br>";
    }
}

// Chamada da função quando a página carrega
window.onload = contagemRegressiva;
