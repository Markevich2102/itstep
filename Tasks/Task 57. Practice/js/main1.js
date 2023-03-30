/*1. Дан выпадающий список с 5 цветами и блок.
    - сделать так, что каждый пункт был закрашен в соответствующий цвет
    - при выборе цвета сделать так, чтобы блок также закрашивался в выбранный цвет*/


let color= document.querySelector("#color");
let div=document.querySelector(".result");
color.addEventListener("change",function(){
    let results = this.value;
    this.style.color=`${results}`;
    div.style.background=`${results}`;
})