//1. Дана строка 'js'. Сделайте из нее строку 'JS'.
console.log("1 задача");

let a = "js";
let b = a.toUpperCase();

console.log(b);





//2. Дана строка 'JS'. Сделайте из нее строку 'js'.
console.log("2 задача");

a = "JS";
b = a.toLowerCase();

console.log(b);




//3. Дана строка 'я учу javascript!'. Найдите количество символов в этой строке.
console.log("3 задача");

a = "я учу javascript!";
b = a.length;

console.log(b);




//4. Дана строка 'я учу javascript!'. Вырежите из нее слово 'учу' и слово 'javascript' тремя разными способами (через substr, substring, slice).
console.log("4 задача");

a = "я учу javascript!";

//1 способ (с какого и сколько)
str = a.substr(0, 2); //где 0- начало отсчёта ,2 -коллическиов элементов 
let k = a.substr(16, 1); //где 0- начало отсчёта ,2 -коллическиов элементов 
console.log(str + k);

//2 способ(с какого и по какого)
str = a.substring(0, 2);//где 0- начало отсчёта ,2 -по какой элемент 
k = a.substring(16, 17); //где 16- начало отсчёта ,17 -по какой элемент 
console.log(str + k);

//3 способ (с какого и по какого)
str = a.slice(0, 2);//где 0- начало отсчёта ,2 -по какой элемент 
k = a.slice(16, 17); //где 16- начало отсчёта ,17 -по какой элемент 
console.log(str + k);





//5. Дана строка 'я учу javascript!'. Найдите позицию подстроки 'учу'.
console.log("5 задача");

a = "я учу javascript!";

console.log(a.indexOf("учу"));






//6. Дана переменная str, в которой хранится какой-либо текст. Реализуйте обрезание длинного текста по следующему принципу: если количество символов этого текста больше заданного в переменной n, то в переменную result запишем первые n символов строки str и добавим в конец троеточие '...'. В противном случае в переменную result запишем содержимое переменной str.
console.log("6 задача");

str = "Мы проходим курс по разработке";
let n = 10;
let result;

if (str.length > n) {
    result = str.substring(0, n + 1) + "...";
    console.log(result);
} else {
    result = str;
    console.log(result);
}









//7. Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!'.
console.log("7 задача");

str = "Я-учу-javascript!";

// 1 способ заменит только одно вхождении , не сильно нам подходит 
str = str.replace("-", "!");
console.log(str);

//2 способ 
while (str.indexOf("-") != -1) {
    str = str.replace("-", "!");
}
console.log(str);






//8. Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.
console.log("8 задача");

str = "Я-учу-javascript!";

b = str.split("-");// "a" - указанная подстрока
console.log(b);
-






//9. Дана строка 'я учу javascript!'. С помощью метода split запишите каждый символ этой строки в отдельный элемент массива.
console.log("9 задача");

str = "Я-учу-javascript!";

b = str.split("");// разделение строки на массив символов
console.log(b);





//10. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.
console.log("10 задача");
str = "2025-12-31";
str = str.split("-");
str = str.reverse();
str = str.join(".");
console.log(str);






//11. Дан массив ['я', 'учу', 'javascript', '!']. С помощью метода join преобразуйте массив в строку 'я+учу+javascript+!'.
console.log("11 задача");

a = ['я', 'учу', 'javascript', '!']
str = a.join("+");
console.log(str);





//12. Преобразуйте первую букву строки в верхний регистр.
console.log("12 задача");

a = "я учу javascript !";
let c = a[0].toUpperCase() + a.slice(1);

console.log(a, c);





//13. Преобразуйте первую букву каждого слова строки в верхний регистр.
console.log("13 задача");








//14. Преобразуйте строку 'var_test_text' в 'varTestText'. Скрипт, конечно же, должен работать с любыми аналогичными строками.
console.log("14 задача");




