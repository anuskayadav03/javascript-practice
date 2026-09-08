class Animal{
constructor(name,age){
this.name=name,
this.age=age
}
}
class Rabbit extends Animal{
constructor(name,age,runspeed){
    super(name,age);
    this.runspeed=runspeed;
}
}

class Fish extends Animal{
constructor(name,age,swimspeed){
    super(name,age);
    this.swimspeed=swimspeed;
}
}
const rabbit = new Rabbit("rabbit",1,25);
const fish = new Fish("fish",5,225);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runspeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimspeed);