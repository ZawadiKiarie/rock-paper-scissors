function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let computerGuess;
    if (randomNumber < 33) {
      computerGuess = 'rock';
    }else if (randomNumber >=33 && randomNumber < 66) {
      computerGuess = 'paper';
    }else {
      computerGuess = 'scissors';
    }
    return computerGuess;
  }

  let result;

  function playRound(compSelection, playerSelection) {
    let playerSelectionStr = playerSelection.toLowerCase();
    if(compSelection == 'rock' && playerSelectionStr == 'rock') {
      result = 'You tie. Computer chose Rock';
    }else if(compSelection == 'rock' && playerSelectionStr == 'scissors') {
      result = 'You Lose! Computer chose Rock. Rock beats Scissors';
    }else if(compSelection == 'rock' && playerSelectionStr == 'paper') {
      result = 'You Win! Computer chose Rock. Paper beats Rock';
    }else if(compSelection == 'paper' && playerSelectionStr == 'paper') {
      result = 'You tie. Computer chose Paper';
    }else if(compSelection == 'paper' && playerSelectionStr == 'rock') {
      result = 'You Lose! Computer chose Paper. Paper beats Rock';
    }else if(compSelection == 'paper' && playerSelectionStr == 'scissors') {
      result = 'You win! Computer chose Paper. Scissors beats Paper';
    }else if(compSelection == 'scissors' && playerSelectionStr == 'scissors') {
      result = 'You tie. Computer chose Scissors';
    }else if(compSelection == 'scissors' && playerSelectionStr == 'rock') {
      result = 'You Win! Computer chose Scissors. Rock beats Scissors';
    }else if(compSelection == 'scissors' && playerSelectionStr == 'paper') {
      result = 'You Lose! Computer chose Scissors. Scissors beats Paper';
    }
    return result;
  }



function game() {
  let score = 0;
  for(let i = 1; i <= 5; i++){
    const playerSelection = prompt("Choose Rock, Paper or Scissors");
    let computerSelection = getComputerChoice();
    console.log(playRound(computerSelection, playerSelection));
    if(result == 'You Win! Computer chose Rock. Paper beats Rock' || result == 'You win! Computer chose Paper. Scissors beats Paper' || result == 'You Win! Computer chose Scissors. Rock beats Scissors') {
      score = score + 1;
    }
  }
  console.log(score);
  if(score > 2) {
    return 'You win!';
  }else{
    return 'You Lose!';
  }
}

console.log(game());

