const express = require('express');
const path = require('path');
const db = require('./modules/firebase');


db.game().on('value', function(snapshot) {
    console.log(snapshot.val());
});

db.setGameResults(1, 4, 5);

const app = express();

app.use('/css', express.static('../client/css'));
app.use('/js', express.static('../client/js'));

app.get('/game', (req, res) => {
   res.json({name: 'vova'})
});

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, '../client/index.html'))
})

app.listen(3000);