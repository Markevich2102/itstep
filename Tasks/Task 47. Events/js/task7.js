//Задание 7. Дана: кнопка и поле. При нажатии на кнопку, удалить все цифры из поля ввода.

let button=document.querySelector(".btn_click");
if(button){
    button.addEventListener("click", function(){
        let input1=document.querySelector("#numberOne");//находим расположение input1
        let x=input1.value;//для х присваиваем значение value которое указано в html 

        if(x){
            input1.value="";//присваиваем значение пустая строка для value
        }       
    })
}ы