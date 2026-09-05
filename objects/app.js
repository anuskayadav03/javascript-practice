const person ={
    firstname:"anuska",
    lastname:"yadav",
    age:20,
    isStudent:true,
    sayHello : function(){
        console.log("hey i am anuska")},
}
const person2 ={
    firstname:"kushal",
    lastname:"shukla",
    age:20,
    isStudent:true,
    sayHello : function(){
        console.log("hey i am kushal")},
}

console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
console.log(person.isStudent);
person.sayHello();

console.log(person2.firstname);
console.log(person2.lastname);
console.log(person2.age);
console.log(person2.isStudent);
person2.sayHello();