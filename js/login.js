document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obter os valores dos campos de usuário e senha
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simulação de validação (substituir por autenticação no MongoDB Atlas)
    if (username === 'admin' && password === 'admin') {
        // Se as credenciais estiverem corretas, redirecione para a página index.html
        window.location.href = 'index.html';
    } else {
        // Se as credenciais estiverem incorretas, exiba uma mensagem de erro
        document.getElementById('error-message').innerText = 'Usuário ou senha inválido';
    }
});
