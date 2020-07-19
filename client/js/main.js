document.addEventListener("DOMContentLoaded", function(event) { 
    const BASE_URL = 'http://localhost:3000';

    let pl1SingEl = document.querySelector("#pl1Sign");
    let pl2SingEl = document.querySelector('#pl2Sign');
    let gameCountEl = document.querySelector('#gameCount');
    let pl1WinsEl = document.querySelector('#pl1Wins');
    let pl2WinsEl = document.querySelector('#pl2Wins');    
    
    
    const fetchGameInfo = async () => {
        try {
            const res = await axios.get(`${BASE_URL}/game`);
            const game = res.data;
            const {gameInfo: { lastGameResult: {p1Sign, p2Sign}}} = game;
        } catch (e) {
            console.error(e);
        }
    };
    
    setInterval(() => {
        fetchGameInfo();
    }, 3000)
});




