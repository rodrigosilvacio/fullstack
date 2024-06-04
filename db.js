const mongoose = require('mongoose');

// Substitua 'sua-string-de-conexao-aqui' pela sua string de conexão do MongoDB Atlas
const url = 'mongodb+srv://rodrigosilvapmp:hpPbWKsBX4gPe8tU@facensplay.8ezucvh.mongodb.net/';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão com o banco de dados:'));
db.once('open', function() {
    console.log('Conectado ao banco de dados com sucesso!');
});

module.exports = mongoose;
