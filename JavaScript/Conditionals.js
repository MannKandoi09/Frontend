// Write a program using if, else if, and else that checks if a number is positive, negative, or zero.

function checkNumber(num){
    if(num > 0){
        console.log("Positive");
    }else if(num < 0){
        console.log("Negatiive");
    }else{
        console.log("Zero");
    }
    
}
checkNumber(-10);