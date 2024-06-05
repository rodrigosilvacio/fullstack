const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const url = 'mongodb+srv://rodrigosilvapmp:hpPbWKsBX4gPe8tU@facensplay.8ezucvh.mongodb.net/';

MongoClient.connect(url, (err, db) => {
    if (err) throw err;

    const usersCollection = db.collection('users');

    app.post('/register', (req, res) => {
        const { username, password } = req.body;

        usersCollection.insertOne({ username, password }, (err, result) => {
            if (err) {
                res.status(500).send('Error registering user');
                return;
            }

            res.status(200).send('User registered successfully');
        });
    });

    app.listen(3000, () => console.log('Server listening on port 3000'));
});
