//Задание 8. Дано: 3 кнопки. При нажатии на любую кнопку, должны меняться цвета 2 оставшихся на случайный цвет.(лучше посмотреть с занятия . не так поняла задание )

let button1=document.querySelector(".btn1_click");
let button2=document.querySelector(".btn2_click");
let button3=document.querySelector(".btn3_click");
if(button1){
    button1.addEventListener("click", function(){
        button2.style.color="#20ab3e";
        button3.style.color="#20ab3e";
        button2.style.borderColor="#20ab3e";
        button3.style.borderColor="#20ab3e";
    })
}
if(button2){
    button2.addEventListener("click", function(){
        button1.style.color="#8620ab";
        button3.style.color="#8620ab";
        button1.style.borderColor="#8620ab";
        button3.style.borderColor="#8620ab";
    })
}
if(button3){
    button3.addEventListener("click", function(){
        button2.style.color="#20dcf5";
        button1.style.color="#20dcf5";
        button2.style.borderColor="#20dcf5";
        button1.style.borderColor="#20dcf5";
    })
}