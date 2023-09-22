function getComputerChoice()
{
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection)
{
    // Convert playerSelection to lowercase so that it will be case-insensitive
    playerSelection = playerSelection.toLowerCase();
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

function getPlayerChoice()
{
    return prompt("Enter your choice of rock, paper, or scissors:");
}

function playGame()
{
    let playerScore = 0;
    let computerScore = 0;
    let numberOfRoundsToPlay = 5;

    for (let currentRound = 1; currentRound <= numberOfRoundsToPlay; currentRound++)
    {
        let roundResultMessage = playRound(getPlayerChoice(), getComputerChoice());
        console.log(roundResultMessage);

        if (roundResultMessage.includes("win"))
        {
            playerScore++;
        }
        else if (roundResultMessage.includes("lose"))
        {
            computerScore++;
        }
    }

    if (playerScore > computerScore)
    {
        console.log("Congratulations! You won the game!");
    }
    else if (playerScore < computerScore)
    {
        console.log("You lost the game. Better luck next time!");
    }
    else
    {
        console.log("Game was a draw!");
    }
}

playGame();
