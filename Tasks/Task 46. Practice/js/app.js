/*let head=document.createElement("head");
let body=document.createElement("body");
*/

let article = document.createElement("article");
let article1 = document.body.insertAdjacentElement("afterbegin", article);

//body.firstElementChild.insertAdjacentElement("afterbegin", article);

article1.classList.add("news__item");


/*let span1 = document.createElement("span");
    span1.innerHTML = "Первый span";
    div2.insertAdjacentElement("afterbegin", span1);*/

let news = document.querySelector(".news__item");
if (news) {
    let a = document.createElement("a");
    a.href = "/news/we-offer-a-new-fertilizer-potassium-salt-60-nod/";
    let a1 = article.insertAdjacentElement("afterbegin", a);
}

//пересмотреть как создать div
/*let div1 = document.querySelector(".news__item");
if (div1) {
    let div1Create = document.createElement("div");
    let aa = article.insertAdjacentElement("afterbegin", div1Create);
    aa.classList.add("news__img");
    
}*/

let div1 = document.querySelector("a");
if (div1) {
    let div1Create = document.createElement("div");
    let aa = a.insertAdjacentElement("afterbegin", div1Create);
    div1Create.classList.add("news__img");
    
}

let div2 = document.querySelector(".news__item");
if (div2) {
    let div2Create = document.createElement("div");
    let aa = article.insertAdjacentElement("beforeend", div2Create);
    aa.classList.add("news__desciption");
    
}


let div21 = document.querySelector(".news__desciption");
if (div21) {
    let div21Create = document.createElement("div");
    let aa = article.insertAdjacentElement("afterbegin", div21Create);
    aa.classList.add("news__title");
   
}

let title = document.querySelector(".news__title");
if(title){
    title.insertAdjacentHTML("afterbegin", "<h4>We offer a new fertilizer – potassium salt 60% NOD</h4>");
}


let div22 = document.querySelector(".news__desciption");
if (div22) {
    let div22Create = document.createElement("div");
    let aa = article.insertAdjacentElement("afterbegin", div22Create);
    aa.classList.add("news__text");
   
}
let text = document.querySelector(".news__text");
if(text){
    text.insertAdjacentHTML("afterbegin", "<p>We are pleased to inform you that we have decided to expand our product range and add another noteworthy and effective product, potassium salt 60% NOD.</p>");
}



let div23 = document.querySelector(".news__desciption");
if (div23) {
    let div23Create = document.createElement("div");
    let aa = article.insertAdjacentElement("beforeend", div23Create);
    aa.classList.add("news__more");
   
}
let more = document.querySelector(".news__more");
if(more){
    more.insertAdjacentHTML("afterbegin", "<span>more</span>");
}



let img = document.querySelector(".news__item");
if (img) {
    let img = document.createElement("img");
    img.scr = "/upload/iblock/950/9509c6f8dc75758c59e66de60cffa317.webp";
    img.alt = "We offer a new fertilizer – potassium salt 60% NOD";
//let img1=div.insertAdjacentElement("afterbegin", img);

    let time = document.createElement("time");
    time.innerHTML="06.01.2023";
    let img1=img.insertAdjacentElement("afterbegin", time);
    

}











