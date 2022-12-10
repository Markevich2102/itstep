
//1. Разрабоать функцию для генерации случаного целого числа от min до max. Сама делала , вроде правильно 
console.log("1 задача");

function creatElement(a) {
    let max = 1;
    let min = 10;
    let b = Math.floor(Math.random() * (max - min + 1)) + min;
    return b;
}
let y = creatElement(1);
console.log(y);








//2. Разработать функцию для заполнения массива случаныйми числами.Сама делала , вроде правильно 
console.log("2 задача");

let a = [], r = 10;

function fillRandomArray(a, n) { // a = b, n = 10
    // a - глобальной переменной
    // n - локальная внутри функции
    let min = 1, max = 50;
    for (let i = 0; i < n; i++) {
        a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
fillRandomArray(a, r);
console.log(a);





//3. Разработать функцию для нахождения максимального элемента в массиве.
console.log("3 задача");


function maxElement(max) {

    a = [2, 1555, 51, 524, 97, 65];
    max = a[0];

    for (let i = 1; i < a.length; i++) {

        if (a[i] > max) {
            max = a[i];
        }
    }
    return max;

}
let max = maxElement(3);
console.log(max);







//4. Разработать функцию для нахождения индекса максимального элемента в массиве.
console.log("4 задача");



function indexMaxElement(indexMaxElement) {

    a = [2, 155, 51, 524, 97, 65];
    max = a[0];

    for (let i = 1; i < a.length; i++) {

        if (a[i] > max) {
            max = a[i];
            let r = i;

        }

    }

    return r;
}
indexMaxElement = indexMaxElement(3);
console.log(indexMaxElement);




//5. Разработать функцию, которая выводит элемента массива через запятую ([1,2,3,4,5] -> 1, 2, 3, 4, 5)
console.log("5 задача");
/*function rowElement(a) {

    a = [2, 1555, 51, 524, 97, 65];
    let str = "";

    for (let i = 0; i < a.length; i++) {
        
        if (i == 0) {
           str +="";
        }else{
            str += "+"+a[i-1]  ;
        }
        
    }
    return str;*/



/* str = a[0];
     for(let i = 0; i < a.length; i++){
         str += "+ " + a[i];
     }

 str = "";
     for(let i = 0; i < a.length - 1; i++){
         str += a[i] + "+";
     }
 return str;  

}

let p = rowElement(a);
console.log(p);*/









//6. Разработать функцию, которая уменьшает четные элементы в 2 раза.
console.log("6 задача");


function Element12(a) {
    a = [2, 1555, 51, 524, 96, 65];

    for (let i = 0; i < a.length; i++) {

        if (a[i] % 2 == 0) {
            a[i] = a[i] / 2;
        }
    }
    return a;
}
let b = Element12(a);
console.log(b);




//7. Разработать функцию, которая проверят наличие некоторого элемента в массиве.
console.log("7 задача");

function Element22(a) {
    a = [2, 1555, 51, 524, 96, 65];

    for (let i = 0; i < a.length; i++) {

        if (a[i] == k) {
            return "элемент есть";
        }
    }
    return "элемента нет";
}
let k = 51;
b = Element22(a);
console.log(b);
//2 вариант (более правильный , с булевской переменной )
function Element22(a) {
    a = [2, 1555, 51, 524, 96, 65];

    for (let i = 0; i < a.length; i++) {

        if (a[i] == k) {
            return true;
        }
    }
    return false;
}
k = 51;
b = Element22(a);
console.log(b);




//8. Разработать функцию, которая ищет элемент в массиве и возвращает его индекс, если находит его, и -1 - в противном случае.
console.log("8 задача");


function Element8(a) {
    a = [2, 1555, 51, 524, 96, 65];

    for (let i = 0; i < a.length; i++) {

        if (a[i] == k) {
            return i;
        }
    }
    return "-1";
}
k = 6;
b = Element8(a);
console.log(b);

