//1. Написать функцию, принимающую в аргументах две строки из дат , и если одна больше другой , то вернуть 1, если они равны , то вернуть 0, если меньше , то -1.
console.log("1 задача");


function resultStr(str1, str2) {
    let newStr1 = str1.split(".");
    let newStr2 = str2.split(".");
    console.log(newStr1, newStr2);
    if (+newStr1[2] > +newStr2[2]) {
        return 1;
    }
    if (+newStr1[2] < +newStr2[2]) {
        return -1;
    } else {
        if (+newStr1[1] > +newStr2[1]) {
            return 1;
        }
        if (+newStr1[1] < +newStr2[1]) {
            return -1;
        } else {
            if (+newStr1[0] > +newStr2[0]) {
                return 1;
            }
            if (+newStr1[0] < +newStr2[0]) {
                return -1;
            } else {
                return 0;
            }
        }
    }
}

let str1 = "21.05.2019";
let str2 = "21.08.2019";
console.log(resultStr(str1, str2));

//2






