//2

let button = document.querySelector("button");

button.addEventListener("click", function () {
    let inputOne = document.querySelector("#numberOne").value;
    let inputSecond = document.querySelector("#numberSecond").value;
    console.log(inputOne, inputSecond);
    let div = document.querySelector("div");

    let a = `${inputOne}`;
    let b = `${inputSecond}`;
    console.log(a, b);
    let d = a.split(".");//массив первого числа
    let s = b.split(".");//массив второго числа
    //let h = "";//часы
    //let m = "";//минуты
    if (+d[0] >= 0 && +d[0] <= 24 && +s[0] >= 0 && +s[0] <= 24) {
        if (d[1] >= 00 && d[1] <= 59 && s[1] >= 00 && s[1] <= 59) {
            /*if (+d[0] > +s[0]) {
                h = +d[0] - s[0];
                if (d[1] > s[1]) {
                    m = d[1] - s[1];
                   // h = d[0] - s[0];
                } if (d[1] < s[1]) {
                    m = s[1] - d[1];
                  //  h = d[0] - s[0];
                } else {
                    m = 00;
                }

            } if (d[0] < s[0]) {
                h = s[0] - d[0];//+
                if (d[1] > s[1]) {
                    m = d[1] - s[1];
                //    h = s[0] - d[0];
                } if (+d[1] < +s[1]) {
                    m = s[1] - d[1];
                  //  h = s[0] - d[0];
                } else {
                    m = 00;
                }

            } else {
                h = 00;
                if (d[1] > s[1]) {
                    m = d[1] - s[1];
                } if (d[1] < s[1]) {
                    m = s[1] - d[1];
                } else {
                    m = 00;
                }
            }*/
            let one=+d[0]*60+(+d[1]);//1
            let second=+s[0]*60+(+s[1]);//2
            let minus=one-second;//разница в минутах
            console.log(one,second,minus);
            let q=Math.trunc(minus/60);//часы
            console.log("в часах",q);

            let r=minus%60;
            console.log("Остаток от деления ",r);
            let p=minus-q*60;
            let results = [q, p];
            if(q<0||p<0){
                results = [-q, -p];
            }

            div.innerText = results;

/*
            console.log(h, m);
            let sum = [h, m];
            console.log(sum);
            div.innerText = sum;*/



        } else {
            console.log("Не корректно введены данные");
            div.innerText = "Не корректно введены данные";

        }

    } else {
        console.log("Не корректно введены данные");
        div.innerText = "Не корректно введены данные";

    }
})

