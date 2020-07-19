module.exports.getWinner = (p1, p2) => {
    if ((p1 + 1) % 3 == p2) {
        return 2;
    } else if (p1 == p2) {
        return 0;
    } else {
        return 1;
    }
};

module.exports.randomSign = () => {
    const signs = {
        rock: 0,
        paper: 1,
        scissors: 2,
    };
    const keys = Object.keys(signs);
    return signs[keys[ keys.length * Math.random() << 0]];
};
