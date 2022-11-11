let a = [];
let min = 50, max = 100, n = 10;

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(a);

//1. Дан массив из n элементов и число k < n.Вывести последние k элементов массива.
console.log("1 задача");

k = 3;
for (let i = 0; i < a.length; i++) {
    if (i >= a.length - k) {
        console.log(a[i]);
    }
}





//2. Дан массив из n элементов и число k.Вывести все элементы кратные числу k.
console.log("2 задача");


k = 3;

for (let i = 0; i < a.length; i++) {
    if (a[i] % k == 0) {
        console.log(a[i]);
    }
}




//3. Дан массив из n элементов.Вывести сумму максимального и минимального элемента.
console.log("3 задача");


let s;
max = a[0], min = a[9];

for (let i = 0; i < a.length; i++) {
    if (a[i] > max) {
        max = a[i];

    }
    if (a[i] < min) {
        min = a[i];

    }
}
console.log(`${max}-максимальный элемент`);
console.log(`${min}-минимальный элемент`);
s = min + max;
console.log(`${s}-сумма`);




//4. Дан массив из n элементов.Поменять максимальный и минимальный элементы местами.
console.log("4 задача");

max = a[0], min = a[9], s = 0;

for (let i = 0; i < a.length; i++) {
    if (a[i] > max) {
        max = a[i];

    }
    if (a[i] < min) {
        min = a[i];

    }
}
console.log(`${max}-максимальный элемент`);
console.log(`${min}-минимальный элемент`);
/*
if(a[i]>a[max]){
    s = max;
    max = min;
    min = s;

}

s = max;
max=min;
min=s;
console.log(a);
*/






//5. Дан массив из n элементов.Создать 2 новых массива.В 1 первый записать все элементы с четными индексами, во 2 - с нечетными.
console.log("5 задача");
let b = [];
let c = [];
for (let i = 0; i < a.length; i++) {
    if (i % 2 == 0) {
        b[i] = a[i];
    }
    else {
        c[i] = a[i];
    }
}
console.log(b, "массив с чётными индексами ");
console.log(c, "массив с не чётными индексами ");





//6. Дан массив из n элементов.Увелить все нечетные элементы на 1 и уменьшить все четные в 2 раза.
console.log("6 задача");
console.log(a);//посмотреть начальный массив 

for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 == 0) {
        a[i] = a[i] / 2;
    }
    else {
        a[i] = a[i] + 1;
    }
}
console.log(a);//массив после решения цикла 







//7. Дан массив из n элементов и некоторое число x.Проверить наличие числа x в массиве.
console.log("7 задача");
console.log(a);//посмотреть начальный массив 
let x = 56;

for (let i = 0; i < a.length; i++) {
    if (a[i] == x) {
        console.log(`число х(${x}) есть `);
    }
    else {
        console.log(`числа х(${x}) нет `);
    }
}






//8. Дан массив из n элементов и число k < n.Удалить элемент с номером k и сдвинуть на  одну позицию влево все элементы, следующие за ним.
console.log("8 задача");
console.log(a);//посмотреть начальный массив 
console.log(a.length);


for (let i = 0; i < a.length; i++) {
    if (i >= k) {
        a[i] = a[i + 1];
    }
}

a.length = a.length - 1;// удалили на 1 элемент длину массива 

console.log(a);  //посмотреть конечный массив 
console.log(a.length);  // какая стала длина массива после того как удалили одно число 





//9. Дан массив из n элементов.Проверить, упорядочен ли массив по возрастанию или убыванию.
console.log("9 задача");

console.log(a);//посмотреть начальный массив 


for (let i = 0; i < a.length; i++) {
    if (a[i] < a[i + 1]) {
        console.log(a, "массив упорядочен по возрастанию ");
    }
    else {
        console.log(a, "массив упорядочен по убыванию ");

    }
}




//10. Дан массив из n элементов.Удалить все повторяющие элементы(удалить и сдвинуть следующие за ним).
console.log("10 задача");
console.log(a);//посмотреть начальный массив 
console.log(a.length);

a = [21, 23, 25, 26, 28, 21, 25, 26,29];


for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
        if (a[i] == a[j]) {
            for (let f = j; f < a.length; f++) {
                a[f] = a[f + 1];
            }
            a.length = a.length - 1;// удалили на 1 элемент длину массива     
        }
    }
}




console.log(a);  //посмотреть конечный массив 
console.log(a.length);  // какая стала длина массива после того как удалили одно число 
