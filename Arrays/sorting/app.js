// let fruits = ["apple","orange","banana","pineapple"];
// fruits.sort();
// console.log(fruits);

// let number =[1,7,9,40,30,22,11,12,13];
// number.sort((a,b)=> a-b );
// console.log(number);

const people =[{name:"anuska",age:20,cgpa:9.9},
              {name:"kushal",age:22,cgpa:8.0},
              {name:"vedika",age:18,cgpa:7.3},
              {name:"tanu",age:16,cgpa:9.79},
              {name:"raghav",age:11,cgpa:6.1} ]

    people.sort((a,b)=>a.age-b.age);
    console.log(people);