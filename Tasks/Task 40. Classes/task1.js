/*Задание #1
а) Создайте класс Phone, который содержит поля number, model и weight.
б) Добавить конструктор в класс Phone, который принимает на вход три параметра для инициализации переменных класса - number, model и weight. 
в) Создайте три экземпляра этого класса. 
г) Выведите на консоль значения их переменных. 
д) Добавить в класс Phone методы: receiveCall, имеет один параметр – имя звонящего. Выводит на консоль сообщение “Звонит {name}”. getNumber – возвращает номер телефона. Вызвать эти методы для каждого из объектов.
*/
console.log("1 задача");

//Не совсем правидльно , смотреть лучше на занятии 
class Phone {
    number;
    model;
    weight;

    constructor(number, model, weight) {
        this.number = number;
        this.model = model;
        this.weight = weight;

    }
    receiveCall(name) {
        console.log(`Звонит ${name}`);
    }
    getNumber() {
        return this.number;
    }

}


let Sony = new Phone("+8193078", "Sony", 100);
let Iphone = new Phone("+8951718", "Apple", 200);
let Huawei = new Phone("+8179512", "Huawei", 300);

console.log(Sony, Iphone, Huawei);

Sony.receiveCall("Я");
let number = Sony.getNumber();
console.log(number);

Iphone.receiveCall("Оля");
number = Iphone.getNumber();
console.log(number);

Huawei.receiveCall("Вика");
number = Huawei.getNumber();
console.log(number);


/*
Задание #2
Создайте пример наследования, реализуйте класс Student и класс Aspirant, аспирант отличается от студента наличием некой научной работы.
а) Класс Student содержит переменные: String firstName, lastName, group. А также, averageMark, содержащую среднюю оценку.
б) Добавить конструктор в оба класса. 
в) Создать метод getScholarship() для класса Student, который возвращает сумму стипендии. Если средняя оценка студента равна 5, то сумма 100$, иначе 80$. Переопределить этот метод в классе Aspirant.  Если средняя оценка аспиранта равна 5, то сумма 200$, иначе 180$.
г) Создать массив типа Student, содержащий объекты класса Student и Aspirant. Вызвать метод getScholarship() для каждого элемента массива.
*/

console.log("2 задача");

class Student {
    name;
    age;
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


    constructor(name, age, firstName, lastName, group, averageMark) {
        this.name = name;
        this.age = age;
        this.firstName = firstName;
        this.lastName = lastName;
        this.group = group;
        this.averageMark = averageMark;

    }

}
class Aspirant extends Student {

    work;

    constructor(name, age, firstName, lastName, group, averageMark, work) {
        super(name, age, firstName, lastName, group, averageMark);
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
let student = new Student("Катя", 29, "Екатерина", "Маркевич", 15, 7.95);
Students.push(student);
let aspirant = new Aspirant("Ира", 28, "Ирина", "Цветкова", 11, 5, "по химии ");
Students.push(aspirant);


Students.forEach(function (item) {
    console.log(item.getScholarship())
});

console.log(Students);




/*
Задание #3
Рядом с мышью — и гусь велик, но вот рядом с драконом... В этой задаче у нас будут гуси (класс Goose) и драконы (класс Dragon). А также их предки, классы BigAnimal или SmallAnimal, кто чей предок — догадайтесь сами. Затем переопределите для Goose и Dragon метод getSize(), так, чтобы они выводили строки о размере животного.
*/

console.log("3 задача");


class BigAnimal{
    weightBigAnimal;
    growth;
    
    constructor( weight,growth){
        this.weightBigAnimal = weight;
        this.growth = growth;
        
    }
    
}


class SmallAnimal{
    weightSmallAnimal;
    growth;
    constructor( weight,growth){
        this.weightSmallAnimal = weight;
        this.growth = growth;
        
    }
}

class Goose extends SmallAnimal{
    weightGoose ;
    growth;
    constructor( weightGoose ,weightSmallAnimal,growth){
        this.weightGoose = weightGoose;
        super(weightSmallAnimal,growth);

    }
    getSize(){
        return this.weightGoose, this.growth;

    }
}

class Dragon extends BigAnimal{
    weightDragon ;
    growth;
    constructor( weightDragon ,weightBigAnimal,growth){
        this.weightDragon = weightDragon;
        super(weightBigAnimal,growth);

    }
    getSize(){
        return this.weightGoose, this.growth;

    }
}
let animal1 = new Goose(156,56,125);
let animal2 = new Dragon(186,588,156);
animal1.getSize(159,58);
animal2.getSize(1159,158);
console.log(animal1, animal2);















/*
Задание #4
а) Создать класс Товар, имеющий переменные имя, цена, рейтинг. 
б) Создать класс Категория, имеющий переменные имя и массив товаров. Создать несколько объектов класса Категория. 
в) Создать класс Basket, содержащий массив купленных товаров. 
г) Создать класс User, содержащий логин, пароль и объект класса Basket. Создать объект класса User.
*/
console.log("4 задача");