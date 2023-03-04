// Задача 2. Дано поле ввода, кнопка и div. Если в div нет списка, то добавить маркированный список с одним элементом с текстом введеным в поле. При последующем нажатии добавлять в конец списка элемент списка с текстом введеным в поле.

let button = document.querySelector(".btn_click");
if (button) {
    button.addEventListener("click", function () {
        let input = document.querySelector("#numberOne");
        let x = input.value;
        console.log(x);

        let div = document.querySelector("div");
        if (div.children.length == 0) {

            let ol = document.createElement("ol");
            let li = document.createElement("li");
            li.innerText = x;
            ol.insertAdjacentElement("beforeend", li);

            div.insertAdjacentElement("afterbegin", ol);
        } else {
           
            let li = document.createElement("li");
            li.innerText = x;
            div.firstChild.insertAdjacentElement("beforeend", li);
        }
    });
}

