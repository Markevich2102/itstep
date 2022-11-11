let a = [0, 1, 2, 3, 4, 5, 8];//создание массива , задаем переменную 
console.log(a[4]);// выводим число из массива под номером 4 , где отсчёт идет с 0

let b = Array(0, 1, 2, 3, 4, 5); // b = [0,1,2,3,4,5]// создали массив , только другим способом
console.log(b[4]);// выводим число из массива под номером 4 , где отсчёт идет с 0

b[6] = 8; // b = [0,1,2,3,4,5,8]// в переменной под номером 6 , будет значение 8  

let c = [];// сощдаем массив , но он пока пуст 
c[78] = "abc";// под 78 номером буде значение строка "abc"
c[79] = 34;// под номером 79 , значение 34
c[80] = false;// под номером 80 , значение false
c[44] = [];// под номером 44 , пустой массив 
console.log(c);// вывести массив 
console.log(c[0], c[44]);// вывести значение под номером 0 , и 44

console.log(a.length, b.length, c.length, c[0]);// вывести значение длины для а, b,c и с под номером 0 
x = c[7] + a[0];// сумма чисел под номером 7 и 0

console.log(x);// NaN результат суммы , так как пустые 

const min = 50, max = 100, n = 5;// создаем константы чисел переменных 

for (let i = 0; i < n; i++) {
    a[i] = Math.floor(Math.random() * (max - min + 1)) + min;
}// создали цикл , где  i- счётчик , индекс в массиве , а а[i]-массив из рандомных чисел 
console.log(a);// массив получится из 7 чисел , так как 0, 1,2,3,4,5, из-за того что n=5

let str = "";//создаем массив строку 
for (let i = 0; i < a.length - 1; i++) {
    str = str + a[i] + ", ";
}//создаем цикл , где  i- счётчик , индекс в массиве , а str-массив из строк, где a.length - 1=6, но потом так как i++ то получается всего 7 цифр
str = str + a[a.length - 1];
console.log(str);//итоговый массив из строк

let d = [], count = 0, j;
for (j = 0; j < n; j++) {
    d[j] = Math.floor(Math.random() * (max - min + 1)) + min;
}//цикл где j-индекс массива 
console.log(d, j, d[j - 1]);//d=массив из 5 номеров и рандомными часлами , j -колличество индексов , у нас получилось 5, d[j - 1]= значение 95 , под номером j=5-1=4 , элемент под номером 4 равен 95

for (let i = 0; i < d.length; i++) {
    if (d[i] % 2 == 0) {
        count++;
    }
}//Количество четных элементов в массиве 
console.log("Количество четных элементов в массиве равно " + count);

let maxElement = d[0];
for (let i = 1; i < d.length; i++) {
    if (d[i] > maxElement) {
        maxElement = d[i];
    }
}//Максимальный элемент равен 
console.log("Максимальный элемент равен " + maxElement);

let minElement = d[0];
for (let i = 1; i < d.length; i++) {
    if (d[i] < minElement) {
        minElement = d[i];
    }
}//Минимальный элемент равен 
console.log("Минимальный элемент равен " + minElement);

let sum = 0;
for (let i = 0; i < d.length; i++) {
    sum += d[i]
}//Среднее арифмитическое элементов равно 
console.log("Среднее арифмитическое элементов равно " + (sum / (d.length)));

let reverse = [];
for (let k = 0, i = d.length - 1; k < d.length; k++, i--) {
    reverse[k] = d[i]; //reverse[k] = d[n-1-k];
}
console.log(d, reverse);


//1. Задача .1.Создайте массив с числами. Выведите его в консоль с помощью console.log и цикла for.
console.log("1 задача 1 часть ");

let m = [1, 2, 9, 3, 6, 10, 8];
console.log(m);

//1. Задача 1.Создайте массив с числами. Выведите его в консоль с помощью console.log и цикла for.
console.log("1 задача 2 часть ");

for (let i = 0; i < m.length - 1; i++) {
    m[i] = i + 2;

}
console.log(m);
//или если те числа , что в первой части задания 
for (let i = 0; i < m.length - 1; i++) {
    if (i == 0) {
        m[i] = 1;
    }
    if (i == 1) {
        m[i] = 2;
    }
    if (i == 2) {
        m[i] = 9;
    }
    if (i == 3) {
        m[i] = 3;
    }
    if (i == 4) {
        m[i] = 6;
    }
    if (i == 5) {
        m[i] = 10;
    }
    if (i == 6) {
        m[i] = 8;
    }

}
console.log(m);




//2. Задача .2.Создайте массив со строками. Выведите его в консоль с помощью console.log  и цикла while.
console.log("2 задача 1 часть ");
let p = [1, 2, "ff", 3, 6, "ghj", 8];
console.log(p);


//2. Задача .2.Создайте массив со строками. Выведите его в консоль с помощью console.log  и цикла while.
console.log("2 задача 2 часть ");

p = [1, 2, "ff", 3, 6, "ghj", 8];
i = 0;
while (i >= 0 && i < p.length) {
    if (i == 0) {
        p[i] = 1;
    }
    if (i == 1) {
        p[i] = 2;
    }
    if (i == 2) {
        p[i] = "ff";
    }
    if (i == 3) {
        p[i] = 3;
    }
    if (i == 4) {
        p[i] = 6;
    }
    if (i == 5) {
        p[i] = "ghj";
    }
    if (i == 6) {
        p[i] = 8;
    }
    i++

}
console.log(p);


//3. Задача . 3.Создайте массив с элементами 1, 2, 3.  Выведите на экран каждый из этих элементов не используя цикл.
console.log("3 задача");
k = [1, 2, 3];
console.log(k[0], k[1], k[2]);

//если другие значения 

k = [1, 2, "ff", 3, 6, "ghj", 8];

console.log(k[0], k[1], k[2], k[3], k[4], k[5], k[6]);


//4. Задача .4.Создайте массив с числами. Выведите на экран сумму элементов этого массива.
console.log("4 задача");

let e = [2, 9, 50];
var s = 0;
s = e[0] + e[1] + e[2];
console.log(`${s}`);




//5. Задача . 5.Дан следующий массив: ['a', 'b', 'c', 'd']. Выведите с помощью этого массива следующую строку: 'a+b+c+d' с использованием цикла и без.
console.log("5 задача");

e = ["a", "b", "c", "d"];
console.log(e[0], "+", e[1], "+", e[2], "+", e[3]);
//2 способ


/*for (let i = 0; i < e.length; i++) {
    if(i==0){
        e[i]=e[i]+"+";
    }
    if (i == 1) {
        e[i] = "b+";
    }
    if (i == 2) {
        e[i] = "c+";
    }
    if (i == 3) {
        e[i] = d;
    }
}
console.log(e);
*/

for (let i = 0; i < e.length; i++) {
    e = "";
        e[i]=e[i]+"+";
        e="";

    
}
console.log(e);



//6. Задача .6.Создайте массив с произвольными элементами. Выведите на экран последний и препоследний элемент этого массива.
console.log("6 задача");

k = [1, 2, "ff", 3, 6, 8];
for (let i = k.length; i <= k.length, i > 0; i--) {
    if (i == k.length - 1) {
        i = k.length - 1;
        console.log(k[i])
    }
    if (i == k.length - 2) {
        i = k.length - 2;
        console.log(k[i], "1")
    }
}



//7. Задача .7.Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента число 1, вместо второго - 2, вместо третьего - 3.
console.log("7 задача");

p = ["a", "b", "c"];
if (p[0] == "a") {
    p[0] = 1;
}
if (p[1] == "b") {
    p[1] = 2;
}
if (p[2] == "c") {
    p[2] = 3;
}
console.log(p);


//8. Задача .8.Создайте массив с числами. Прибавьте к каждому элементу массива число 3. Выведите на экран измененный массив. 
console.log("8 задача");

p = [2, 6, 9, 10, 25];
for (let i = 0; i < p.length; i++) {
    p[i] = p[i] + 3;
}
console.log(p);


//9. Задача . 9. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте каждый элемент массива на единицу. 
console.log("9 задача");

p = [1, 2, 3];
for (let i = 0; i < p.length; i++) {
    p[i] = p[i] + 1;
}
console.log(p);


//10. Задача .10. Пусть дан такой массив: [1, 2, 3]. Добавьте ему в конец элементы 4 и 5.
console.log("10 задача");

p = [1, 2, 3];
if (p.length == 3) {
    p.length = p.length + 2;
    p[3] = 4;
    p[4] = 5;

}
console.log(p)

