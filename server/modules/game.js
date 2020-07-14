

function getWinner(p1, p2) {
    if ((p1 + 1) % 3 == p2) {
        return console.log("Player 2 won")
    } else if (p1 == p2) {
        return console.log("It is a draw")
    } else {
        return console.log("Player 1 won")
    }
}
const p1 = randomSign();
const p2 = randomSign();

console.log(p1, p2)
getWinner(p1, p2);