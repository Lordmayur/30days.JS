// DAY-2: OPERATORS

//  ACTIVITY-1  ARITHEMETIC OPERATORS
// 1: write a program to add two numbers and log the result to the console.
 let a=11;
 let b=11;
 console.log(a+b);

// 2: write a program to subtract two numbers and log the result to the console.
let x=22;
let y=11;
console.log(x-y);

// 3: write a program to multiply two numbers and log the result to the console.
let m=44;
let n=1;
console.log(m*n);

// 4: write a program to divide two numbers and log the result to the console.
let c=33;
let d=6;
console.log(c/d);

//5: write a program to find the remainder when one number is divided by another and log the result to the console
console.log(c%d);

// ACTIVITY-2 ASSIGNMENT OPERATORS

// += operator
let count = 5;
console.log(`Initial value of count: ${count}`);

count += 10;
console.log(`Value of count after adding 10: ${count}`);

// -= operator
let subtract = 10;
console.log(`Initial value of count: ${subtract}`);

subtract -= 5;
console.log(`Value of count after subtracting 5: ${subtract}`);

//comparison operators
function compareNumbers(a, b) {
    if (a > b) {
      console.log(`${a} is greater than ${b}`);
    } else if (a < b) {
      console.log(`${a} is less than ${b}`);
    } else {
      console.log(`${a} is equal to ${b}`);
    }
  }
  
  compareNumbers(10, 5);

  // Declare two variables to hold the numbers
let num1 = 10;
let num2 = 20;

// Compare the numbers using >= and <=
if (num1 >= num2) {
  console.log(`${num1} is greater than or equal to ${num2}`);
} else {
  console.log(`${num1} is less than ${num2}`);
}

// Declare two variables to hold the numbers
let num1 = 10;
let num2 = 20;

// Compare the numbers using >= and <=
if (num1 >= num2) {
  console.log(`${num1} is greater than or equal to ${num2}`);
} else {
  console.log(`${num1} is less than ${num2}`);
}

if (num1 <= num2) {
  console.log(`${num1} is less than or equal to ${num2}`);
} else {
  console.log(`${num1} is greater than ${num2}`);
}

  