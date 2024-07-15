function checkNumber(num) {
    if (num > 0) {
      console.log(`The number ${num} is positive.`);
    } else if (num < 0) {
      console.log(`The number ${num} is negative.`);
    } else {
      console.log(`The number ${num} is zero.`);
    }
  }
  



  function checkVoteEligibility(age) {
    if (age >= 18) {
      console.log(`Congratulations! You are eligible to vote.`);
    } else {
      console.log(`Sorry, you are not eligible to vote yet. You need to be at least 18 years old.`);
    }
  }
  
 


  function findLargestNumber(num1, num2, num3) {
    if (num1 >= num2) {
      if (num1 >= num3) {
        console.log(`The largest number is ${num1}.`);
      } else {
        console.log(`The largest number is ${num3}.`);
      }
    } else {
      if (num2 >= num3) {
        console.log(`The largest number is ${num2}.`);
      } else {
        console.log(`The largest number is ${num3}.`);
      }
    }
  }
  

