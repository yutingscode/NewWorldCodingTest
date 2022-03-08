/*
 * Author: Yuting Wang
 *
 * A function takes Roman numeral as its argument 
 * and returns its value as a numeric decimal integer.
 * 
 * Open terminal and type node test3.js to run
 */

const numbers = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}

function calculate(input) {
    return numbers[input[0]] >= numbers[input[1]] ? numbers[input[0]] : (- numbers[input[0]]);
}

function test3(input) {
    // validate input
    let regex = "^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$";

    if (input.length === 0 || !input.match(regex)) {
        return `Invalid input: ${input};`
    }

    if (input.length === 1) {
        return numbers[input];
    } 

    return calculate(input) + test3(input.substring(1));
    
}


// test cases
console.log("==============Tests: ")
console.log(test3("MMVIII"));
console.log(test3("MDCLXVI"));
console.log(test3("MCMXC"));
console.log(test3("III"));
console.log(test3("MMMDCCXXIV"));

// failed tests
console.log("==============Failed tests: ")
console.log(test3(""));
console.log(test3(" "));
console.log(test3("@"));
console.log(test3("43"));
console.log(test3("ASC"));
console.log(test3("c"));
