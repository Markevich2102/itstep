// Задача 4. Во второй задаче добавить возможность при клике на элемент списка удалять его из списка. Если удаляется последний элемент списка, то список также удаляется.

let button = document.querySelector(".btn_click");
if (button) {
    button.addEventListener("click", function () {
        let input = document.querySelector("#numberOne");
        let x = input.value;
       

        let div = document.querySelector("div");
        if (div.children.length == 0) {

            let ol = document.createElement("ol");
            let li = document.createElement("li");
            li.innerText = x;
            ol.insertAdjacentElement("beforeend", li);

            div.insertAdjacentElement("afterbegin", ol);
        } else {
           
            let li = document.createElement("li");
            li.innerText = x;
            div.firstChild.insertAdjacentElement("beforeend", li);
            li.addEventListener("click", function(){
        
                let parent = this.parentElement;
                this.remove();
        
                if(parent.children.length  == 0){
                    parent.remove();
                }
            })
        }
      
        let clickList=document.querySelectorAll("li");
        if(clickList.length>0){
            Array.from(clickList).forEach(function(li){
                li.addEventListener("click",function(){
                    this.remove();
                })
            })
        }
    });
}

