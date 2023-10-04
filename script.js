function getComputerChoice()
{
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function compareSelections(playerSelection, computerSelection)
{
    let message = "";

    // The switch statement will choose between the three conditions available:
    // Player win, player loss, and a draw. This reduces the amount of chained
    // and nested if-else statements that would be needed to achieve the same thing
    switch (true)
    {
        // Player win conditions
        case (playerSelection === "rock" && computerSelection === "scissors"):
        case (playerSelection === "paper" && computerSelection === "rock"):
        case (playerSelection === "scissors" && computerSelection === "paper"):
            message = `You win! ${playerSelection} beats ${computerSelection}.`;
            break;
        // Player loss conditions
        case (playerSelection === "rock" && computerSelection === "paper"):
        case (playerSelection === "paper" && computerSelection === "scissors"):
        case (playerSelection === "scissors" && computerSelection === "rock"):
            message = `You lose! ${computerSelection} beats ${playerSelection}.`;
            break;
        // Draw condition
        case (playerSelection === computerSelection):
            message = `Draw! You both chose ${playerSelection}.`;
            break;
        default:
            message = "Something went wrong!";
    }

    return message;
}

function playRound(event)
{
    let playerScore = document.querySelector('.player-score');
    let computerScore = document.querySelector('.computer-score');
    let roundResultMessage = compareSelections(event.target.id, getComputerChoice());
    let output = document.querySelector('.output');

    // Update scores in the DOM
    if (roundResultMessage.toLowerCase().includes("win"))
    {
        playerScore.textContent = Number(playerScore.textContent) + 1;
    }
    else if (roundResultMessage.toLowerCase().includes("lose"))
    {
        computerScore.textContent = Number(computerScore.textContent) + 1;
    }

    output.textContent = roundResultMessage;
}

function initializeGame()
{
    const buttons = document.querySelectorAll('button');

    for (const button of buttons)
    {
        button.addEventListener('click', playRound);
    }
}

initializeGame();
