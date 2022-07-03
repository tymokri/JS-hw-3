'use strict';

// Functions:

function addAndLogToConsole(a, b) {
    console.log(a + " + " + b + " = " + (a + b));
}

function subAndLogToConsole(a, b) {
    console.log(a + " - " + b + " = " + (a - b));
}

function multAndLogToConsole(a, b) {
    console.log(a + " * " + b + " = " + (a * b));
}

function divAndLogToConsole(a, b) {
    console.log(a + " / " + b + " = " + (a / b));
}

// Main program:

let x = parseInt(prompt("Enter the first number"));
let y = parseInt(prompt("Enter the second number"));

// To use functions please uncomment below 4 lines

// addAndLogToConsole(x, y);
// subAndLogToConsole(x, y);
// multAndLogToConsole(x, y);
// divAndLogToConsole(x, y);