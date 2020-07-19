const express = require('express');
const path = require('path');
require('./modules/game');
const firebase = require('./modules/firebase');

const app = express();

app.use('/css', express.static('../client/css'));
app.use('/js', express.static('../client/js'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/game', (req, res) => {
    firebase.ref.once('value', function(snap) {
        return res.json({
            gameInfo: snap.val()
        });
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

app.listen(3000);
