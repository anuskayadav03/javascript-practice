class Animal{
constructor(name,age){
this.name=name,
this.age=age
}
}
class Rabbit extends Animal{
constructor(speed){
    super();
    this.speed=speed;
}
}
const rabbit = new Rabbit("rabbit",1,25);