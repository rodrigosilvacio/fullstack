import { User } from './models/user.js'; // Importe o modelo de usuário

// Substitua 'sua-string-de-conexao-aqui' pela sua string de conexão do MongoDB Atlas
const url = 'mongodb+srv://rodrigosilvapmp:hpPbWKsBX4gPe8tU@facensplay.8ezucvh.mongodb.net/';

const createUser = async function(username, password) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (!response.ok) {
            throw new Error('Erro ao criar usuário');
        }

        const user = await response.json();
        console.log('Usuário criado com sucesso:', user);
        return user;
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        throw error;
    }
};

export { createUser };
