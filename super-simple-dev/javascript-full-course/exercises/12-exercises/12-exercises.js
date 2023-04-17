// 12rstuvwx
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

let isAutoPlaying = false;
let intervalId;

const resetScoreBtnElement = document.querySelector('.js-reset-score-btn');
const autoPlayBtnElement = document.querySelector('.js-auto-play-btn');
const resetScoreConfirm = document.querySelector('.js-reset-score-confirm');

updateScoreElement();

document
  .querySelector('.js-rock-btn')
  .addEventListener('click', () => playGame('rock'));

document
  .querySelector('.js-paper-btn')
  .addEventListener('click', () => playGame('paper'));

document
  .querySelector('.js-scissors-btn')
  .addEventListener('click', () => playGame('scissors'));

document.addEventListener('keydown', e => {
  if (e.key === 'r') playGame('rock');
  else if (e.key === 'p') playGame('paper');
  else if (e.key === 's') playGame('scissors');
});

// **Note: Add keydown event listener to `document`, not `autoPlayBtnElement`!
resetScoreBtnElement.addEventListener('click', handleReset);
document.addEventListener('keydown', handleReset);

autoPlayBtnElement.addEventListener('click', handleAutoPlay);
document.addEventListener('keydown', handleAutoPlay);

function handleReset(e) {
  if (e.type === 'click' || (e.type === 'keydown' && e.key === 'Backspace')) {
    // **Note: Use `innerHTML` when rendering text, not `innerText`!
    resetScoreConfirm.innerHTML = `
      <p class="js-reset-score-confirm-text">Are you sure you want to reset the score?</p>
      <button class="js-reset-confirm-yes-btn reset-score-confirm-btn">Yes</button>
      <button class="js-reset-confirm-no-btn reset-score-confirm-btn">No</button>
    `;

    const pElement = document.querySelector('.js-reset-score-confirm-text');
    const yesBtnElement = document.querySelector('.js-reset-confirm-yes-btn');
    const noBtnElement = document.querySelector('.js-reset-confirm-no-btn');

    yesBtnElement.addEventListener('click', () => {
      score = { wins: 0, losses: 0, ties: 0 };
      updateScoreElement();
      localStorage.setItem('score', JSON.stringify(score));
      resetScoreConfirm.innerText = '';
    });

    noBtnElement.addEventListener('click', () => {
      resetScoreConfirm.innerText = '';
    });
  }
}

function handleAutoPlay(e) {
  if (e.type === 'click' || (e.type === 'keydown' && e.key === 'a')) {
    autoPlay();
    if (isAutoPlaying) autoPlayBtnElement.innerText = 'Stop Playing';
    else autoPlayBtnElement.innerText = 'Auto Play';
  }
}

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

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
