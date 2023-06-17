//rock-paper-scissors game
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
    if(compSelection == 'rock' && playerSelection == 'rock') {
      result = 'You tie.';
    }else if(compSelection == 'rock' && playerSelection == 'scissors') {
      result = 'You Lose! Rock beats Scissors';
    }else if(compSelection == 'rock' && playerSelection == 'paper') {
      result = 'You Win! Paper beats Rock';
    }else if(compSelection == 'paper' && playerSelection == 'paper') {
      result = 'You tie.';
    }else if(compSelection == 'paper' && playerSelection == 'rock') {
      result = 'You Lose! Paper beats Rock';
    }else if(compSelection == 'paper' && playerSelection == 'scissors') {
      result = 'You win! Scissors beats Paper';
    }else if(compSelection == 'scissors' && playerSelection == 'scissors') {
      result = 'You tie. Computer chose Scissors';
    }else if(compSelection == 'scissors' && playerSelection == 'rock') {
      result = 'You Win! Rock beats Scissors';
    }else if(compSelection == 'scissors' && playerSelection == 'paper') {
      result = 'You Lose! Scissors beats Paper';
    }
    return result;
  }

let playerScore = 0;
let computerScore = 0;
let winner ='';
let computerSelection;
let playerSelection;

function playGame() {
  
  const rock = document.querySelector('#rock');
  rock.addEventListener('click', () => {
    computerSelection = getComputerChoice();
    playerSelection = 'rock';
    result = playRound(computerSelection, playerSelection);
    showPlayerMove();
    showComputerMove();
    trackScore(); 
    logCurrentResult();
    logPlayerScore();
    logCompScore();
    checkWinner();
  });

  const paper = document.querySelector('#paper');
  paper.addEventListener('click', () => {
    computerSelection = getComputerChoice();
    playerSelection = 'paper';
    result = playRound(computerSelection, playerSelection);
    showPlayerMove();
    showComputerMove();
    trackScore();
    logCurrentResult();
    logPlayerScore();
    logCompScore();
    checkWinner();
  });

  const scissors = document.querySelector('#scissors');
  scissors.addEventListener('click', () => {
    computerSelection = getComputerChoice();
    playerSelection = 'scissors';
    result = playRound(computerSelection, playerSelection);
    showPlayerMove();
    showComputerMove();
    trackScore();
    logCurrentResult();
    logPlayerScore();
    logCompScore();
    checkWinner();
  });
}

function showPlayerMove() {
  const playerMove = document.querySelector('.player');
  if(playerSelection == 'rock'){
    playerMove.textContent = '\u270A';
  }else if(playerSelection == 'paper'){
  playerMove.textContent = '\u270B';
  }else if(playerSelection == 'scissors'){
    playerMove.textContent = '\u270C';
  }
  playerMove.style.cssText = 'font-size: 70px'
  return playerMove;
}

function showComputerMove() {
  const computerMove = document.querySelector('.computer');
  if(computerSelection == 'rock'){
    computerMove.textContent = '\u270A';
  }else if(computerSelection == 'paper'){
  computerMove.textContent = '\u270B';
  }else if(playerSelection == 'scissors' || computerSelection == 'scissors'){
    computerMove.textContent = '\u270C';
  }
  computerMove.style.cssText = 'font-size: 70px';
  return computerMove;
}

function trackScore() {
  if(result == 'You Win! Paper beats Rock' || result == 'You win! Scissors beats Paper' || result == 'You Win! Rock beats Scissors') {
    playerScore = playerScore + 1;
  }else if(result == 'You Lose! Rock beats Scissors' || result == 'You Lose! Paper beats Rock' || result == 'You Lose! Scissors beats Paper'){
    computerScore++;
  }
}

function logCurrentResult() {
  const currentResult = document.querySelector('.results');
  currentResult.textContent = result;
  currentResult.style.cssText = 'font-family: "Carter One", cursive; font-size: 24px;';
  return currentResult;
}

function logPlayerScore() {
  const currentPlayerScore = document.querySelector('.player-score');
  currentPlayerScore.textContent = `player: ${playerScore}`;
  currentPlayerScore.style.cssText = 'font-family: "Carter One", cursive; font-size: 24px;';
  return currentPlayerScore;
}

function logCompScore() {
  const currentCompScore = document.querySelector('.computer-score');
  currentCompScore.textContent = `Computer: ${computerScore}`;
  currentCompScore.style.cssText = 'font-family: "Carter One", cursive; font-size: 24px;';
  return currentCompScore;
}

function displayWinner() {
  if(playerScore === 5){
    winner = 'Congratulations! You win!';
  }else if(computerScore === 5){
    winner = 'You Loose. Better luck next time!';
  }
  const container = document.createElement('div');
  container.style.cssText = 'display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh;';

  const winnerResult = document.createElement('div');
  winnerResult.textContent = winner;
  winnerResult.style.cssText = 'font-family: "Carter One", cursive; font-size: 50px;';
  container.appendChild(winnerResult);

  const playAgainBtn = document.createElement('button');
  playAgainBtn.id = 'playAgainBtn';
  playAgainBtn.textContent = 'Play again';
  playAgainBtn.style.cssText = 'background-color: #213555; color: white; font-size: 24px; padding: 20px 30px; font-family: "Carter One", cursive; cursor: pointer; margin-top: 30px';
  container.appendChild(playAgainBtn);

  document.body.innerHTML = '';
  document.body.appendChild(container);

  playAgainBtn.addEventListener('click', () => {
    resetGame();
  });
}

function resetGame(){
  playerScore = 0;
  computerScore = 0;

  document.location.reload();
}

function checkWinner() {
  if(playerScore === 5 || computerScore === 5){
    displayWinner();
    return;
  }
}

playGame();

 /*document.body.innerHTML = `
      <div class="winner-result">${winner}</div>
      <button id="tryAgainBtn">Play again</button>
  `;

  const winnerResult = document.querySelector('.winner-result');
  winnerResult.style.cssText = 'font-family: "Carter One", cursive; font-size: 30px;';

  const tryAgainBtn = document.querySelector('#tryAgainBtn');
  tryAgainBtn.style.cssText = 'background-color: #213555; color: white; font-size: 24px; padding: 20px 30px; font-family: "Carter One", cursive; border: 1px solid white';
  tryAgainBtn.addEventListener('click', () => {
    resetGame();
  })*/
