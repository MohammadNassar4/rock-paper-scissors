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
let playerScore = 0;
let computerScore = 0;
function playGame(playerScore, computerScore) {
    for (let i = 0; i < 5; i++) {
        let computerChoice = getComputerChoice();
        let playerChoice = prompt("Enter rock, paper scissors.");
        let playRoundValue = playRound(playerChoice, computerChoice);
        console.log(playRoundValue);
        if (playRoundValue == "you win!") {
            playerScore++;
        }else if (playRoundValue == "you lose!") {
            computerScore++;
        }
    }
    if (playerScore == computerScore) {
        return "the game is tie!";
    }else if (playerScore > computerScore) {
        return "you won the game!";
    }else {
        return "you lost the game!";
    }
}
console.log(playGame(playerScore, computerScore));