console.log("задача 1");

var x = 1;
if (x % 2 == 0) {
    console.log("x - четное");
} else {
    console.log("x - нечетное");
}

//2 задача
console.log("задача 2");

var x = 1, y = 2;
if (x % 2 == 0) {
    console.log("x - четное");
} else {
    console.log("x - нечетное");
}
if (y % 2 == 0) {
    console.log("y - четное");
} else {
    console.log("y - нечетное");
}


//3 задача
console.log("задача 3");

var x = 1, y = 2;
if (x >= y) {
    console.log(x);
} else {
    console.log(y);
}



//4 задача
console.log("задача 4");

var x = 1, y = 2, c = 3;
if ((x >= y) && (x >= c)) {
    console.log(x);
} 
if ((y >= x) && (y >= c)) {
    console.log(y);
} 
if ((c >= y) && (c >= x)) {
    console.log(c);
}

 

//5 задача
console.log("задача 5");

var x = 1, y = 2, c = 3;
if ((y <= x) && (x <= c)) {
    console.log(x);
}
if ((x <= y) && (y <= c)) {
    console.log(y);
}
if ((y <= c) && (c <= x)) {
    console.log(c);
} 
if ((c <= x) && (x <= y)) {
    console.log(x);
}
if ((c <= y) && (y <= x)) {
    console.log(y);
}
if ((x <= c) && (c <= y)) {
    console.log(c);
} 


//6 задача
console.log("задача 6");

var x = 1, y = 2, c = 3;
if ((x < y + c) && (y < x + c) && (c < y + x)) {
    console.log("треугольник сущестует");
} else {
    console.log("треугольник не сущестует");
}

//7 задача
console.log("задача 7");

var x = 1, y = 2, r =x * 2 + y * 2 ;
if ((x ** 2 + y ** 2) < (r**2)) {
    console.log("точка в круге");
} else {
    console.log("точка не в круге");
}


//8 задача
console.log("задача 8");

var x = 2004, y = 100, c = 400, d = 4;
if (( x / d ) && ( x / y ) && ( x % c == 0 )) {
    console.log("год високосный");
} else {
    console.log("год не високосный");
}


//9 задача (1 вариант)
console.log("задача 9");

var x = 1, y = 16, d = 00;
if (((x >= 1) && (x <= 5) && (y >= 8) && (d >= 00) && (y <= 16)) || ((x >= 1) && (x <= 5) && (y = 17) && (d = 00)))  {
    console.log("рабочее время");
}
 else {
    console.log("не рабочее время");
}


//9 задача (2 вариант)
console.log("задача 9");
var x = 3, y = 16, d = 00;
if ((x >= 1) && (x <= 5) && (y >= 8) && (d >= 00) && (y <= 16)) {
    console.log("рабочее время");
}
if ((x >= 1) && (x <= 5) && (y = 17) && (d = 00)) {
    console.log("рабочее время");
} else {
    console.log("не рабочее время");
}






//10 задача
console.log("задача 10");
var x = 11, d = (x % 10);
if ((((x >= 10) && (x <= 20)) || ((x %10 ) >=5)||(x=11))) {
    console.log(x, "грибов");
}
if ((d=1) && (x!=11)) {
    console.log(x, "гриб");
}
else {
    console.log( x, "гриба");
}



//11 задача
console.log("задача 11");

var a = 1993, b = 100, c = 400, x, d;
d = b ** 2 - 4 * a * c; //находим диcкриминант
x=(-b +-((d)**0.5))/(2*a);

/*if (d > 0) {
    console.log("два корня");
} else {
    console.log("один корень");
} else {
    console.log("нет корней");
}*/  









