//1. Найти периметр и площадь прямоугольника. 
console.log("1 задача");

let d = {
  a: 5,
  b: 6,
  square(a, b) {
    return this.a * this.b;
  },
  perimeter(a, b) {
    return this.a*2 + this.b*2;
  }
};


let square = d.square();
let perimeter = d.perimeter();
console.log(square, perimeter);