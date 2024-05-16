function validarEmail() {
    var email = document.getElementById("email").value;
    var padrao = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;

    if (padrao.test(email)) {
        document.getElementById("resultado").innerText = "O e-mail é válido.";
    } else {
        document.getElementById("resultado").innerText = "O e-mail é inválido.";
    }
}
