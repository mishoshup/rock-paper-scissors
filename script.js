// Choices
const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;
let roundNumber = 1;

// Get Elements
const buttons = document.querySelectorAll(".choice");
const humanChoiceDisplay = document.querySelector("#human-choice span");
const computerChoiceDisplay = document.querySelector("#computer-choice span");
const gameResultDisplay = document.querySelector("#game-result");
const scoreDisplay = document.querySelector("#score");
const roundTracker = document.querySelector("#round-tracker");
const restartButton = document.querySelector("#restart");

// Get Random Computer Choice
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Play Round
function playRound(humanChoice) {
    if (humanScore === 5 || computerScore === 5) return; // Stop game if someone wins

    const computerChoice = getComputerChoice();

    // Update UI
    humanChoiceDisplay.textContent = humanChoice;
    computerChoiceDisplay.textContent = computerChoice;

    let roundWinner = "";

    if (humanChoice === computerChoice) {
        gameResultDisplay.textContent = "It's a Tie! 🤝";
        roundWinner = "Tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        gameResultDisplay.textContent = `You Win! 🎉 ${humanChoice} beats ${computerChoice}`;
        humanScore++;
        roundWinner = "You";
    } else {
        gameResultDisplay.textContent = `You Lose! 😔 ${computerChoice} beats ${humanChoice}`;
        computerScore++;
        roundWinner = "Computer";
    }

    // **Increment roundNumber before updating UI**
    roundNumber++;
    roundTracker.textContent = `Round ${roundNumber}`;

    // Update Score
    scoreDisplay.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;

    // **Check if someone reached 5 wins**
    if (humanScore === 5) {
        gameResultDisplay.textContent = "🎉 YOU WIN THE GAME!";
        roundTracker.textContent = "Game Over! You Won!";
    } else if (computerScore === 5) {
        gameResultDisplay.textContent = "💀 COMPUTER WINS THE GAME!";
        roundTracker.textContent = "Game Over! Computer Won!";
    }
}

// Event Listeners for Choices
buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});

// Restart Game
restartButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    roundNumber = 1;
    humanChoiceDisplay.textContent = "-";
    computerChoiceDisplay.textContent = "-";
    gameResultDisplay.textContent = "Make your move!";
    scoreDisplay.textContent = `Score: You 0 - 0 Computer`;
    roundTracker.textContent = "Round 1";
});
