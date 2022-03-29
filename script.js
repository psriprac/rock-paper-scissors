const computerPlay = () => {
    let moves = ["Rock", "Paper", "Scissors"];
    return moves[Math.floor(Math.random() * 3)];
}

const playRound = (playerSelection, computerSelection) => {
    let playerChoice = playerSelection[0].toUpperCase() + playerSelection.substring(1).toLowerCase();

    switch(playerChoice) {
        case "Rock":
            if(computerSelection === "Rock") {
                return tie(playerChoice,  computerSelection);
            } else if (computerSelection === "Paper") {
                return lose(playerChoice, computerSelection);
            } else if (computerSelection === "Scissors") {
                return win(playerChoice, computerSelection);
            }
            break;
        case "Paper":
            if(computerSelection === "Rock") {
                return win(playerChoice, computerSelection);
            } else if (computerSelection === "Paper") {
                return tie(playerChoice, computerSelection);
            } else if (computerSelection === "Scissors") {
                return lose(playerChoice, computerSelection);
            }
            break;
        case "Scissors":
            if(computerSelection === "Rock") {
                return lose(playerChoice, computerSelection);
            } else if (computerSelection === "Paper") {
                return win(playerChoice, computerSelection);
            } else if (computerSelection === "Scissors") {
                return tie(playerChoice, computerSelection);
            }
            break;
        default:
            return `You picked ${playerChoice}`
    }
}

const tie = (playerSelection, computerSelection) => {
    return `${playerSelection} and ${computerSelection}! You tie!`;
}

const lose = (playerSelection, computerSelection) => {
    return `${playerSelection} loses to ${computerSelection}! Sorry, you lose!`;
}

const win = (playerSelection, computerSelection) => {
    return `${playerSelection} beats ${computerSelection}! you win!`;
}

const feed = document.querySelector('#feed');
const scoreboard = document.querySelector('#scoreboard');

const displayResult = document.createElement('div');
displayResult.classList.add('results');

const displayScore = document.createElement('div');
displayResult.classList.add('scoreboard');

const selectRock = document.querySelector('#rock');
selectRock.addEventListener('click', () => {
    const computerSelection = computerPlay();
    console.log(playRound('Rock', computerSelection));
    displayResult.textContent = playRound('Rock', computerSelection);
    feed.appendChild(displayResult);
});

const selectPaper = document.querySelector('#paper');
selectPaper.addEventListener('click', () => {
    const computerSelection = computerPlay();
    console.log(playRound('Paper', computerSelection));
    displayResult.textContent = playRound('Paper', computerSelection);
    feed.appendChild(displayResult);
});

const selectScissors = document.querySelector('#scissors');
selectScissors.addEventListener('click', () => {
    const computerSelection = computerPlay();
    console.log(playRound('scissors', computerSelection));
    displayResult.textContent = playRound('scissors', computerSelection);
    feed.appendChild(displayResult);
});

const game = () => {

/*     let playerScore = 0;
    let computerScore = 0;
    let finalScoreMessage = "";

    for (let i = 0; i < 5; i++){
        const playerSelection = prompt(`Player: ${playerScore} vs Computer: ${computerScore} 
        Rock, Paper, or Scissors?`);

        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);

        if(result.includes("win")) {
            playerScore += 1;
        } else if (result.includes("lose")) {
            computerScore += 1;
        }

        console.log(result);
    }
    if(playerScore < computerScore) {
        finalScoreMessage = "You lost!"
    } else if (computerScore < playerScore) {
        finalScoreMessage = "You won!"
    } else {
        finalScoreMessage = "It's a tie!"
    }
    console.log(`Final score: Player, ${playerScore} to Computer, ${computerScore}
    ${finalScoreMessage}`) */
}