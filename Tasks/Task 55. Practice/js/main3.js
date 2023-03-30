/*3. Дано 10 блоков. Сделать так, что при наведении в блоке менялась прозрачность фона и выводился порядковый номер блока, а при уведении курсора все возвращалось в исходное состояние.*/

let block = document.querySelectorAll("div");
Array.from(block).forEach((div,index) => {
    div.addEventListener("mouseover", function (event) {
        event.preventDefault();
        let styles = getComputedStyle(this);
        let opacity1= parseInt(styles.opacity);  
        this.style.opacity= `${opacity1 / 2}`;  
        this.innerText=`Блок № ${index+1}`;
    })
})
Array.from(block).forEach((div) => {
    div.addEventListener("mouseout", function (event) {
        event.preventDefault();
        this.style.opacity= `1`;   
        this.innerText="";
    })
})
