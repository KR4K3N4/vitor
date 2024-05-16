function validarSenha() {
    var senha = document.getElementById("senha").value;
    var resultado = document.getElementById("resultado");

    // Verifica o comprimento da senha
    if (senha.length < 8) {
        resultado.innerText = "Senha inválida! Certifique-se de que tenha pelo menos 8 caracteres.";
        return;
    }

    // Verifica se há pelo menos um número e uma letra maiúscula
    var temNumero = /\d/.test(senha);
    var temMaiuscula = /[A-Z]/.test(senha);

    if (!temNumero || !temMaiuscula) {
        resultado.innerText = "Senha inválida! Certifique-se de que tenha pelo menos um número e uma letra maiúscula.";
        return;
    }

    resultado.innerText = "Senha válida!";
}
