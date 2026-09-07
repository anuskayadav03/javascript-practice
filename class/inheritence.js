class animal{
    alive =true;

    eat(){
        console.log(`this ${this.name} is eating`);;
    }
    sleep(){
        console.log(`this ${this.name} is sleeping`);
    }
}
class Rabbit extends animal{
   static name="rabbit";
}
class Fish extends animal{
   static name="fish";
}
class Hawk extends animal{
   static name="Hawk";
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();
