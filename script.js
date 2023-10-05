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

function displaySelections(playerSelection, computerSelection)
{
    let playerSelectionElement = document.querySelector('.player-selection');
    let computerSelectionElement = document.querySelector('.computer-selection');

    playerSelectionElement.setAttribute('src', `./images/${playerSelection}-right.png`);
    playerSelectionElement.setAttribute('alt', `Hand illustration in the shape of ${playerSelection}.`);

    computerSelectionElement.setAttribute('src', `./images/${computerSelection}-left.png`);
    computerSelectionElement.setAttribute('alt', `Hand illustration in the shape of ${computerSelection}.`);
}

function playRound(event)
{
    const playerSelection = event.target.id;
    const computerSelection = getComputerChoice();
    let roundResultMessage = compareSelections(playerSelection, computerSelection);
    let playerScore = document.querySelector('.player-score');
    let computerScore = document.querySelector('.computer-score');
    let output = document.querySelector('.output');
    let matchResultOutput = document.querySelector('.match-result-output');

    // Display selections
    displaySelections(playerSelection, computerSelection);

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

    // End game after a score of 5 is reached
    if (Number(playerScore.textContent) >= 5 || Number(computerScore.textContent) >= 5)
    {
        const buttons = document.querySelectorAll('button');

        for (const button of buttons)
        {
            button.disabled = true;
        }

        if (Number(playerScore.textContent) > Number(computerScore.textContent))
        {
            matchResultOutput.textContent = "Congratulations! You won the match!";
        }
        else
        {
            matchResultOutput.textContent = "You lost the match. Better luck next time!";
        }
    }
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
