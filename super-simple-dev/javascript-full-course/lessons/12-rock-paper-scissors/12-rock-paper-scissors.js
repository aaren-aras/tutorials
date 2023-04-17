let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

let isAutoPlaying = false;
let intervalId;

/* Personal pref when choosing regular vs arrow syntax for non-callback functions */
// Use `function` since hoisting (code order won't matter) and easier to read?
// const autoPlay = () => {...};

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    // `intervalId` ensures the correct interval is cleared
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

/* Common mistake is to pass `playGame('rock')` as the callback, but that results in undefined since we're passing the function CALL (i.e., running it immediately), not a REFERENCE to it (i.e., running it when button's actually clicked) */
document
  .querySelector('.js-rock-btn')
  .addEventListener('click', () => playGame('rock'));

document
  .querySelector('.js-paper-btn')
  .addEventListener('click', () => playGame('paper'));

document
  .querySelector('.js-scissors-btn')
  .addEventListener('click', () => playGame('scissors'));

document.querySelector('.js-reset-score-btn').addEventListener('click', () => {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  updateScoreElement();
  localStorage.setItem('score', JSON.stringify(score));
});

document
  .querySelector('.js-auto-play-btn')
  .addEventListener('click', () => autoPlay());

// `document.body` = type anywhere within BODY of HTML doc to listen for keydown
// addEventListener() gets `event` object (with `key` prop) like HTML event attributes, but as arbitrarily-named param (both 'e' and 'event' are common)
document.addEventListener('keydown', e => {
  if (e.key === 'r') playGame('rock');
  else if (e.key === 'p') playGame('paper');
  else if (e.key === 's') playGame('scissors');
  else if (e.key === 'a') autoPlay();
});

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
