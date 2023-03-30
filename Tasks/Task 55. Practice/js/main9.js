/*9. Дан абзац с текстом и кнопка "Редактировать". При нажатии на кнопку должно появлятся поле ввода, абзац должен скрываться,а в поле ввода должен быть текст из абзаца, кнопка "Редактировать" должна изменить текст на "Сохранить". После изменения текста и нажатии на кнопку "Сохранить" у нас должен оставаться только абзац с новым текстом и кнопкой "Редактировать".*/

// пересмотреть задачу по правильности названия , делала быстро , но рабочий вариант 
let button = document.querySelector(".btn");
button.addEventListener("click", function () {
    let body = document.querySelector(".body");
    if (body.children.length < 5) {

        /*let input=document.createElement("input");
        let pText=document.querySelector(".ppp").innerHTML;
        input.value=pText;
        input.classList.add("task9");*/

        let input = document.createElement("input");
        let pText = document.querySelector(".ppp").innerHTML;
        input.value = pText;
        input.classList.add("task9");
        body.insertAdjacentElement("beforeend", input);
        document.querySelector(".ppp").innerHTML = "";
        document.querySelector(".btn").innerHTML = "Сохранить";
        let a = document.querySelector(".btn");
        a.classList.add("aa");
        a.addEventListener("click", function () {
            let newText = document.querySelector(".task9").value;//ищем значение исправленного текста 
            document.querySelector(".ppp").innerHTML = newText;//в наше первое поле ставим исправленный текст
            document.querySelector(".btn").innerHTML = "Редактировать";//кнопку из "Сохранить " меняем на "Редактировать"
            input.remove();
        })
    }
})
