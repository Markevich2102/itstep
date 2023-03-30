/*2. Дана форма с одним полем ввода.
    - при унастновки курсора в поле ввода закрашивать ее в синий цвет.
    - при убирании курсора из поля возвращать фон в начальное состояние.*/

let inputFocus = document.querySelector("#focus");
inputFocus.addEventListener('focus', function (event) {
    event.preventDefault();
    inputFocus.classList.add("blue");
}) 

inputFocus.addEventListener('blur', function (event) {
    event.preventDefault();
    inputFocus.classList.remove("blue");
}) 