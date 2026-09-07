// class Mathutil{
//     static PI = 3.1415;
//     static getDiameter(radius){
//         return radius*2;
//     }
// }
// console.log(Mathutil.PI);
// console.log(Mathutil.getDiameter(10));


class user{
    static userCount=0;

    constructor(username){
         this.username=username;
         user.userCount++;
    }
    static getUserCount(){
        console.log(`there are ${user.userCount} users online`);
    }
    sayHello(){
        console.log(`hello my name is ${this.username}`)
    }
}

const user1 = new user("anuska");
const user2 = new user("kushal");
const user3 = new user("vedika");

user1.sayHello();
user2.sayHello();
user3.sayHello();
user.getUserCount();