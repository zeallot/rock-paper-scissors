const BASE_URL = 'http://localhost:3000';

const fetchGameInfo = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/game`);
        const game = res.data;
        return game;
    } catch (e) {
        console.error(e);
    }
};

