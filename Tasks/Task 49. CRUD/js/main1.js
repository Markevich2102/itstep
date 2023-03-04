/* Задача 1. Имеется 2 поля ввода: первое - название еды, второе - вес. Также имеются 2 кнопки: Добавить и Сохранить. И еще есть пустая таблица следующего вида:
<table>
    <tr>
        <th>Название</th>
        <th>Вес</th>
        <th>Действия</th>
    </tr>
    <tr>
        <td>Сок</td>
        <td>200</td>
        <td>
            <button class="edit-button">Редактировать<button>
            <button class="delete-button">Удалить<button>
        </td>
    </tr>
</table> *

При нажатии кнопки "Добавить" в таблицу добавляется новая строка сло структурой аналогичной 2 строке (сок).
При нажатии кнопки "Удалить" из таблицы удаляется соотвествующая строка.
При нажатии кнопки "Редактировать" в поля заносятся данные из ячеек таблицы, а затем после нажатия кнопки "Сохранить" перезиписываются данные из полей в ту строку, которая редактируется. */

let buttonAdd = document.querySelector(".btn_add");//ищем расположение класса .btn_add
if (buttonAdd) {
    buttonAdd.addEventListener("click", function () {//если идёт нажатие на кнопку 
        let inputOne = document.querySelector("#foodName");//то ищем по id =foodName
        let x = inputOne.value;// х присваиваем значение которое находится в input
        let inputTwo = document.querySelector("#weight");//то ищем по id =weight
        let y = inputTwo.value;// х присваиваем значение которое находится в input

        let tbody = document.querySelector("tbody");//ищем местоположение tbody

        let tr = document.createElement("tr");//то создаём строку в таблице
        tbody.insertAdjacentElement("beforeend", tr);//в tbody вставляем наше созданное tr, согласно положению "beforeend"

        //создаём 1 столбик 
        let tdfoodName = document.createElement("td");//создаём td
        tdfoodName.innerText = x;//где присваиваем текст равный значению в 26 сроке 
        tr.insertAdjacentElement("afterbegin", tdfoodName);//в строку таблицы вставляем наше созданный столбик tdfoodName, согласно положению "afterbegin"

        //создаём 2 столбик 
        let tdWeight = document.createElement("td");//создаём td
        tdWeight.innerText = y;//где присваиваем текст равный значению в 28 сроке 
        tr.insertAdjacentElement("beforeend", tdWeight);//в строку таблицы вставляем наше созданный столбик tdWeight, согласно положению "beforeend"

        //создаём 3 столбик 
        let tdButton = document.createElement("td");//создаём td
        tr.insertAdjacentElement("beforeend", tdButton);//в строку таблицы вставляем наше созданный столбик tdButton, согласно положению "beforeend"

        //создаём кнопку "Редактировать"
        let editButton = document.createElement("button");//создаём кнопку
        editButton.innerText = "Редактировать";//тект кнопке будет равен "Редактировать"
        editButton.classList.add(".edit-button");//присваиваем класс .edit-button
        tdButton.insertAdjacentElement("afterbegin", editButton);//в tdButton вставляем наше созданное editButton, согласно положению "afterbegin"


        //создаём кнопку "Удалить "
        let buttonDelete = document.createElement("button");//создаём кнопку
        buttonDelete.innerText = "Удалить ";//тект кнопке будет равен "Удалить "
        buttonDelete.classList.add(".delete-button")//присваиваем класс .delete-button

        tdButton.insertAdjacentElement("beforeend", buttonDelete);//в tdButton вставляем наше созданное buttonDelete, согласно положению "beforeend"




        //действия для удаления tr или таблицы

        buttonDelete.addEventListener("click", function () {//если мы кликнули на buttonDelete
            let deleteTd = this.parentElement.parentElement.parentElement;//this=buttonDelete, где this.parentElement.parentElement это у нас tr, а  this.parentElement.parentElement.parentElement это tbody
            this.parentElement.parentElement.remove();//где this.parentElement.parentElement это у нас tr , а  мы его удаляем 
            if (deleteTd.children.length == 0) {//если детей у tbody нет , то удаляется tbody
                deleteTd.remove();
            }
        })

        //действия для редактрования текста 

        editButton.addEventListener("click", function () {//если нажимаем на кнопку "Редактировать"
            let input1 = document.querySelector("#foodName");//ищём id=foodName
            let foodText = this.parentElement.parentElement.firstElementChild.innerText;//this это у нас editButton. Ищем родителя родителя , это у нас tr, и берем от него первого ребёнка, это у нас текст (тот который мы вводили ). innerText это наш сам текс , точнее его знаяение которое мы вводили
            input1.value = foodText;//значению у input1 присваеваем foodText

            let input2 = document.querySelector("#weight");//ищём id=weight
            let weightText = this.closest("tr").children[1].innerText;//this это у нас editButton. Ищем родителя родителя , это у нас tr, и берем от него ребёнка[1], это у нас текст (тот который мы вводили ). innerText это наш сам текс , точнее его знаяение которое мы вводили
            input2.value = weightText;//значению у input2 присваеваем weightText

            console.log(input1.value,input2.value);// просто проверка для себя 
            let editTr = document.querySelector(".edut");//находим класс=edut 
            if (editTr) {// если нашли класс , то его удаляем 
                editTr.classList.remove("edut");
            }
            this.parentElement.parentElement.classList.add("edit")//и создаём этот класс для родителя родителя у этого элемента 
        })
        let saveButton = document.querySelector(".btn_save");//ищем класс btn_save
        saveButton.addEventListener("click", function () {// если кликнули на кнопку "сохранить "
            let food = document.querySelector("#foodName").value;//то находим значение , которое мы меняем 
            let weight = document.querySelector("#weight").value;//то находим значение , которое мы меняем 
            let editTr = document.querySelector(".edit");//ищем класс .edit
            if (editTr) {//если он есть 
                editTr.firstChild.innerText = food;//то первому ребёнку , а это у нас текст присваеваем новое знаыение , которое мы редактировали  food
                editTr.children[1].innerText = weight;//то  ребёнку [1] , а это у нас текст присваеваем новое знаыение , которое мы редактировали  weight 
                editTr.classList.remove("edit");//т.к. мы уже выполнили действия по замене , нам уже класс .edit уже не нужен и его можно удалить 
                document.querySelector("#foodName").value = "";// так как удалили класс .edit, и сделали замену текста , тоесть редактирования , то можно очистить поле куда вводили данные для редактирования 
                document.querySelector("#weight").value = "";// так как удалили класс .edit, и сделали замену текста , тоесть редактирования , то можно очистить поле куда вводили данные для редактирования 
            }

        })

    });
}
