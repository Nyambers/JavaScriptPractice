function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === computerSelection.toUpperCase()) return "draw";
    if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") return "win"; 
    if (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") return "lose"; 
    if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER") return "win"; 
    if (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK") return "lose"; 
    if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") return "win"; 
    if (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") return "lose"; 
    return "invalid input"
} 

function getComputerChoice() {
    const choice = (Math.floor(Math.random() * 3)) % 3;
    if (choice === 0) return "ROCK";
    if (choice === 1) return "PAPER";
    if (choice === 2) return "SCISSORS";
}

function game() {
    let playerScore = Math.floor(0);
    let computerScore = Math.floor(0);
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt(`ROCK, PAPER, SCISSORS: `);
        console.log(`You chose ${playerSelection}!`);
        const computerSelection = getComputerChoice();
        console.log(`Computer chose ${computerSelection}!`);
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result === "invalid input") i--;
        if (result === "win") playerScore++;
        if (result === "lose") computerScore++;
        if (playerScore === 3 || computerScore === 3) break
    }
    if (playerScore === computerScore) return "Result: Draw";
    if (playerScore > computerScore) return "Result: Win";
    if (playerScore < computerScore) return "Result: Lose";
}

   
console.log(game())