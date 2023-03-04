//Задание 5. Дано: поле ввода и кнопка. При нажатии на кнопку, вывести, яввляется ли введеное значение числом.

let button=document.querySelector(".btn_click");
if(button){
    button.addEventListener("click", function(){
        let input1=document.querySelector("#numberOne");//находим расположение input1
        let x=input1.value;//для х присваиваем значение value которое указано в html 

        if(isFinite(x)){
            let p=document.querySelector("p");
            p.innerHTML=`Введенные параметры являются числом ${x}`;//какой результат будет выводиться в р после клика
        }else{
            let p=document.querySelector("p");
            p.innerHTML=`Введенные параметры не являются числом`;//какой результат будет выводиться в р после клика
        }

    })
}