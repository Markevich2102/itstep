//Контрольная работа

//1. Дана площать квадрата.Найти его периметр.
console.log("задача 1");

var s = 4, p;
p = s ** 0.5 * 4;
console.log(`${p}`);



//2. Даны длины сторон треугольника - a, b, c.Определить, является ли он разностронним, ранобедренным или равносторонним
console.log("задача 2");

var a = 1, b = 2, c = 3;
if (a == b && b == c) {
    console.log(`треугольник равносторонний `);
} else if ((a == b && b != c && a != c) || (a == c && c != b && a != b) || (c == b && b != a && c != a)) {
    console.log(`треугольник равнобедренный `);
} else {
    console.log(`треугольник разносторонний `);
}



//3. Даны 3 числа a, b, c.Можно ли из них составить треугольник со сторонами равными a, b, c. 
console.log("задача 3");

var a = 1, b = 1, c = 3, y, x, z;
y = a + b;
x = b + c;
z = c + a;
if (y < c || x < a || z < b) {
    console.log(`треугольник не существует`);
} else {
    console.log(`треугольник существует`);
}




//4. Дано число k(от 1 до 300) и последовательность следующего вида: 100101102103104105..198199.Вывести k - цифру в этой последовательности.
console.log("задача 4");
/*var k = 37;
a=100;
i=1;
while(i<=300){
    a-a*100


    i++
}*/







//5. Дано 2 числа.Если сумма этих чисел четная, то вывести произведение, если нет - то частное.
console.log("задача 5");

var a = 2, b = 3, s, p, n;
s = a + b;
if (s % 2 == 0) {
    p = a * b;
    console.log(`${p}-произведение чисел`);
} else {
    n = a / b;
    console.log(`${n}-частное чисел`);
}




//6. Дан возраст человека.Вывести, что он молодой(до 17), взрослый(от 18 до 69) или пожилой(от 70).
console.log("задача 6");

var x = 70;//возраст человека
if (x <= 17) {
    console.log(`${x}, молодой(до 17)`);
} else if (x >= 18 && x <= 69) {
    console.log(`${x}, взрослый(от 18 до 69)`);
} else {
    console.log(`${x}, пожилой(от 70)`);
}




//7. Дан радиус круга и сторона квадрата.Опеределить, поместится ли круг в квадрат, либо квадрат в круг, либо ничего ни во что не поместится.
console.log("задача 7");

var r = 5;//радиус круга
var b = 3;//сторона квадрата
var d = 0.5 * b * 2 ** 0.5//0.5 диагонали квадрата
if (r <= (b / 2)) {
    console.log(`${b / 2}-половина стороны квадрата >= ${r}-радиус круга.Круг в квадрате`);
} else if (d <= r) {
    console.log(`${d}-диагональ квадрата <= ${r}-радиус круга.Квадрат в круге`);
} else {
    console.log(`${d}-диагональ квадрата,${r}-радиус круга. Ничего ни во что не помещается`);
}





//8. Дан день, месяц и год(3 числа).Определить, является ли дата корректной.
console.log("задача 8");






//9. Даны координаты точки(x, y).Определить в какой четверти(1, 2, 3 или 4) лежит точка либо она лежит на какой - то оси координат.
console.log("задача 9");

var x = 1;
var y = 1;
if (x > 0 && y > 0) {
    console.log(`точка лежит с 1 четверти`);
} else if (x < 0 && y > 0) {
    console.log(`точка лежит с 2 четверти`);
} else if (x < 0 && y < 0) {
    console.log(`точка лежит с 3 четверти`);
} else if (x > 0 && y < 0) {
    console.log(`точка лежит с 4 четверти`);
} else {
    console.log(`точка лежит на какой - то оси координат`);
}



//10. Даны 2 окружности(радиусы и центры).определить их взаимное расположение.
console.log("задача 10");

var x1 = 1, y1 = 10, r1 = 8;
var x2 = 5, y2 = 25, r2 = 4;
var d;
d = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** 0.5;
if (d > (r1 + r2)) {
    console.log(`окружность вне другой окружности`);
} else if (d == (r1 + r2)) {
    console.log(`окружности имеют одну общую точку`);
} else if ((d == (r2 - r1)) || (d == (r1 - r2))) {
    console.log(`внутрене касающиеся окружности`);
} else if ((d < (r2 - r1)) || (d < (r1 - r2))) {
    console.log(`окружности не пересекаются `);
} else {
    console.log(`окружности пересекаются в 2 точках `);
}





//11. Пользователь вводит 2 числа и опрерацию(+, -, *, /). Вывести результат или сообщение о ошибке.
console.log("задача 11");

var x = 2;
var y = 0;
var z = "/";
var a;


if (z == "+") {
    a = x + y;
    console.log(`${a}`);
} else if (z == "-") {
    a = x - y;
    console.log(`${a}`);
} else if (z == "*") {
    a = x * y;
    console.log(`${a}`);
} else if (z == "/" && z != 0) {
    a = x / y;
    console.log(`${a}`);
} else {
    console.log(`ошибка, на 0 делить нельзя`);
}




//12. Найти сумму первых 20 натуральных чисел кратных 5.
console.log("задача 12");

var s = 0; //сумма натуральных чисел
var i = 1;//счётчик
var k = 1;// числа

while (i >= 1 && i <= 20) {
    if (k % 5 == 0) {
        s = s + k;
        i++;
    }
    k++;
}
console.log(`${s}-первых 20 натуральных чисел кратных 5`);








//13. Составьте программу, выводящую в консоль квадраты чисел от 10 до 20.
console.log("задача 13");

var x, i = 10;
while (i >= 10 && i <= 20) {
    x = i ** 2;
    console.log(`${i}-число,${x}-квадрат числа`);
    i++;
}



//14. В бригаде, работающей на уборке сена, имеется N сенокосилок.Первая сенокосилка работала m часов, а каждая следующая на 10 минут больше, чем предыдущая.Сколько часов проработала вся бригада ?
console.log("задача 14");


var n = 5;//сколько всего косилок
var m = 1;//сколько работает 1 косилка 
var i = 1;//счётчик
var s = 0;// сумма 

while (i <= n) {
    m = m + m * 10 / 60;
    s = s + m;
    i++;

}
console.log(`${s}`)





//15. Найти произведение двуxзначных нечетных чисел кратных 13.
console.log("задача 15");

var i = 10, p = 1;
while (i < 100) {
    if (i % 2 != 0 && i % 13 == 0) {
        p = p * i;
    }
    i++;
}
console.log(`${p}-произведение двуxзначных нечетных чисел кратных 13`);




//16. Дан прямоугольник размерами NхM.Каждый раз от него отрезают квадрат со стороной равной меньшей стороне оставшегося прямоугольника.Например, прямоугольник 10х6, то сначала отрезаю 6х6, потом 4х4 и т.д.Сколько нужно сделать отрезаний до того, как получится квардрат.
console.log("задача 16");

var a = 10, b = 6, i = 0;
/*if (a==b){
    console.log(`квадрат, не нужно резать `);
}else{
    while (a!=b) {
        if (a<b) {
            a=b-a;
        } else{
            b = a - b;
        }
        i++;
    }
}
console.log(`${i}-сторона квадрата`);
*/
/*var a = 10, b = 6, i = 0;
if (a == b) {
    console.log(`квадрат, не нужно резать `);
} else {
    while (a != b) {
        if (a < b) {
            a = b - a;
            i++;

        }
        if (b < a) {
            b = a - b;
            i++;


        } else {
            console.log(`${a}-сторона квадрата`);
        }
    }
}
console.log(`${i}-сколько раз `);*/






//17. Пользователь задумал число от 1 до 100. Компьютер пытается его угадать(генерирует случайное число).После того, как компьютер называет число, пользователь говорит меьнше, больше или равно загадонному.Комьютер соотвественно генерирует заного число, но с учетом того, что сказал пользователь.Вывести все числа, которые сгенерировал компьютер перед тем как угадать число пользваотеля(Игра Угадай).
// Пример генерации случайного числа:
//     let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min; // случаное число от min до max
console.log("задача 17");
var max = 100;
var min = 1;
var x = Math.floor(Math.random() * (max - min + 1)) + min;


/*if (x <= 50 && x > 0) {
    if (x <= 25 && x > 0) {
        if (x <= 12 && x > 0) {
            if (x <= 6 && x > 0) {
                if (x <= 3 && x > 0) {
                    if (x < 2) {
                        console.log(`${x}`);
                    }
                    if (x == 2) {
                        console.log(`${x}`);
                    } else {
                        console.log(`${x}`);
                    }
                } else if (x <= 6 && x > 3){
                    if (x < 5) {
                        console.log(`${x}`);
                    }
                    if (x == 5) {
                        console.log(`${x}`);
                    } else {
                        console.log(`${x}`);
                    }
                }

            } else if (x > 6 && x <= 12){
                if (x <= 9 && x > 6) {
                    if (x < 8) {
                        console.log(`${x}`);
                    }
                    if (x == 8) {
                        console.log(`${x}`);
                    } else {
                        console.log(`${x}`);
                    }
                } else if (x <= 12 && x > 9) {
                    if (x < 11) {
                        console.log(`${x}`);
                    }
                    if (x == 11) {
                        console.log(`${x}`);
                    } else {
                        console.log(`${x}`);
                    }
                }

            }

        } else if (x > 13 && x <= 25) {
            if (x <= 25 && x > 13) {
                if (x <= 3 && x > 0) {
                    if (x < 2) {
                        console.log(`${x}`);
                    }
                    if (x == 2) {
                        console.log(`${x}`);
                    } else {
                        console.log(`${x}`);
                    }
                } else if (x <= 6 && x > 3) {
                    if (x < 5) {
                        console.log(`${x}`);
                    }
                    if (x == 5) {
                        console.log(`${x}`);
                    } else {
                        console.log(`${x}`);
                    }
                }

            } else if (x > 6 && x <= 12) {
                if (x <= 9 && x > 6) {
                    if (x < 8) {
                        console.log(`${x}`);
                    }
                    if (x == 8) {
                        console.log(`${x}`);
                    } else {
                        console.log(`${x}`);
                    }
                } else if (x <= 12 && x > 9) {
                    if (x < 11) {
                        console.log(`${x}`);
                    }
                    if (x == 11) {
                        console.log(`${x}`);
                    } else {
                        console.log(`${x}`);
                    }
                }

            }

        }

    } else if (x > 25 && x <= 50) {

    }

} else if (x > 50 && x <= 100) {

}*/
