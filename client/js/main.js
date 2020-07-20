document.addEventListener("DOMContentLoaded", function() {
    const BASE_URL = 'http://localhost:3000';

    const bot1TotalWins = document.querySelector('#bot-1-total-wins');
    const bot2TotalWins = document.querySelector('#bot-2-total-wins');

    const fetchGameInfo = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/game`);
            const game = res.data;
            const { gameInfo: { lastGameResult: { bot1Sign, bot2Sign }}} = game;
            const { gameInfo: { wins_bot_1, wins_bot_2 }} = game;
            bot1TotalWins.innerHTML = wins_bot_1;
            bot2TotalWins.innerHTML = wins_bot_2;
        } catch (e) {
            console.error(e);
        }
    };

    setInterval(() => {
        fetchGameInfo();
    }, 3000)
});




