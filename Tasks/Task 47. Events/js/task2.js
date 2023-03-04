//Задание 2. Дано: кнопка и абзац с произвольным текстом. Сделать так, чтобы  при нажатии на кнопку текст выделялся полужирным шрифтом.

let button=document.querySelector(".btn_click");
if(button){
    button.addEventListener("click", function(){
        
        let p=document.querySelector("p");//находим р, где наш текст
        p.style.fontWeight="700px";//полужирный шрифт fontWeight="700px"
        p.style.color="#f50707";//проверка цвета   
    })
}