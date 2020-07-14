const admin = require("firebase-admin");
let serviceAccount = require("../serviceAccount.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://rock-paper-scissors-db7ef.firebaseio.com",
});

let db = admin.database();

module.exports.game = () => db.ref('/game');

module.exports.setGameResults = (
        gameCount,
        playerOneTodayVictoryCount,
        playerTwoTodayVictoryCount,
        playerOneAllVictoryCount,
        playerTwoAllVictoryCount,
        draw,
    ) => {
    db.ref('game/').set({
        gameCount,
        playerOneTodayVictoryCount,
        playerTwoTodayVictoryCount,
        playerOneAllVictoryCount,
        playerTwoAllVictoryCount,
        draw,
    }).catch(error => console.log(error));
}
