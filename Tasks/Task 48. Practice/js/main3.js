// Задача 3. Дано 2 поля ввода, кнопка и div. При нажатии на кнопку выводить в div большее значение из 2 полей.

let button = document.querySelector(".btn_click");
if (button) {
    button.addEventListener("click", function () {
        let inputOne = document.querySelector("#numberOne");
        let valueOne = +inputOne.value;
        let inputTwo = document.querySelector("#numberTwo");
        let valueTwo = +inputTwo.value;
        let div = document.querySelector("div");
        if(valueOne>valueTwo){
            div.innerText=valueOne;
        }else{
            div.innerText=valueTwo;
        }
        if(isNaN(valueOne) || valueOne === ""||isNaN(valueTwo) || valueTwo === ""){
            document.querySelector("div").innerText = "Не число";
        } 
    });
}

