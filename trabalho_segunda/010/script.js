function Soma(arrayDeNumeros) {
    let soma = 0;
    for (let numero of arrayDeNumeros) {
        soma += numero;
    }
    return soma;
}

// Exemplo de uso da função:
let array = [1, 2, 3, 4, 5];
let resultado = Soma(array);
console.log(resultado);  // Isso irá imprimir 15 no console
