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
let Question4v2 = 0;

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

// even or od

let Question10v1 = 20;

document.getElementById("Question10").innerText = "Q-10. Write a program to check whether a number is even or odd.";
document.getElementById("Question10-value").innerText = "Value :" + Question10v1;

if (Question10v1 % 2 === 0) {
    document.getElementById("Question10-ans").innerText = "Answer : Even Number";
} else {
    document.getElementById("Question10-ans").innerText = "Answer : Odd Number";
}

// positive, negative, or zero

let Question11v1 = 20;

document.getElementById("Question11").innerText = "Q-11. Create a program to check whether a number is positive, negative, or zero.";
document.getElementById("Question11-value").innerText = "Value :" + Question11v1;

if (Question11v1 > 0) {
    document.getElementById("Question11-ans").innerText = "Answer : Positive Number";
} else if (Question11v1 < 0) {
    document.getElementById("Question11-ans").innerText = "Answer : Negative Number";
} else {
    document.getElementById("Question11-ans").innerText = "Answer : Zero";
}

// largest of two numbers

let Question12v1 = 20;
let Question12v2 = 10;

document.getElementById("Question12").innerText = "Q-12. Develop a program to find the largest of two numbers using if-else.";
document.getElementById("Question12-value").innerText = "Value :" + Question12v1 + " & " + Question12v2;

if (Question12v1 > Question12v2) {
    document.getElementById("Question12-ans").innerText = "Answer : " + Question12v1 + " is Largest";
} else if (Question12v2 > Question12v1) {
    document.getElementById("Question12-ans").innerText = "Answer : " + Question12v2 + " is Largest";
} else {
    document.getElementById("Question12-ans").innerText = "Answer : Both numbers are equal";
}

// largest of three numbers

let Question13v1 = 30;
let Question13v2 = 20;
let Question13v3 = 10;

document.getElementById("Question13").innerText = "Q-13. Create a program to find the largest of three numbers using conditional statements.";
document.getElementById("Question13-value").innerText = "Value :" + Question13v1 + " , " + Question13v2 + " , " + Question13v3;

if (Question13v1 >= Question13v2 && Question13v1 >= Question13v3) {
    document.getElementById("Question13-ans").innerText = "Answer : " + Question13v1 + " is Largest";
} else if (Question13v2 >= Question13v1 && Question13v2 >= Question13v3) {
    document.getElementById("Question13-ans").innerText = "Answer : " + Question13v2 + " is Largest";
} else {
    document.getElementById("Question13-ans").innerText = "Answer : " + Question13v3 + " is Largest";
}

// person is eligible for voting

let Question14v1 = 20; 

document.getElementById("Question14").innerText = "Q-14. Write a program to check whether a person is eligible for voting (age ≥ 18).";
document.getElementById("Question14-value").innerText = "Age :" + Question14v1;

if (Question14v1 >= 18) {
    document.getElementById("Question14-ans").innerText = "Answer : Eligible for Voting";
} else {
    document.getElementById("Question14-ans").innerText = "Answer : Not Eligible for Voting";
}

// calculate grade

let Question15v1 = 95; 

document.getElementById("Question15").innerText = "Q-15. Develop a program to calculate grade based on marks.";
document.getElementById("Question15-value").innerText = "Marks :" + Question15v1;

if (Question15v1 >= 90) {
    document.getElementById("Question15-ans").innerText = "Answer : Grade A";
} else if (Question15v1 >= 75) {
    document.getElementById("Question15-ans").innerText = "Answer : Grade B";
} else if (Question15v1 >= 50) {
    document.getElementById("Question15-ans").innerText = "Answer : Grade C";
} else {
    document.getElementById("Question15-ans").innerText = "Answer : Fail";
}

// given year is a leap year

let Question16v1 = 2024; 

document.getElementById("Question16").innerText = "Q-16. Write a program to check whether a given year is a leap year.";
document.getElementById("Question16-value").innerText = "Year :" + Question16v1;

if ((Question16v1 % 4 === 0 && Question16v1 % 100 !== 0) || (Question16v1 % 400 === 0)) {
    document.getElementById("Question16-ans").innerText = "Answer : Leap Year";
} else {
    document.getElementById("Question16-ans").innerText = "Answer : Not a Leap Year";
}

// number is divisible by both 5 and 11\

let Question17v1 = 55;

document.getElementById("Question17").innerText = "Q-17. Create a program to check whether a number is divisible by both 5 and 11.";
document.getElementById("Question17-value").innerText = "Value :" + Question17v1;

if (Question17v1 % 5 === 0 && Question17v1 % 11 === 0) {
    document.getElementById("Question17-ans").innerText = "Answer : Divisible by both 5 and 11";
} else {
    document.getElementById("Question17-ans").innerText = "Answer : Not divisible by both 5 and 11";
}

// addition, subtraction, multiplication, and division

let Question18v1 = 20;
let Question18v2 = 10;
let operator = "*";  

document.getElementById("Question18").innerText = "Q-18. Develop a simple calculator using switch statement to perform addition, subtraction, multiplication, and division.";
document.getElementById("Question18-value").innerText = "Value :" + Question18v1 + " " + operator + " " + Question18v2;

let result;

switch (operator) {
    case "+":
        result = Question18v1 + Question18v2;
        break;
    case "-":
        result = Question18v1 - Question18v2;
        break;
    case "*":
        result = Question18v1 * Question18v2;
        break;
    case "/":
        if (Question18v2 === 0) {
            result = "Cannot divide by zero";
        } else {
            result = Question18v1 / Question18v2;
        }
        break;
    default:
        result = "Invalid Operator";
}

document.getElementById("Question18-ans").innerText = "Answer :" + result;

// BMI and display the health category

let Question19v1 = 70;   
let Question19v2 = 1.7;  

document.getElementById("Question19").innerText = "Q-19. Write a program to calculate BMI and display the health category.";
document.getElementById("Question19-value").innerText = "Value : Weight=" + Question19v1 + "kg , Height=" + Question19v2 + "m";

let bmi = Question19v1 / (Question19v2 * Question19v2);
let category;

if (bmi < 18.5) {
    category = "Underweight";
} else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal";
} else if (bmi >= 25 && bmi < 30) {
    category = "Overweight";
} else {
    category = "Obese";
}

document.getElementById("Question19-ans").innerText = "Answer : BMI = " + bmi.toFixed(2) + " (" + category + ")";

// bill based on units consumed

let Question20v1 = 250;  // units consumed

document.getElementById("Question20").innerText = "Q-20. Create a program to calculate electricity bill based on units consumed.";
document.getElementById("Question20-value").innerText = "Units :" + Question20v1;

let bill;

if (Question20v1 <= 100) {
    bill = Question20v1 * 5;
} else if (Question20v1 <= 200) {
    bill = (100 * 5) + ((Question20v1 - 100) * 7);
} else {
    bill = (100 * 5) + (100 * 7) + ((Question20v1 - 200) * 10);
}

document.getElementById("Question20-ans").innerText = "Answer : ₹" + bill;