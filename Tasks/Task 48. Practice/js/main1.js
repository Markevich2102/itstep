// Задача 1. Дано поле ввода, кнопка и div. В поле вводится число. При нажатии на кнопку в div  должен вставляться маркированный список Пункт 1,  Пункт 2, Пункт 3 и т.д. с количеством элементов, введеным в поле. 

let button = document.querySelector(".btn_click");
if (button) {
    button.addEventListener("click", function () {
        let input = document.querySelector("#numberOne");
        let x = +input.value;
 
        let div = document.querySelector("div");
        if (div.children.length == 0) {
            /*
                        //1 вариант списка (рабочий)
                        let list = [];
                        for (i = 0; i < x; i++) {
                            list[i] = `Пункт ${i + 1}`;
                        }
                        // вставка строкой
                        let out = "<ol>";
                        list.forEach(function (item) {
                            out += `<li>${item}</li>`;
                        });
                        out += "</ol>";
                        div.innerHTML = out;//какой результат будет выводиться в div  */

            //2 вариант списка (рабочий)
            let ol = document.createElement("ol");
            for (let i = 1; i <= x; i++) {
                let li = document.createElement("li");
                li.innerText = `Пункт ${i}`;
                ol.insertAdjacentElement("beforeend", li);
            };
            div.insertAdjacentElement("afterbegin", ol);
        }
        if(isNaN(x) || x === ""){
            document.querySelector("div").innerText = "Не число";
        } 
    });
}

