document.addEventListener("DOMContentLoaded", function() {
    const BASE_URL = 'http://localhost:3000';
    let isLoaded = false;

    const bot1TotalWins = document.querySelector('#bot-1-total-wins');
    const bot2TotalWins = document.querySelector('#bot-2-total-wins');
    const totalDraws = document.querySelector('#total-draws');
    const totalGame = document.querySelector('#total-games');
    const loader = document.querySelector('#loader');

    const fetchGameInfo = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/game`);
            const game = res.data;
            const { gameInfo: { lastGameResult: { bot1Sign, bot2Sign }}} = game;
            const { gameInfo: { wins_bot_1, wins_bot_2, count, draw }} = game;
            bot1TotalWins.innerHTML = wins_bot_1;
            bot2TotalWins.innerHTML = wins_bot_2;
            totalDraws.innerHTML = draw;
            totalGame.innerHTML = count;
            if (!isLoaded) {
                loader.classList.remove('show');
                isLoaded = true;
            }
        } catch (e) {
            console.error(e);
        }
    };

    setInterval(() => {
        fetchGameInfo();
    }, 3000)
});




