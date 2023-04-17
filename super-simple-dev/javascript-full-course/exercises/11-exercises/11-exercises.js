/* Lesson 11 Exercises - Arrays and Loops */

// 11a
const nums = [10, 20, 30];
nums[2] = 99;
// console.log(nums);

// 11b
getLastValue([1, 20, 22, 24, 5]);
getLastValue(['hi', 'hello', 'good']);

function getLastValue(array) {
  // console.log(array[array.length - 1]);
  return array[array.length - 1];
}

// 11c
arraySwap([1, 20, 22, 24, 5]);
arraySwap(['hi', 'hello', 'good']);

function arraySwap(array) {
  let swappedArray = [];
  for (let i = 1; i <= array.length; i++) {
    swappedArray.push(array[array.length - i]);
    // console.log(swappedArray);
  }
  return swappedArray;
}

// 11d
for (let i = 0; i <= 10; i += 2) {
  // console.log(i);
}

// 11e
for (let i = 5; i >= 0; i--) {
  // console.log(i);
}

// 11f
let i = 0;
while (i <= 10) {
  // console.log(i);
  i += 2;
}

let j = 5;
while (j >= 0) {
  // console.log(j);
  j--;
}

// 11g
const nums2 = [1, 2, 3];
let numsIncremented = [];
for (let i = 0; i < nums2.length; i++) {
  numsIncremented = nums2[i] + 1;
  // console.log(numsIncremented);
}

// 11h
addOne([1, 2, 3]);
addOne([-2, -1, 0, 99]);

function addOne(array) {
  let arrayIncremented = [];
  for (let i = 0; i < array.length; i++) {
    arrayIncremented[i] = array[i] + 1;
    // console.log(arrayIncremented);
  }
  return arrayIncremented;
}

// 11i
addNum([1, 2, 3], 2);
addNum([1, 2, 3], 3);
addNum([-2, -1, 0, 99], 2);

function addNum(array, num) {
  let arrayIncremented = [];
  for (let i = 0; i < array.length; i++) {
    arrayIncremented[i] = array[i] + num;
    // console.log(arrayIncremented);
  }
  return arrayIncremented;
}

// 11j
addArrays([1, 1, 2], [1, 1, 3]);
addArrays([1, 2, 3], [4, 5, 6]);

// *Note: Assuming array1 and array2 share the same number of indices
function addArrays(array1, array2) {
  let arraysAdded = [];
  for (let i = 0; i < array1.length; i++) {
    arraysAdded[i] = array1[i] + array2[i];
    // console.log(arraysAdded);
  }
  return arraysAdded;
}

// 11k
countPositive([1, -3, 5]);
countPositive([-2, 3, -5, 7, 10]);

function countPositive(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) count++;
    // console.log(count);
  }
  return count;
}

// 11lm
minMax([1, -3, 5]);
minMax([-2, 3, -5, 7, 10]);

minMax([]);
minMax([3]);

function minMax(nums) {
  let minMax = { min: nums[0], max: nums[0] };

  if (nums.length === 0) return (minMax = { min: null, max: null });
  else if (nums.length === 1) return minMax;

  for (let i = 0; i < nums.length - 1; i++) {
    if (minMax.min > nums[i + 1]) minMax.min = nums[i + 1];
    if (minMax.max < nums[i + 1]) minMax.max = nums[i + 1];
    // console.log(minMax);
  }
  return minMax;
}

// 11n (*)
countWords(['apple', 'grape', 'apple', 'apple']);

function countWords(words) {
  let numWords = {};
  for (let i = 0; i < words.length; i++) {
    // If it hasn't been seen yet
    if (!numWords[words[i]]) numWords[words[i]] = 1;
    // If it has been seen, increment
    else numWords[words[i]]++;
    // console.log(numWords);
  }

  return numWords;
}

// 11o
// const arr = ['hello', 'world', 'search', 'good'];
const arr = ['not', 'found'];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 'search') {
    // console.log(i);
  }
  if (i === arr.length - 1 && arr[i] !== 'search') {
    // console.log(-1);
  }
}

/* Alternatively, `let index = -1` at the start */

// 11p
const words = ['hello', 'world', 'search', 'good', 'search'];

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'search') {
    // console.log(i);
    break;
  }
  if (i === words.length - 1 && words[i] !== 'search') {
    // console.log(-1);
  }
}

// 11q
findIndex(['green', 'red', 'blue', 'red'], 'red');
findIndex(['green', 'red', 'blue', 'red'], 'yellow');

function findIndex(array, word) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === word) {
      return i;
      break;
    }
    if (i === array.length - 1 && array[i] !== 'search') return -1;
  }
}

/* Alternatively...
  function findIndex(array, word) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === word) return i;
    }
    return -1;
  }
*/

// 11r
removeEgg1(['egg', 'apple', 'egg', 'egg', 'ham']);

function removeEgg1(foods) {
  const result = [];
  for (let i = 0; i < foods.length; i++) {
    if (foods[i] !== 'egg') result.push(foods[i]);
    else continue;
  }
  // console.log(result);
  return result;
}

// 11s (*)
removeEgg2(['egg', 'apple', 'egg', 'egg', 'ham']);

function removeEgg2(foods) {
  const result = [];
  let eggCount = 0;
  for (let i = 0; i < foods.length; i++) {
    // **Note for the future: Inverse these for cleaner code!
    if (foods[i] !== 'egg' || eggCount >= 2) {
      result.push(foods[i]);
    } else eggCount++;
  }
  // console.log(result);
  // console.log(eggCount);
  return result;
}

/* Alternatievly... (inverse of above comparisons)

 function removeEgg(foods) {
  const result = [];
  let eggsRemoved = 0;

  for (let i = 0; i < foods.length; i++) {
    if (foods[i] === 'egg' && eggsRemoved < 2) {
      eggsRemoved++;
      continue;
    }

    result.push(foods[i]);
  }

  return result;
}

*/

// 11t
removeEgg3(['egg', 'apple', 'egg', 'egg', 'ham']);

function removeEgg3(foods) {
  const foodsReversed = foods.reverse();
  const result = [];
  let eggsRemoved = 0;

  for (let i = 0; i < foodsReversed.length; i++) {
    if (foodsReversed[i] === 'egg' && eggsRemoved < 2) {
      eggsRemoved++;
      continue;
    }

    result.push(foodsReversed[i]);
  }

  // console.log(result.reverse());
  return result.reverse();
}

// 11u
const foods = ['egg', 'apple', 'egg', 'egg', 'ham'];
removeEgg4(foods);

function removeEgg4(foods) {
  const foodsReversed = foods.slice().reverse();
  const result = [];
  let eggsRemoved = 0;

  for (let i = 0; i < foodsReversed.length; i++) {
    if (foodsReversed[i] === 'egg' && eggsRemoved < 2) {
      eggsRemoved++;
      continue;
    }

    result.push(foodsReversed[i]);
  }
  // console.log(foods);
  // console.log(result.reverse());
  return result.reverse();
}

// 11v
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    // console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    // console.log('Fizz');
  } else if (i % 5 === 0) {
    // console.log('Buzz');
  } else {
    // console.log(i);
  }
}

// 11w
unique(['green', 'red', 'blue', 'red']);
unique(['red', 'green', 'green', 'red']);

function unique(array) {
  const result = [];
  let firstIndex;
  for (let i = 0; i < array.length; i++) {
    firstIndex = findIndex(array, array[i]);
    if (!result[firstIndex]) result.push(array[firstIndex]);
  }
  // console.log(result);
  return result;
}

/* Alternatively...
  function unique(array) {
    const result = [];

    for (let i = 0; i < array.length; i++) {
      const word = array[i];

      // Checks if not in result[] 
      if (findIndex(result, word) === -1) {
        result.push(word);
      }
    }
    return result;
  }
*/

// 11x
let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
renderTodoList();

// "render" = display on the screen
function renderTodoList() {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, dueDate } = todoObject; // Destructuring

    // Generating HTML code for each todo as string
    todoListHTML += `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-btn" onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      ">Delete</button>
    `;
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  localStorage.setItem('todoList', JSON.stringify(todoList));
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({ name, dueDate }); // Shorthand for { name: name, dueDate: dueDate }

  // Resets input field after adding a todo
  inputElement.value = '';
  renderTodoList();
}
