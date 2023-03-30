/*1. Дано поле ввода и кнопка. Вводится число. При нажатии на кнопку сгенерировать маркированный список из чисел от 1 до введенного.*/


let buttonClick = document.querySelector(".btn");
buttonClick.addEventListener("click", function () {
    let number = document.querySelector("#number").value;
    if (number) {
        let div=document.querySelector("div");


        //создание списка
        let out = "<ul>";
        for(let i=1;i<=number;i++){
            out += `<li>Пункт № ${i}</li>`;
        }
        out += "</ul>";

        div.innerHTML = out;//какой результат будет выводиться в div 

    }
})
