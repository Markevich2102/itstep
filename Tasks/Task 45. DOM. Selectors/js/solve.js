//let neighbors = document.querySelectorAll(".first-section .neighbor");

let firstElement = document.querySelector("#first-element");
let neighbors = firstElement.parentElement.querySelectorAll(".neighbor");
if (neighbors.length) { // количество элементов, проверить наличие через длину
    //Array.from(neighbors)  единоразовое преобразование, оно не меняет сам список на массив
    // let arrayNeighbors = Array.from(neighbors);
    Array.from(neighbors).forEach(function (element) {//перезаписываем элемент innerHTML  с "я сосед" на "Я хороший сосед";
        element.innerHTML = "Я хороший сосед";
    });

    Array.from(neighbors).forEach(function (element, index) {//перезаписываем элемент innerHTML  с "Я хороший сосед" на "Я хороший сосед № 1, 2, в зависимости от индекса ";
        element.innerHTML = `Я хороший сосед №${index + 1}`;
    });

    Array.from(neighbors).forEach(function (element) {// оборачиваем в спан текст  innerHTML
        element.innerHTML = `<span>${element.innerHTML}</span>`;
    });

    Array.from(neighbors).forEach(function (element) {// перезаписываем  в <b> текст  innerText
        element.innerHTML = `<b>${element.innerText}</b>`;
    });
}
let lastNeighbor = firstElement.parentElement.querySelector(".fourth-neighbor");//находим и обращаемся к .fourth-neighbor
if (lastNeighbor) {
    if (lastNeighbor.firstElementChild) {
        lastNeighbor.firstElementChild.innerHTML = "Я последний хороший сосед";// обращаемся к последнему элементу и перезаписываем его текст innerHTML на "Я последний хороший сосед"
    }
}

let secondElement = document.querySelector("#second-element");
if (secondElement) {
    //1 вариант 
    /*let out = "<ul>";
    for(let i = 1; i <= 10; i++){
        out += `<li>Пункт ${i}</li>`;
    }
    out += "</ul>";
    secondElement.insertAdjacentHTML("afterbegin", out);*/

    //2 вариант 
    let ul = document.createElement("ul");//создаём элемент "ul"
    secondElement.insertAdjacentElement("afterbegin", ul);// подставляем созданный элемент 
    for (let i = 1; i <= 10; i++) {//формируем список
        let li = document.createElement("li");
        li.innerHTML = `Пункт ${i}`;
        ul.insertAdjacentElement("beforeend", li);//подставляем список в  "ul"
    }

    let evenElements = ul.querySelectorAll("li:nth-child(2n)"); // ul.querySelectorAll("li:nth-child(even)");
    if (evenElements.length) {
        Array.from(evenElements).forEach(function (item) {
            item.style.color = "#f00";
        });
    }

    let oddElements = ul.querySelectorAll("li:nth-child(2n+1)");
    if (oddElements.length) {
        Array.from(oddElements).forEach((item) => {
            item.classList.add("odd-element");
        })
    }

    let elements = ul.querySelectorAll("li:nth-child(3n)");
    if (elements.length) {
        Array.from(elements).forEach((item) => {
            if (item.classList.contains("odd-element")) {
                let styles = getComputedStyle(item);
                let fontSize = parseInt(styles.fontSize, 10);
                item.style.fontSize = `${fontSize * 2}px`;
            }
        })
    }
}
let thirdElement = document.querySelector("#third-element");
if (thirdElement) {
    let bs = thirdElement.querySelectorAll("b");
    if (bs.length) {
        Array.from(bs).forEach((item) => {
            item.outerHTML = `<strong>${item.innerHTML}</strong>`;
        });
    }

    let strongs = thirdElement.querySelectorAll("strong");
    if (strongs.length) {
        Array.from(strongs).forEach((item) => {
            item.innerHTML = item.innerText;
        });

        Array.from(strongs).forEach((item) => {
            let words = item.innerText.split(" ");

            let newInnerHTML = words.map((word) => {
                return `<span>${word}</span>`
            }).join(" ");

            item.innerHTML = newInnerHTML;
        });
    }
}
let fourthElement = document.querySelector("#fourth-element");
if (fourthElement) {
    if (fourthElement.parentElement) {
        let divs = fourthElement.parentElement.querySelectorAll("div");
        if (divs.length) {
            Array.from(divs).forEach((div) => {
                console.log(div.innerHTML);
            });

            let reverseDivs = [];
            Array.from(divs).forEach((item) => {
                reverseDivs.unshift(item.innerHTML);
            });

            Array.from(divs).forEach((div, index) => {
                div.innerHTML = reverseDivs[index];
            })

            divs[1].remove();

            // аналог
            //fourthElement.parentElement.firstElementChild.nextElementSibling.remove();
            let fifthNeighbor = document.createElement("div");
            fifthNeighbor.classList.add("neighbor");
            fifthNeighbor.classList.add("fifth-neighbor");
            fifthNeighbor.innerHTML = "Я пятый сосед";
            divs[0].insertAdjacentElement("afterend", fifthNeighbor); // divs[0] = fourthElement.parentElement.firstElementChild
            fifthNeighbor.style.border = "1px solid #000";
            fifthNeighbor.style.padding = "10px";
            fifthNeighbor.style.backgroundColor = "#ff0";
        }
    }
}


//5 задание 

//5. Элемент: #fifth-element


//- Добавить 2 div до элемента с текстом "1" и "2", и 2 div после элемента с текстом "3" и "4"

let fifthElement = document.querySelector("#fifth-element");
let fifth = fifthElement.parentElement;
if(fifth.length){
    Array.from(fifth).forEach(function (element) {
        element.createElement.innerHTML = `<div>${element.innerHTML}</div>`;
    });

}
if(fifthElement.length){
    Array.from(fifthElement).forEach(function (element) {
        element.createElement.innerHTML = `<div>${element.innerHTML}</div>`;
    });

}



//- В первый div с текстом "1" добавить нумерованный список с 7 элементами с днями недели. Субботу и воскресение покрасить в красный цвет


//- В div с текстом "2" вставить 2 span с произвольным текстом. В конец каждого span добавить в скобочках длину (в символах) содержимого span.


//- div с текстом "3" обернуть содержимое в тег a со ссылкой на Google, добавить границу и подчеркивание текста.


//- div с текстом "4" заменить на тег article с тем же содержимым, добавить классы "news" и "good-news".
