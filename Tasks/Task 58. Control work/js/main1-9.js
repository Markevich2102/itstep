//1. Написать функцию, принимающую в аргументах две строки и возвращающую true, если эти строки состоят из идентичных букв и false в противном случае.
console.log("1 задача");

let str1 = "Сегодня прекрасная погода";
let str2 = "Сегодня прекрасная погода";

function resultStr(str1, str2) {
    let newStr1 = str1.toLowerCase().split("");
    let newStr2 = str2.toLowerCase().split("");
    if (newStr1.length == newStr2.length) {
        let isEqual = newStr1.every(function (item, index) {
            return newStr1[index] == newStr2[index];
        });
        if (isEqual) {
            return true;
        } else {
            return false;
        }
    }
    return false;
}

console.log(resultStr(str1, str2));





//2. Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.
console.log("2 задача");

let array = [1, 2, 5, 94, 654, 22, 65, 654, 54, 2, 5, 4, 6546, 87];

function resultArray(array) {
    array.forEach(function (item, index) {
        setTimeout(() => {
            console.log(index);
        }, 3000 * index);
    });
}

resultArray(array);





//3. Напишите функцию, которая на вход получает произвольное количество аргументов и возвращает массив, состоящих только из уникальных значений параметров функции.
console.log("3 задача");

function uniqueArray() {
    let newArray = [];
    for (let i = 0; i < arguments.length; i++) {
        for (let j = 0; j < arguments.length; j++) {
            if (!newArray.includes(arguments[i]) && !newArray.includes(arguments[j])) {
                newArray.push(arguments[i]);
            }
        }
    }
    return newArray;
}

console.log(uniqueArray(1, 89, 99, 5, 99, 1, 5, 87, 89));






//4. Написать функцию, принимающую в аргументах массив и возвращающую новый массив, в котором отсортированы все нечетные числа по возрастанию, четные числа по убыванию, но при этом сами чётные и нечетные числа остаются на своих местах. ([7, 3, 4, 9, 5, 2, 17] -> [3, 5, 2, 7, 9, 4, 17]).
console.log("4 задача");

function array4(array) {
    let oddElements = array.filter((item) => item % 2 != 0).sort((a, b) => a - b);//нечётные 
    console.log(oddElements);//проверка
    let evenElements = array.filter((item) => item % 2 == 0).sort((a, b) => a - b).reverse();//четные
    console.log(evenElements);//проверка

    let oddIndex = 0;
    let evenIndex = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            resultsOddandEven.push(evenElements[evenIndex]);
            evenIndex++;
        } else {
            resultsOddandEven.push(oddElements[oddIndex]);
            oddIndex++;
        }
    }
    return resultsOddandEven;
}

let arrayTask4 = [7, 3, 4, 9, 5, 2, 17];
let resultsOddandEven = [];
console.log(array4(arrayTask4));




//5. Написать функцию, принимающая на вход массив дат и сортирующая их в порядке возрастания.
console.log("5 задача");

function datesSort(array) {
    array.sort((a,b)=>(new Date(a)).getTime()-(new Date(b)).getTime());
     return array;
}
let date = ["1993-12-21", "2006-04-15", "2047-01-30", "2004-08-05", "2023-03-03"];
console.log(datesSort(date));



//6. Создать массив на 100 элементов и заполнить его случайными числами. Найти разницу между максимальным и мнимальными элементами.
console.log("6 задача");

let array100Elements = [];
let min = 1, max = 100, n = 100;

for (let i = 0; i < n; i++) {
    array100Elements[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(array100Elements);

let maxElement = array100Elements[0];
for (let i = 1; i < array100Elements.length; i++) {
    if (array100Elements[i] > maxElement) {
        maxElement = array100Elements[i];
    }
}//Максимальный элемент равен 
console.log("Максимальный элемент равен " + maxElement);

let minElement = array100Elements[0];
for (let i = 1; i < array100Elements.length; i++) {
    if (array100Elements[i] < minElement) {
        minElement = array100Elements[i];
    }
}//Минимальный элемент равен 
console.log("Минимальный элемент равен " + minElement);
console.log(`Разница между максимальным и минимальным элементами составляет: ${maxElement - minElement}`);




//7. Данно 2 массива с целыми числами. Написать функцию, которая возвращает массив элементов, которые входят в оба массива без повторений.
console.log("7 задача");

function result2Arrays(array1, array2) {
    array1.forEach(function (item, i) {
        if (array1.includes(array2[i]) && !result7.includes(array1[i])) {
            result7.push(item);
        }
    });
    return result7;
}

let array1 = [5, 9, 7, 5, 0, 2, 8, 7, 3];
let array2 = [5, 8, 9, 5, 4, 1, 7, 0];
let result7 = [];
console.log(result2Arrays(array1, array2));






/*8. Напишите функцию, которая выводит в консоль числа от 1 до n, где n — целое число, которое функция принимает в качестве параметра, при этом:
 - выводит fizz вместо чисел, кратных 3;
 - выводит buzz вместо чисел, кратных 5;
 - выводит fizzbuzz вместо чисел, кратных и 3, и 5.*/
console.log("8 задача");

function number(array, n) {
    for (let i = 1; i <= n; i++) {
        array[i - 1] = i;
        if (array[i - 1] % 3 == 0 && array[i - 1] % 5 == 0) {
            array[i - 1] = "fizzbuzz";
        }
        if (array[i - 1] % 3 == 0) {
            array[i - 1] = "fizz";
        }
        if (array[i - 1] % 5 == 0) {
            array[i - 1] = "buzz";
        }
    }
}

n = 55; let a = [];
number(a, n);
console.log(a);








//9. Напишите функцию, которая принимает строку на английском языке в качестве аргумента и возвращает количество гласных, содержащихся в этой строке.
console.log("9 задача");

str = "Nature is all around us. We see it every day.";
let vowels = "eyuioa";

function strEnglish(str) {
    let newStr = str.split("").filter((item) => vowels.includes(item));
    console.log(newStr);//проверка 
    return newStr.length;
}

console.log(strEnglish(str));

