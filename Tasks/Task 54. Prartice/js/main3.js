/*3. Дана шахматная таблица 4х4 и 3 кнопки
    - при нажатии на первую кнопку на доску случайным образом должна помещаться шашка в одну из клеток. Если шашка уже стоит, то она должна удалятся и ставится новая;
    - при нажатии на вторую кнопку черные клетки должны меняться на белые, а белые - на черные;
    - при нажатии на третью кнопку доска должна поворачиваться на 90 градусов (использовать CSS-анимацию)*/

let first = document.querySelector(".buttonFirst");
let second = document.querySelector(".buttonSecond");
let third = document.querySelector(".buttonThird");
let board = document.querySelector(".chessBoard");
let ccc = board.children.children;
console.log(ccc);

//Первая кнопка
first.addEventListener("click", function (event) {
    let blackColor = document.querySelectorAll(".black");
    let whiteColor = document.querySelectorAll(".white");
    let a = [];
    /*Array.from(ccc).forEach((event)=>{
        event=Math.floor(Math.random() * ccc.length);
        event.classList.add("checker");
    })*/

})

/*
document.querySelector(".child").onmousemove = function(event){
    let x = Math.round(event.clientX-event.target.getBoundingClientRect().left);
    let y = Math.round(event.clientY-event.target.getBoundingClientRect().top);

    event.target.innerHTML = `X: ${x}<br>Y: ${y}`;
}*/




//Вторая кнопка (работает)
second.addEventListener("click", function () {
    let blackColor = document.querySelectorAll(".black");
    let whiteColor = document.querySelectorAll(".white");

    if (blackColor.length) {
        Array.from(blackColor).forEach((div) => {
            div.classList.remove("black");
            div.classList.add("white");
        })
    }
    if (whiteColor.length) {
        Array.from(whiteColor).forEach((div) => {
            div.classList.remove("white");
            div.classList.add("black");
        })
    }
})


//Третья кнопка(работает)
third.addEventListener("click", function () {
    board.classList.add("animation");
})

