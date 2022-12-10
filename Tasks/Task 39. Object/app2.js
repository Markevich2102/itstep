//1. Даны животные , есть переменная кот и переменная собака. Сделать так , что бы кот мяукал, а собака гавкала. 
console.log("1 задача");

let animal = {
  name: "Барсик",
  color: "black",
  weight: 9,
  sound() {
    console.log("Meow");
  }

}

let cat = {
  sound() {
    console.log("Meow");
  },
  __proto__: animal
};
let dog = {
  sound() {
    console.log("Gau");
  },
  __proto__: animal
}
cat.sound();
dog.sound();

