// a) Verificar se o usuário é maior ou menor de idade
let idadeUsuario = parseInt(prompt("Digite sua idade:")); // Suponha que o usuário digite 20

if (idadeUsuario >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

// b) Verificar se um número é positivo, negativo ou zero
let numeroUsuario = parseInt(prompt("Digite um número:")); // Suponha que o usuário digite -3

if (numeroUsuario > 0) {
    console.log("O número é positivo");
} else if (numeroUsuario < 0) {
    console.log("O número é negativo");
} else {
    console.log("O número é zero");
}
