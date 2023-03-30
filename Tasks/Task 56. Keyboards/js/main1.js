/*1. Дан список из 3 произвольных пунктов.
    - При нажатии на сочатние "Ctrl"+"+" добавить новый пункт;
    - При нажатии на сочатние "Ctrl"+"-" удалить последний пункт, если такое возможно.
*/


document.addEventListener('keydown', function (event) {
    event.preventDefault();
    if (event.key == "+" && event.ctrlKey) {//нажат ctrl и +
        let li = document.createElement("li");//создали новый элемент li
        li.textContent = document.querySelectorAll("ul > li").length + 1;//получает текст  всех li  в ul и длину
        document.querySelector("ul").append(li);//всавляем  li в ul
    }

    if (event.key == "-" && event.ctrlKey) {//нажат ctrl и -
        if (document.querySelectorAll("ul > li").length > 0) {//если есть длина li(тоесть если вообще есть li)
            document.querySelector("ul > li:last-child").remove();//удаляем последнюю li 
        }
    }

});    
