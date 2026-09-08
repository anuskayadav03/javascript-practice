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
const rabbit = new Rabbit("rabbit",1,25);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runspeed);