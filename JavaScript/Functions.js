function greet(name){
    return "Hello, " + name + "!";
}

let greeting = greet('Mann');
console.log(greeting);

//Function to compute product of p1 and p2
function Multiplication(p1, p2 ){
   return  p1 * p2;

}


//Instead of using a variable to store the return value of a function:
let x  = toCelsius(77);
let text = "The Temprature is " + x + " Celsius";

//OR
let display = "The Temprature is " + toCelsius(77) + " Celsius";


//Local Variables
function myCar(){
    let carName = "Volvo";
    //Only with in these unser myCar() function the code will be used

}
//code here cannot use myCar