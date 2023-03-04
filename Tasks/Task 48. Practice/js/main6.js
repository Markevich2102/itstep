// Задача 4. Во второй задаче добавить возможность при клике на элемент списка удалять его из списка. Если удаляется последний элемент списка, то список также удаляется.

let button = document.querySelector(".btn_click");//ищем расположение класса .btn_click
if (button) {
    button.addEventListener("click", function () {//если идёт нажатие на кнопку 
        let input = document.querySelector("#numberOne");//то ищем по id =numberOne
        let x = input.value;// х присваиваем значение которое находится в input


        let div = document.querySelector("div");//ищем div 
        let ol, li;//обязательно объявляем переменные , что бы они были видны везде , потому что если их объявить в if , то они за пределами if  не будут видны 
        if (div.children.length == 0) {// есди есть дети у  div 

            ol = document.createElement("ol");//то создаём маркированный список
            li = document.createElement("li");//создаём li
            li.innerText = x;//где присваиваем текст равный значению в 7 сроке 

            ol.insertAdjacentElement("beforeend", li);//в список вставляем наше созданное li, согласно положению "beforeend"

            div.insertAdjacentElement("afterbegin", ol);//в div вставляем наше созданное ol, согласно положению "afterbegin"

        } else {// есди нет детей у  div
            li = document.createElement("li");//создаём li
            li.innerText = x;//где присваиваем текст равный значению в 7 сроке 
            div.firstChild.insertAdjacentElement("beforeend", li);//первому ребенку div (а он у нас ol) в список вставляем наше созданное li, согласно положению "beforeend"
         }

        let editButton = document.createElement("button");//создаём кнопку
        editButton.innerText = "Редактировать";//тект кнопке будет равен "Редактировать"

        let buttonDelete = document.createElement("button");//создаём кнопку
        buttonDelete.innerText = "Удалить ";//тект кнопке будет равен "Удалить "

        li.insertAdjacentElement("beforeend", buttonDelete);//в li вставляем наше созданное buttonDelete, согласно положению "beforeend"

        li.insertAdjacentElement("beforeend", editButton);//в li вставляем наше созданное editButton, согласно положению "beforeend"


        //действия для удаления Liили списка , если уже нет Li

        buttonDelete.addEventListener("click", function () {//если мы кликнули на buttonDelete
            let ol = this.parentElement.parentElement;//this=buttonDelete, от него ищем родителя, и от родителя ещё родителя , где this.parentElement это у нас li, а this.parentElement.parentElement это наш список ol
            this.parentElement.remove();//где this.parentElement это у нас li b мы его удаляем 
            if (ol.children.length == 0) {//если детей у списка нет , то удаляется вечь список
                ol.remove();
            }
        })

        //действия для редактрования текста 

        editButton.addEventListener("click", function () {//если нажимаем на кнопку "Редактировать"
            let input = document.querySelector("#numberOne");//ищём id=numberOne
            let liText = this.parentElement.firstChild.nodeValue;//this это у нас editButton. Ищем родителя , это у нас Li, и берем от него первого ребёнка, это у нас текст (тот который мы вводили ). nodeValue это наш сам текс , точнее его знаяение которое мы вводили
            input.value = liText;//значению у input присваеваем liText
            console.log(input.value);// просто проверка для себя 
            let editLi = document.querySelector(".edut");//находим класс=edut 
            if (editLi) {// если нашли класс , то его удаляем 
                editLi.classList.remove("edut");
            }
            this.parentElement.classList.add("edit")//и создаём этот класс для родителя у этого элемента , родитель у нас Li
        })
        let saveButton = document.querySelector(".btn_save");//ищем класс btn_save
        saveButton.addEventListener("click", function () {// если кликнули на кнопку "сохранить "
            let task = document.querySelector("input").value;//то находим значение , которое мы меняем 
            let editLi = document.querySelector(".edit");//ищем класс .edit
            if (editLi) {//если он есть 
                editLi.firstChild.nodeValue = task;//то первому ребёнку , а это у нас текст присваеваем новое знаыение , которое мы редактировали  task
                editLi.classList.remove("edit");//т.к. мы уже выполнили действия по замене , нам уже класс .edit уже не нужен и его можно удалить 
                document.querySelector("input").value = "";// так как удалили класс .edit, и сделали замену текста , тоесть редактирования , то можно очистить поле куда вводили данные для редактирования 
            }

        })

    });
}
