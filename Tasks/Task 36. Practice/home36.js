//1. Посчитать количество слов в строке.
console.log("1 задача");

a="я люблю петь и рисовать."

a = a.split(" ");// разделение строки на массив символов
let b=a.length;
console.log(b);




//2. Вывести последнее слово в предложении.
console.log("2 задача");

a="я люблю петь и рисовать."

a = a.split(" ");// разделение строки на массив символов

// 1 способ . правильный , сама делала, но не для всех предложений действует (просто закоммент.)
/*a.shift();
a.shift();
a.shift();
a.shift();
console.log(a);*/

//2 способ.Сама делала, правильный 
b=a.filter(function(item,i){// фильтруем знаки препинания
    if(i==a.length-1){
        return item;
    }
})
console.log(b);





//3. Дано слово. Вывести набор букв, из которых состоит это слово без повторений.
console.log("3 задача");

a="оториноларинголог";
b = a.split("");// разделение  на массив символов
console.log(b);
let c=b.filter(function(item,i,array){
    return b.lastIndexOf(item)===b.indexOf(item);
})

console.log(c);  




//4. Даны 2 слова. Проверить, состоят ли они из одних и тех же букв.
console.log("4 задача");

a="оториноларинголог";
b="цветок";


a = a.split("");// разделение  на массив символов
b = b.split("");// разделение  на массив символов



console.log(a,b);



//5. Дано предложение. Проверить, есть ли в этом предложение заданное слово.
console.log("5 задача");

a="я люблю петь и рисовать."
let p="люблю";
a = a.split(" ");// разделение строки на массив символов

function result(item,i,array){
    return item==p;  
};

console.log(a.some(result));






//6. Удалить из предложения все знаки препинания (. , : ; ! ? -).
console.log("6 задача");

a="я люблю петь, и рисовать."
b = a.split("");// разделение  на массив символов
console.log(b);//просто посмотреть результат , это не ответ 
a=b.filter(function(item){// фильтруем знаки препинания
    if(item=="."){
        return item!=".";
    }
    if(item==","){
        return item!=",";
    }
    if(item==":"){
        return item!=":";
    }
    if(item==";"){
        return item!=";";
    }
    if(item=="!"){
        return item!="!";
    }
    if(item=="?"){
        return item!="?";
    }
    if(item=="-"){
        return item!="-";
    }
    return item;   
})
a=a.join("");// соединяем 
console.log(a);   





