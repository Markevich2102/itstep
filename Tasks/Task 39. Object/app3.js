//1. Машины 
console.log("1 задача");

let car = {
  marka: "BMW",
  model: "black",
  fuel: "petrol",
  print() {
    console.log(this.marka,this.model);
  }

}

let auto= {
  countru:"Германия",
  drive(){
    console.log(this.countru);
  },
  __proto__: car
};
let plan= {
  mover:"Крылья",
  fly(){
    console.log(this.mover);
  },
  __proto__: car
};
let train= {
  cargo:"вагоны",
  move(){
    console.log(this.cargo);
  },
  __proto__: car
};
auto.drive();
plan.fly();
train.move();


