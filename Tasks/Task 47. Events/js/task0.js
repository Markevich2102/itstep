//Задание 0. Создать два поля для ввода данных и кнопку при нажатии на которую будет выводится в отдельном поле результат суммы двух чисел 

let button=document.querySelector(".btn_click");
if(button){
    button.addEventListener("click", function(){
        let input1=document.querySelector("#numberOne");//находим расположение input1
        let x=+input1.value;//для х присваиваем значение value которое указано в html (т.к значение у нас возращается строка, то нужно нам перевести в число , ставим +)
        let input2=document.querySelector("#numberTwo");//находим расположение input2
        let y=+input2.value;//для y присваиваем значение value которое указано в html(т.к значение у нас возращается строка, то нужно нам перевести в число , ставим +)
        let p=document.querySelector("p");//находим р, куда будет ввыводится результат 
        p.innerHTML=x+y;//какой результат будет выводиться в р 
        if(isNaN(p.innerHTML)){//проверка на NaN
            p.innerHTML="Значения введены не корректно";//какой результат будет выводиться в р 
            
        }
    })
}