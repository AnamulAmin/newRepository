"use strict";
const repeatString = (value1, value2) => {
    let emptyString = "";
    for (let i = 0; i < value2; i++) {
        emptyString += value1;
    }
    return emptyString;
};
// Sample Input:
console.log(repeatString("Hello!", 15));
