module.exports.getWinner = (p1, p2) => {
    if ((p1 + 1) % 3 == p2) {
        return 2;
    } else if (p1 == p2) {
        return 0;
    } else {
        return 1;
    }
};
