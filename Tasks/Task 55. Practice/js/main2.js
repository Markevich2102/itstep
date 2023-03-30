/*2. Дана ссылка. Сделать так, чтобы при нажатии на ссылку не происходил переход по адресу.*/

let link = document.querySelector("a");
link.addEventListener("click", function (event) {
    event.preventDefault();
})