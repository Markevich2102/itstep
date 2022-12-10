//1. Создайте пустой объект user.
console.log("1 задача");

let a = {};
console.log(a);




//2. Добавьте свойство name со значением John.
console.log("2 задача");

a = {
    name: "John",
}
console.log(a);


//3. Добавьте свойство surname со значением Smith.
console.log("3 задача");

a.surname = "Smith";
console.log(a);


//4. Измените значение свойства name на Pete.
console.log("4 задача");

a.name = "Pete";
console.log(a);

//5. Удалите свойство name из объекта.
console.log("5 задача");

delete a.name;
console.log(a);


/*6. Пусть дан объект с зарплатами сотрудников
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
Найти сумму зарплат с использованием for..in.*/
console.log("6 задача");

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for (let key in salaries) {
    sum += salaries[key]; // key = John, Ann, Pete ; salaries[key] = 100, 160, 130
}

console.log(sum);





/*7. Дан объект 
let user = {
  name: "Иван",
  age: 30
};
Написать код, который создает его точный клон (новый объект с такой же структурой).*/
console.log("7 задача");

let user = {
    name: "Иван",
    age: 30
};

cloneUser = Object.assign({}, user); // универсальный способ клонирования объекта в новую переменную

console.log(user, cloneUser);


/*8. Дан объект 
let user = {
  name: "Иван",
  sizes: {
    height: 182,
    width: 50
  }
};
Написать код, который создает его точный клон (новый объект с такой же структурой).*/
console.log("8 задача");

user = {
    name: "Иван",
    sizes: {
        height: 182,
        width: 50
    }
};

cloneUser = Object.assign({}, user); // универсальный способ клонирования объекта в новую переменную

console.log(user, cloneUser);