class Animal{
constructor(name,age){
this.name=name,
this.age=age
}
move(speed){
    console.log(`this ${this.name} moves at a speed ${speed} mph`);
}
}
class Rabbit extends Animal{
constructor(name,age,runspeed){
    super(name,age);
    this.runspeed=runspeed;
}
run(){
    console.log(`This ${this.name} can run`);
    super.move(this.runspeed);
}
}

class Fish extends Animal{
constructor(name,age,swimspeed){
    super(name,age);
    this.swimspeed=swimspeed;
    super.move(this.swimspeed);
}
swim(){
    console.log(`This ${this.name} can swim`);
    super.move(this.swimspeed);
}
}
const rabbit = new Rabbit("rabbit",1,25);
const fish = new Fish("fish",5,225);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runspeed);
rabbit.run();

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimspeed);
fish.swim();