class Engine {
    power;
    company;

    constructor(power, company) {
        this.power = power;
        this.company = company;
    }

    toString() {
        return `Двигатель:${this.power},Компания:${this.company}`;
    }
}

class Person {
    age;
    fullName;

    constructor(age, fullName) {
        this.age = age;
        this.fullName = fullName;
    }

    toString() {
        return `Личность:${this.fullName},возраст:${this.age}`;
    }
}

class Driver extends Person {
    experience;

    constructor(age, fullName, experience) {
        super(age, fullName);
        this.experience = experience;
    }

    toString() {
        return `Водитель пассажира ${this.fullName}, опыт вождения водителя ${this.experience}`;
    }
}

class Car {
    carClass;
    engine;
    driver;
    marka;

    constructor(carClass, engine, driver, marka) {
        this.carClass = carClass;
        this.engine = engine;
        this.driver = driver;
        this.marka = marka;
    }

    start() {
        console.log("Старт скорости - 0 км/ч");
    }

    stop() {
        console.log("Макисмальная скорость - 200 км/ч");
    }

    turnRight() {
        console.log("Поверните направо");
    }

    turnLeft() {
        console.log("Поверните налево");
    }

    toString() {
        return `Класс автомобиля:${this.carClass},двигатель: ${this.engine.toString()},водитель:${this.driver.age},${this.driver.experience}, марка:${this.marka}`;
    }
}

class Lorry extends Car {
    carrying;

    constructor(carClass, engine, driver, marka, carrying) {
        super(carClass, engine, driver, marka);
        this.carrying = carrying;
    }

    toString() {
        return `(Грузовик)Класс автомобиля:${this.carClass},двигатель: ${this.engine.toString()},водитель:${this.driver.age},${this.driver.experience},марка:${this.marka},везет:${this.carrying}`;
    }
}

class SportCar extends Car {
    speed;

    constructor(carClass, engine, driver, marka, speed) {
        super(carClass, engine, driver, marka);
        this.speed = speed;
    }

    toString() {
        return `(Спортивный)Класс автомобиля:${this.carClass},двигатель: ${this.engine.toString()},водитель:${this.driver.age},${this.driver.experience},марка:${this.marka},скорость :${this.speed}`;
    }
}


let engine = new Engine("Сильный", "BMW");
let driver = new Driver("6", "Solodkova", 31);
let car = new Car("бизнес", "бензиновый", "Иванова", "Lexus");
let lorry = new Lorry("грузовой", engine, driver, "Daf", "100т");
let sportcar = new SportCar("спортивный", engine, driver, "Lamborghini ", "350км/ч");

console.log(engine.toString());
console.log(driver.toString());
console.log(car.toString());
console.log(lorry.toString());
console.log(sportcar.toString());

car.start();
car.stop();
car.turnRight();
car.turnLeft();
console.log(car);



/*
1. Добавить класс Client, который наследуется от класса Person. Добавляются свойства adres, payment, переопределяется метод toString().
2. Добавить класс Taxi, который наследуется от класса Car. Добавляется свойство tariff, переопределяется метод toString().
3. Добавить класс Order. Свойства distance (длина пути), taxi (объект класса Taxi), client (объект класса Client). Метод getPrice(), который вовзвращает сумму заказа (расстояние умножить на тариф). Метод toString(), который выводит имя клиента, способ облаты, расстояние и цену заказа.  */

class Client extends Person {
    adres;
    payment;

    constructor(age, fullName, adres, payment) {
        super(age, fullName);
        this.adres = adres;
        this.payment = payment;

    }

    toString() {
        return `Возраст:${this.age}, Имя:${this.fullName}, Адрес:${this.adres}, Оплата:${this.payment}`;
    }
}

class Taxi extends Car {
    tariff;

    constructor(carClass, engine, driver, marka, tariff) {
        super(carClass, engine, driver, marka);
        this.tariff = tariff;
    }

    toString() {
        return `Класс автомобиля:${this.carClass}, Двигатель:${this.engine.toString()}, Водитель:${this.driver.age},${this.driver.experience}, Марка:${this.marka}, Тариф:${this.tariff}`;
    }
}

class Order {
    distance;
    taxi;
    client;

    constructor(distance, taxi, client) {
        this.distance = distance;
        this.taxi = taxi;
        this.client = client;
    }

    getPrice() {
        return ` ${this.taxi.tariff * this.distance}`;
    }
    
    toString() {
        return `Имя клиента:${this.client.fullName}, Способ облаты:${this.client.payment}, Цена заказа:${this.getPrice()}`;
    }
}

let client = new Client(21, "Екатерина", "Korotkevicha 18-78", "Наличные");
let taxi = new Taxi("такси", engine, driver, "Рено", 100);
let order = new Order(200, taxi, client);

console.log(client.toString());
console.log(taxi.toString());
console.log(order.toString());

order.getPrice();
order.toString();
console.log(order);