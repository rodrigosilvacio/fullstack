const { createUser } = require('./database');

document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obter os valores dos campos de usuário e senha
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    try {
        // Crie um novo usuário no banco de dados
        const user = await createUser(username, password);
        document.getElementById('error-message').innerText = 'Usuário criado com sucesso!';
    } catch (error) {
        // Se ocorrer um erro, exiba uma mensagem de erro
        console.error('Erro ao criar usuário:', error);
        document.getElementById('error-message').innerText = 'Ocorreu um erro ao criar usuário. Por favor, tente novamente mais tarde.';
    }
});
