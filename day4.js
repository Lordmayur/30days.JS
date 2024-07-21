//DAY 4: LOOPS
//TASK 1: WRITE A PROGRAM TO PRINT NUMBERS FROM 1 TO 10 USING A FOR LOOP.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//TASK2: WRITE A PROGRAM TO PRINT THE MULTIPLICATION TABLE OF 5 USING A FOR LOOP
let number = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
}

//TASK 3: WRITE A PROGRAM TO CALCULATE THE SUM OF NUMBERS FROM 1 TO 10 USING A WHILE LOOP.
let sum = 0;  // Initialize sum variable
let i = 1;    // Start from 1

while (i <= 10) {
    sum += i; // Add the current number to sum
    i++;      // Increment the counter
}

console.log(`The sum of numbers from 1 to 10 is: ${sum}`);

//TASK 4:WRITE A PROGRAM TO PRINT NUMBERS FROM 10 TO 1 USING A WHILE LOOP.
let i = 10; // Start from 10

while (i >= 1) {
    console.log(i); // Print the current number
    i--;            // Decrement the counter
}

//TASK 5: WRITE A PROGRAM TO CALCULATE THE FACTORIAL OF A NUMBER USING DO WHILE LOOP
