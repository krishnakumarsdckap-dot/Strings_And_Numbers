// Task 1: Round a Decimal Number
// Problem:
//  Given a decimal number, display its rounded value using JavaScript’s Math methods.
//Self-coded

// let num = 4.6789;
// console.log(num)
// console.log(num.toPrecision(1))
// console.log(num.toFixed(2))


// Task 2: Generate a Random Number between Two Values
// Problem:
//  Write a program that generates a random integer between two given numbers (inclusive).
//Self-coded

// console.log((Math.random()*10+10).toFixed(0))


// Task 3: Sum of Digits of a Number
// Problem:
//  Write a JavaScript program to find the sum of all digits in a given number. The number may be positive or negative.
//Self-coded

// let num = parseInt(prompt("Enter any Number : "));
// let sum = 0;
// num = Math.abs(num).toString();
// for (let i = 0; i < num.length; i++) {
//   sum += parseInt(num[i]);
// }
// console.log("Sum of digits:", sum);


// Task 4: Format a Number as Currency
// Problem:
//  Write a JavaScript program that takes a number and formats it as currency (for example, in Indian Rupees).
//Self-coded

// let amount = parseInt(prompt("Enter the number to convert it as Rupees : "));
// let formatted = "₹" + amount.toLocaleString('en-IN');
// console.log(formatted);


// Task 5: Calculate Compound Interest
//Self-coded

// let P=parseInt(prompt("Enter Principle Amount : "))
// let r=parseInt(prompt("Enter Rate of interest : "))
// let t=parseInt(prompt("Enter time in (years) : "))
// A=P*(1+(r/100))**t
// console.log("Compound Interest : ",A-P.toPrecision(5))
// console.log("Total Amount :",A.toFixed(2))



// Task 6: Convert Case and Reverse a String
// Problem:
//  Write a program that converts all letters in a string to uppercase and also prints the reversed version of the string.
//Self-coded

// let word = "developer";
// console.log(word.toUpperCase())
// console.log(word.split("").reverse().join(""))



// Task 7: Check for Palindrome
// Problem:
//  Write a program that checks whether a given string reads the same backward and forward (ignoring case and spaces).
//Self-coded

// let str = prompt("Enter a word : ")
// let NewStr=""
// let palindrome=""
// for(i=0 ;i<str.length ;i++ ){
//     if(str[i]==" "){
//         continue;
//     }
//     else{
//         NewStr+=str[i].toLowerCase()
//     }
// }
// for(j=str.length-1 ;0<=j ;j--){
//     if(str[j]==" "){
//         continue;
//     }
//     else{
//         palindrome+=str[j].toLowerCase()
//     }
// }
// if(palindrome==NewStr){
//     console.log("True",str,"is a palindrome")
// }
// else{
//     console.log("false",str,"is not a palindrome")
// }



// Task 8: Count the Occurrences of a Word
// Problem:
//  Write a JavaScript program to count how many times a specific word appears in a sentence.
//Self-coded

// let sentence = prompt("Enter the Sentence to check Repetedwords : ")
// sentence = sentence.split(" ")
// let word =prompt("Enter the Word to check : ")
// count=0;
// for(i=0 ;i<sentence.length ;i++){
//     if(sentence[i]==word){
//         count++
//     }
// }
// console.log(`"The word '${word}' is repeted for '${count}' times"`)



// Task 9: Capitalize the First Letter of Each Word
// Problem:
//  Write a JavaScript program that capitalizes the first letter of every word in a given sentence.
//Self-coded

// let sentence = prompt("Enter the sentence : ")
// let str=sentence.split(" ")
// let x=""
// for(i=0; i<str.length; i++){
//     let word=str[i]
//     for(j=0; j<word.length ;j++){
//         if(j==0){
//             x+=word[0].toUpperCase();
//         }
//         else{
//             x+=word[j]
//         }
//     }
//     x+=" "
// }
// console.log(x)



// Task : 10. Remove Duplicate Characters
// Problem:
//  Write a JavaScript program that removes duplicate characters from a string.
//Self-coded

// let str = "mississippi";
// let result = "";
// for(i=0;i<str.length;i++){
//     if(!result.includes(str[i])){
//         result+=str[i];
//     }
// }
// console.log("String without duplicates:", result);
