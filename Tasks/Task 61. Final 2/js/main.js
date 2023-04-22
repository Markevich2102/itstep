//1. Дано натурально число. Получить число, которое образуется из записи цифр данного в обратном порядке.
console.log("Task 1");

let naturalNumber = 89751;
let newNumber = naturalNumber.toString().split("").reverse().join("");
console.log(newNumber);






//2. Дан полный путь к файлу (например, "D:\ITStep\itstep2\Tasks\Task 61. Practice\task.txt"). Вывести количество папок, которые входят в заданный путь.
console.log("Task 2");

let link = `D:\\ITStep\\itstep2\\Tasks\\Task 61. Practice\\task.txt`;
let folders = link.split("\\").length - 2;
console.log(folders);










//3. Дан массив [1,3,6,4,3,3,5,6]. Найти все значения, которые меньше медианы среди  всех элементов массива.
console.log("Task 3");

let array = [1, 3, 6, 4, 3, 3, 5, 6];
let median;
let sortArray = array.sort((a, b) => a - b);
if (sortArray.length % 2 == 0) {
    median = sortArray.length / 2;
} else {
    median = sortArray.length / 2 + 0.5;
}
let results = array.filter(function (item) {
    return item < sortArray[median - 1];
})
console.log(sortArray);
console.log(results, median);




//4. Дано слово на русском языке. Посчитать количество слогов в слове.
console.log("Task 4");

let word = "Оториноларинголог";
let vowels = "уеыаоэяиюё";
let count = word.toLowerCase().split("").filter((item) => vowels.includes(item)).length;
console.log(count);





//5. Дана строка, состоящее из слов между которыми может быть больше одного пробела. Удалить все лишние пробелы, т.е. оставить по 1 пробелу между словами, в том числе в начале и в конце.
console.log("Task 5");

let str = "Дана  строка,     состоящее из слов  между которыми может быть больше одного пробела.     Удалить все лишние        пробелы, т.е.  оставить по  1 пробелу между словами, в том числе в начале и в конце";

str = str.split("").filter(function (item, i, array) {
    if (item == " " && array[i + 1] == " ")
        return false;
    return true;
}).join("");
console.log(str);





//6. Дано предложение. Найти самое короткое слово в предложении.
console.log("Task 6");

let strTask6 = "Дано предложение. Найти самое короткое слово в предложении.";
let deletedLetters = ".,:;!?-";
let resultTask6 = strTask6.split(" ").filter(function (item) {
    return deletedLetters.indexOf(item) == -1;// остаются слова без символов с deletedLetters
}).reduce(function (word, item) {
    if (item.length < word.length) {
        return item;
    }
    return word;
})
console.log(resultTask6);





//7. Дано 2 массива. Проверить, можно ли один массив путем перестановки элементов получить из второго массива.
console.log("Task 7");

a = [5, 1, 6, -8, 11];
b = [1, 5, -8, 6, 11];
if (a.length == b.length) {
    let sortA = a.sort((a, b) => a - b);
    let sortB = b.sort((a, b) => a - b);
    let isEqual = sortA.filter(function (item) {
        return sortB.includes(item);
    });
    if (isEqual.length == a.length) {
        console.log("совпадают");
    } else {
        console.log("не совпадают");
    }
} else {
    console.log("не совпадают");
}








//8. Дано предложение. Найти символ, который чаще всего в нем встречается.
console.log("Task 8");

let strTask8 = "Осень ушла, зима приииишла";

unique = strTask8.toLowerCase().split("").filter((item, index) => strTask8.toLowerCase().indexOf(item) == index);
let maxElement = 0, element = "";

unique.forEach(function (item, index, array) {
    let count = strTask8.toLowerCase().split("").filter((letter) => letter == item).length;//частота длина
    if (count > maxElement) {
        maxElement = count;//максимальная частота встречаемости 
        element = item;//значение частовстречаемого элемента
    }
});
console.log(`Буква "${element}" встечается чаще в предложении (${maxElement}раз)`);






//9. Дано дата в формате "день.месяц.год". Вывести дату, которая будет через 10 дней.
console.log("Task 9");
let date = "11.02.2020";

let dateArray = date.split(".");
let newDate = new Date(dateArray[2], dateArray[1] - 1, dateArray[0]);
newDate.setDate(newDate.getDate() + 10);
let year = newDate.getFullYear();
let month = newDate.getMonth() + 1;
let day = newDate.getDate();
if(day<10){
    day=`0${day}`;
}
if(month<10){
    month=`0${month}`;
}
let newDateStr = `${day}.${month}.${year}`;

console.log(newDateStr);








/*10. Создайте пример наследования, реализуйте класс Student и класс Aspirant, аспирант отличается от студента наличием некой научной работы.
а) Класс Student содержит переменные: firstName, lastName, group. А также, averageMark, содержащую среднюю оценку.
б) Добавить конструктор в оба класса. 
в) Создать метод getScholarship() для класса Student, который возвращает сумму стипендии. Если средняя оценка студента равна 5, то сумма 100$, иначе 80$. Переопределить этот метод в классе Aspirant.  Если средняя оценка аспиранта равна 5, то сумма 200$, иначе 180$.
г) Создать массив типа Student, содержащий объекты класса Student и Aspirant. Вызвать метод getScholarship() для каждого элемента массива.*/
console.log("Task 10");


class Student {
    firstName;
    lastName;
    group;
    averageMark;

    getScholarship() {
        if (this.averageMark == 5) {
            return "100$";
        }
        return "80$";
    }

    constructor(firstName, lastName, group, averageMark) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.group = group;
        this.averageMark = averageMark;
    }
}

class Aspirant extends Student {
    work;

    constructor(firstName, lastName, group, averageMark, work) {
        super(firstName, lastName, group, averageMark);
        this.work = work;
    }

    getScholarship() {
        if (this.averageMark == 5) {
            return "200$";
        }
        return "180$";
    }
}

let Students = [];
let student = new Student("Екатерина", "Маркевич", 16, 6.91);
Students.push(student);
let aspirant = new Aspirant("Марина", "Иванова", 13, 5, "по русскому языку");
Students.push(aspirant);


Students.forEach(function (item) {
    console.log(item.getScholarship())
});

console.log(Students);


