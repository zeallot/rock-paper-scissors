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
    const p1Sign = randomSign();
    const p2Sign = randomSign();
    const winner = getWinner(p1Sign, p2Sign);
    firebase.setGameResults(winner, p1Sign, p2Sign);
    console.log(p1Sign, p2Sign, winner);
}, 3000);

