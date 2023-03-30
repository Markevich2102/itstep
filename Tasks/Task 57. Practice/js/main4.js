/*4. Дано поле ввода, кнопка и текст. В поле ввода разрешить вводить не более одного символа. Если в поле ввода введен один символ, то при нажатии на кнопку неоходимо подсчитать - сколько раз этот символ стречается в тексте.*/

let input=document.querySelector("input");
input.addEventListener("keydown", function(event){
    
    if(input.value.length<1){
        button=document.querySelector("button");
        console.log("y");
        button.addEventListener("click",function(){
            text=document.querySelector("p").innerText.toLowerCase().split("");
            let sum=0;
            //console.log(text);//проверка
            Array.from(text).forEach((i)=>{
                if(i==input.value){
                    sum++;
                }
            })
            console.log(sum);//проверка 
            let results=document.querySelector(".results");
            results.innerHTML=`Символ "${input.value}"  встречался ${sum} раз`;
        })
    }else{
        event.preventDefault();
    }   
})
