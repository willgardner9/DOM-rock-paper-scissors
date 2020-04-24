const buttons = document.querySelectorAll('button');
const dialogue = document.getElementById('dialogue');
const userScoreDisplay = document.getElementById('userscore');
const computerScoreDisplay = document.getElementById('computerscore');
const resetButton = document.getElementById('reset')

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.id == 'rock') {
            playRockPaperScissors(computerPlay, 'rock');
        }
        else if (e.target.id == 'paper') {
            playRockPaperScissors(computerPlay, 'paper');
        }
        else if (e.target.id == 'scissors') {
            playRockPaperScissors(computerPlay, 'scissors');
        }
        });
});

let playerScore = 0;
let computerScore = 0;

function playRockPaperScissors(computerSelection, playerSelection) {

    computerSelection = computerPlay();

    if (computerSelection == "rock" && playerSelection == "scissors") {
        computerScoreDisplay.textContent = ++computerScore;
        dialogue.textContent = "The computer chose rock! Rock beats scissors - you lose!"
    }

    else if (computerSelection == "rock" && playerSelection == "paper") {
        userScoreDisplay.textContent = ++playerScore;
        dialogue.textContent = "The computer chose rock! Paper beats rock - you win!"
    }

    else if (computerSelection == "rock" && playerSelection == "rock") {
        dialogue.textContent = "You both chose rock - it's a tie!"
    }

    else if (computerSelection == "paper" && playerSelection == "rock") {
        computerScoreDisplay.textContent = ++computerScore;
        dialogue.textContent = "The computer chose paper! Paper beats rock - you lose!"
    }

    else if (computerSelection == "paper" && playerSelection == "scissors") {
        userScoreDisplay.textContent = ++playerScore;
        dialogue.textContent = "The computer chose paper! Scissors beats paper - you win!"
    }

    else if (computerSelection == "paper" && playerSelection == "paper") {
        dialogue.textContent = "You both chose paper - it's a tie!"
    }

    else if (computerSelection == "scissors" && playerSelection == "rock") {
        userScoreDisplay.textContent = ++playerScore;
        dialogue.textContent = "The computer chose scissors! Rock beats scissors - you win!"
    }

    else if (computerSelection == "scissors" && playerSelection == "paper") {
        computerScoreDisplay.textContent = ++computerScore;
        dialogue.textContent = "The computer chose scissors! Scissors beat paper - you lose!"
    }

    else {
        dialogue.textContent = "You both chose scissors - it's a tie!"
    }

}

function getRandomInt() {
    return Math.floor(Math.random() * Math.floor(3));
}

function computerPlay() {
    if (getRandomInt() == 0) {
        return "rock"
    }
    else if (getRandomInt() == 1) {
        return "paper"
    }
    else {
        return "scissors"
    }
}

resetButton.addEventListener('click', resetScores);

function resetScores() {
    playerScore = 0;
    computerScore = 0;
    computerScoreDisplay.textContent = '0';
    userScoreDisplay.textContent = '0';
}