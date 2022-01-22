const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const rock = document.getElementById("Rock");
const paper = document.getElementById("Paper");
const scissors = document.getElementById("Scissors");
const output = document.getElementById("output");
const outputText1 = document.querySelector("#output").firstElementChild;
const outputText2 = document.querySelector("#output").lastElementChild;
const restart = document.getElementById("restart");

function computerPlay () {
    selection = ["Rock", "Paper", "Scissors"];
    return selection[(getRandomInt(1,4)-1)];
}

function game(){
    playerWins = 0;
    computerWins = 0;
    rock.addEventListener('click', () => playRound("Rock", computerPlay()));
    paper.addEventListener('click', () => playRound("Paper", computerPlay()));
    scissors.addEventListener('click', () => playRound("Scissors", computerPlay()));
    restart.addEventListener('click', () => {
        rock.style.pointerEvents ='auto';
        paper.style.pointerEvents ='auto';
        scissors.style.pointerEvents ='auto';
        playerWins = 0;
        computerWins = 0;
        playerScore.textContent = playerWins;
        computerScore.textContent = computerWins;
        restart.style.display ='none';
        outputText1.textContent ='';
        outputText2.textContent ='';
    });
}

//to do

// 1. Improve Styling.
// 2. Edit text or add an an image so that it shows what the computer has chosen.
// 3. Add hover effects.

function playRound(playerSelection, computerSelection) {
    outputText1.textContent = "The Computer Chose "+ computerSelection;

    if (playerSelection == computerSelection) {
        outputText2.textContent = "It's a tie!";
    }
    // ----- Scissor Comparisons
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        outputText2.textContent = "Scissors beats Paper. You win!";
        playerWins = playerWins + 1;
        playerScore.textContent = playerWins;
        computerScore.textContent = computerWins;
        gameCheck();
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        outputText2.textContent = "Rock beats Scissors. You Lose!";
        computerWins = computerWins + 1;
        playerScore.textContent = playerWins;
        computerScore.textContent = computerWins;
        gameCheck();
    }
    // ----- Paper Comparisons
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        outputText2.textContent = "Paper beats Rock. You win!";
        playerWins = playerWins + 1;
        playerScore.textContent = playerWins;
        computerScore.textContent = computerWins;
        gameCheck();
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        outputText2.textContent = "Scissors beats Paper. You Lose!";
        computerWins = computerWins + 1;
        playerScore.textContent = playerWins;
        computerScore.textContent = computerWins;
        gameCheck();
    }
    // ----- Rock Comparisons
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        outputText2.textContent = "Rock beats Scissors. You win!";
        playerWins = playerWins + 1;
        playerScore.textContent = playerWins;
        computerScore.textContent = computerWins;
        gameCheck();
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        outputText2.textContent  = "Paper beats Rock. You Lose!";
        computerWins = computerWins + 1;
        playerScore.textContent = playerWins;
        computerScore.textContent = computerWins;
        gameCheck();
    }
}
// Gets a random integer. This will allow computerPlay() to select a random array item.
function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// Checks to see if any win condition has been met. If so, end game by disabling all inputs except for the ability to play again.
function gameCheck() {
    if (playerWins === 5) {
        outputText1.textContent = "You Win!";
        outputText2.textContent =`Player Wins: ${playerWins} Computer Wins: ${computerWins}.`;
        restart.style.display ='block';
        rock.style.pointerEvents ='none';
        paper.style.pointerEvents ='none';
        scissors.style.pointerEvents ='none';
     }
     else if (computerWins === 5) {
        outputText1.textContent = "You Lose!";
        outputText2.textContent =`Player Wins: ${playerWins} Computer Wins: ${computerWins}.`;
        restart.style.display ='block';
        rock.style.pointerEvents ='none';
        paper.style.pointerEvents ='none';
        scissors.style.pointerEvents ='none';
    }
}


game();
