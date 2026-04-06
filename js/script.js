// addition 

let Question1v1= 20;
let Question1v2 = 10;

document.getElementById("Question1").innerText = "Q-1. Create a program to calculate the sum of two numbers.";
document.getElementById("Question1-value").innerText = "Value :" + Question1v1 + " & " + Question1v2;
document.getElementById("Question1-ans").innerText = "Answer :" + (Question1v1 + Question1v2);

// difference

let Question2v1= 20;
let Question2v2 = 10;

document.getElementById("Question2").innerText = "Q-2. Create a program to calculate the difference between two numbers.";
document.getElementById("Question2-value").innerText = "Value :" + Question2v1 + " & " + Question2v2;
document.getElementById("Question2-ans").innerText = "Answer :" + (Question2v1 - Question2v2);

// malati
let Question3v1= 20;
let Question3v2 = 10;

document.getElementById("Question3").innerText = "Q-3. Develop a function to calculate the product of two numbers.";
document.getElementById("Question3-value").innerText = "Value :" + Question3v1 + " & " + Question3v2;
document.getElementById("Question3-ans").innerText = "Answer :" + (Question3v1 * Question3v2);

// divide

let Question4v1 = 20;
let Question4v2 = 10;

document.getElementById("Question4").innerText = "Q-4. Write a program to divide two numbers and handle division by zero using conditional statements.";
document.getElementById("Question4-value").innerText = "Value :" + Question4v1 + " & " + Question4v2;

if (Question4v2 === 0) {
    document.getElementById("Question4-ans").innerText = "Answer : Cannot divide by zero";
} else {
    document.getElementById("Question4-ans").innerText = "Answer :" + (Question4v1 / Question4v2);
}

// square and cube 

let Question5v1 = 20;

document.getElementById("Question5").innerText = "Q-5. Create a program to calculate the square and cube of a number.";
document.getElementById("Question5-value").innerText = "Value :" + Question5v1;

let square = Question5v1 * Question5v1;
let cube = Question5v1 * Question5v1 * Question5v1;

document.getElementById("Question5-ans").innerText = "Square :" + square + " , Cube :" + cube;

//  area of a rectanglelet 

let Question6v1 = 20;  
let Question6v2 = 10;   

document.getElementById("Question6").innerText = "Q-6. Develop a program to calculate the area of a rectangle.";
document.getElementById("Question6-value").innerText = "Value :" + Question6v1 + " & " + Question6v2;

let area = Question6v1 * Question6v2;
document.getElementById("Question6-ans").innerText = "Answer :" + area;

// area of a circle

let Question7v1 = 20;

document.getElementById("Question7").innerText = "Q-7. Create a program to calculate the area of a circle.";
document.getElementById("Question7-value").innerText = "Value :" + Question7v1;

let area1 = Math.PI * Question7v1 * Question7v1;
document.getElementById("Question7-ans").innerText = "Answer :" + area1.toFixed(2);

// Celsius to Fahrenheit

let Question8v1 = 20;  

document.getElementById("Question8").innerText = "Q-8. Write a program to convert Celsius to Fahrenheit.";
document.getElementById("Question8-value").innerText = "Value :" + Question8v1 + "°C";

let fahrenheit = (Question8v1 * 9/5) + 32;
document.getElementById("Question8-ans").innerText = "Answer :" + fahrenheit + "°F";

// Simple Interest 

let Question9v1 = 2000;  
let Question9v2 = 4;     
let Question9v3 = 2;     

document.getElementById("Question9").innerText = "Q-9. Develop a program to calculate Simple Interest.";
document.getElementById("Question9-value").innerText = "Value : P=" + Question9v1 + " , R=" + Question9v2 + " , T=" + Question9v3;

let si = (Question9v1 * Question9v2 * Question9v3) / 100;
document.getElementById("Question9-ans").innerText = "Answer :" + si;