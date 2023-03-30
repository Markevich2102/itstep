/*2. Дано поле ввода и абзац.
    - при наборе текста в input выводить текст в абзац;
    - запретить ввод пробела в поле ввода.*/

let text = document.querySelector("#number");
text.addEventListener('keyup', function (event) {
    event.preventDefault();

    let newText = document.querySelector("#number").value;//извлекаем текст 
    document.querySelector(".text").innerText = newText;//извлекаемый текс дублируется 
}) 

text.addEventListener("keypress", function(event){
    if(event.key == " "){//если нажимаем на пробел , то ничего набиратся не будет 
        event.preventDefault();
    }
});