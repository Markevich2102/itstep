/* 1. Элемент: #first-element. 
 - Добавьте ему класс www.
 - Удалите у него класс www.
 - Проверьте наличие у него класса www.
 - Добавьте ему класс www, если его нет и удалите - если есть.
 - Узнайте количество его классов.
 - Выведите последовательно через console.log его классы.
 - Сделайте его красного цвета, размером 30px, добавьте ему границу
 - Выведите название его тега в нижнем регистре
 - Вставьте ему в конец span с текстом 'мой любимый спан'
 - Вставьте ему в конец список ul с элементами массива [createElement, appendChild, insertBefore] так, чтобы каждый элемент стоял в своем li.
 - Вставьте перед ним div с классом neighbor и текстом 'еще один сосед'*/

let firstElement = document.querySelector("#first-element");//ищем по id =first-element
if (firstElement) {
    firstElement.classList.add("www");//Добавьте ему класс www.

    firstElement.classList.remove("www");//Удалите у него класс www.

    if (firstElement.classList.contains("www")) {//Проверьте наличие у него класса www.
        console.log("Есть класс www")
    } else {
        console.log("Нету класса www")
    }

    firstElement.classList.toggle("www");//Добавьте ему класс www, если его нет и удалите - если есть.

    console.log(firstElement.classList.length);//Узнайте количество его классов.

    for (let i = 0; i < firstElement.classList.length; i++) {//Выведите последовательно через console.log его классы.
        console.log(firstElement.classList.item(i));
    }

    //Сделайте его красного цвета, размером 30px, добавьте ему границу
    firstElement.style.color = "#f00";
    firstElement.style.fontSize = "30px";
    firstElement.style.border = "1px solid #000";

    console.log(firstElement.tagName.toLowerCase());// Выведите название его тега в нижнем регистре

    //Вставьте ему в конец span с текстом 'мой любимый спан'
    let span = "<span>Мой любимый спан</span>";
    firstElement.insertAdjacentHTML("beforeend", span);

    //Вставьте ему в конец список ul с элементами массива [createElement, appendChild, insertBefore] так, чтобы каждый элемент стоял в своем li.
    let list = ["createElement", "appendChild", "insertBefore"];
    //создаём список
    let out = "<ul>";
    list.forEach(function (item) {
        out += `<li>${item}</li>`;
    })
    out += "</ul>";
    firstElement.insertAdjacentHTML("beforeend", out);

    //Вставьте перед ним div с классом neighbor и текстом 'еще один сосед'
    let div = document.createElement("div");//создаём div
    div.classList.add("neighbor");//создаём класс neighbor
    div.innerText = "еще один сосед";//div добавляем текст 
    firstElement.insertAdjacentElement("beforebegin", div);//вставляем div в firstElement согласно положения beforebegin
}


/* 2. Элемент: #second-element.
 - Вставьте перед ним span с текстом '!!!'.
 - Вставьте после него span с текстом '!!!'.
 - Вставьте ему в начало span с текстом '!!!'.
 - Вставьте ему в конец span с текстом '!!!'.*/

let secondElement = document.querySelector("#second-element");//ищем по id =second-element
if (secondElement) {
    let span = "<span>!!!</span>";
    secondElement.insertAdjacentHTML("afterbegin", span);//Вставьте перед ним span с текстом '!!!'.
    secondElement.insertAdjacentHTML("afterend", span);//Вставьте после него span с текстом '!!!'.
    secondElement.insertAdjacentHTML("beforebegin", span);//Вставьте ему в начало span с текстом '!!!'
    secondElement.insertAdjacentHTML("beforeend", span);//Вставьте ему в конец span с текстом '!!!'ы
}


/*3. Элемент: #third-element.
 - Найдите первого потомка этого элемента и сделайте его текст красного цвета.
 - Найдите последнего потомка этого элемента и сделайте его текст красного цвета.
 - Найдите всех потомков этого элемента и добавьте им в конец текст '!'.*/

 let thirdElement = document.querySelector("#third-element");//ищем по id =third-element
 if(thirdElement){
     if(thirdElement.firstElementChild){//находим первого ребенка
         thirdElement.firstElementChild.style.color = "#f00";
     }
 
     if(thirdElement.lastElementChild){//находим последнего ребенка
         thirdElement.lastElementChild.style.color = "#f00";
     }
 
     Array.from(thirdElement.children).forEach(function(element){//детям thirdElement в конец ставим "!"
         element.insertAdjacentText("beforeend", "!");
     });
 }



/*4. Элемент: #fourth-element
 - Найдите его соседа сверху и добавьте ему в конец текст '!'.
 - Найдите его соседа снизу и добавьте ему в конец текст '!'.
 - Найдите его соседа снизу его соседа снизу (следующий элемент за соседним) и добавьте ему в конец текст '!'. */

 let fourthElement = document.querySelector("#fourth-element");//ищем по id =fourth-element
 if(fourthElement){
     if(fourthElement.previousElementSibling){
         fourthElement.previousElementSibling.insertAdjacentText("beforeend", "!");
     }
 
     if(fourthElement.nextElementSibling){
         fourthElement.nextElementSibling.insertAdjacentText("beforeend", "!");
     }
     if(fourthElement.nextElementSibling.nextElementSibling){
         fourthElement.nextElementSibling.nextElementSibling.insertAdjacentText("beforeend", "!");
     }
 }



/*5. Элемент: #fifth-element
- Найдите его родителя и покрасьте его в синий цвет.
- Найдите родителя его родителя и покрасьте его в желтый цвет.*/


let fifthElement = document.querySelector("#fifth-element");//ищем по id =fifth-element
if(fifthElement){
    if(fifthElement.parentElement){
        fifthElement.parentElement.style.color = "#00f";
    }
    if(fifthElement.parentElement.parentElement){
        fifthElement.parentElement.parentElement.style.color = "#ff0";
    }
}