// Write a program using a switch statement to print the name of a day based on a given number (1 = Monday, 7 = Sunday).

function getDayName(day){
    switch(day){
        case 1:
            console.log("Mondya");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thrusday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturaday");
            break;
        case 7:
            console.log("Sunday");
            break;
        default :
            console.log("Invalid Day Number...");
    }
}

getDayName(7);