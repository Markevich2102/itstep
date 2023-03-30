/*5. Реализовать экранную клавиатуру для русского алфавита: 33 клавиши с названием букв. При нажатии на опредленную клавишу выводить соотвествующий символ в какой-либо div.
*/

document.addEventListener("keydown", function (event) {//если нажимаем , но не отпускаем

    let div = document.querySelectorAll("div");//ищем все div
    Array.from(div).forEach((divdiv) => {
        if (event.key == divdiv.innerText.toLowerCase()) {//если совпадает нажатая клавиша с divdiv.innerText.toLowerCase() 
            divdiv.innerHTML+=`<br>${event.key}`;  
        }
    })
})
