//Все необходимые элементы находятся в index.html
//https://developer.mozilla.org/ru/docs/Web/API/Element

//1. Элемент: #first-element. 


let firstElement = document.querySelector("#first-element");
let neighbors = firstElement.parentElement.querySelectorAll(".neighbor");
if (neighbors.length) { // количество элементов, проверить наличие через длину
    //Array.from(neighbors)  единоразовое преобразование, оно не меняет сам список на массив
    // let arrayNeighbors = Array.from(neighbors);
    Array.from(neighbors).forEach(function (element) {
        element.innerHTML = "Я хороший сосед";
    });

    Array.from(neighbors).forEach(function (element, index) {
        element.innerHTML = `Я хороший сосед №${index + 1}`;
    });
    //- оберните текст в элементах с классом "neighbor" в тег span
    Array.from(neighbors).forEach(function (element) {
        element.innerHTML = `<span>${element.innerHTML}</span>`;
    });
    //- замените теги span на тег b
    Array.from(neighbors).forEach(function (element) {
        element.innerHTML = `<b>${element.innerText}</b>`;
    });
}
//- замените текст "Я хороший сосед" на "Я последний хороший сосед" у элемента с классом "fourth-neighbor"
let lastNeighbor = firstElement.parentElement.querySelector(".fourth-neighbor");
if (lastNeighbor) {
    if (lastNeighbor.firstElementChild) {
        lastNeighbor.firstElementChild.innerHTML = "Я последний хороший сосед";
    }
}

let secondElement = document.querySelector("#second-element");

let list = [];
for (i = 1; i <= 10; i++) {
    list[i] = "Пункт " + i;
}
    // вставка строкой
let out = "<ul>";
list.forEach(function (item) {
    out += `<li>${item}</li>`;
});
out += "</ul>";

secondElement.insertAdjacentHTML("beforeend", out);

list.forEach(function (item, index) {
    if (index % 2 == 0) {
        item.style.color = "#f00";
    }; 
    if(index % 2 != 0){
        list.insertAdjacentHTML("beforeend", "<span>мой любимый спан</span>");

    }
    
});





//2. Элемент: #second-element.
//- добавить маркированный список из 10 элементов с текстом "Пункт 1", "Пункт 2" и т.д.
//- каждый четный пункт покрасить в красный цвет
//- каждому нечетному пункту добавить класс odd-element
//- элементам кратным 3 с классом odd-element увеличить шрифт в 2 раза.

//3. Элемент: #third-element.
//- заменить теги b на strong
//- удалить в тегах strong все теги, т.е. должен остаться только текст/
//- обернуть каждое слово в тег span

//4. Элемент: #fourth-element
//- Выведите на экран текст из всех тегов div
//- Поменяйте местами содержимое тегов div в обратном порядке, при этом теги остаются на месте, меняется только текст
//- удалить третьего "соседа"
//- добавить "пятого" соседа после четвертого
//- пятому соседу добавить границу, внутренние отступы и фон