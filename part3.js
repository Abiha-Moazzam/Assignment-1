// 1. Functions for Addition, Subtraction, Multiplication, and Division
// for addition

function add(a, b) {
    return a + b;

}
// for substraction

function substraction(a, b) {
    return a - b;
}
// for multiplication

function multiplication(a, b) {
    return a * b;
}
// for division

function division(a, b) {
    if (b === 0) {
        return "Division by zero is not allowed.";
    }
    return a / b;
}
// user-provided values

let num1 = Number(parseInt(prompt("Enter first Number")));
let num2 = Number(parseInt(prompt("Enter second Number")));

alert("Addition  = " + add(num1, num2));

alert("Substraction = " + substraction(num1, num2));

alert("Multiplication  = " + multiplication(num1, num2));

alert("Division  = " + division(num1, num2));

// 2. Whether a Number is Prime

function isPrime(number) {
    if (number <= 1) {
        return number + " is not a Prime Number ";
    }

    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            return number + " is not a Prime Number "
        }
    }

    return number + " is a Prime Number ";

}
let num = Number(prompt("Enter a Number"));
alert(isPrime(num));

// 3. Area of Rectangle, Triangle, and Circle
// Rectangle

function rectangleArea(length, width) {
    return length * width;
}

// Triangle

function triangleArea(base, height) {
    return 0.5 * base * height;
}

// Circle

function circleArea(radius) {
    return Math.PI * radius * radius;
}
let choice = prompt(" Choose Shape:1. Rectangle 2. Triangle 3. Circle ");

if (choice == "1") {
    let length = Number(prompt("Enter a lenght"));
    let width = Number(prompt("Enter a width"));
    alert(" Area of Rectangle =" + rectangleArea(length, width));
}
else if (choice == "2") {
let base = Number(prompt("Enter a base"));
let height = Number(prompt("Enter a height"));
alert(" Area of Triangle =" + triangleArea(base, height));
}
else if (choice == "3") {
    let radius = Number(prompt("Enter a Radius"));
    alert(" Area of Circle =" + circleArea(radius).toFixed(2));
}
else{
    alert("Invalid Choice");
}

// 4. Reverse a String

function reverseString(text) {
    return text.split("").reverse().join("");
}
let str = prompt("Enter a String");
alert("Original String " + str);
alert("Reversed String " + reverseString(str));

// 5. Celsius Fahrenheit Conversion
// Celsius to Fahrenheit

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5 ) + 32;
}
// Fahrenheit to Celsius

function FahrenheitToCelsius (fahrenheit) {
    return (fahrenheit - 32 ) * 9 / 5;
}

let option = prompt( "Choose Conversion:\n1. Celsius to Fahrenheit\n2. Fahrenheit to Celsius");

if (option == "1") {
    let c = Number(prompt("Enter Temperature in Celsius"));
    alert(c + " °C = " + celsiusToFahrenheit(c).toFixed(2) + "°F" );

}
else if (option == "2") {
    let c = Number(prompt("Enter Temperature in Fahrenheit"));
    alert(f + " °F = " + FahrenheitToCelsius(F).toFixed(2) + "°C" );
}
else {
 alert(" Invalid Choice");
}