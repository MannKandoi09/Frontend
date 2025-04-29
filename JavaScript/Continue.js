// Write a program to print all numbers from 1 to 10 except the number 5 using the continue statement.

for(let i = 1; i <= 10; i++){
    if(i === 5){
        continue;
    }
    console.log(i);
}