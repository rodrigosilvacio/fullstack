const mongoose = require('mongoose');
const User = require('./models/user'); // Importe o modelo de usuário

// Substitua 'sua-string-de-conexao-aqui' pela sua string de conexão do MongoDB Atlas
const url = 'mongodb+srv://rodrigosilvapmp:hpPbWKsBX4gPe8tU@facensplay.8ezucvh.mongodb.net/';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão com o banco de dados:'));
db.once('open', function() {
    console.log('Conectado ao banco de dados com sucesso!');
});

document.getElementById('login-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obter os valores dos campos de usuário e senha
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    try {
        // Enviar uma requisição para o servidor para validar as credenciais
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        // Verificar se a resposta foi bem-sucedida
        if (response.ok) {
            // Se as credenciais estiverem corretas, redirecionar para a página index.html
            window.location.href = 'index.html';
        } else {
            // Se as credenciais estiverem incorretas, exibir uma mensagem de erro
            const data = await response.json();
            document.getElementById('
