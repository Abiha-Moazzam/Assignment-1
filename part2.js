// 1 Display Numbers from 1 to 100 Using a Loop

for (let i = 1; i <= 100; i++) {
    console.log("i");
}

//  2 Multiplication Table of a Number (1 to 10)

let num = (parseInt(prompt("Enter a number")));

for (let a = 1; a <= 10; a++) {
    console.log(num + "x" + a + "=" + (num * a));
}

// 3 Sum of Natural Numbers from 1 to N

let n = (parseInt(prompt("Enter a Positive Integer")));

let sum = 0;

for (let b = 1; b <= n; b++){
    sum += b;
}
console.log("Sum =" + sum);

//  4 Calculate Factorial Using a Loop

let Num = (parseInt(prompt("Enter a Number")));

let factorial = 1;

for (let c = 1; c <= Num; c++){
    factorial *= c;

}
console.log("Factorial of" + Num + "=" + factorial);