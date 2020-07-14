const BASE_URL = 'http://localhost:3000';

function randomSign() {
    const signs = {
        rock: 0,
        paper: 1,
        scissors: 2,
    }
    const keys = Object.keys(signs);
    return signs[keys[ keys.length * Math.random() << 0]];
}

const fetchGameInfo = async (p1, p2) => {
    try {
        const res = await axios.post(`${BASE_URL}/game`, {
            p1,
            p2,
        });
        const game = res.data;
        return game;
    } catch (e) {
        console.error(e);
    }
};

fetchGameInfo(randomSign(), randomSign()).then(console.log(res));
