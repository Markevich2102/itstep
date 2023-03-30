/*2. Дан маркированный список из 5 пунктов с произвольным текстом
    - при клике на какой-либо элемент списка, этот элемент должен менять цвет на красный, причем всегда должен быть только 1 выделенный элемент;
    - при двойном клике элемент должен дублироваться и копия помещаться в конец списка;
    - при наведении на элемент текст должен становится полужирным (использовать тег b для этого), при убирании курсора - возвращаться в исходное состояние;*/

// первое задание (не сделано)
let liElement = document.querySelectorAll("li");

/*
if (liElement.length > 0) {
    Array.from(liElement).forEach((li) => {
        li.addEventListener("click", function () {
            let color = document.querySelector(".colorRed");
            if (color) {
                color.classList.remove("colorRed");this.style.color = "black";
            }
            
            if (!color) {
                this.style.color = "red";
                this.classList.add(".colorRed");
            }
        })
    })
}
*/
/*liElement.addEventListener("click", function (event) {

    this.style.color = "red";
})*/


//второе задание (работает)
if(liElement.length>0){
    Array.from(liElement).forEach((li)=>{
        li.addEventListener("dblclick",function(){
            let liInnerText=this.innerText;
            let newLi=document.createElement("li");
            newLi.innerText=liInnerText;
            this.parentElement.insertAdjacentElement("beforeend",newLi);
        })
    })
}

//третье задание (нужно сделать )
/*liElement.addEventListener("mouseover", function () {
    this.style.color = "red";
})
liElement.addEventListener("mouseout", function () {
    this.style.remove();
})
let clickElement = document.querySelectorAll("li");
let ol = document.querySelector("ol");
let li = document.createElement("li");
ol.insertAdjacentElement("beforeend", li);*/


