//todo
//!
//*
//?
//
//* PALINDROME 
function palindrome(str) {
    // Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
  let re = /[\W_]/g;
  let lowRegStr = str.toLowerCase().replace(re, '');
    // Step 2. Reverse the String 
  let reverseStr = lowRegStr.split('').reverse().join(''); 
    // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
  return reverseStr === lowRegStr;
}
//* RANDOM NUMBER 
function randomNumber(min, max) {
//console.log(arguments);
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
//*RANDOM SUM
function randomSum(min, max){
const firstNumber = randomNumber(min, max);
const secondNumber = randomNumber(min, max);
return firstNumber + secondNumber;
} //const sum = randomSum(100, 10000);
//* IS EVEN ?
function isEven(num){
if(num % 2 === 0){
  return true;
} else{
  return false;
}
}
//* NOTIFICATION ERROR
function notificationError(msgError){
const attention = document.createElement('div');
attention.className = 'alert alert-danger';
attention.innerText = msgError;
return attention;

}

 



