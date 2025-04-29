
//alert("Hello Mann");
/*
console.log(40 + 8 + 23 - 10);
console.log("Jamin");
console.log(23);

//Varaiable name convention
let firstName = "John";
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

let $function = 27;
console.log($function);
*/

/*
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);

javaScriptIsFun  = 'YES!';
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);
console.log(year);

//type of null is object
console.log(typeof null);
*/

/*
//with let you can reasign an value
let age = 30;
age  = 31;

//with const you can reasign a value and it cannot be empty
const birthYear = 1991;
//birthYear = 1990; //error
//const job;

var job = 'programmer';
job = 'teacher';

lastname = 'Kandoi';
console.log(lastname);
*/

/*
//Math Operators
const now = 2037;
const ageMann = now - 1991;
const ageSara = 2037 - 2018;
console.log(ageMann , ageSara);
console.log(ageMann * 2 , ageSara / 10, 2 ** 3);
//2 ** 3 means 2 to the power of 3 =  2 * 2 * 2 = 8

const firstName = 'Mann';
const lastname = 'Kandoi';
console.log(firstName + ' ' + lastname);

//Assignment Operators
let x = 10 + 5; //15
x += 10; //25 (x = x + 10);
x *= 4; //100 (x = x * 4);
x++; // x  = x + 1;
x--; 
console.log(x);

//Comparison Operators
console.log (ageMann > ageSara); // >, <,  >= , <=
console.log (ageMann >= 18);


const isFullAge  = ageMann >= 18;

console.log(now - 1991 > now - 2018);
*/
/*
console.log(25 -10 - 5);

let a , y;
a = y = 25 - 10- 5;
console.log(x , y); // x  - y = 10 , x = 10

const averageAge = (ageMann + ageSara) / 2;
console.log(ageMann, ageSara, averageAge); */

/*
//TASK 1
const markWeight = 78;
const markHeight  = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;


const BMIMark = markWeight / markHeight ** 2;
const  BMIJohn = johnWeight / (johnWeight * johnHeight);

console.log(BMIMark, BMIJohn); 

*/
/*
const firstName = 'Mann';
const job = 'Teacher';
const birthYear = 1991;
const year = 2037;

const Mann = "I am " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(Mann);

const MannNew = `I am ${firstName} , a ${yaer - birthYear} year old ${teacher}!`;
console.log(MannNew);

console.log(`just a regular String...`);
console.log(`string with \n\ multiple \n\
    lines`);

*/
/*
const age = 15;
// const isOldEnough  = age >= 18;

if(age >= 18){
    console.log('Mann can Strat Driving Licenece 🚗');
    
}else{
  const yearsLeft = 18 - age;
  console.log(`Mann is too young. Wait another ${yearsLeft} years : ')`);
}

const birthYear = 2012;
let century;

if(birthYear <= 2000){
     century = 20;

}else {
     century = 21;
}
console.log(century);
*/

/*
//Type Convertion
const inputyear = '1991';
// console.log(Number(inputyear));
console.log(Number(inputyear), inputyear);
console.log(inputyear + 18);

console.log(Number('Mann'));
console.log(typeof NaN);

console.log(String(23) , 23);

//Type Coercion
console.log('I am ' + 23 + ' Years old')
console.log('I am ' + String(23) + ' Years old');
console.log('23' - '10' - 3);
*/


/*
const day = "sukrvar";

switch(day){
  case "monday":
    console.log("Plan Course Structure");
    console.log("Go to Coding Meetup");
    break;
  case 'tuesday':
    console.log("Prepare Theory Videos");
    break;
  case 'wednesday':
  case 'thursday':
    console.log("Write Code Examples");
    break;
  case 'friday':
    console.log('Record Videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log("Enjoy Weekends...");
    break;
  default :
    console.log('Not a Valid Day');      

}

if (day === 'monday')
   {
  console.log('Plan course structure');
  console.log('Go to coding meetup');
}
 else if (day === 'tuesday')
   {
  console.log('Prepare theory videos');
}
 else if (day === 'wednesday' || day === 'thursday') 
  {
  console.log('Write code examples');
}
 else if (day === 'friday') 
  {
  console.log('Record videos');
} 
else if (day === 'saturday' || day === 'sunday')
   {
  console.log('Enjoy the weekend :D');
} 
else 
{
  console.log('Not a valid day!');
}


const age = 18;
age >= 18 ? console.log('You are an adult') : 
console.log('You are a minor');

let drink;
if(age >= 18){
  drink = 'wine';
} else{
  drink = 'cooffee';
}
console.log(drink);

console.log(`I Like to Drink $(age >= 18 ? 'wine' ! 'cooffee')`);
*/


/*
const bill = 275;
const tip = null;
if(bill > 50 && tip !== null){
  console.log(`The total bill is $${bill + tip}`);
}else{
  console.log(`The total bill is $${bill}`);
}


//Functions 
function logger(){
  console.log('My Name is Lakhan');
}
//Invoking the Function
logger();
logger();
logger();

function fruitProcessor(apples , oranges){
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}
const applejuice = fruitProcessor(5, 0);
console.log(applejuice);

const appleOrangeJuice = fruitProcessor(2,4);
console.log(appleOrangeJuice); 


const num = Number('23');
*/

