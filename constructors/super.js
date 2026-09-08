class Animal{
constructor(){

}
}
class Rabbit extends Animal{
constructor(name,age,speed){
    this.name=name,
    this.age=age,
    this.speed=speed;
}
}
const rabbit = new Rabbit("rabbit",1,25);