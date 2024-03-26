function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}
// console.log(getComputerChoice());

function playRound(player, computer) {
    player.toLowerCase();
    if (player === computer) {
        return "it's a tie";
    }else if ((player === 'rock') && (computer === 'scissors') ||
    (player === 'paper') && (computer === 'rock') ||
    (player === 'scissors') && (computer === 'paper')) {
        return "you win!";
    }else {
        return "you lose!";
    }
}