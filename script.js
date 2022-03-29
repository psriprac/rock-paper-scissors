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

const displayResult = document.createElement('h3');
displayResult.classList.add('results');
displayResult.setAttribute('style', 'white-space: pre;');

const displayScore = document.createElement('h2');
displayScore.classList.add('scoreboard');
displayScore.setAttribute('style', 'white-space: pre;');

const history = document.querySelector('#history');

const container = document.querySelector('#container');

let playerScore = 0;
let computerScore = 0;

const selectRock = document.querySelector('#rock');
selectRock.addEventListener('click', () => {
    const computerSelection = computerPlay();
    console.log(playRound('Rock', computerSelection));
    displayResult.textContent = playRound('Rock', computerSelection);

    const status = document.createElement('h4');

    if(displayResult.textContent.includes('win')) {
        playerScore++;
        status.textContent += `Win - `;
    }
    if(displayResult.textContent.includes('lose')) {
        computerScore++;
        status.textContent += `Lose - `;
    }
    if(displayResult.textContent.includes('tie')) {
        playerScore++;
        computerScore++;
        status.textContent += `Tie - `;
    }

    status.textContent += `You picked 'Rock' and the computer picked '${computerSelection}' ${playerScore} - ${computerScore}`;

    displayScore.textContent = `Player: ${playerScore}\r\nComputer: ${computerScore}`;

    feed.appendChild(displayResult);
    scoreboard.appendChild(displayScore);
    history.appendChild(status);

    if(playerScore === 5 || computerScore === 5) {
        updateScoreboard(container);
        finalResult(playerScore, computerScore);
    }
});

const selectPaper = document.querySelector('#paper');
selectPaper.addEventListener('click', () => {
    const computerSelection = computerPlay();
    console.log(playRound('Paper', computerSelection));
    displayResult.textContent = playRound('Paper', computerSelection);

    const status = document.createElement('h4');

    if(displayResult.textContent.includes('win')) {
        playerScore++;
        status.textContent += `Win - `;
    }
    if(displayResult.textContent.includes('lose')) {
        computerScore++;
        status.textContent += `Lose - `;
    }
    if(displayResult.textContent.includes('tie')) {
        playerScore++;
        computerScore++;
        status.textContent += `Tie - `;
    }

    status.textContent += `You picked 'Paper' and the computer picked '${computerSelection}' ${playerScore} - ${computerScore}`;

    displayScore.textContent = `Player: ${playerScore}\r\nComputer: ${computerScore}`;

    feed.appendChild(displayResult);
    scoreboard.appendChild(displayScore);
    history.appendChild(status);

    if(playerScore === 5 || computerScore === 5) {
        updateScoreboard(container);
        finalResult(playerScore, computerScore);
    }
});

const selectScissors = document.querySelector('#scissors');
selectScissors.addEventListener('click', () => {
    const computerSelection = computerPlay();
    console.log(playRound('scissors', computerSelection));
    displayResult.textContent = playRound('scissors', computerSelection);

    const status = document.createElement('h4');

    if(displayResult.textContent.includes('win')) {
        playerScore++;
        status.textContent += `Win - `;
    }
    if(displayResult.textContent.includes('lose')) {
        computerScore++;
        status.textContent += `Lose - `;
    }
    if(displayResult.textContent.includes('tie')) {
        playerScore++;
        computerScore++;
        status.textContent += `Tie - `;
    }

    status.textContent += `You picked 'Scissors' and the computer picked '${computerSelection}' ${playerScore} - ${computerScore}`;

    displayScore.textContent = `Player: ${playerScore}\r\nComputer: ${computerScore}`;

    feed.appendChild(displayResult);
    scoreboard.appendChild(displayScore);
    history.appendChild(status);

    if(playerScore === 5 || computerScore === 5) {
        updateScoreboard(container);
        finalResult(playerScore, computerScore);
    }
});

function updateScoreboard(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function finalResult(player, computer) {
    const finalScore = document.createElement('h2');
    finalScore.setAttribute('style', 'white-space: pre;');
    finalScore.textContent = `Results:\r\nPlayer: ${player}\r\nComputer: ${computer}\r\n`;
    if (player > computer) {
        finalScore.textContent += `Congrats! You win!`;
    } else if (player < computer) {
        finalScore.textContent += `Sorry! You lose!`;
    } else if (player === computer) {
        finalScore.textContent += `Wow, you tied?`
    }
    container.appendChild(finalScore);

    const tryAgain = document.createElement('button');
    tryAgain.textContent = `Try Again?`;
    tryAgain.addEventListener('click', () => {
        window.location.reload();
    })
    
    container.appendChild(tryAgain);
}


/* const game = () => {

    let playerScore = 0;
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
    ${finalScoreMessage}`) 
} */