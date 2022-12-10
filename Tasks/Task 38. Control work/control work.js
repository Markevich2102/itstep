//1. Дано число N. Получить массив квадратов чисел от 1 до N.
console.log("1 задача");

let N = 5;
let a = new Array(N);
let value = 1;

array = a.fill(value, 0, N);
for (let i = 1; i < N; i++) {
    array[i] = 1 + array[i - 1];
}
array = array.map(function (item) {
    return item ** 2;
});

console.log(array);


//2. Дан числовой массив. Что больше сумма положительных чисел или модуль суммы отрицательных чисел. (Модуль числа - значение числа без знака).
console.log("2 задача");

a = [1, 5, 8, -9, 45, 22, -40];

let sumNumber = a.filter((item) => item > 0).reduce((sum, current) => sum + current, 0);
let sumModule = a.filter((item) => item < 0).map(function (item) {
    if (item < 0) {
        item *= (-1);
        return item;
    }
    return item;
}).reduce((sum, current) => sum + current, 0);
if (sumNumber > sumModule) {
    console.log(`Сумма положительных чисел больше модуля суммы отрицательных чисел`)
} else {
    console.log(`Сумма положительных чисел меньше модуля суммы отрицательных чисел`)
}
console.log(sumModule, sumNumber);//проверка 



//3. Дан числовой массив. Удалить все нулевые элементы из массива.
console.log("3 задача");

a = [1, 0, 9, 0, 22, 40];
newArray = a.filter((item) => item != 0);
console.log(newArray);


//4. Дан числовой массив. В массиве чисел найти два самых больших элемента, не используя функцию sort().
console.log("4 задача");


a = [1, 5, 9, 0, 22, , 41, 40];
let max = a[0];

let maxLastElement = a.reduce(function (max, item) {
    if (item > max) {
        return max = item;
    }
    return max;
});
let maxPenultimateElement = a.reduce(function (max, item) {
    if (item > max && item != maxLastElement) {
        return max = item;
    }
    return max;
});

console.log(maxLastElement, maxPenultimateElement);




//5. Дан числовой массив. Поменять максимальный и минимальный элемент местами. (максимальный и минимальный элементы не повторяются)
console.log("5 задача");


a = [1, 5, 49, 4, 22, 40];
max = a[0];
min = a[0];

let maxElement = a.reduce(function (max, item) {
    if (item > max) {
        return max = item;
    }
    return max;
});
let minElement = a.reduce(function (min, item) {
    if (item < min) {
        return min = item;
    }
    return min;
});
indexMax = a.indexOf(maxElement);
indexMin = a.indexOf(minElement);
newArray = a.map(function (item, index) {
    if (index == indexMax) {
        return item = minElement;
    }
    if (index == indexMin) {
        return item = maxElement;
    }
    return item;
})

console.log(newArray);


//6. Дан числовой массив. Вывести все элементы, которые больше предыдущего элемента.
console.log("6 задача");


a = [1, -5, 9, 0, 22, 4, 587, 42, 6, 89];
resultElement = a.filter(function (item, index, array) {
    return item > array[index - 1];
})
console.log(resultElement);



//7. Дан числовой массив и 2 числа N, M, причем N < M. Найти все элементы, которые лежат в интервале от N до M.
console.log("7 задача");


a = [1, 5, 9, 11, 15, 89, 22, 40];
N = 6;
let M = 25;

a = a.filter(function (item) {
    return item > N && item < M;
})
console.log(a);



//8. Дано число. Получить новое число, состоящее из цифр данного числа, расставленных в порядке убывания.
console.log("8 задача");

number = 4672;
newNumber = number.toString().split("").sort((a, b) => a - b).reverse().join("");
console.log(newNumber);



//9. Дано дата в формате "день.месяц.год". Найти порядковый номер дня относительно начала года.
console.log("9 задача");

let yers = "21.02.1993";
/*
let room = yers.split(".").lastIndexOf("21");
console.log(room);
*/





//10. Дан массив чисел. Найти число в массиве с наибольшим суммой цифр.
console.log("10 задача");


a = [1, 5, 9, 0, 22, 40];










//11. Дано предложение. Найти длину самого короткого слова.
console.log("11 задача");

let str = "Да-да, зима - самая уютная, и наиболее книжная пора"


let deletedLetters = ".,:;!?-";
let newStr = str.split(" ").filter(function (item) {
    return deletedLetters.indexOf(item) == -1; // остаются слова без символов с deletedLetters
}).reduce(function (word, item) {
    if (item.length < word.length) {
        return item;
    }
    return word;
}).length;

console.log(newStr);




//12. Даны 2 слова. Удалить из обоих слов буквы, которые встречаются в обоих словах.
console.log("12 задача");

let word1 = "русский";
let word2 = "английский";
let newWord1 = word1.split("").filter(function (item) {
    return word1.includes(item) != word2.includes(item);
}).join("");
let newWord2 = word2.split("").filter(function (item) {
    return word1.includes(item) != word2.includes(item);
}).join("");

console.log(`${newWord1}- буквы с первого слова,${newWord2}- буквы со второго слова`);


//13. Дано предложение. Вывести слова в предложение в порядке убывания.
console.log("13 задача");

str = "Да-да, зима - самая уютная, и наиболее книжная пора"
deletedLetters = ".,:;!?-";

newStr = str.split("").filter(function (item) {
    return deletedLetters.indexOf(item) == -1; // остаются слова без символов с deletedLetters
}).join("").split(" ").sort((a, b) => a.length - b.length).reverse().join(" ");

console.log(newStr);




//14. Дано предложение. Вывести частоту стречаемости каждого символа в строке.
console.log("14 задача");

str = "Да-да, зима — самая уютная, и наиболее книжная пора"
repeat = str.split("").filter(function (item) {
    return str.indexOf(item) != str.lastIndexOf(item);
});// находим повторяющиеся элементы

console.log(repeat);


//15. Дано слова. Получить 2 новые строки, где 1 строка состоит из гласных букв слова в верхнем регистре, а вторая строка - из согласных в нижним регистре.
console.log("15 задача");

word = "русский";
let vowels = "уеыаоэяиюё";

let str1 = word.split("").filter((item) => vowels.includes(item)).join("").toUpperCase();
let str2 = word.split("").filter((item) => !vowels.includes(item)).join("").toLowerCase();
console.log(`"${str1}"- где 1 строка состоит из гласных букв слова в верхнем регистре,"${str2}"- вторая строка - из согласных в нижним регистре`);




//16. Дана строка. Подсчитать количество цифр встречающихся в строке.
console.log("16 задача");

str = "Да-да, зима1 — самая уютная, и наиболее2 книжная пора0"
let digits = "1234567890";

let result = str.split("").filter(function (item) {
    return str.includes(item) == digits.includes(item);
}).length;

console.log(result);



//17. Дана строка. Вывести символы, которые в ней повторяются.
console.log("17 задача");

str = "Да-да, зима — самая уютная, и наиболее книжная пора"

repeat = str.split("").filter(function (item) {
    return str.indexOf(item) != str.lastIndexOf(item);
});// находим повторяющиеся элементы
let repeatSymbols = repeat.filter(function (item, index) {
    return repeat.indexOf(item) == index;
});// из повторяющихся элементов убираем дубликаты (пробел тоже учитываю)

console.log(repeat, repeatSymbols);



//18. Дан числовой массив. Заменить каждый элемент массива с нечетным индексом на ноль.
console.log("18 задача");


a = [1, 5, 9, 0, 22, 40];

a = a.map(function (item, index) {
    if (index % 2 !=0) {
        return 0;
    }
    return item;
})
console.log(a);

//19. Дан числовой массив. Преобразовать массив так, чтобы сначала шли нулевые элементы, а затем все остальные.
console.log("19 задача");


a = [1, 0, 9, 0, 22, 0, 40, 89, 0, 55];

c = a.filter(function (item) {
    return item == 0;
});
b = a.filter(function (item) {
    return item != 0;
});
console.log(c.concat(b));


//20. Дан числовой массив. Найдите наименьший четный элемент массива. Если такого нет, то выведите первый элемент.
console.log("20 задача");

a = [1, 5, 1, 1, 1, 5];

evenElement = a.filter((item) => item % 2 == 0).sort((a, b) => a - b);
result = evenElement.filter((item, i, a) => i == 0).join();
if (result == "") {
    console.log(a[0]);
} else {
    console.log(result);
}

console.log(evenElement);//проверка 





