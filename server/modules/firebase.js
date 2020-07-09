const admin = require("firebase-admin");
let serviceAccount = require("../serviceAccount.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://rock-paper-scissors-db7ef.firebaseio.com",
});

let db = admin.database();

module.exports.game = () => db.ref('/game');

module.exports.setGameResults = (gameCount, player_1_victory, player_2_victory) => {
    db.ref('game/').set({
        gameCount,
        player_1_victory,
        player_2_victory,
    }).catch(error => console.log(error));
}