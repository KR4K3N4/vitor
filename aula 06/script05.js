// O que fica aqui fora vai executar automaticamente, SEMPRE que o site for carregado
window.alert('Seja bem-vindo(a) ao meu site!')
// Já a função calcular() só vai executar quando o usuário pressionar o botão
function calcular() {
    let n1 = Number(window.prompt('Digite um número: '))
    let res = document.querySelector('section#res')

    res.innerHTML = `<p>O dobro de ${n1} é ${n1*2} e a metade é ${n1/2}!</p>`
}