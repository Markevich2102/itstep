//Задание 6. Дано: кнопка и ссылка. При нажатии на кнопку, в текст ссылки вывести ее адрес. (в конец обработчика добавить return false;)

let button=document.querySelector(".btn_click");
if(button){
    button.addEventListener("click", function(){
        let a=document.querySelector("a");
       a.innerText=a.href;
    })
}