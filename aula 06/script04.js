function calcularMedia(listaNumeros) {
    // Verifica se a lista está vazia
    if (listaNumeros.length === 0) {
        return 0; // Retorna 0 se a lista estiver vazia para evitar divisão por zero
    }

    // Soma todos os números da lista
    const soma = listaNumeros.reduce((total, numero) => total + numero, 0);

    // Calcula a média dividindo a soma pelo número de elementos na lista
    const media = soma / listaNumeros.length;

    return media;
}

function exibirMedia() {
    const numeros = [10, 20, 30, 40, 50];
    const media = calcularMedia(numeros);
    const resultadoElemento = document.getElementById("resultado");
    resultadoElemento.textContent = "A média dos números é: " + media;
}