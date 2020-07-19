const admin = require('firebase-admin');
let serviceAccount = require('../serviceAccount.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://rock-paper-scissors-db7ef.firebaseio.com',
});

const db = admin.database();
const ref = db.ref('/');

module.exports.ref = db.ref('/');

module.exports.setGameResults = (winner, p1Sign, p2Sign) => {
    ref.once('value', function(snap) {
        let gameInfo = snap.val();
        let gameInfoResult;
        if (winner === 0) {
            gameInfoResult = {
                ...gameInfo,
                count: ++gameInfo.count,
                draw: ++gameInfo.draw,
                lastGameResult: {
                    p1Sign,
                    p2Sign,
                }
            };
            ref.set(gameInfoResult).catch(error => console.log(error));
            return;
        } else {
            gameInfoResult = {
                ...gameInfo,
                count: ++gameInfo.count,
                ['wins_player_' + winner]: ++gameInfo['wins_player_' + winner],
                lastGameResult: {
                    p1Sign,
                    p2Sign
                }
            };
            ref.set(gameInfoResult).catch(error => console.log(error));
            return;
        }
    });
};


