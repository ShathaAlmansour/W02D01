
const sum = function (a, b) {
    return a + b
};

const average = function (x, y) {
    return (x + y) / 2;
};

const findFactorial = (num) => {
    let factorial = 1;
    for (let s = 1; s <= num; s++) {
        factorial = factorial * s;
    }
    return factorial
};

const round = function (number) {
    return Math.round(number);
};

const toThePowerOf = function (base, exponent) {
    return Math.pow(base, exponent);
};

const randomNumber = function () {
    return Math.random();
};

const oneOrZero = function () {
    return Math.floor(Math.random() * 2);
};

const randomRange = function (number) {
    return Math.floor(Math.random() * number);
};

const includeOf = function (string, character) {
    return string.includes(character);
};








