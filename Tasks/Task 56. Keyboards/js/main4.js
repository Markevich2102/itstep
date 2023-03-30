/*4. Дано 10 блоков, пронумерованных от 0 до 9. При нажатии на определенную цифру на клавиатуре подсвечивать блок с соотвествующим номером.
*/

document.addEventListener("keypress", function (event) {//если удерживаем 
    event.preventDefault();
    if (event.key == "0" || event.key == "1" || event.key == "2" || event.key == "3" || event.key == "4" || event.key == "5" || event.key == "6" || event.key == "7" || event.key == "8" || event.key == "9") {
        let div = document.querySelectorAll("div");//ищем все div
        Array.from(div).forEach((divdiv) => {
            if (event.key == divdiv.className) {//если совпадает нажатая клавиша с названием класса divdiv (divdiv.className)
                console.log(divdiv.className);//проверка
                divdiv.classList.add("click");//создаём класс click
                function soundClick() {
                    var audio = new Audio(); // Создаём новый элемент Audio
                    //audio.src = "./audio/1.mp3"; // Указываем путь к звуку "клика"
                    audio.src = `./audio/${event.key}.mp3`;
                    audio.autoplay = true; // Автоматически запускаем
                }
                soundClick();
                document.addEventListener("keyup", function (event) {//если опускаем нажатую клавишу
                    event.preventDefault();
                    if (event.key == "0" || event.key == "1" || event.key == "2" || event.key == "3" || event.key == "4" || event.key == "5" || event.key == "6" || event.key == "7" || event.key == "8" || event.key == "9") {
                        let clickUp = document.querySelector(".click");//ищем класс click
                        if (clickUp) {//если есть класс click
                            console.log("Есть класс click");//проверка
                            divdiv.classList.remove("click");//удаляем класс click
                        }
                    }
                })
            }
        })
    }
})
