/*3. Дана кнопка (Показать) и div с текстом, который по-умолчанию скрыт. При нажатии на кнопку с надписью "Показать" отображать данный div и менять название кнопки на "Скрыть". При нажатии на кнопку с надписью "Показать" скрывать div и менять название кнопки на "Показать".*/

let div = document.querySelector("div");

let button = document.querySelector("button");

button.addEventListener("click", function () {
    if (div.style.display === "none") {
        div.style.display = "block";
        this.innerText = "Скрыть";
    } else {
        div.style.display = "none";
        button.innerText = "Показать";
    }
})