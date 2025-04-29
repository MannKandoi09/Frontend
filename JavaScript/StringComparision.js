// Write a program to check if two strings are equal, ignoring case.

function compareStrings(str1, str2){
    if(str1.toLowerCase() === str2.toLowerCase()){
        console.log("Strings are Equal!!!");
    }else{
        console.log("Strings are not Equal...");
    }
}
compareStrings("Hello", "hello");
compareStrings("Hello", "World");