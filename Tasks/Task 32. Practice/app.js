//1. Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
console.log("1 задача");


function numberSquare(square) {
    square = number ** 2;
    return square;
}

let number = 4;
console.log(numberSquare(number));










//2. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
console.log("2 задача");

function resultNumber123(number1, number2, number3) {
    result = (number1 - number2) / number3;
    return result;
}

let number1 = 9;// первое число
let number2 = 1;// второе число
let number3 = 2;// третье число
console.log(resultNumber123(number1, number2, number3));









//3. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
console.log("3 задача");

function dayWeek(min, max) {
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    if (result == 1) {
        return `${result}-понедельник`;
    }
    if (result == 2) {
        return `${result}-вторник`;
    }
    if (result == 3) {
        return `${result}-среда`;
    }
    if (result == 4) {
        return `${result}-четверг`;
    }
    if (result == 5) {
        return `${result}-пятница`;
    }
    if (result == 6) {
        return `${result}-суббота`;
    }
    if (result == 7) {
        return `${result}-воскресенье`;
    }
}

let min = 1;//  минимальное число
let max = 7;//  максимальное число
console.log(dayWeek(min, max));








//4. Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
console.log("4 задача");

function resultТask4(number1, number2) {
    if (number1 == number2) {
        return true;
    }
    return false;
}
let number1Task4 = 9;// первое число
let number2Task4 = 8;// второе число
console.log(resultТask4(number1Task4, number2Task4));





//5. Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть функция вернет true, а если нет - false.
console.log("5 задача");

function sum(number1, number2) {
    sum = number1 + number2;
    if (sum > 10) {
        return true;
    }
    return false;
}
let number1Task5 = 9;// первое число
let number2Task5 = 1;// второе число

console.log(sum(number1Task5, number2Task5));





//6. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.
console.log("6 задача");

function checkForMinus(number) {
    if (number < 0) {
        return true;
    }
    return false;
}
let numberTask6 = -9;//  число

console.log(checkForMinus(numberTask6));








//7. Сделайте функцию, которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
console.log("7 задача");

function evenOrOdd(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
let numberTask7 = 8;//  число

console.log(evenOrOdd(numberTask7));









//8. Сделайте функцию, которая параметром принимает число и возвращает массив его делителей (правильно , сама делела, на занятии так же )
console.log("8 задача");


function massive(number) {
    let a = [];
    let j = 0;

    for (let i = 1; i < number; i++) {
        if (number % i == 0) {
            a[j] = i;
            j++;
        }
    }
    return a;
}

let numberTask8 = 8;//  число



console.log(massive(numberTask8));


/*function massive(number) {//не совсем правильно
    let a = [];
   

    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            a.push(number);
           
        }
    }
    return a;
}

let numberTask8 = 8;//  число
console.log(massive(numberTask8));
*/