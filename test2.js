/*
 * Author: Yuting Wang
 *
 * A function takes a string which contains a list of positive integers separated by a space.
 * Take each value and calculate the sum of its digits. 
 * Then return the list in ascending order by sum, as a string joined by a space.
 * 
 * Open terminal and type node test2.js to run
 */

function test2(input) {

    let obj = {};
    const arr = input.split(" ");

    for (let i = 0; i < arr.length; i++) {

        // check input if is valid or not
        if (!arr[i].match(/^\+?(0|[1-9]\d*)$/)) {
            return `Invalid input: ${arr[i]};`
        }

        var weight = 0;

        for (let j = 0; j < arr[i].length; j++) {
            weight += parseInt(arr[i][j]);
        }
       
        if (!obj[weight]) {
            obj[weight]= [arr[i]];
        }
        else {
            obj[weight].push(arr[i]);
        }
    }      

    var result = Object.values(obj);
    return result.join(' ').replaceAll(',', ' ');
}

// test cases
console.log("==============Tests: ")
console.log(test2("56 65 74 100 99 68 86 180 90"));
console.log(test2("64 65 43 12 32 68 54 675 46"));
console.log(test2("0 5 443 10 3 67 343 2 65"));

// failed tests
console.log("==============Failed tests: ")
console.log(test2(""));
console.log(test2(" "));
console.log(test2("*"));
console.log(test2("3 *"));
console.log(test2("fsd fds d"));
console.log(test2("43 -1"));
console.log(test2("0 -5 443 10 3 67 343 2 65"));
