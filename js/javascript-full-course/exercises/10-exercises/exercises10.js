// 10c
const buttonElement = document.querySelector('.js-button');
console.log(buttonElement.classList.contains('js-button'));

// 10defg (*)
let isToggled = false;

function toggleBtn(type) {
  const toggleBtnElement = document.querySelector(`.js-toggle-${type}`);

  // Only accessible when no toggled buttons
  if (!isToggled && !toggleBtnElement.classList.contains('is-toggled')) {
    toggleBtnElement.classList.add('is-toggled');
    isToggled = true;
    // Only accessible by toggled button
  } else if (toggleBtnElement.classList.contains('is-toggled')) {
    toggleBtnElement.classList.remove('is-toggled');
    isToggled = false;
  }
}

/* Alternative Solution for 10g: 

function toggleButton(selector) {
  const button = document.querySelector(selector);
  if (!button.classList.contains('is-toggled')) {

    // Before turning this button ON, check if there's
    // already a button that's turned ON and turn it OFF.
    turnOffPreviousButton();

    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }
}

function turnOffPreviousButton() {
  const previousButton = document.querySelector('.is-toggled');
  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}

*/

// 10h
function handleCostKeyDown(event) {
  if (event.key === 'Enter') calculateTotal();
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);

  // Reset messages
  document.querySelector('.js-total-cost').innerText = '';
  document.querySelector('.js-error-msg').innerText = '';

  if (cost < 0) {
    document.querySelector('.js-error-msg').innerText =
      'Error: cost cannot be less than $0';
    return;
  }
  if (cost < 40) cost += 10;

  document.querySelector('.js-total-cost').innerText = `$${cost}`;
}

// 10ij
let calculation = localStorage.getItem('calculation') || '';
if (!'') displayCalculation();

function updateCalculation(val) {
  if (val === ' = ') {
    calculation = eval(calculation);
    displayCalculation();
    saveCalculation();
  } else if (val === 'Clear') {
    calculation = '';
    displayCalculation();
    saveCalculation();
    console.log('Cleared.');
  } else {
    calculation += val;
    displayCalculation();
    saveCalculation();
  }
}

function displayCalculation() {
  document.querySelector('.js-calculation').innerText = calculation;
}

function saveCalculation() {
  localStorage.setItem('calculation', calculation);
}
