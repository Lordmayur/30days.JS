//day3 control structures 
//ACTIVITY 1:If-Else statements
function checkNumber(num) {
    if (num > 0) {
      console.log(`The number ${num} is positive.`);
    } else if (num < 0) {
      console.log(`The number ${num} is negative.`);
    } else {
      console.log(`The number ${num} is zero.`);
    }
  }
  checkNumber(39);


//task2: write a program to check if a person is eligible to vote(age>=18)and log the result to the console.
  function checkVoteEligibility(age) {
    if (age >= 18) {
      console.log(`Congratulations! You are eligible to vote.`);
    } else {
      console.log(`Sorry, you are not eligible to vote yet. You need to be at least 18 years old.`);
    }
  }
  checkVoteEligibility(17);
 
//ACTIVITY 2: Nested If-Else statements
//task3:write a program to find the largest of three numbers using nested if-else statements
  function findLargestNumber(num1, num2, num3) {
    if (num1 >= num2) {
      if (num1 >= num3) {
        console.log(`The largest number is: ${num1}`);
      } else {
        console.log(`The largest number is: ${num3}`);
      }
    } else {
      if (num2 >= num3) {
        console.log(`The largest number is: ${num2}`);
      } else {
        console.log(`The largest number is: ${num3}`);
      }
    }
  }
  findLargestNumber(10, 20, 30);
  findLargestNumber(50, 25, 40); 

// ACTIVITY 3: switch case 
//task4: write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the grade to the console.
function getDayOfWeek(dayNumber) {
  let dayOfWeek;

  switch (dayNumber) {
    case 1:
      dayOfWeek = "Monday";
      break;
    case 2:
      dayOfWeek = "Tuesday";
      break;
    case 3:
      dayOfWeek = "Wednesday";
      break;
    case 4:
      dayOfWeek = "Thursday";
      break;
    case 5:
      dayOfWeek = "Friday";
      break;
    case 6:
      dayOfWeek = "Saturday";
      break;
    case 7:
      dayOfWeek = "Sunday";
      break;
    default:
      dayOfWeek = "Invalid day number";
  }

  console.log(`The day of the week is: ${dayOfWeek}`);
}
getDayOfWeek(1);
getDayOfWeek(3); 
getDayOfWeek(7); 
getDayOfWeek(8); 

//write a program that uses a switch case to assign a grade ('A','B','C','D','F') based on a score and log the grade to the console.
function assignGrade(score) {
  let grade;

  switch (true) {
    case (score >= 90):
      grade = 'A';
      break;
    case (score >= 80):
      grade = 'B';
      break;
    case (score >= 70):
      grade = 'C';
      break;
    case (score >= 60):
      grade = 'D';
      break;
    default:
      grade = 'F';
  }

  console.log(`Your grade is: ${grade}`);
}

// Example usage
assignGrade(92);
assignGrade(85);
assignGrade(72); 
assignGrade(65); 
assignGrade(55);

//ACTIVITY 4: conditional(ternery)operator 
//task 6: write a program that uses the ternery operator to check if a number is even or odd and log the result to the console.
function checkEvenOdd(number) {
  let result = (number % 2 === 0) ? 'even' : 'odd';
  console.log(`The number ${number} is ${result}.`);
}

// Example usage
checkEvenOdd(4); // Output: The number 4 is even.
checkEvenOdd(7); // Output: The number 7 is odd.
checkEvenOdd(10); // Output: The number 10 is even.
checkEvenOdd(11); // Output: The number 11 is odd.

// ACTIVITY 5: Combining conditions
//task 7: write a program to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console.
function isLeapYear(year) {
  let isLeap;

  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        isLeap = true;
      } else {
        isLeap = false;
      }
    } else {
      isLeap = true;
    }
  } else {
    isLeap = false;
  }

  console.log(`The year ${year} is ${isLeap ? 'a leap year' : 'not a leap year'}.`);
}

isLeapYear(2024); 
isLeapYear(2023); 
isLeapYear(2000); 
isLeapYear(1900); 
