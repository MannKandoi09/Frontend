// Write a program to check if a number is between 10 and 50, and also if it is an even number using logical operators (&&, ||).

function checkNumber(num){
    if(num > 10 && num < 50 && num % 2 === 0){
        console.log("Number is Even and it is in Range of 10 to 50");
    }else{
        console.log("Conditional not Met");
    }
}
checkNumber(12);