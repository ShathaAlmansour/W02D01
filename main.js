
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




const addToArray = function (array, string) {
    array.push(string);
    return array;
};

const convertToString = function (array) {
    return array.join();
};

const updateValue = function (array, index, value) {
    if (array.length < index) {
        return "there is no element to updated in this index";
    } else {
        array[index] = value;
        return array;
    }
};

const onlyString = function (array) {
    let n = [];
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] == "string") {
            n.push(array[i]);
        }
    }
    return n
};

const users = [["Jane", "123456"], ["admin", "abc123"]];
const login = function (username, password) {
    for (let i = 0; i < users.length; i++) {
        if (users[i][0] === username && users[i][1] === password) {
            return "Login Successful";
        } else
            return "Login Failed";
    }
};

const maximumNumber = function (numbers) {
    let max = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
};

const reversString = function (string) {
    const string = string.split()
    console.log(string)
}

