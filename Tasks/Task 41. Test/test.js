/*
console.log("1 задача");
var a = 5;
let a;
console.log(a);
console.log("Ответ 1 задачи: Код содержит ошибку");
*/



/*
console.log("2 задача");
function count() {
    for (var i = 0; i < 3; i++) {
      var j = i * 2;//с цикла будет выкидывать когда будет происходить последняя итерация, а именно i=2, тогда j = i * 2=2*2=4
    }
   return i+j;//i увеличится на 1 и будет 2+1=3 после цикла и выполнится  i+j , где 4+3=7
  }
console.log(count());
console.log("Ответ 2 задачи: 7");
*/


/*
console.log("3 задача");
console.log(+false, +null, +undefined);//+ тут унарный , преобразует в число(+false=0, +null=0, +undefined=NaN)
console.log("Ответ 3 задачи: 0 0 NaN");
*/




console.log("Есть вопросы к 4 задача");
/*
console.log("4 задача");
var obj = {
    "0": 1,
    0: 2
   };   
console.log( obj["0"] + obj[0] );
console.log("Ответ 4 задачи: 4");
*/


/*
console.log("5 задача");
a = 2, с = 0;
var b = a + a * a / с;//если делить на ноль , то будет стремится к  Infinity
console.log(b);
console.log("Ответ 5 задачи: Infinity");
*/




console.log("Есть вопросы к 6 задача");
/*
console.log("6 задача");
console.log(1);
//Что будет выведено при подключении следующей конструкции?
<script src="file.js">
console.log(2);
</script>
console.log("Ответ 6 задачи: ");
*/


console.log("Есть вопросы к 7 задача");
/*
console.log("7 задача");
function User() { }
var vasya = new User();
vasya.__proto__.name = "Vasya";
console.log("Ответ 7 задачи: ");
*/

/*
console.log("8 задача");
//Какое из следующих выражений вернет false?
console.log(undefined == 0);//false
console.log('' == false);//true
console.log(null >= 0);//true
console.log(null == undefined);//true
console.log('2' > 1);//true
console.log("Ответ 8 задачи: 1  выражение ");
*/

console.log("Есть вопросы к 9 задаче , почему не 3 раза тик ?");
/*
console.log("9 задача");
var timerId = setInterval(function() {
    console.log( "тик" );
  }, 2000);
  
  setTimeout(function() {
    clearInterval(timerId);
    console.log( 'стоп' );
  }, 6000);
console.log("Ответ 9 задачи: 2 раза тик и 1 раз стоп");
*/



/*
console.log("10 задача");
//Чему равно 0 || 1 && 2 || 3 ?
let a = 0 || 1 && 2 || 3;//т.к. у нас && выполняется первым действием , так как 1 это true и 2 true, то результатом будет последняя истина , в нашем случае 2
console.log(a);
console.log("Ответ 10 задачи: 2 ");
*/


/*
console.log("11 задача");
var x = "a"*2;//я думаю получается NaN
if(x === NaN){
    x = 1;
}else{
    x = x*x;// и выполняется это условие я так думаю , NaN*NaN=NaN
}
console.log(x);
console.log("Ответ 11 задачи:  NaN");
*/


/*
console.log("12 задача");
//Какой из следующих логических операторов при сравнении null c 0 возвращает true?
console.log(null >= 0);//true
console.log(null > 0);//false
console.log(null == 0);//false
console.log(null < 0);//false
console.log(null === 0);//false
console.log("Ответ 12 задачи: 1 ");
*/

/*
console.log("13 задача");
//Чему равно значение переменной a?
var a = null == undefined;//null == undefined равны только друг другу и ничему более 
console.log(a);
console.log("Ответ 13 задачи:  true");
*/




/*
console.log("14 задача");
let a = 5;
var a;
console.log(a);
console.log("Ответ 14 задачи: выдаст ошибку , а вообще это 1 задача  ");
*/


console.log("Есть вопросы к 15 задаче , немного не понятно ?");
/*
console.log("15 задача");
var x = "1";//возможно приводит к математическому и получается 1, а потом 1++=2 .Наверное так 
if ("0"){
    x++;
}else{
    x+=3;
}
console.log(x);
console.log("Ответ 15 задачи: 2 ");
*/


console.log("Есть вопросы к 16 задаче");
/*
console.log("16 задача");
function(){
    return typeof arguments;
}
console.log("Ответ 16 задачи:  ");
*/

console.log("Есть вопросы к 17 задаче(Задача посчиталась , но как её понять не знаю, но скорее всего будет так  я так думаю");
/*
console.log("17 задача");
a=typeof {} + " " + typeof function(){};
console.log(a);
console.log("Ответ 17 задачи: object function");
*/

/*
console.log("18 задача");
let b = 3
function F() {
    var a = 1;
    if (a == 1) {
        var b = 2;
    }
    return b;
}
console.log(F());
console.log("Ответ 18 задачи: 2 ");//я тоже решила и получилось 2
*/


/*
console.log("19 задача");
//Какая из следующих переменных названы неверно с точки зрения синтаксиса?
//var 1a;//нельзя так называть , цифры в начале нельзя
var _$;
var _a;
var $a;
var $_;
console.log("Ответ 19 задачи: 1 ");
*/


console.log("Как бы понятна 20 задача, но не против разобрать ее");
/*
console.log("20 задача");
var x = 1;
if(x){
   let y = 3;
}else{
   let y = 2;
}
let z = x+y;
console.log(z);
console.log("Ответ 20 задачи: Код содержит ошибку ");
*/


/*
console.log("21 задача");
var n = [4,6,19,34,32];
console.log(n.sort());
console.log("Ответ 21 задачи: [19,32,34,4,6] ");
*/

/*
console.log("22 задача");
function a(){
    console.log(this);
}
a.call(null);
console.log("Ответ 22 задачи:  object Window");//выводит Object [global], но я думаю что это и будет object Window
*/

console.log("Как бы понятна 23 задача, но не против разобрать ее");
/*
console.log("23 задача");
console.log(+function(val){ return val; })
console.log("Ответ 23 задачи: NaN ");
*/

/*
console.log("24 задача");
//Какое количество раз выполнится цикл?
for(var i=0; i<10; i++){
    ++i;
    console.log("итерация");
}
console.log("Ответ 24 задачи: 5 ");//будет выглядеть так , код ниже 
for(var i=0; i<10; i++){
    ++i;//1
    console.log("1 итерация");так как в условии i++, то i=1+1=2
}
for(var i=2; i<10; i++){
    ++i;//3
    console.log("2 итерация");так как в условии i++, то i=3+1=4
}
for(var i=4; i<10; i++){
    ++i;//5
    console.log("3 итерация");так как в условии i++, то i=5+1=6
}
for(var i=6; i<10; i++){
    ++i;//7
    console.log("4 итерация");так как в условии i++, то i=7+1=8
}
for(var i=8; i<10; i++){
    ++i;//9
    console.log("5 итерация");так как в условии i++, то i=9+1=10, на этом код прирывается так как условие цикла i<10
}*/


/*
console.log("25 задача");
const myObj = {
    name: "student"
}
console.log(myObj.hasOwnProperty('name'));//hasOwnProperty-возращает логическое значение , указывающее содержит ли объект указанное свойство , так как у нас содержит , значит true
console.log("Ответ 25 задачи: true ");
*/

/*
console.log("26 задача");
var a = Array();//создали пустой массив
a[a.length] = 0;//задали одно значение котрое равно 0, а раз у нас одно значение значит и длина равна 1
console.log(a.length);
console.log("Ответ 26 задачи: 1 ");
*/


/*
console.log("27 задача");
function sum(a, b = a) {// так как у нас задан один параметр , то а=10, b  у нас не задано , но оно равно а, а значи т тоже равно 10
    console.log(a + b);//реультат 10+10=20
}
sum(10);
console.log("Ответ 27 задачи: 20  ");//решила сама правильно 
*/


console.log("Как бы понятна 28 задача, но не против разобрать ее");
/*
console.log("28 задача");
//Что будет выведено на экран?
console.log('0xFF' - '1');
console.log("Ответ 28 задачи: 254 ");
*/


/*
console.log("29 задача");
console.log(true + "test");
console.log("Ответ 29 задачи:  truetest");
*/


/*
console.log("30 задача");
var a = 12;
function run(){
    console.log("a = ", a);//выводит а , и это функция для а работает 
    var b = 500;
}
console.log("a = ", a);
console.log("b = ", b);// функция для b не работает , так ка  b объявлена  в функции и она не видна из вне поэтому и оибка 
console.log("Ответ 30 задачи:  a = 12 ReferenceError");
*/


/*
console.log("31 задача");
//Чему будет равно значение x[0] и x===y после исполнения данного кода?
var x = [];
var y = x;
y[0] = 7;
console.log(x[0]);//так как масив это ссылка то x[0]==y[0] = 7
console.log(x===y);// так как y = x, x===yявляется true

console.log("Ответ 31 задачи:  7 true");
*/


console.log("Как бы понятна 32 задача, но не против разобрать ее");
/*
console.log("32 задача");
var a;
switch(a){
    case 0:
        console.log(0);break;
    case null:
        console.log(null);break;
    case undefined:
        console.log(undefined);break;
    default:
        console.log("something else");
}
console.log("Ответ 32 задачи:  undefined");
*/

console.log("Задача 33 не совмала с моим ответом , можно спросить , а можно не спращивать ");
/*
console.log("33 задача");
let s = "Hello";
s[4] = "";
console.log(s);
console.log("Ответ 33 задачи: Hello ");
*/


/*
console.log("34 задача");
//Какой код выведет список свойств объекта в консоль?
var student = {
    name: "Mark",
    age: 25
}
for(let i in student){//выведет name age
    console.log(i)
}
for(let i in student){
    console.log(student)//{ name: 'Mark', age: 25 }
}
for(let i in student){
    console.log(student.i)//undefined
}
for(let i in student){
    console.log(student[i])//Mark  25
}
console.log("Ответ 34 задачи:наверное 1 ");
*/

console.log("35 задача посмотреть как посчиталось , вообще не помню как считать, посмотрела лучше ещё раз вспомнить или у него спросить как считается ");
/*
console.log("35 задача");
var a = 3;
switch(a){
    default:
        a += 4;
    case 1:
        a += 2;
        break;
    case 2:
        a += 3;
        break;
}
console.log(a)
console.log("Ответ 35 задачи: 9 ");
*/

console.log("Как бы не понятна 36 задача, нужно разобрать ее");
/*
console.log("36 задача");
//Что выведет данный код в консоль?

console.log(checkValue(a));
var a = 1;
function checkValue(value){
    if(value){
        return +!!a;//я думаю сработает это условие(так как а=1, которая учитывается в console.log(checkValue(a)) после чего вызывается функция , где "+" унарный плюс преобразует в число , если не число , и ! не равно , отрицание , так как value ==а==1 , то я так думаю что.. !! строгое противоложность а, а значит false  )
    } else {
        return !!a;
    }
}
console.log("Ответ 36 задачи: false ");
*/


/*
console.log("37 задача");
const n = parseInt("7*6", 10)//Функция parseInt() принимает строку в качестве аргумента и возвращает целое число в соответствии с указанным основанием системы счисления.Функция parseInt преобразует первый переданный ей аргумент в строковый тип, интерпретирует его и возвращает целое число или значение NaN. Вообщем первое число 7 , будет и ответ 7
console.log(n);
console.log("Ответ 37 задачи: 7 ");
*/

/*
console.log("38 задача");
function Test(){}
var test1 = new Test()
Test.prototype.member = "World";
var test2 = new Test();
console.log(test1.member, test2.member)
console.log("Ответ 38 задачи: World World ");// так как Test объект ??я так думаю , поэтому это ссылка и раз созлаем там  то и тут она есть  
*/



/*
console.log("39 задача");
//Какого из побитовых операторов нет в JS?
console.log("Ответ 39 задачи:   #");
*/

/*
console.log("40 задача");
//Какого ключевого слово не хватает в функции, перед переменно privet, чтобы код выводил в консоль "Hello!"?

function say(){
    var privet = "Hello!";
    return privet;
}

console.log(say())
console.log(`Ответ 40 задачи: return`);
*/



/*
console.log("41 задача");
var obj = { a: 2 };
function f(obj){
    obj = { a: 3};
}
f(obj);//выведит obj = { a: 3};, но у нас другое условие 
console.log(obj.a)//так как у нас задача вывести в консоль , то тут фуннкция не учавствует и выведет значение  от var obj = { a: 2 };
console.log("Ответ 41 задачи:  2");
*/




/*
console.log("42 задача");
//Какая функция в JS округляет число к наибольшему целому?
console.log("Ответ 42 задачи:  Math.floor");
*/



/*
console.log("43 задача");
//Чему должен быть равен Х в строке 2, чтобы для переменной answer было присвоено значение true?
var a = [8, 16, 24, 32, 40, 58];
var answer = a[5] % 8 !== 0;
console.log(answer);

console.log("Ответ 43 задачи: 5 ");//потому что  отстаток деления 58 на 8 не равно 0
*/



/*
console.log("44 задача");
//Что будет выведено в консоль в обоих случаях?
var r = ['a','l','p','h'];
r.length = 10;
console.log(r.length);
delete r[0];
console.log(r.length);
console.log("Ответ 44 задачи:  10 10");//так как у нас одинаковые действия то и мы присвоили r.length = 10;то оно так и будет выводится 
*/



/*
console.log("45 задача");
//Каков результат выполнения следующего кода?
var nums = [1,2,3,4];
nums.pop()//извлекли 4
nums.push(5);// в конец добавили 5
console.log(nums)
console.log("Ответ 45 задачи: [1,2,3,5] ");
*/


/*
console.log("46 задача");
//Какой из вариантов будет выводить "Wake up" каждые 10 минут?
//setTimeout(console.log("Wake up!"), 600000)
//setTimeout(console.log("Wake up!"), 600)
//setTimeout(console.log("Wake up!"), 60000)
//setTimeout(console.log("Wake up!"), 36000)
//setTimeout(console.log("Wake up!"), 3600)
console.log(`Ответ 46 задачи: 1-вый вариант setTimeout(console.log("Wake up!"), 600000) `);// т.к. 1 секунда это 1000, а 10 минут ==600 сек==600000
*/


/*
console.log("47 задача");
//Что вернет функция после выполнения?
let Total = 3;
function whatIsReturned(){
    var total = 1;
    var TOTAL = 2;
    return total;
}
console.log("Ответ 47 задачи: код содержит ошибку ");//я так думаю потому что нет console.log (функция отработает но не выведет  результат )
*/



console.log("48 задача есть вопросы , но она лёгкая");
/*
console.log("48 задача");
//Что будет выведено в консоль?
result = 0;
function add(x){
    result += x;
    return result;
}
console.log(add(add(10)))//(add(10)= return 10???;
console.log("Ответ 48 задачи: 20 ");
*/

console.log("49 задача есть вопросики почему не object выводит ??");
/*
console.log("49 задача");
//Какой результат будет выведен в консоль?
class SomeThing {}
console.log(typeof SomeThing)
console.log("Ответ 49 задачи: function ");
*/

/*
console.log("50 задача");
//Что будет выведено на экран?
let i = 0;
while (++i < 5)//0+1=1 , после этого начинаем сравнивать 
    console.log(i);
console.log("Ответ 50 задачи: Числа от 1 до 4 ");//Значение i++- это значение iперед приращением. Значение ++i- это значение iпосле приращения.
*/


/*
console.log("51 задача");
//Какой из методов объекта Date вернет текущее время прошедшее с 1/1/1970 в миллисекундах?
//getTime()
//getDate()
//getMilliseconds()
//getMillisecondsDate()
//никакой из перечисленных вариантов
let today = new Date();
let milliseconds = today.getMilliseconds();
console.log(milliseconds); // 137
console.log("Ответ 51 задачи: getMilliseconds ");
*/

/*
console.log("52 задача");
//Что будет выведено на экран?
let i = 0;
while (i++ < 5)
console.log(i);
console.log("Ответ 52 задачи: Числа от 1 до 5 ");
*/



/*
console.log("53 задача");
//Что будет выведено в консоль?
function a(){
    return ("works")
}
var b = a("not");
console.log(b)
console.log("Ответ 53 задачи: works ");
*/

console.log("54 задача вообще не понятна");
/*
console.log("54 задача");
//Каким будет результат выполнения следующего кода?
console.log(parseInt(1/0, 19))
console.log("Ответ 54 задачи: 18 ");
*/

/*
console.log("55 задача");
//Каким будет результат выполнения следующего кода?
console.log(null+true+0)
console.log("Ответ 55 задачи: 1 ");//все перевелось в числа ,  где null==0, true==1, 0+1+0=1
*/

/*
console.log("56 задача");
//Что будет выведено на экран?
const arr = [3,4,5]
for(let item in arr){// по сути вывод индекса числа в массиве 
    console.log(item)
}
for(let item of arr){//Цикл for..of не предоставляет доступа к номеру текущего элемента, только к его значению, но в большинстве случаев этого достаточно. А также это короче.(По сути вывод чисел в массиве )
    console.log(item)
}
console.log("Ответ 56 задачи: 1 вариант: 0 1 2 3 4 5");
*/

/*
console.log("57 задача");
//Что будет выведено в консоль?
function f(x,y,z){
    x = 5;
    arguments[2] = 10;// где я так думаю 0=х, 1=у, 2=z
    console.log(x+y+z)//5+0+10
}
f(-1,0,2)//отсюда только 0 учавствует , остальное переназначены
console.log("Ответ 57 задачи: 15 ");
*/

console.log("58 задача не понятно почему так ");
/*
console.log("58 задача");
//Что будет выведено в консоль?
const set = new Set([1,1,2,3,4]);
console.log(set)
console.log("Ответ 58 задачи: Set(4) { 1, 2, 3, 4 } ");
*/

/*
console.log("59 задача");
//Чему будет равно значение следующего выражения в JS?
console.log([]+{})
console.log("Ответ 59 задачи: [object Object] ");
*/


console.log("60 задача не понятно ");
/*
console.log("60 задача");
//Чему будет равно значение выражения?
console.log([]+[]);//скорее всего пустая строка
console.log("Ответ 60 задачи: пустая строка  ");
*/

console.log("61 задача не понятна");
/*
console.log("61 задача");
//Что будет выведено в консоль?
(function(foo){
    arguments[0] = 42;
    console.log(foo);
})(5)
console.log("Ответ 61 задачи: 42 ");
*/

console.log("62 задача не понятна");
/*
console.log("62 задача");
//Что выведен данный код?
var a = 2;
console.log(~a)//	~-Заменяет биты операнда на противоположные.
console.log("Ответ 62 задачи: -3 ");
*/


/*
console.log("63 задача");
//Что будет выведено в консоль?
console.log(false == undefined, false == null, null == undefined);
console.log("Ответ 63 задачи: false false true ");//решила сама, правильно
*/


/*
console.log("64 задача");
//Каков будет результат выполнения кода?
function f(a,b,c){}
var a = [,,,]//если a = [,,,1], то a.length==4
console.log(a.length,f.length)
console.log("Ответ 64 задачи:  3 3");
*/


console.log("65 задача стоит обяснить , не понима что значит !!");
/*
console.log("65 задача");
//Какая опция позволяет установить hasName равным true, если вы не можете передать true в качестве аргумента?
function getName(name){
    const hasName =!!name;
    console.log( hasName);
}
let a=getName("ghj");
console.log("Ответ 65 задачи:  !!name");
*/

/*
console.log("66 задача");
//Что будет выведено в консоль?
var a = 44;
(function(){
    var b = 44;
    a = '55';
    (function(){
        var c = 11;
        console.log((a+b)/c);//так как а у нас строка , то '55'+44 ==5544, потом 5544/11=504
    })();
})();
console.log("Ответ 66 задачи:504  ");//решила правильно
*/


/*
console.log("67 задача");
//Что будет выведено в консоль?
function sum(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
let a = sum(5, -5, false, '-5', 5);//arguments.length у нас получается 5, я так думаю
console.log(a);
// решение : 
//при 1 итерации , i = 0, sum=0+5=5
//при 2 итерации , i = 1, sum=5+(-5)=0
//при 3 итерации , i = 2, sum=0+0=0
//при 4 итерации , i = 3, sum=0+"-5"="0-5"
//при 5 итерации , i = 4, sum="0-5"+5="0-55"
console.log("Ответ 67 задачи: 0-55 ");//решила правильно
*/


console.log("68 задача нужно пояснение ");
/*
console.log("68 задача");
//Что будет выведено в консоль?
var a = new Array(5).join('5');// new Array(5), где 5 это длина массива ??
console.log(a);
console.log("Ответ 68 задачи: 5555 ");
*/


/*
console.log("69 задача");
//Что будет выведено в консоль?
let str = "I love JavaScript";
console.log(str.substring(3,3));
console.log("Ответ 69 задачи: пустая строка ");//Если аргумент indexA равен аргументу indexB, метод substring() вернёт пустую строку.
*/

console.log("70 задача не понятна вообще");
/*
console.log("70 задача");
//Чему будет равен результат выполнения кода?
let a = -1;
let b = 0.25;//равно -1
console.log( a == ~b^0)
console.log(`Ответ 70 задачи: 1 `);
*/

/*
console.log("71 задача");
//Какие из вызов parseFloat() не возвратят число?
let a=parseFloat("56,");
//parseFloat() будет NaN
//parseFloat("27.2 m") будет 27.2
//parseFloat("27,2") будет 27
//parseFloat(".2") будет 0.2
//parseFloat("56,") будет 56
console.log(a);
console.log(`Ответ 71 задачи:  1)parseFloat()`);
*/



console.log("72 задача лучше пояснить , хоть и не сложная задача ");
/*
console.log("72 задача");
//Что будет выведено на экран?
var x;
x = 'x0ff' - 1;
if(x != x)
    console.log(true);//выполнится это условие 
else
    console.log(x);

console.log(`Ответ 72 задачи: true `);
*/

console.log("73 задача ,не очень тема поэтому есть вопросы");
/*
console.log("73 задача");
//Что будет выведено в консоль?
let a = null;
let b = undefined;
console.log(a ?? b)//если a определено, то a,если a не определено, то b. Для краткости будем говорить, что значение «определено», если оно не равняется ни null, ни undefined.Иначе говоря, оператор ?? возвращает первый аргумент, если он не null/undefined, иначе второй.
console.log(`Ответ 73 задачи:  undefined`);
*/

console.log("74 задача, легкая , но есть сомнения");
/*
console.log("74 задача");
//Что будет выведено в консоль?
console.log([..."JS"])
console.log(`Ответ 74 задачи: [ 'J', 'S' ] `);
*/

/*
console.log("75 задача");
//Что будет выведено в консоль?
let a = NaN;
let b = 1;
console.log(a ?? b)////если a определено, то a,если a не определено, то b. Для краткости будем говорить, что значение «определено», если оно не равняется ни null, ни undefined.Иначе говоря, оператор ?? возвращает первый аргумент, если он не null/undefined, иначе второй.Поэтому NaN
console.log(`Ответ 75 задачи: NaN `);
*/


/*
console.log("76 задача");
//Какой результаты будет выведен в консоль?

function a(param){
    let m = param;//равно 10
    m = m + 10;//равно m=10+10=20
    return m + param;// равно 20+10
}

function b(param){
    let n = param;// просто путает нас , потому что ниже перезаписана 
    n = 20;
    return param + n;//10+20, где 20  взято со строчи выше 
}
console.log(a(10), b(10));//решила правильно 
console.log(`Ответ 76 задачи: 30 30 `);
*/


/*
console.log("77 задача");
//Что будет выведено в консоль?

console.log(
    (function(){
        var a = true+false;
        a;
    })()
)
console.log(`Ответ 77 задачи: undefined `);//return нет. НЕт вывода результата
*/


/*
console.log("78 задача");
//Чему будет равно значение выражения?
console.log(null || "0" || undefined || false || NaN);
//|| возвращает первое истинное значение.Т.К.null ==0, false  у нас только 0, "",null,undefined,NaN
console.log(`Ответ 78 задачи: "0" `);//решила правильно 
*/

console.log("79 задача есть вопросы по решению данной задачи ");
/*
console.log("79 задача");
//Что будет выведено в консоль?
for(var i = 0; i < 9; i +=2){
    if(++i == 5)
        break;
    else
        continue
}
console.log(i++)
console.log(`Ответ 79 задачи: 9 `);
*/




console.log("80 задача");
/*
//Что будет записано в поле name после выполнения кода?
const user = {
  name: "Вася"
};
user.name = "Петя";
let a=user.name;
console.log(a);
console.log(`Ответ 80 задачи: "Петя" `);//потому что объект хранит ссылку и поэтому если где-то меняем то и меняем в обекте на который ссылается , тоесть базовый 
*/


console.log("81 задача нужно разобрать задачи ");
/*
console.log("81 задача");
//Чему равно значение переменной x?
let x = ~-1;
console.log(x);
console.log(`Ответ 81 задачи: 0 `);//угадала , но мне не понятно что откуда берется 
*/

/*
console.log("82 задача");
//Что будет выведено на экран?
"use strict"; 
 a = null + undefined;
alert(a);
console.log(`Ответ 82 задачи:  Код содержит ошибку`);//я так думаю , потому что для "use strict" не назначено переменной
*/


/*
console.log("83 задача");
//Что выведет код?
console.log( +"Infinity" )
console.log(`Ответ 83 задачи:  Infinity`);//может просто запомнить , угадала 
*/



console.log("84 задача не понятно что к чему ");
/*
console.log("84 задача");
//Что будет выведено на экран?
"use strict";
console.log(typeof null)
console.log(`Ответ 84 задачи: object `);
*/


/*
console.log("85 задача");
//Чему будет равно значение переменной x?
for(let i=0; i<10; i++) {
      console.log(i);
}
let x=i;
console.log(`Ответ 85 задачи: Код содержит ошибку `);//вывело так , и я так думаю, потому что i не объявлена
*/

/*
console.log("86 задача");
//Чему будет рано значение выражения?
console.log(true+false);
console.log(`Ответ 86 задачи: 1 `);// решила правильно 1+0=1
*/

console.log("87 задача нужно разобрать ");
/*
console.log("87 задача");
//Чему выведет на экран данный код?
for(var i=0; i<10; i++) {
      setTimeout(function() {
        console.log(i);
       }, 100);
}
console.log(`Ответ 87 задачи: 10 раз число 10 `);
*/


console.log("88 задача без понятия почему такое ответ ");
/*
console.log("88 задача");
//Что выведет данный код?
if (function f(){}) {
    console.log(typeof f); 
}
console.log(`Ответ 88 задачи: undefined `);
*/


/*
console.log("89 задача");
//Чему равно значение выражения?
console.log([].push(1,2).unshift(3).join());
console.log(`Ответ 89 задачи: Код содержит ошибку `);//Код содержит ошибку я так думаю , потому что не создан массив 
*/




/*
console.log("90 задача");
//Какой из этих вариантов задает массив из элементов "a" и "b"?
let a = [ "a", "b" ];
console.log(a);
console.log(`Ответ 90 задачи: 1) let a = [ "a", "b" ] `);
*/

console.log("91 задача, понимаю что будет ошибка , но лучше уточнить от чего именно");
/*
console.log("91 задача");
//Что выведет код?
let a = [1,2]
(function() {
    console.log(a)
})()
console.log(`Ответ 91 задачи: [1,2] is not a function `);//Т.к. функции не переданы параметры и прочее 
*/


console.log("92 задача есть вопросы к этой задаче ");
/*
console.log("92 задача");
//Что выведет код?
const f = (a,b) => a+b;
console.log(f)
console.log(`Ответ 92 задачи: [Function: f], по другому Код функции f `);
*/


console.log("93 задача не понятно почему так");
/*
console.log("93 задача");
//то выведет на экран следующий код?
console.log(Math.ceil(Math.random()));
console.log(`Ответ 93 задачи: 1 `);
*/

console.log("94 задача не понятно почему так");
/*
console.log("94 задача");
//Какой результат будет выведен в консоль?
console.log(0/0);
console.log(`Ответ 94 задачи: NaN `);
*/


/*
console.log("95 задача");
//Что будет выведено в консоль?
let array = ['1','2','3'].map(parseInt);//Функция parseInt преобразует первый переданный ей аргумент в строковый тип, интерпретирует его и возвращает целое число или значение NaN.
console.log(array)
console.log(`Ответ 95 задачи: [ 1, NaN, NaN ] `);
*/

/*
console.log("96 задача");
//Что будет выведено в консоль?
function sum(a,b,c){
    arguments[2] = 10; //это у нас с=10
    return a+b+c;//1+2+10=13
}
console.log(sum(1,2,3))
console.log(`Ответ 96 задачи: 13 `);//решила правильно
*/

console.log("97 задача нужно объяснение ");
/*
console.log("97 задача");
//Какой результат будет выведен на экран?
var a = 1;
var b = ++a+a;
console.log(b);
console.log(`Ответ 97 задачи:  4`);
*/


console.log("98 задача нужно объяснение ");
/*
console.log("98 задача");
//Какой результат будет выведен на экран?
var a = new Array();
a['key'] = 'value';
console.log(a.length);
console.log(`Ответ 98 задачи: 0 `);
*/

console.log("99 задача не отказалась бы от объяснений ");
/*
console.log("99 задача");
//Что будет выведено в консоль?
function Test(param){
    this.var1 = param;
    var var2 = 'World'
}
var test = new Test('Hello');
console.log(test.var1,test.var2);
console.log(`Ответ 99 задачи: Hello undefined `);
*/

console.log("100 задача есть сомнения по поводу этой задачи ");
/*
console.log("100 задача");
//Что будет выведено на экран?
var a1 = "wrong"
function a() {return "1st";}
function a(val) {this.a1 = "right"; return "2nd";}
console.log(new a().a1);
console.log(`Ответ 100 задачи:  right`);
*/

/*
console.log("101 задача");
//Что будет выведено в консоль?

let a = [], b = [];
console.log(a == b,a != b,!a == b, !a == !b);
console.log(`Ответ 101 задачи: false true true true `);//примерно так же думала , хоть они и массивы пустые но они не равны друг другу 
*/

console.log("102 задача не понятна эта задача ");
/*
console.log("102 задача");
//Что выведет на экран следующий код?
console.log(Math.floor(Math.random()));
console.log(`Ответ 102 задачи: 0 `);
*/

console.log("103 задача простая , но я что-то в ней не поняла ");
/*
console.log("103 задача");
//Что будет выведено в консоль?
var a = 1;
function f(){
    console.log(a);
    var a = 5;
}
f();
console.log(`Ответ 103 задачи: undefined `);
*/

/*
console.log("104 задача");
//Какой результат будет выведен в консоль?
var a = [];
console.log(a == a, a != a); //т.к. массив это ссылка, то он не равен сам себе 
console.log(`Ответ 104 задачи: true false `);// решила правильно 
*/



console.log("105 задача почему false?");
/*
console.log("105 задача");
//Что будет выведено в консоль?
class Something{}
const someObj = new Something();
console.log(typeof someObj == typeof Something)
console.log(`Ответ 105 задачи: false `);
*/


console.log("106 задача не понятна , не проходили");
/*
console.log("106 задача");
//Что будет выведено в консоль?
let a = isNaN("2014");
console.log(a);
console.log(`Ответ 106 задачи: false `);
*/



console.log("107 задача не знаю ");
/*
console.log("107 задача");
//Что будет выведено в консоль?
var n = 3;
var b = true;
n = n.toString(2) + Number(b) + n.toString() - 3 + !Number(b);
console.log(n);//1, получится 110, после  Number(b)???
console.log(`Ответ 107 задачи: 1110 `);
*/



console.log("108 задача стоит проверить на правильность ");
/*
console.log("108 задача");
//Укажите все корректные утверждения относительно цикла for?
//второе выражение в описании цикла обычно определяет условие продолжения выполнения цикла
//третье выражение в описании цикла обычно определяет условие выхода из цикла
//второе выражение в описании цикла обычно создает контрольную переменнную
//первое выражение в описании цикла обычно увеличивает счетчик цикла
//первое выражение в описании цикла обычно определяет условие выхода из цикла
console.log(`Ответ 108 задачи: 1) `);//я думаю так 
*/



/*
console.log("109 задача");
//Что будет выведено в консоль?
console.log(null == undefined)
console.log(`Ответ 109 задачи: true `);//решила правильно 
*/



/*
console.log("110 задача");
//Как сгенерировать случайное целое число от 1 до 10?

console.log(`Ответ 110 задачи:  Math.floor(Math.random() * 10);`);//посомтрела в интернете 
*/





console.log("111 задача но лучше ещё разуточнить ");
/*
console.log("111 задача ");
//Что будет выведено в консоль?
let squares = [2, 4, 6,].map(x => x*x);//2*2=4,4*4=16
[a,b] = squares;
console.log(a + b)//4+16=20

console.log(`Ответ 111 задачи:  `);//тоже решила 20, но лучше ещё разуточнить 
*/


console.log("112 задача уточнить ");
/*
console.log("112 задача");
//Что будет выведено в консоль?

var ch1 = "b";
var ch2;
switch(ch1){
    case 'a':
        ch2 = '1';
    case 'b':
        ch2 = '2';
    case 'c':
        ch2 = '3';
        break;
    default:
        ch2 = '4';    
}
console.log(ch2)
console.log(`Ответ 112 задачи: 3 `);//наверное цикл отсановится после break;, но начнёся с "b"
*/


console.log("113 задача нужно пояснение по поводу boolean");
/*
console.log("113 задача");
//Что будет выведено в консоль?
var a = [],
b = 1,
c = false,
d = [];
console.log(typeof (b == c), a == d)
console.log(`Ответ 113 задачи: boolean false `);
*/


console.log("114 задача , стоит разобрать ");
/*
console.log("114 задача");
//Какой из вариантов позволит трансформировать объект в JSON?
//let a=JSON.stringify();//undefined
//let a=JSON.toString();//[object JSON]
//let a=JSON.parse();//undefined
//let a=Object.prototype.toJSON();//ошибка 
//let a=Object.toJSON();//ошибка 
console.log(a);

console.log(`Ответ 114 задачи:  2)`);
*/

console.log("115 задача, простая , но так ли я думаю ?в ответах ");
/*
console.log("115 задача");
//Что выведет данный код?
console.log(id);
var id = '2';
console.log(`Ответ 115 задачи: undefined `);// потому что переменная потом объявлена 
*/


/*
console.log("116 задача");
//Что будет выведено в консоль?

const obj = { a:1};

(function(obj){
    obj = { a:2};
})(obj);

console.log(obj.a);

(function(obj){
    obj = { a:3};
})(obj);

console.log(obj.a);
console.log(`Ответ 116 задачи:  1 1`);//решила задачу 
*/




/*
console.log("117 задача");
//Каким образом добавить новый элемент в массив?
const a = [];
console.log(`Ответ 117 задачи: 1)a.push(element)`);//правильно решила 
*/


console.log("118 задача нужно люяснение ");
/*
console.log("118 задача");
//Какой результаты будет выведен в консоль?
var obj = function(){
    this.name = "Alex";
    var that = {};
    this.name = "David";
    var name = this.name + " && " + that.name;
    return name;
}

var o = new obj();
console.log(o.name);
console.log(`Ответ 118 задачи: David`);
*/




console.log("119 задача нужно пояснение ");
/*
console.log("119 задача");
//Что выведет следующий код?

const list = [1,2,3].push(4);
console.log(list.push(5));

console.log(`Ответ 119 задачи:код содержит ошибку  `);
*/



console.log("120 задача есть вопросы ");
/*
console.log("120 задача");
//Что будет выведено в консоль?
"use script"
const strs = ["I", " ", "am", " ", "Iron", " ", "Man"]
const result = strs.reduce((item, index) => item+index, "")
console.log(result)


console.log(`Ответ 120 задачи:  I am Iron Man`);
*/


console.log("121 задача есть вопросы ");
/*
console.log("121 задача");
//Что будет выведено в консоль?
var a = 2;
a = a << 2;
console.log(a);
console.log(`Ответ 121 задачи: 8 `);
*/





console.log("122 задача я думаю так , надо уточнить ")
/*
console.log("122 задача");
//Что произойдет после выполнения кода?

var foo = function(){
    return {
        a: 1,
        b: 2
    }
}
console.log(`Ответ 122 задачи:  синтаксическая ошибка`);//я думаю так , надо уточнить 
*/





console.log("123 задача есть вопросы ");
/*
console.log("123 задача");
//Что будет выведено в консоль?

var a = 2;
a = a >> 2;
console.log(a);
console.log(`Ответ 123 задачи: 0 `);
*/




console.log("124 задача нужно разъяснения !");
/*
console.log("124 задача");
//Каков будет результат выполнения следующего кода?

var a = 1;
var c = a+++1;
console.log(a,c)

console.log(`Ответ 124 задачи: 2 2 `);
*/






console.log("125 задача не праильно решила ");
/*
console.log("125 задача");
//Что будет выведено в консоль?
var str;
let i = '0';
console.log(str+i);
console.log(`Ответ 125 задачи:  undefined0`);
*/






/*
console.log("126 задача");
//Что будет выведено в консоль?
const list = [1 + 2, 1 ** 2, 1 / 2];
console.log(list)
console.log(`Ответ 126 задачи:  [ 3, 1, 0.5 ]`);//правильно решила 
*/





console.log("127 задача без понятия почему");
/*
console.log("127 задача");
//Какой результат будет выведен в консоль?
const a = new Number(1) === 1;
console.log(a)
console.log(`Ответ 127 задачи:false  `);
*/






console.log("128 задача тоже думал так , но были сомнения ");
/*
console.log("128 задача");
//Что будет выведено в консоль?
console.log(typeof typeof null)
console.log(`Ответ 128 задачи: string `);
*/





console.log("129 задача , пояснение ");
/*
console.log("129 задача");
//Что будет выведено в консоль?
console.log(typeof typeof undefined)
console.log(`Ответ 129 задачи: string `);
*/




/*
console.log("130 задача");
//Что выведет следующий код?

function sayHi(name){
    return `Hi there, ${name}`
}
console.log(sayHi())
console.log(`Ответ 130 задачи:Hi there, undefined  `);//тоже думал так , но нужно запомнить
*/

/*
console.log("131 задача");
//Что выведен следующий код?
console.log(1);
js: {
    console.log(2);
    break js;
    console.log(3);// условие не выполнится т.к.  break js;
}
console.log(4);
console.log(`Ответ 131 задачи:  1,2,4`);//решила правильно 
*/



/*
console.log("132 задача");
//Сколько раз сработает вызов alert()?
for(i = 5; i < 10; i++){
    for(j=i;j<i+1;j++){
        console.log(j)
    }
}
console.log(`Ответ 132 задачи: 5 `);//решила правильно 
*/



console.log("133 задача стоит проверить , потому что ответ не известен , и через консоль не узнаешь ");
/*
console.log("133 задача");
//Какое из следующих объявлений переменной является некорректным?
console.log(`Ответ 133 задачи:  4)5)`);
*/



/*
console.log("134 задача");
//Что будет выведено в консоль?
let s = 'myjs';
console.log(s.split(",",6));
console.log(`Ответ 134 задачи: [ 'myjs' ] `);//решила правильно , ничего не поменяется после s.split(",",6)
*/



console.log("135 задача стоит уточнить ответ ");
/*

console.log("135 задача");
//Что выведет следующий код?
console.log("Hello!' +"_"+ "World!');
console.log(`Ответ 135 задачи: ошибку `);// ковычки  не те 
*/



console.log("136 задача везде выдаетт ошибку , но мне кажется что возможно 1 правильно ");
/*
console.log("136 задача");
//Как можно вывести сообщение "Hello World!" с помощью JS?
console.log(`Ответ 136 задачи:  `);
*/


console.log("137 задача не решала ");
/*

console.log("137 задача");
//Какое основное отличие Function Declaration от Function Expression?

console.log(`Ответ 137 задачи:  `);
*/




/*
console.log("138 задача");
//Чему равно значение строки str?
var str="мама";
for(var i=0;i<str.length;i++){
    if(!(i%2))
        str[i] = "п";
}
console.log(str);
console.log(`Ответ 138 задачи: "мама" `);//решила 
*/



console.log("139 задача не уверена насчёт ответа ");
/*

console.log("139 задача");
//Что будет выведено в консоль?

a = false;
if(a == '0')
    console.log(1)
if(a === '0')
    console.log(2)


console.log(`Ответ 139 задачи:  1`);
*/





/*
console.log("140 задача");
//Что будет выведено на экран?

function a(value){
    return true - value;
}

var b = a('4') + a('-4') + a('-4') + a(4);
console.log(b);

console.log(`Ответ 140 задачи: 4 `);//почти правильно решила , так как - значит идет вычисление и приведение к математике (-3+1+4+1+4+1-4=4)
*/

console.log("141 задача не решала");
/*
console.log("141 задача");
//Какая арифметическая операция приводит к ошибке в JS?

console.log(`Ответ 141 задачи:  `);
*/



/*
console.log("142 задача");
//Что будет выведено в консоль?

const str = {job: "JS"}
console.log(typeof str);

console.log(`Ответ 142 задачи: object `);//решила правильно 
*/




/*
console.log("143 задача");
//Что будет выведено в консоль?

function a(value){
    return true + value;
}

var b = a('4') + a('-4') + a('-4') + a(4);
console.log(b);

console.log(`Ответ 143 задачи: true4true-4true-45 `);//рещшила правильно 
*/




console.log("144 задача пояснение ");
/*
console.log("144 задача");
//Чему равно значение выражения 4 - "5" + 0xf - "1e1" в JS?
let a=4 - "5" + 0xf - "1e1";
console.log(a);
console.log(`Ответ 144 задачи: 4 `);
*/




/*
console.log("145 задача");
//Сто будет выведено в консоль?
function a(value){
    return true * value;
}

var b = a('4') + a('-4') + a('-4') + a(4);
console.log(b)
console.log(`Ответ 145 задачи:  0`);//решила правильно  4+(-4)+(-4)+4=0
*/



console.log("146 задача, легкая но стоит пояснит ");
/*
console.log("146 задача");
//Чему будет равно значение переменной a после выполнения кода?
var a = 5;
var a;
console.log(`Ответ 146 задачи:  код содержит ошибку`);
*/




/*
console.log("147 задача");
//Чему равна длина arr.length массива arr?

var arr = [];
arr[1] = 1;
arr[3] = 33;

console.log(arr.length, arr);
console.log(`Ответ 147 задачи:  4`);//решила правильно , потому индексы 0.1.2.3 и к ним числа , масив получится [ <1 empty item>, 1, <1 empty item>, 33 ]
*/




console.log("148 задача не решала ");
/*
console.log("148 задача");
//Что будет выведено в консоль?

var str="MyTestingString";
console.log(str.slice(2,8),str.substr(2,8),str.substring(2,8))

console.log(`Ответ 148 задачи: Testin TestingS Testin `);
*/






/*
console.log("149 задача");
//Что будет выведено в консоль

const obj = new Object();
console.log(obj.a);
obj.a = 5;
console.log(obj.a);


console.log(`Ответ 149 задачи: undefined и 5 `);// решила правильно 
*/


console.log("150 задача были сомнения ");
/*

console.log("150 задача");
//Чему выведет на экран данный код?

for(let i=0; i<10; i++) {
    setTimeout(function() {
        console.log(i);
     }, 100);
}

console.log(`Ответ 150 задачи:  Числа от 0 до 9`);// решила , вроде так , но сомневалась 

*/







