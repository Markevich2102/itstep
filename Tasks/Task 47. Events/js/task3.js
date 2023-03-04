//Задание 3. Дано: кнопка и div с 3 различными классами. По нажатию на кнопку вывести в div нумерованный список с этими классами.

let button=document.querySelector(".btn_click");
if(button){
    button.addEventListener("click", function(){
        
        let div=document.querySelector("div");//находим div, куда будет ввыводится результат

        //далее создание списка 
        let list=["name", "value", "color"];
        let out="<ol>";
        list.forEach(function(item){
            out+=`<li>${item}</li>`;
        })
        out+="</ol>";

        div.innerHTML=out;//какой результат будет выводиться в div     
    })
}