// 1. Get user input
// 2. Validate (must be rock/paper/scissors)
// 3. Make computer choose randomly
// 4. Compare both choices
// 5. Display result
// 6. Update score
// 7. Reset button clears score

let wins = 0;
let losses = 0;
let ties = 0;

document.getElementById("playBtn").addEventListener("click", function () {
    
    let userChoice = document.getElementById("userInput").value.toLowerCase();
    
    // Validate input
    if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        alert("Please enter rock, paper, or scissors.");
        return;
    }

    // Computer random 
    const choices = ["rock", "paper", "scissors"];
    let computerChoice = choices[Math.floor(Math.random() * 3)];

    document.getElementById("computerChoice").textContent =
        "Computer chose: " + computerChoice;

    // Determine winner
    let result = "";

    if (userChoice === computerChoice) {
        result = "It's a tie!";
        ties++;
    } 
    else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!";
        wins++;
    } 
    else {
        result = "Computer wins!";
        losses++;
    }

    document.getElementById("result").textContent = result;

    // update score
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("ties").textContent = ties;
});

// Reset button
document.getElementById("resetBtn").addEventListener("click", function () {
    wins = 0;
    losses = 0;
    ties = 0;

    document.getElementById("wins").textContent = 0;
    document.getElementById("losses").textContent = 0;
    document.getElementById("ties").textContent = 0;

    document.getElementById("result").textContent = "";
    document.getElementById("computerChoice").textContent = "";
});