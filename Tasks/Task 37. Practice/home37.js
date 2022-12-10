//1. Дан пустой массив, его размер n и некоторое значение value. Заполнить массив этим значением. (используя fill)
console.log("1 задача");


//1 вариант .Сама делала , правильно

let n=5;
let a=new Array(n);
let value=4;
let p=a.fill(value,0,n);

console.log(p);

//2 вариант .Вариант с занятия 

x = (new Array(n)).fill(value);
console.log(x);




//2. Найти сумму только положительных элементов массива.Сама делала , правильно
console.log("2 задача");

a=[1,5,6,-8,10];
let sum=0;
let b=a.filter(function(item){
    return item>0;
})
b.forEach(function(item){
    return sum +=item; 
})

console.log(sum);




//3. Слить 3 массива и вывести на экран элементы полученного массива в порядке убывания значений. Сама делала , правильно
console.log("3 задача");


a=[1,5,6,-8,10];
b=[5,8,9,10,11];
let c=[5,8,9,4,1];


let s=a.concat(b,c);
console.log(s); //проверка 
s.sort((a,b) => a-b);
s.reverse();
console.log(s);// результат 




//4. Проверить 2 массива на полное совпадение.
console.log("4 задача");

a=[1,5,6,-8,10];
b=[5,8,9,10,11];
if(a.length == b.length){
    let isEqual = a.every(function(item, index){
        return a[index] == b[index]; // item == a[index]
    });
    if(isEqual){
        console.log("совпадают");
    } else {
        console.log("не совпадают");
    }
} else {
    console.log("не совпадают");
}



//5. Дан массив [1,3,6,4,3,3,5,6]. Исключить из него значения из массива [1,3]. Должно работать для любых 2 аналогичных массивов.Сама делала , правильно
console.log("5 задача");

a=[1,3,6,4,3,3,5,6];
b=[1,3];

let newStr = a.filter(function(item){
    return b.indexOf(item) == -1; // выбираем только те символы, которые не входят в b
});

console.log(newStr);




//6. Дан массив [1,3,6,4,3,3,5,6]. Найти все значения, которые больше среднего арифметического значения всех элементов массива.Сама делала , правильно
console.log("6 задача");


a=[1,3,10,4,3,11,5,6];
b=a.length;
console.log(b);//длина массива, кол-во чисел в массиве 

a.forEach(function(item){//сумма чисел из массива 
    sum += item;
})
console.log(sum);

let x=sum/b;//находим среднее знаячение 
console.log(x);//среднее арифметическое значение

let v=a.filter(function(item){//фильтруем начения, которые больше среднего арифметического значения всех элементов массива.
    return item>x;
})

console.log(v);







//7. Дано предложение на русском языке. Определить, является ли оно панграммой.
console.log("7 задача");

a="Осень ушла, зима пришла, прорвисщышяртазщфлфажлвидяогтрфвыгйфяцычувскамепинртгоьшлбхжюздб";
c=".,:;!?- ";
b = a.toLowerCase().split("").filter(function(item){
    return c.indexOf(item)==-1;
});// "a" - указанная подстрока
let d=b.filter(function(item,index){
    return b.indexOf(item)==index;
})
console.log(d);//проверка
s=d.length;
console.log(s);//проверка
if (s==33){
    console.log(`Предложение является панграммой`);
}else{
    console.log(`Предложение не является панграммой`);
}






//8. Дано натурально число. Получить число, которое образуется из записи цифр данного в обратном порядке.
console.log("8 задача");

a=43;
c=a.toString().split("").reverse().join("");
console.log(c);




//9. Дан массив и число A. Переставить элементы в массиве так, чтобы сначала стояли элементы меньшие числа A, а потом большие.
console.log("9 задача");

a=[1,5,7,-8,10];
n=6;

b=a.filter(function(item){
    return item>n;
})
c=a.filter(function(item){
    return item<n;
})
v=c.concat(b);
console.log(b,c);// проверка
console.log(v);//результат



//10. Дано 3 массива. Найти элементы, которые встречаются в каких-либо 2 массивах, но их нету в 3 массиве.
console.log("10 задача");

a=[1,2,4,6,8,9];
b=[2,3,4,5,7,8];
c=[1,3,5,6,8,9];

//если сравниваем а и b на схожесть , и на с не схожесть 
d=a.filter(function(item){
    return b.indexOf(item)!=-1;
})
console.log(d);//
v=d.filter(function(item){
    return c.indexOf(item)==-1;
})
console.log(`${v}-если сравниваем а и b на схожесть , и на c не схожесть`);


a=[1,2,4,6,8,9];
b=[2,3,4,5,7,8];
c=[1,3,5,6,8,9];

//если сравниваем а и с на схожесть , и на b не схожесть
d=a.filter(function(item){
    return c.indexOf(item)!=-1;
})
console.log(d);//
v=d.filter(function(item){
    return b.indexOf(item)==-1;
})
console.log(`${v}-если сравниваем а и с на схожесть , и на b не схожесть`);



a=[1,2,4,6,8,9];
b=[2,3,4,5,7,8];
c=[1,3,5,6,8,9];

//если сравниваем b и с на схожесть , и на a не схожесть
d=c.filter(function(item){
    return b.indexOf(item)!=-1;
})
console.log(d);//
v=d.filter(function(item){
    return a.indexOf(item)==-1;
})
console.log(`${v}-если сравниваем b и с на схожесть , и на b не схожесть`);




//11. Дана строка. Подсчитать количество слогов в слове.(С занятия )
console.log("11 задача");

let vowels = "уеыаоэяиюё";
let word = "электросоковыжималка";
let count = word.split("").filter((item) => vowels.includes(item)).length;

console.log(count);

//12. Дана слово. Получить строку из данного слова, где нечетные буквы будут заглавными, а четные - строчными.(С занятия )
console.log("12 задача");

word = "электросоковыжималка";

let str = word.split("").map((item, index) => (index % 2 == 0) ? item.toLowerCase() : item.toUpperCase()).join("");

console.log(str);

str = word.split("").map(function(item, index){
    if(index % 2 == 0){
        return item.toLowerCase();
    } else {
        return item.toUpperCase();
    }
}).join("");

console.log(str);




//13. Дано полный путь к файлу (например, "D:\ITStep\itstep2\Tasks\Task 37. Practice\task.txt"). Вывести все названия папок, которые входят в заданный путь.
console.log("13 задача");

a="D:\ITStep\itstep2\Tasks\Task 37. Practice\task.txt";
c=".,:;!\?- ";
/*b = a.split("\");
b = a.split("\").filter(function(item){
    return c.indexOf(item)==-1;
});// "a" - указанная подстрока
d=b.filter(function(item,index){
    return b.indexOf(item)==index;
})
console.log(b);//проверка*/





//14. Дана строка. Поделить строку на фрагменты по 3 символа в каждой.
console.log("14 задача");




//15. Дано слово. Проверить, является ли данное слово палиндромом.
console.log("15 задача");




//16. Дано предложение. Найти самое длинное слово в предложении.
console.log("16 задача");




//17. Дан массив из слов. Проверить условие, что первая буква каждого слова равна последней букве предыдущего слова.
console.log("17 задача");



//18. Дан массив чисел и число N. Вывести из данного массива N самых больших по значению чисел.
console.log("18 задача");



//19. Дано 2 предложения. Посчитать количество слов, которые есть в обоих предложениях.
console.log("19 задача");



//20. Дана строка, состоящее из слов между которыми может быть больше одного пробела. Удалить все лишние пробелы, т.е. оставить по 1 пробелу между словами.
console.log("20 задача");