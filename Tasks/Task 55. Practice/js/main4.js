/*4. Дано поле ввода. В поле ввода вводятся чиcла через пробел. Сделать так, чтобы при наборе текста в поле выводилась сумма этих чисел.*/


let data = document.querySelector("input").value;
let a=[data.split(" ")];
sum=0;

a.forEach(function(item,i,array){
    sum=sum+a[i];//т.к пишу а[i]то параметрах ф-ции указываю i , array
});





console.log(sum);
console.log(a);





