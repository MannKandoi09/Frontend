// Write a program that checks if a number is greater than 10 but less than 20 using comparison operators.

function checkRange(num){
    if(num > 10 && num < 20){
        console.log("Number is Between 10 and 20");
    }else{
        console.log("Number is out of Range");
    }
}

checkRange(11);