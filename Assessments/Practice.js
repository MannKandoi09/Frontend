function welcome(){
    alert("Welcome to External JavaScript");
    console.log("Hello World!!!!");
    console.warn("Final Warning");
}
//Block Level Scope  
{
    let x = 10;
    const y = 20;
    console.log(x);
}
// console.log(x);

//Function Level Scope
function test(){
        if(true){
          var z = 30;
        }
        console.log(z);

    }
     test();
    //  console.log(z);


let myPromise = new Promise((resolve, reject) => {
        let success = true;
      
        if (success) {
          console.log(resolve("Task completed successfully!"));
        } else {
          console.log(reject("Something went wrong!"));
        }
});   
      
     