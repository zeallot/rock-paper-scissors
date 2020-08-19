const firebase = require('./firebase');

const getWinner = (p1, p2) => {
    if ((p1 + 1) % 3 == p2) {
        return 2;
    } else if (p1 == p2) {
        return 0;
    } else {
        return 1;
    }
};

const randomSign = () => {
    const signs = {
        rock: 0,
        paper: 1,
        scissors: 2,
    };
    const keys = Object.keys(signs);
    return signs[keys[ keys.length * Math.random() << 0]];
};

setInterval(() => {
    const bot1Sign = randomSign();
    const bot2Sign = randomSign();
    const winner = getWinner(bot1Sign, bot2Sign);
    firebase.setGameResults(winner, bot1Sign, bot2Sign);
}, 3000);

