// Задача 5. Дано 2 поля, кнопка и div. Вывести в div сумму, разность, произведение и частное 2 чисел, введеных в поля. При делении на ноль, вместо результата деления выводить текст "Деление на 0".

let button = document.querySelector(".btn_click");
if (button) {
    button.addEventListener("click", function () {
        let inputOne = document.querySelector("#numberOne");
        let valueOne = +inputOne.value;
        let inputTwo = document.querySelector("#numberTwo");
        let valueTwo = +inputTwo.value;
        let div = document.querySelector("div");
        let sum = valueOne + valueTwo; //сумма чисел
        let difference = valueOne - valueTwo; //разность
        let multiplication = valueOne * valueTwo; //произведение
        let division = valueOne / valueTwo; //частное
        if (valueOne / valueTwo && valueTwo == 0) {
            division = `"Деление на 0"`;

        }

        div.innerText = `Сумма чисел ${sum}, Разность чисел ${difference}, Произведение чисел ${multiplication}, Частное чисел ${division} `;
        if (isNaN(valueOne) || valueOne === "" || isNaN(valueTwo) || valueTwo === "") {
            document.querySelector("div").innerText = "Не число";
        }
    });
}
