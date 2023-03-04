//Задание 4. Дано: кнопка и 2 поля ввода. При нажатии на кнопку поменять значения в полях ввода местами.

let button=document.querySelector(".btn_click");
if(button){
    button.addEventListener("click", function(){
        let input1=document.querySelector("#numberOne");//находим расположение input1
        let x=input1.value;//для х присваиваем значение value которое указано в html (или по другому изымаем значение)
        let input2=document.querySelector("#numberTwo");//находим расположение input2
        let y=input2.value;//для y присваиваем значение value которое указано в html (или по другому изымаем значение)
        let z=x;//вводим переменную для того , что бы поменять местами
        x=y;//переприсваиваем 
        y=z;//переприсваиваем 
        input1.value=x;//помещаем значения в input1
        input2.value=y;//помещаем значения в input2
        
    })
}