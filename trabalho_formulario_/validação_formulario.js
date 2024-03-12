document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('form-pedido');

    form.addEventListener('submit', function(event) {
        const nome = document.getElementById('nome').value.trim();
        const endereco = document.getElementById('endereco').value.trim();
        const telefone = document.getElementById('telefone').value.trim();
        const genero = document.getElementById('genero').value.trim();
        const data_nascimento = document.getElementById('data_nascimento').value.trim();
        const email = document.getElementById('email').value.trim();
        const nome_escola = document.getElementById('nome_escola').value.trim();
        const serie_atual = document.getElementById('serie_atual').value.trim();
        const nome_responsavel = document.getElementById('nome_responsavel').value.trim();
        const contato_responsavel = document.getElementById('contato_responsavel').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();
        const cpf = /^[0-9]{11}$/;
        const rg = /^[0-9]+$/;
        const telefoneRegex = /^[0-9]{10}$/;

        let isValid = true;

        if (nome === '') {
            isValid = false;
            showError('Por favor, insira seu nome.');
        }

        if (endereco === '') {
            isValid = false;
            showError('Por favor, insira seu endereço.');
        }

        if (!telefoneRegex.test(telefone)) {
            isValid = false;
            showError('Por favor, insira um número de telefone válido (apenas números, 10 dígitos).');
        }

        if (genero === '') {
            isValid = false;
            showError('Por favor, insira seu gênero.');
        }

        // Adicione validações para os outros campos

        if (cpf !== '' && !cpf.test(document.getElementById('cpf').value.trim())) {
            isValid = false;
            showError('Por favor, insira um CPF válido.');
        }
        
        if (rg !== '' && !rg.test(document.getElementById('rg').value.trim())) {
            isValid = false;
            showError('Por favor, insira um RG válido.');
        }
        if (isValid) {
            event.preventDefault();
            showSuccessPopup();
        } else {
            event.preventDefault();
        }

    });
        function showError(message) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error';
            errorDiv.textContent = message;
    
            form.insertBefore(errorDiv, form.firstChild);
        }
    
        function showSuccessPopup() {
            console.log('As informações foram validadas com sucesso!');
        }
    });