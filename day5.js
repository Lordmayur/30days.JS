//DAY5:Fucntions
//Function declaration
//task1:write a function to check if a number is even or odd and log the result to the console.
function checkEvenOdd(number){
    if (typeof number!=='number'){
        console.log('please provide a valid number.');
        return;
    }
    if (number%2==0){
        console.log(`${number} is even.`);
    }else{
        console.log(`${number} is odd.`);
    }
}
checkEvenOdd(10);
checkEvenOdd(7);  

//Task2:write a function to calculate the square of a number and return the result
function calculateSquare(number){
    if(typeof number!=='number'){
        return'please provide a valid number';
    }
    return number*number;
}
console.log(calculateSquare(4));
console.log(calculateSquare(9));

//function expression
//task3:write a function expression to find the maximum of two numbers and log the result to the console
const findMax=function(num1,num2){
    if (typeof num1!=='number'|| typeof num2!=='number'){
        console.log('please provide valid numbers.');
        return;
    }
    let max;
    if(num1>num2){
        max=num1;
    }else{
        max=num2;
    }
    console.log('the maximum of ${num1} and ${num2} is ${max}.');
}
findMax(10,7);