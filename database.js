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

module.exports = {
    createUser: async function(username, password) {
        try {
            const user = new User({ username, password });
            await user.save();
            console.log('Usuário criado com sucesso:', user);
            return user;
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            throw error;
        }
    }
};
