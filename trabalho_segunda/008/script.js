function CARRO(MARCA, MODELO, ANO) {
    return {
        marca: MARCA,
        modelo: MODELO,
        ano: ANO
    };
}

// Exemplo de uso da função:
let meuCarro = CARRO('Toyota', 'Corolla', 2020);
console.log(meuCarro);  // Isso irá imprimir { marca: 'Toyota', modelo: 'Corolla', ano: 2020 } no console
