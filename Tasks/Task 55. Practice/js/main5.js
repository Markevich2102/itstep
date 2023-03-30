/*5. Дано 2 поля ввода для чисел и 4 радиокнопки (+,-,*,/). Выводить результат выбранной операции над 2 числами, когда выбирается сама операция. В случае неккоретного ввода чисел предусмотреть вывод сообщения об этом вместо результата.*/

let firstValue = +document.querySelector("#number1").value;
let secondValue = +document.querySelector("#number2").value;
let results = document.querySelector(".result");
/*
//проверка на число и на пустоту первого значения
if (isNaN(firstValue) || firstValue === "") {
        document.querySelector(".error1").innerText = "Не число";
    }
    //проверка на число и на пустоту второго значения 
    if (isNaN(secondValue) || secondValues === "") {
        document.querySelector(".error2").innerText = "Не число";
    } 
*/
/*
//проверка на число и на пустоту первого значения
if (isNaN(+document.querySelector("#number1").value) || +document.querySelector("#number1").value === "") {
    document.querySelector(".error1").innerText = "Не число";
}
//проверка на число и на пустоту второго значения 
if (isNaN(+document.querySelector("#number2").value) || +document.querySelector("#number2").value === "") {
    document.querySelector(".error2").innerText = "Не число";
}*/
let actionPlus = document.querySelector("#actionPlus");
let actionMinus = document.querySelector("#actionMinus");
let actionMultiply = document.querySelector("#actionMultiply");
let actionDivide = document.querySelector("#actionDivide");


actionPlus.addEventListener("click", function () {
    let results = +document.querySelector("#number1").value + (+document.querySelector("#number2").value);
    document.querySelector(".result").innerText = results;

    //проверка на число и на пустоту первого значения
    if (isNaN(+document.querySelector("#number1").value) || +document.querySelector("#number1").value === "") {
        document.querySelector(".error1").innerText = "Не число";
    }
    //проверка на число и на пустоту второго значения 
    if (isNaN(+document.querySelector("#number2").value) || +document.querySelector("#number2").value === "") {
        document.querySelector(".error2").innerText = "Не число";
    }

})
actionMinus.addEventListener("click", function () {
    let results = +document.querySelector("#number1").value - +document.querySelector("#number2").value;
    document.querySelector(".result").innerText = results;
    //проверка на число и на пустоту первого значения
    //проверка на число и на пустоту первого значения
    if (isNaN(+document.querySelector("#number1").value) || +document.querySelector("#number1").value === "") {
        document.querySelector(".error1").innerText = "Не число";
    }
    //проверка на число и на пустоту второго значения 
    if (isNaN(+document.querySelector("#number2").value) || +document.querySelector("#number2").value === "") {
        document.querySelector(".error2").innerText = "Не число";
    }
})
actionMultiply.addEventListener("click", function () {
    let results = +document.querySelector("#number1").value * +document.querySelector("#number2").value;
    document.querySelector(".result").innerText = results;
    //проверка на число и на пустоту первого значения
    if (isNaN(+document.querySelector("#number1").value) || +document.querySelector("#number1").value === "") {
        document.querySelector(".error1").innerText = "Не число";
    }
    //проверка на число и на пустоту второго значения 
    if (isNaN(+document.querySelector("#number2").value) || +document.querySelector("#number2").value === "") {
        document.querySelector(".error2").innerText = "Не число";
    }
})
actionDivide.addEventListener("click", function () {
    let results = +document.querySelector("#number1").value / document.querySelector("#number2").value;
    document.querySelector(".result").innerText = results;
    let error = document.querySelectorAll(".error");
    //проверка на число и на пустоту первого значения
    if (isNaN(+document.querySelector("#number1").value) || +document.querySelector("#number1").value === "") {
        document.querySelector(".error1").innerText = "Не число";
       // document.querySelector(".error1").classList.add("error");
    }
    /*
    if (error.length) {
        Array.from(error).forEach((error) => {
            error.parentElement.classList.remove("error");
            error.remove();
            document.querySelector(".error1").innerText = "";
        })
    }*/
    //проверка на число и на пустоту второго значения 
    if (isNaN(+document.querySelector("#number2").value) || +document.querySelector("#number2").value === "") {
        document.querySelector(".error2").innerText = "Не число";
    }

})
/*
//проверка на число и на пустоту первого значения
if (isNaN(firstValue) || firstValue === "") {
    document.querySelector(".error1").innerText = "Не число";
}
//проверка на число и на пустоту второго значения 
if (isNaN(+document.querySelector("#number2").value) || +document.querySelector("#number2").value === "") {
    document.querySelector(".error2").innerText = "Не число";
}*/

/*
if(actionPlus.checked){
    let r=firstValue+secondValue;
    document.querySelector(".result").innerText=r;
    //проверка на число и на пустоту первого значения
    console.log(r);


}
if(actionMinus.checked){
    let r=firstValue+actionMinus+secondValue;
    document.querySelector(".result").innerText=r;
}
if(actionMultiply.checked){
    let r=firstValue+actionMultiply+secondValue;
    document.querySelector(".result").innerText=r;
}
if(actionDivide.checked){
    let r=firstValue+actionDivide+secondValue;
    document.querySelector(".result").innerText=r;
}
let x=["#actionPlus","#actionMinus","#actionMultiply","#actionDivide"];
checked = x.some((checkboxId) => {
    return document.querySelector(checkboxId).checked; //document.querySelector(checkbox) - input
})*/