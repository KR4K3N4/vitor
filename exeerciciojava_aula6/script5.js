function calcularFatorial() {
    var numero = parseInt(document.getElementById("numero").value);
    var resultado = calcularFatorialRecursivo(numero);
    document.getElementById("resultado").innerText = "O fatorial de " + numero + " é: " + resultado;
}

function calcularFatorialRecursivo(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFatorialRecursivo(numero - 1);
    }
}
