// 1 Even or Odd 

let number = parseInt(prompt("Enter a Number"));

if (number % 2 === 0){
    alert(number + "is an Even Number.");
}else{
    alert(number + "is an Odd Number.");
}

// Students Grade
let marks = parseInt(prompt("Enter Students Marks"));

if (marks >=80){
    alert("Grade A");
}else if (marks >=70){
    alert("Grade B");
}else if (marks >=60){
    alert("Grade C");
}else if (marks >=50){
    alert("Grade D");
}else {
    alert("Grade F");
}

// Largest Number

let num1 = (parseInt(prompt("Enter First Number")));
let num2 = (parseInt(prompt("Enter Second Number")));
let num3 = (parseInt(prompt("Enter Third Number")));

if (num1 >= num2 && num1 >= num3){
    alert("Largest Number is "  + num1);
}else if (num2 >= num1 && num2 >= num3){
    alert("Largest Number is " + num2);
}else{
    alert("Largest Number is " + num3);
}

// Voting Eligibility

let age = (parseInt(prompt("Enter your Age")));

if (age >= 18){
    alert("You are eligible to vote.");
}else{
    alert("You are not eligible to vote.")
}