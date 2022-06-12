// Ex1

const vegetables = ['Капуста', 'Репа', 'Редиска', 'Морковка'];
console.log(vegetables.join(' | '));

// Ex2

const names = 'Вася;Петя;Вова;Олег';
const newArr = names.split(';');
console.log(newArr);

//Ex3

function hello2(name = 'гость') {
    return 'Привет, ' + name;
}

//Ex4

const fruits = ['яблоко', 'ананас', 'груша'];
const fruitsInUpperCase = fruits.join('.').toUpperCase().split('.');
console.log(fruitsInUpperCase);

//Ex5

function addOneForAll(...args) {
    const newArr = [];
    for (let num of args) {
        newArr.push(num + 1);
    }
    return newArr;
}

console.log(addOneForAll(1, 2, 3, 4));

//Ex6

function getSum(...args) {
    let sum = 0;
    for (let num of args) {
        sum += num;
    }
    return sum;
}

console.log(getSum(2, 3, 4, 5));

//Ex7

const arr = [1, 'hello', 2, 3, 4, '5', '6', 7, null];

function filterNum(arr) {
    const numberArray = [];
    for (let elem of arr) {
        if (!isNaN(Number(elem)) && elem !== null) {
            numberArray.push(Number(elem));
        }
    }
    return numberArray;
}

console.log(filterNum(arr));

//Ex8

const haveTrueValue = [0, false, null, 1];
const dontHaveTrueValue = [0, false, null, 0];

function arrayTesting(arr) {
    for (let elem of arr) {
        if (Boolean(elem) === true) {
            return true;
            break;
        }
    }
    return false;
}

console.log(arrayTesting(haveTrueValue));
console.log(arrayTesting(dontHaveTrueValue));