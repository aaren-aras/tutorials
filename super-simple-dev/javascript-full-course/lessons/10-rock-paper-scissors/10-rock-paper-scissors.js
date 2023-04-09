let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'rock') {
    if (computerMove === 'rock') result = 'Tie.';
    else if (computerMove === 'paper') result = 'You lose..';
    else if (computerMove === 'scissors') result = 'You win!';
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') result = 'You win!';
    else if (computerMove === 'paper') result = 'Tie.';
    else if (computerMove === 'scissors') result = 'You lose..';
  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') result = 'You lose..';
    else if (computerMove === 'paper') result = 'You win!';
    else if (computerMove === 'scissors') result = 'Tie.';
  }

  if (result === 'You win!') score.wins++;
  else if (result === 'You lose..') score.losses++;
  else if (result === 'Tie.') score.ties++;

  updateScoreElement();
  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.js-result').innerHTML = result;
  // Can interpolate filepaths too!
  document.querySelector('.js-moves').innerHTML = `You
      <img class="move-icon" src ="img/${playerMove}-emoji.png">
      <img class="move-icon" src="img/${computerMove}-emoji.png">
      Computer`;
}

function updateScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: 
    ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNum = Math.random();
  let computerMove = '';

  if (randomNum >= 0 && randomNum < 1 / 3) computerMove = 'rock';
  else if (randomNum >= 1 / 3 && randomNum < 2 / 3) computerMove = 'paper';
  else if (randomNum >= 2 / 3 && randomNum < 1) computerMove = 'scissors';
  return computerMove;
}
