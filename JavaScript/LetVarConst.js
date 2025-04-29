// What is the difference between let, var, and const in JavaScript? Write examples demonstrating their behavior.

// var: Declares variables with function-level scope.

// let: Declares variables with block-level scope.

// const: Declares block-scoped variables that cannot be reassigned.

var a = 10;
if(true){
    var a = 20;  //Same Variable Function scope
    console.log(a);
}
console.log(a);

let b = 20;
if(true){
    let b = 40;
    console.log(b);
}
console.log(b);

const c = 30;
// conct c = 40; will  give an error because reassigning an const varaiable is not possible
console.log(c);