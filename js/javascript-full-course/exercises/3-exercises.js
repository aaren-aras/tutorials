/* Lesson 3 Exercises - Strings */
// **Note: `alert()` doesn't exist in terminal, but rather the `window` object in web browsers

// 3a
"My name is:";

// 3b
"Aaren";

// 3c
"My name is: " + "Aaren";

// 3d
"Total Cost: $" + (5 + 3);

// 3e
`Total Cost: $${5 + 3}`;

// 3f
alert(`Total Cost: $${5 + 3}`);

// 3g
"Total Cost: $" + (599 + 295) / 100;

// 3h
`Total Cost: $${(599 + 295) / 100}`;

// 3i
alert(`Total Cost: $${(599 + 295) / 100}`);

// 3j
alert(`Total Cost: $${(599 + 295) / 100}
Thank you, come again!`);

// 3k
`Items (${2 + 2}): $${(2095 * 2 + 799 * 2) / 100}`;

// 3l
`Shipping & handling: $${(499 + 499) / 100}`;

// 3m
`Total before tax: $${(2095 * 2 + 499 + 799 * 2 + 499) / 100}`;

// 3n
`Estimated tax (10%): $${
  Math.round((2095 * 2 + 499 + 799 * 2 + 499) * 0.1) / 100
}`;
