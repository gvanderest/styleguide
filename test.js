//test.js

/**
 * Do some neat stuff.
 * @param {number} a which is a first number
 * @param {number} b which is a second number
 * @returns {number} the sum of those numbers and 123
 */
function hello(a, b) {
    return a + b + 123;
}

var result = hello(1, 2);

var cool;
switch (result) {
    case 126: {
        cool = true;
    }
    default: {
        cool = false;
    }
}

var something = "this is how strings look";
