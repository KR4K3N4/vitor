function converterParaFahrenheit() {
    var temperaturaCelsius = parseFloat(document.getElementById("temperatura_celsius").value);
    var temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;
    document.getElementById("resultado").innerText = "A temperatura em Fahrenheit é: " + temperaturaFahrenheit.toFixed(2);
}
