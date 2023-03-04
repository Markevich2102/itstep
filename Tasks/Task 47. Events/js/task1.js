//Задание 1. Дано: кнопка и абзац со значением 0. Сделать так, чтобы при нажатии на кнопку число увеличивалось на 1.

let button=document.querySelector(".btn_click");
if(button){
    button.addEventListener("click", function(){
        
        let p=document.querySelector("p");//находим р, куда будет ввыводится результат 
        let x=+p.innerHTML;//извлекаем значение 0
        let newValue=x+1;//увеличиваем старое значение на 1 и получаем новое 
        p.innerHTML=newValue;//какой результат будет выводиться в р после клика
        if(isNaN(p.innerHTML)){//проверка на NaN
            p.innerHTML="Значения введены не корректно";//какой результат будет выводиться в р 
        }
    })
}