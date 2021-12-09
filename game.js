function computerPlay () {
    selection = ["Rock", "Paper", "Scissors"];
    return selection[(getRandomInt(1,4)-1)];
}

function playerSelection () {
    const input = applyUpper(prompt("Choose either Rock, Paper, Scissors"));
    return input;
}

function game() {
    playerWins = 0;
    computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        playRound(playerSelection(),computerPlay());
        console.log(`Player Wins: ${playerWins} Computer Wins: ${computerWins}.`);
    }
    if (playerWins === 5) {
        console.log("GAME OVER");
        console.log(`You Win! Player Wins: ${playerWins} Computer Wins: ${computerWins}.`);
        if (applyUpper(prompt("Would you like to play again?")) === "Yes") {
            game();
        }
        console.log("Goodbye!");
    }
    else if (computerWins === 5) {
        console.log("GAME OVER");
        console.log(`You Lose! Player Wins: ${playerWins} Computer Wins: ${computerWins}.`);
        if (applyUpper(prompt("Would you like to play again?")) === "Yes") {
            game();
        }
        console.log("Goodbye!");
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Rock") {
        console.log("It's a tie!");
    }
    else if (playerSelection == "Paper" && computerSelection == "Paper") {
        console.log("It's a tie!");
    }
    else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        console.log("It's a tie!");
    }
    // ----- Scissor Comparisons
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        console.log("Scissors beats Paper. You win!");
        return playerWins = playerWins + 1;
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        console.log("Rock beats Scissors. You Lose!");
        return computerWins = computerWins + 1;
    }
    // ----- Paper Comparisons
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        console.log("Paper beats Rock. You win!");
        return playerWins = playerWins + 1;
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        console.log("Scissors beats Paper. You Lose!");
        return computerWins = computerWins + 1;
    }
    // ----- Rock Comparisons
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        console.log("Rock beats Scissors. You win!");
        return playerWins = playerWins + 1;
    }
    else if (playerSelection == "Rock" && computerSelection == "Paper") {
        console.log("Paper beats Rock. You Lose!");
        return computerWins = computerWins + 1;
    }
    else {
        console.log("You provided an invalid selection. Please select either: Rock, Paper, or Scissors");
    }
}
// Gets a random integer. This will allow computerPlay() to select a random array item.
function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// Makes sure that passed string parameters have only capitalized first letters and nothing else.
function applyUpper(string) {
    firstLetter = string.charAt(0).toUpperCase();
    return firstLetter + string.slice(1);
}

game();
