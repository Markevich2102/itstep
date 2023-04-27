/*
11. Реализовать калькулятор продуктов. Он будет представлять собой таблицу, в которую пользователь будет вносить свои покупки. Покупки вносятся с помощью формы (код_товара, название, цена_одной_единицы, количество). Кроме того, для каждого продукта предусмотреть кнопку удаления и редактирования. Редактирование также должно происходить по двойному клику по строке в таблице. Под таблицей должна выводится суммарная стоимость продуктов, которая должна пересчитываться при добавлении, удалении и редактировании продуктов.*/

let addProduct = document.querySelector(".product");

addProduct.addEventListener("click", function (event) {
    event.preventDefault();

    let code = document.querySelector("#code").value;
    let name = document.querySelector("#name").value;
    let price = document.querySelector("#price").value;
    let quantity = document.querySelector("#quantity").value;

    let tr = document.createElement("tr");

    let tdCode = document.createElement("td");
    tdCode.innerHTML = code;
    let tdName = document.createElement("td");
    tdName.innerHTML = name;
    let tdPrice = document.createElement("td");
    tdPrice.innerHTML = price;
    let tdQuantity = document.createElement("td");
    tdQuantity.innerHTML = quantity;

    let summa = document.createElement("td");
    summa.innerHTML = (+price) + (+quantity);


    let tdAction = document.createElement("td");

    //создание кнопки "Редактровать"
    let editButton = document.createElement("button");
    editButton.innerText = "Редактировать";
    tdAction.insertAdjacentElement("beforeend", editButton);

    //создание кнопки "Удалить"
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Удалить";
    tdAction.insertAdjacentElement("beforeend", deleteButton);

    tr.insertAdjacentElement("beforeend", tdCode);
    tr.insertAdjacentElement("beforeend", tdName);
    tr.insertAdjacentElement("beforeend", tdPrice);
    tr.insertAdjacentElement("beforeend", tdQuantity);
    tr.insertAdjacentElement("beforeend", summa);
    tr.insertAdjacentElement("beforeend", tdAction);

    let tbody = document.querySelector("tbody");
    tbody.insertAdjacentElement("beforeend", tr);

    deleteButton.addEventListener("click", function () {
        this.parentElement.parentElement.remove();
        count();
    })

    editButton.addEventListener("click", function (event) {
        document.querySelector("#code").value = this.parentElement.parentElement.firstElementChild.innerText;
        document.querySelector("#name").value = this.parentElement.parentElement.children[1].innerText;
        document.querySelector("#price").value = this.parentElement.parentElement.children[2].innerText;
        document.querySelector("#quantity").value = this.parentElement.parentElement.children[3].innerText;

        let saveButton = document.createElement("button");
        saveButton.innerText = "Сохранить";
        addProduct.parentElement.insertAdjacentElement("beforeend", saveButton);
        this.parentElement.parentElement.classList.add("edit");

        saveButton.addEventListener("click", function (event) {
            event.preventDefault();
            let editTr = document.querySelector(".edit");

            editTr.firstElementChild.innerText = document.querySelector("#code").value;
            editTr.children[1].innerText = document.querySelector("#name").value;
            editTr.children[2].innerText = document.querySelector("#price").value;
            editTr.children[3].innerText = document.querySelector("#quantity").value;
            summa.innerHTML = (+document.querySelector("#price").value) + (+document.querySelector("#quantity").value);
            console.log(editTr.firstElementChild.innerText);
            console.log(editTr.children[1].innerText);

            if (editTr) {
                editTr.classList.remove("edit");
            }
            this.remove();
            count();
            clear();
        })

    })
    count();
    clear();
})


function count() {
    let tds = document.querySelectorAll(`td:nth-child(5)`);
    let sum = 0;
    Array.from(tds).forEach(function (item) {
        sum += (+item.innerText);
        let sumResults = document.querySelector(".results");
        sumResults.innerText = sum;
    });

}

function clear() {
    document.querySelector("#code").value = "";
    document.querySelector("#name").value = "";
    document.querySelector("#price").value = "";
    document.querySelector("#quantity").value = "";
}
