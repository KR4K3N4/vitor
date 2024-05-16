function inverterString() {
    var texto = document.getElementById("texto").value;
    var resultado = texto.split("").reverse().join("");
    document.getElementById("resultado").innerText = "A string invertida é: " + resultado;
}
