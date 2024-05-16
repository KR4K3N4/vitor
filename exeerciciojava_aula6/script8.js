function gerarNumeroAleatorio() {
    var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    document.getElementById("numero_aleatorio").innerText = "O número aleatório é: " + numeroAleatorio;
}
