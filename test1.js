/*
 * Author: Yuting Wang
 *
 * A function takes a random string 
 * and mask the last 4 numbers usingasterisk
 *
 * Open terminal and type node test1.js to run
 */

function test1(text) {

    let count = 0;
    var result = text;

    for (let i = text.length - 1; i >= 0; i--) {
        // check if it is number or not
        if (!isNaN(text.charAt(i))){
            result = result.substring(0, i) + "*" + result.substring(i + 1, text.length);
            count++;
            if (count === 4) {
                break;
            }
        }
    }
    return result;
}

//test cases
console.log("==============Tests: ")
console.log(test1("F3f213h82r3"));
console.log(test1("aaaaaa11d11d1"));
console.log(test1("aaaaaa1dfdf"));
console.log(test1("aaaaaa11dfdf"));
console.log(test1("3214141"));
console.log(test1("321d"));
console.log(test1("3214141"));
console.log(test1("F"));



