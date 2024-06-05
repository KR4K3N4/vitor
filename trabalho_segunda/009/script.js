function ADICIONAR(arr, elemento) {
    arr.push(elemento);
    return arr;
}

// Exemplo de uso da função:
let meuArray = [1, 2, 3];
let elementoNovo = 4;
let resultado = ADICIONAR(meuArray, elementoNovo);
console.log(resultado);  // Isso irá imprimir [1, 2, 3, 4] no console
